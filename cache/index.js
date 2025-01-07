class LFUCache {
    constructor(capacity) {
      this.capacity = capacity; // Maximum capacity of the cache
      this.cache = new Map(); // Key-value store for the cache
      this.freq = new Map(); // Key-frequency store
      this.groups = new Map(); // Frequency groups (maps frequency to keys set)
      this.minFreq = 0; // Tracks the minimum frequency in the cache
    }
  
    _updateFrequency(key) {
      const oldFreq = this.freq.get(key);
      const newFreq = oldFreq + 1;
  
      // Update frequency map
      this.freq.set(key, newFreq);
  
      // Remove key from the old frequency group
      this.groups.get(oldFreq).delete(key);
      if (this.groups.get(oldFreq).size === 0) {
        this.groups.delete(oldFreq);
        if (this.minFreq === oldFreq) this.minFreq += 1;
      }
  
      // Add key to the new frequency group
      if (!this.groups.has(newFreq)) {
        this.groups.set(newFreq, new Set());
      }
      this.groups.get(newFreq).add(key);
    }
  
    get(key) {
      if (!this.cache.has(key)) return -1; // Key not found
  
      // Update the frequency of the key
      this._updateFrequency(key);
      return this.cache.get(key); // Return the value
    }
  
    put(key, value) {
      if (this.capacity === 0) return; // Cannot add to a cache with 0 capacity
  
      if (this.cache.has(key)) {
        // Update value and frequency
        this.cache.set(key, value);
        this._updateFrequency(key);
        return;
      }
  
      if (this.cache.size >= this.capacity) {
        // Evict the least frequently used key
        const lfuKeys = this.groups.get(this.minFreq);
        const lfuKey = lfuKeys.values().next().value; // Get any key from the set
        lfuKeys.delete(lfuKey);
  
        if (lfuKeys.size === 0) {
          this.groups.delete(this.minFreq);
        }
  
        this.cache.delete(lfuKey);
        this.freq.delete(lfuKey);
      }
  
      // Add the new key-value pair
      this.cache.set(key, value);
      this.freq.set(key, 1);
  
      if (!this.groups.has(1)) {
        this.groups.set(1, new Set());
      }
      this.groups.get(1).add(key);
  
      this.minFreq = 1; // Reset min frequency for the new key
    }
  }
  
  // Example Usage
  const lfu = new LFUCache(3);
  lfu.put(1, 10); // Add key 1 with value 10
  lfu.put(2, 20); // Add key 2 with value 20
  lfu.put(3, 30); // Add key 3 with value 30
  console.log(lfu.get(1)); // Access key 1 -> Output: 10
  lfu.put(4, 40); // Add key 4, evict least frequently used key (key 2 or 3)
  console.log(lfu.get(2)); // Output: -1 (key 2 was evicted)
  console.log(lfu.get(3)); // Output: 30
  console.log(lfu.get(4)); // Output: 40
  