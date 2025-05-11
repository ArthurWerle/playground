/**
 * Implementing a basic LRU cache using only a Javascript Map. 
 * This only works because the Map data structure preserves 
 * their keys in insertion order.
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
 */

class Lru<Key extends PropertyKey, Value = unknown> {
    private readonly capacity: number;
    private readonly cache: Map<Key, Value>;
  
    constructor(capacity: number) {
      this.capacity = capacity;
      this.cache = new Map();
    }
  
    /**
     * We delete the key first and then set it again so 
     * the insertion order remains correct. 
     * Everytime we set, we need to delete first.
     */
    private setMostRecentlyUsed(key: Key, value: Value) {
      this.cache.delete(key);
      this.cache.set(key, value);
    }
  
    /**
     * When we get we all the setMostRecentlyUsed to reoder
     * the most recently used keys in the Map
     */
    public get(key: Key) {
      const value = this.cache.get(key);
  
      if (value === undefined) {
        return undefined;
      }
  
      this.setMostRecentlyUsed(key, value);
  
      return value;
    }
  
    public set(key: Key, value: Value) {
      this.setMostRecentlyUsed(key, value);
  
      if (this.cache.size > this.capacity) {
        /**
         * .next() returns the first item in the iterator (an object like { value: ..., done: false }),
         * so .value gives you the first key inserted into the map — i.e., the least recently used key.
         */
        const oldestKey = this.cache.keys().next().value;
        if (oldestKey !== undefined) {
          this.cache.delete(oldestKey);
        }
      }
    }
  
    public delete(key: Key) {
      this.cache.delete(key);
    }
}
  
const cache = new Lru<string, number>(3);

cache.set("a", 1);
cache.set("b", 2);
cache.set("c", 3);

// Cache should be: a=1, b=2, c=3 (in order of usage)
console.log(cache.get("a")); // 1 → 'a' is now most recently used

cache.set("d", 4); 
// 'b' should be evicted (least recently used)

// Check which keys remain
console.log(cache.get("b")); // undefined
console.log(cache.get("c")); // 3
console.log(cache.get("d")); // 4
console.log(cache.get("a")); // 1

cache.delete("a");
console.log(cache.get("a")); // undefined
