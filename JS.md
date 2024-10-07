# Questions for Technical Interviews

1. Write a function that receives two arrays of the same size, and returns the "zip" of the arrays, e.g. for the inputs ```[1, 2, 3]``` and ```[4, 5, 6]```, it will return ```[1, 4, 2, 5, 3, 6]```.

2. You are given two non-empty arrays representing two non-negative integers. The digits are stored in reverse order, and each of their element contains a single digit. Add the two numbers and return the sum as an array.
   You may assume the two numbers do not contain any leading zero, except the number 0 itself.

   **Input:** arr1 = ```[2,4,3]```, arr2 = ```[5,6,4]```

   **Output:** ```[7,0,8]```

   **Explanation:** ```342 + 465 = 807```.

3. Design and implement a Least Recently Used (LRU) cache in TypeScript with the following methods: \
   ```get(key: string): number | null``` – Returns the value of the key if it exists, otherwise returns null. \
   ```put(key: string, value: number): void``` – Inserts or updates the value of the key. If the cache exceeds its capacity, it should invalidate the least recently used item. The cache should be initialized with a capacity.

4. Implement an event emitter with the abilities to subscribe, unsubscribe and emit events.