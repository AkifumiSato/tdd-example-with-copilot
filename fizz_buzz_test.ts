import { assertEquals } from "jsr:@std/assert@0.224.0";
import { describe, test } from "jsr:@std/testing@0.224.0/bdd";
import { fizzBuzz } from "./fizz_buzz.ts";

describe("3の倍数の場合はFizzを返す", () => {
  [3, 6, 9].forEach((n) => {
    test(`引数: ${n}`, () => {
      // Act
      const result = fizzBuzz(n);
      // Assert
      assertEquals(result, "Fizz");
    });
  });
});

describe("5の倍数の場合はBuzzを返す", () => {
  [5, 10, 20].forEach((n) => {
    test(`引数: ${n}`, () => {
      // Act
      const result = fizzBuzz(n);
      // Assert
      assertEquals(result, "Buzz");
    });
  });
});

describe("3と5の倍数の場合はFizzBuzzを返す", () => {
  [15, 30, 45].forEach((n) => {
    test(`引数: ${n}`, () => {
      // Act
      const result = fizzBuzz(n);
      // Assert
      assertEquals(result, "FizzBuzz");
    });
  });
});

describe("それ以外の場合はそのままの数値を返す", () => {
  [1, 2, 4, 7, 8].forEach((n) => {
    test(`引数: ${n}`, () => {
      // Act
      const result = fizzBuzz(n);
      // Assert
      assertEquals(result, n.toString());
    });
  });
});
