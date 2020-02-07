export class Character {
  constructor() {
    this.user1 = {};
    this.user2 = {};
    this.taken = [];
    this.turnCount = 1;
  }

  pickGoldenGirl(userPick) {
    const listOfGirls = [
      {
        id: 0,
        name: "Blanche Devereaux",
        hp: 35,
        armor: 12,
        magic: 10,
        state: "alive",
        img: "https://i.pinimg.com/originals/bd/1e/54/bd1e5420b9645d2fed100c82922c6466.jpg"
      },
      {
        id: 1,
        name: "Sophia Petrillo",
        hp: 35,
        armor: 12,
        state: "alive",
        magic: 10,
        img:
          "https://vignette.wikia.nocookie.net/goldengirls/images/9/9e/Sophia1.jpg/revision/latest/top-crop/width/360/height/450?cb=20100305000442"
      },
      {
        id: 2,
        name: "Dorothy Zbornak",
        hp: 35,
        armor: 12,
        state: "alive",
        magic: 10,
        img:
          "https://vignette.wikia.nocookie.net/goldengirls/images/4/4e/Beaarthur_%281%29.jpg/revision/latest/top-crop/width/360/height/450?cb=20101208103602"
      },
      {
        id: 3,
        name: "Rose Nylund",
        hp: 35,
        armor: 12,
        state: "alive",
        magic: 10,
        img: "https://i.pinimg.com/236x/7a/5d/fe/7a5dfecd125de749c030e14bc59dc00e--the-golden-girls-golden-age.jpg"
      }
    ];

    let that = this;
    if (this.taken.includes(listOfGirls[userPick].name)) {
      return "This Golden Girl has been taken";
    } else {
      if (that.getUser() === "user1") {
        that.taken.push(listOfGirls[userPick].name);
        that.user1 = listOfGirls[userPick];
      } else if (that.getUser() === "user2") {
        that.user2 = listOfGirls[userPick];
        that.taken.push(listOfGirls[userPick].name);
      } else {
        return "Error: on writing to user object";
      }
      that.advanceTurn();
    }
  }

  getUser() {
    if (this.turnCount % 2 === 0) {
      return "user2";
    } else if (this.turnCount % 2 !== 0) {
      return "user1";
    } else {
      ("error");
    }
  }

  advanceTurn() {
    return (this.turnCount += 1);
  }
}
