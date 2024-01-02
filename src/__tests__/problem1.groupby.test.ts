import { expect, test } from "vitest";
import { groupBy } from "../problem1-groupby";

test("Should return properly groupped result", () => {
  const people = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Alice", age: 25 },
  ];

  const groupedByAge = groupBy(people, "age");

  expect(groupedByAge).toEqual({
    25: [
      { name: "Jane", age: 25 },
      { name: "Alice", age: 25 },
    ],
    30: [
      { name: "John", age: 30 },
      { name: "Bob", age: 30 },
    ],
  });
});
