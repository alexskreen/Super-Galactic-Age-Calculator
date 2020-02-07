/* eslint-disable no-undef */
import { Battle } from "./../src/js/battle.js";
// eslint-disable-next-line no-unused-vars
import { exportAllDeclaration } from "@babel/types";
import { Character } from "./../src/js/character.js";
import { Inventory } from "./../src/js/inventory.js";

describe("Battle Object", () => {
  test("should create a new battle object", () => {
    const battle = new Battle();
    expect(battle).toEqual({ state: 0 });
  });
});

describe("update inventory", () => {
  const inventory = new Inventory();
  const character = new Character();
  const battle = new Battle(character, inventory);

  test("should return hold", () => {
    expect(battle.updateInventory("hold")).toEqual("hold");
  });

  test("should return user1s health increased by 5 hp", () => {
    character.user1 = { id: 1, name: "Sophia Petrillo", hp: 65, armor: 35, state: "alive", magic: 10, img: "" };
    battle.updateInventory("hold");
    expect(character.user1.hp).toEqual(70);
  });

  test("should update users item when draw is passed", () => {
    battle.updateInventory("draw", 1);
    expect(inventory.items[1].id).toEqual("user1");
  });

  test("should clear items user had on last turn when draw is passed in", () => {
    inventory.items[0].id = "user1";
    battle.updateInventory("draw", 1);
    expect(inventory.items[0].id).toEqual("user1");
  });
});

describe("write to free item", () => {
  const inventory = new Inventory();
  const character = new Character();
  const battle = new Battle(character, inventory);

  test("should add user1 to a random items id in inventory", () => {
    battle.writeToFreeItem(1);
    expect(inventory.items[1].id).toEqual("user1");
  });

  test("should not write to an item if a user has it", () => {
    expect(battle.writeToFreeItem(1)).toEqual("Item has user");
  });
});

describe("drop items", () => {
  const inventory = new Inventory();
  const character = new Character();
  const battle = new Battle(character, inventory);

  inventory.items[0].id = "user1";
  inventory.items[1].id = "user1";

  test("should remove user id from item 1", () => {
    let newItem = inventory.items[0];
    battle.dropItems(newItem);
    expect(inventory.items[1].id).toEqual("none");
  });
});

describe("run attack", () => {
  const inventory = new Inventory();
  const character = new Character();
  const battle = new Battle(character, inventory);
  // ------------- CHOOSE HOLD
  test("should return hold", () => {
    expect(battle.runAttack("hold")).toEqual("hold");
  });

  test("should return user1s health increased by 10 hp", () => {
    character.user1 = { id: 1, name: "Sophia Petrillo", hp: 65, armor: 12, state: "alive", magic: 10, img: "" };
    battle.runAttack("hold");
    expect(character.user1.hp).toEqual(75);
  });

  test("should advance turn when argument is hold", () => {
    character.turnCount = 1;
    battle.runAttack("hold");
    expect(character.turnCount).toEqual(2);
  });

  // ---------- CHOOSE ATTACK
  character.user1 = { id: 1, name: "Sophia Petrillo", hp: 35, armor: 12, state: "alive", magic: 10, img: "" };
  character.user2 = { id: 1, name: "Rose", hp: 35, armor: 12, state: "alive", magic: 10, img: "" };
  test("should return attack when roll is more than armor", () => {
    expect(battle.runAttack("attack", 20, 6)).toEqual("attack");
  });

  test("should return miss when roll is less then armor", () => {
    expect(battle.runAttack("attack", 10, 6)).toEqual("miss");
  });
});

describe("roll dice", () => {
  const battle = new Battle();

  expect(battle.rollDice(6)).toBeGreaterThan(0);
  expect(battle.rollDice(6)).toBeLessThan(7);
});

describe("hit or miss", () => {
  const inventory = new Inventory();
  const character = new Character();
  const battle = new Battle(character, inventory);

  test("should return miss", () => {
    expect(battle.hitOrMiss(10, 12)).toEqual(false);
  });

  test("should return hit", () => {
    expect(battle.hitOrMiss(20, 12)).toEqual(true);
  });
});

describe("is hit", () => {
  const character = new Character();
  const battle = new Battle(character);

  test("should return a hit equal to a six sided dice roll", () => {
    expect(battle.isHit(6)).toEqual(6);
  });
  test("should reduce user2s hp by 6", () => {
    character.user2 = { id: 1, name: "Sophia Petrillo", hp: 65, armor: 12, state: "alive", magic: 10, img: "" };
    character.turnCount = 1;
    battle.isHit(6);
    expect(character.user2.hp).toEqual(59);
  });
  test("should reduce user1s hp by 6", () => {
    character.user1 = { id: 1, name: "Sophia Petrillo", hp: 65, armor: 12, state: "alive", magic: 10, img: "" };
    character.turnCount = 2;
    battle.isHit(6);
    expect(character.user1.hp).toEqual(59);
  });
});

describe("check for death", () => {
  const character = new Character();
  const battle = new Battle(character);

  test("should user1 state equals death", () => {
    character.user1 = { id: 1, name: "Sophia Petrillo", hp: 0, armor: 12, state: "alive", magic: 10, img: "" };
    battle.checkForDeath();
    expect(character.user1.state).toEqual("dead");
  });

  test("should user2 state equals death", () => {
    character.user1 = { id: 1, name: "Sophia Petrillo", hp: 1, armor: 12, state: "alive", magic: 10, img: "" };
    character.user2 = { id: 1, name: "Sophia Petrillo", hp: 0, armor: 12, state: "alive", magic: 10, img: "" };
    battle.checkForDeath();
    expect(character.user2.state).toEqual("dead");
  });
});
