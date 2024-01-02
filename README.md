## Kepler Test

Welcome! Take a look at the instructions below to get started.

## Instructions

In this assessment, there are 3 issues to tackle, one of them is UI-related, and each should typically take 15 minutes (each) to solve. Feel free to ask questions and communicate about how you're thinking about the problem as you proceed.

Start off by creating a new local branch for your work. You should use your full name as the branch name, e.g., **john-doe**. Once you're done, please commit your changes and push the branch.

Good luck!

## Installation

After cloning repository, install dependencies:

```
npm install
```

## Problems

Here, we have some code files with incomplete snippets along with corresponding tests. Your task is to update the existing code to ensure the successful execution of the tests. The provided code snippets are intended as a starting point, but you have the flexibility to modify or entirely replace them based on your approach.

### Problem 1 - Group by

| File                  | Test                                       |
| --------------------- | -------------------------------------------|
| `src/problem1-groupby.ts` | `src__tests__/problem1.groupby.test.ts`|

In `src/problem1-groupby.ts` we have a function `groupBy` that takes in an array of objects `arr` and a `key`. attempts to groups the objects by a key

#### Example 1:

Input:

```js
 key = 'day'
 arr = [
   { day: 'Mon', time: '13:00' }
   { day: 'Mon', time: '14:00' }
   { day: 'Tue', time: '09:00' }
   { day: 'Tue', time: '11:00' }
 ]
```

Output:

```js
 output = {
    'Mon':  [
      { day: 'Mon', time: '13:00' }
      { day: 'Mon', time: '14:00' }
    ],
    'Tue': [
      { day: 'Tue', time: '09:00' }
      { day: 'Tue', time: '11:00' }
    ]
 }
```

### Problem 2 - Longest Increasing Subsequence

| File                  | Test                           |
| --------------------- | ------------------------------ |
| `src/problem2-lis.ts` | `src__tests__/problem2-lis.ts` |

In `src/problem1-lis.ts`, we have a function `getLongestIncreasingSubsequence`, It should take in an array of integers as input and return the length of the longest increasing subsequence. A subsequence is a sequence of numbers in an array that are in the same order as they appear in the array, but not necessarily contiguous. The numbers in the subsequence must be strictly increasing.

#### Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

#### Example 2:

Input: nums = [0,1,0,3,2,3]
Output: 4

### 3 - Eliminate wasted renders

> Before you get started with this task, you need to `cd` into the `frontend` directory and install dependencies

```
cd frontend && npm install
```

In `frontend/src/App.tsx` we have a `Parent` component that renders multiple child components. The issue is that the some of the child components are re-rendering when they shouldn't. Your task is to eliminate these wasted renders.
