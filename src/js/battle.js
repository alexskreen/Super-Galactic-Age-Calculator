export class Battle {
  constructor(character, inventory) {
    this.state = 0;
    this.dice20 = "";
    this.dice6 = "";
    this.character = character;
    this.inventory = inventory;
  }

  updateInventory(action, testItem) {
    let that = this;
    let timesByAmount = this.inventory.items.length;
    let newItem;

    if (action === "hold") {
      if (that.character.getUser() === "user1") {
        that.character.user1.hp += 5;
      } else {
        that.character.user2.hp += 5;
      }
      return "hold";
    } else if (action === "draw") {
      //for testing of random number
      if (testItem) {
        newItem = that.writeToFreeItem(testItem);
        that.dropItems(newItem);
      } else {
        newItem = that.writeToFreeItem(Math.floor(Math.random() * timesByAmount));
        that.dropItems(newItem);
      }
    } else {
      return "Error on draw";
    }
  }

  runAttack(action, testDice20, testDice6) {
    let that = this;

    if (action === "hold") {
      if (that.character.getUser() === "user1") {
        that.character.user1.hp += 10;
      } else {
        that.character.user2.hp += 10;
      }
      this.character.advanceTurn();
      return "hold";
    } else if (action === "attack") {
      //get armor for the target user
      let armor;
      if (that.character.getUser() === "user1") {
        armor = that.character.user2.armor;
      } else {
        armor = that.character.user1.armor;
      }

      if (testDice20) {
        //run test attack
        if (that.hitOrMiss(testDice20, armor)) {
          that.isHit(testDice6);
          this.character.advanceTurn();
        } else {
          this.character.advanceTurn();
          return "miss";
        }
        return "attack";
      } else {
        let armor;
        if (that.character.getUser() === "user1") {
          armor = that.character.user2.armor;
        } else {
          armor = that.character.user1.armor;
        }
        //run attack with random numbers
        if (that.hitOrMiss(that.rollDice(20), armor)) {
          that.state = "hit";
          that.isHit(that.rollDice(6));
          this.character.advanceTurn();
        } else {
          this.character.advanceTurn();
          that.state = "miss";
          return "miss";
        }
      }
    } else {
      console.log("error run attack");
    }
  }

  writeToFreeItem(index) {
    let that = this;
    if (this.inventory.items[index].id === "none") {
      that.inventory.items[index].id = that.character.getUser();
      return that.inventory.items[index].id;
    } else {
      // let newIndex = index + 1;
      // writeToFreeItem(newIndex);

      return "Item has user";
    }
  }

  dropItems(newItem) {
    for (let i = 0; i < this.inventory.items.length; i++) {
      let item = this.inventory.items[i];
      if (item.id === newItem.id && item.name !== newItem.name) {
        item.id = "none";
      }
    }
  }

  rollDice(size) {
    let that = this;
    let diceRoll = Math.ceil(Math.random() * size);
    if (size === 20) {
      that.dice20 = diceRoll;
    } else {
      that.dice6 = diceRoll;
    }
    return diceRoll;
  }

  hitOrMiss(roll, armor) {
    if (armor >= roll) {
      return false;
    } else if (armor <= roll) {
      return true;
    } else {
      return "hit or miss error";
    }
  }

  isHit(roll) {
    let that = this;
    if (that.character.getUser() === "user1") {
      that.character.user2.hp -= roll;
      return roll;
    } else if (that.character.getUser() === "user2") {
      that.character.user1.hp -= roll;
      return roll;
    } else {
      return "fail";
    }
  }

  checkForDeath() {
    let that = this;
    if (that.character.user1.hp <= 0) {
      that.character.user1.state = "dead";
      return "User 1 is Dead";
    } else if (that.character.user2.hp <= 0) {
      that.character.user2.state = "dead";
      return "User 2 is Dead";
    }
  }
}
