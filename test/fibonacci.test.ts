import { expect, test } from "vitest";
import { fibonacci } from "@donmccurdy/fibonacci";

test("fibonacci", () => {
  expect(fibonacci(0)).toBe(0);
  expect(fibonacci(1)).toBe(1);
  expect(fibonacci(2)).toBe(1);
  expect(fibonacci(3)).toBe(2);
});
