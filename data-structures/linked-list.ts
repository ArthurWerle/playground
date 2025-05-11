interface ListNode {
    value: string | number
    next: ListNode | undefined
}

class ListNode {
    constructor(value: number | string) {
        this.value = value
        this.next = undefined
    }
}

interface LinkedList {
    head: ListNode | undefined
    tail: ListNode | undefined
}

class LinkedList {
    constructor() {
        this.head = undefined
        this.tail = undefined
    }

    isEmpty() {
        return !this.head
    }

    size() {
        let count = 0

        this.lookup((_) => {
            count++
        })

        return count
    }

    append(value: ListNode['value']) {
        const newNode = new ListNode(value)

        if (!this.head || !this.tail) {
            this.head = newNode
            this.tail = newNode
            return
        }

        this.tail.next = newNode
        this.tail = newNode
    }

    find(value: ListNode['value']) {
        let current = this.head

        while (current) {
            if (current.value === value) {
                return current
            }

            current = current?.next
        }
    }

    preppend(value: ListNode['value']) {
        const newNode = new ListNode(value)

        if (!this.head || !this.tail) {
            this.head = newNode
            this.tail = newNode
            return
        }

        newNode.next = this.head
        this.head = newNode
    }

    remove(value: ListNode['value']) {
        this.lookup((node) => {
            if (node.value === value) {
                this.head = node.next
                return
            }

            if (node.next && node.next.value === value) {
                node.next = node.next?.next || undefined
            }
        })
    }

    private lookup(callback: (node: ListNode) => ListNode | void) {
        let current = this.head

        while (current) {
            callback(current)
            current = current?.next
        }
    }

    print() {
        const values: (string | number)[] = []

        this.lookup((node) => {
            values.push(node.value)
        })

        console.log(values.join(" -> "))
        return values.join(" -> ")
    }
}


const linkedList = new LinkedList()

linkedList.append(2)
linkedList.append(3)
linkedList.append(4)

linkedList.print()

// console.log({ find: linkedList.find(2) })
// console.log({ size: linkedList.size() })
// console.log({ isEmpty: linkedList.isEmpty() })

linkedList.preppend(1)
linkedList.print()
linkedList.preppend(0)
linkedList.print()
linkedList.append(5)
linkedList.print()
linkedList.remove(3)
linkedList.print()
linkedList.remove(0)
linkedList.print()
linkedList.remove(5)
linkedList.print()