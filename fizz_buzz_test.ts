import { assertEquals } from "jsr:@std/assert";
import { test } from "jsr:@std/testing/bdd";
import { fizzBuzz } from "./fizz_buzz.ts";

test("3の倍数の場合はFizzを返す", () => {
  // Act
  const result = fizzBuzz(3);
  // Assert
  assertEquals(result, "Fizz");
});

test("5の倍数の場合はBuzzを返す", () => {
  // Act
  const result = fizzBuzz(5);
  // Assert
  assertEquals(result, "Buzz");
});

test("3と5の倍数の場合はFizzBuzzを返す", () => {
// Act
  const result = fizzBuzz(15);
  // Assert
  assertEquals(result, "FizzBuzz");
});

test("それ以外の場合はそのままの数値を返す", () => {
  // Act
  const result = fizzBuzz(1);
  // Assert
  assertEquals(result, "1");
});

/**
 * TODO リスト
 *
 * - [x] 3の倍数の場合は"Fizz"を返す
 * - [x] 5の倍数の場合は"Buzz"を返す
 * - [x] 3と5の倍数の場合は"FizzBuzz"を返す
 * - [ ] それ以外の場合はそのままの数値を返す
 */
