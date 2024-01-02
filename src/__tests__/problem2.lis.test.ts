import { expect, test } from "vitest";
import { getLongestIncreasingSubsequence } from "../problem2-lis";

test("it should retun a valid Longest Increasing Subsequence", () => {
  expect(getLongestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80])).toBe(6);
  expect(getLongestIncreasingSubsequence([3, 10, 2, 1, 20])).toBe(3);
  expect(getLongestIncreasingSubsequence([3, 2])).toBe(1);
  expect(getLongestIncreasingSubsequence([7, 7, 7, 7, 7, 7, 7])).toBe(1);
});
