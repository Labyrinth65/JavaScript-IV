/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject {
  constructor(a) {
    this.createdAt = a.createdAt;
    this.name = a.name;
    this.dimensions = a.dimensions;
  }

  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

class CharacterStats extends GameObject {
  constructor(a) {
    super(a);
    this.healthPoints = a.healthPoints;
  }

  takeDamage() {
    return `${this.name} took damage.`;
  }
}

class Humanoid extends CharacterStats {
  constructor(a) {
    super(a);
    this.team = a.team;
    this.weapons = a.weapons;
    this.language = a.language;
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

console.log(mage);

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

class Hero extends Humanoid {
  constructor(a) {
    super(a);
  }

  holySpell(target) {
    target.healthPoints = target.healthPoints - 20;
    if (target.healthPoints <= 0) {
      return target.destroy(target);
    } else
      return `${target.takeDamage(target)} ${
        target.healthPoints
      } hp remaining.`;
  }
}

class Villain extends Humanoid {
  constructor(a) {
    super(a);
  }

  fireBall(target) {
    target.healthPoints = target.healthPoints - 10;
    if (target.healthPoints <= 0) {
      return target.destroy(target);
    } else
      return `${target.takeDamage(target)} ${
        target.healthPoints
      } hp remaining.`;
  }
}

const paladin = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 5,
    width: 5,
    height: 5
  },
  healthPoints: 50,
  name: "Pally",
  team: "Team 1",
  weapons: ["Sword", "Shield"],
  language: "Hero"
});

const wizard = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 5,
    width: 5,
    height: 5
  },
  healthPoints: 40,
  name: "Vivi",
  team: "Team 2",
  weapons: ["Staff", "Wand"],
  language: "Wizard"
});

console.log(paladin.holySpell(wizard));
console.log(wizard.healthPoints);
console.log(wizard.fireBall(paladin));
console.log(paladin.healthPoints);
console.log(paladin.holySpell(wizard));
