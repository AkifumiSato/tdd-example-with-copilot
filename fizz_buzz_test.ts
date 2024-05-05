import { assertEquals } from "jsr:@std/assert@0.224.0";
import { test, describe } from "jsr:@std/testing@0.224.0/bdd";
import { fizzBuzz } from "./fizz_buzz.ts";

describe("3の倍数の場合はFizzを返す", () => {
  test("引数: 3", () => {
    // Act
    const result = fizzBuzz(3);
    // Assert
    assertEquals(result, "Fizz");
  })

  test("引数: 6", () => {
    // Act
    const result = fizzBuzz(6);
    // Assert
    assertEquals(result, "Fizz");
  })

  test("引数: 9", () => {
    // Act
    const result = fizzBuzz(9);
    // Assert
    assertEquals(result, "Fizz");
  })
})

describe("5の倍数の場合はBuzzを返す", () => {
  test("引数: 5", () => {
    // Act
    const result = fizzBuzz(5);
    // Assert
    assertEquals(result, "Buzz");
  })

  test("引数: 10", () => {
    // Act
    const result = fizzBuzz(10);
    // Assert
    assertEquals(result, "Buzz");
  })

  test("引数: 20", () => {
    // Act
    const result = fizzBuzz(20);
    // Assert
    assertEquals(result, "Buzz");
  })
})

describe("3と5の倍数の場合はFizzBuzzを返す", () => {
  test("引数: 15", () => {
    // Act
    const result = fizzBuzz(15);
    // Assert
    assertEquals(result, "FizzBuzz");
  })

  test("引数: 30", () => {
    // Act
    const result = fizzBuzz(30);
    // Assert
    assertEquals(result, "FizzBuzz");
  })

  test("引数: 45", () => {
    // Act
    const result = fizzBuzz(45);
    // Assert
    assertEquals(result, "FizzBuzz");
  })
})

describe("それ以外の場合はそのままの数値を返す", () => {
  test("引数: 1", () => {
    // Act
    const result = fizzBuzz(1);
    // Assert
    assertEquals(result, "1");
  })

  test("引数: 2", () => {
    // Act
    const result = fizzBuzz(2);
    // Assert
    assertEquals(result, "2");
  })

  test("引数: 4", () => {
    // Act
    const result = fizzBuzz(4);
    // Assert
    assertEquals(result, "4");
  })
})
