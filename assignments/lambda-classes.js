// CODE here for your Lambda Classes

class Person {
  constructor(a) {
    this.name = a.name;
    this.age = a.age;
    this.location = a.location;
    this.gender = a.gender;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(a) {
    super(a);
    this.specialty = a.specialty;
    this.favLanguage = a.favLanguage;
    this.catchPhrase = a.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}`;
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }

  graded(student) {
    let change =
      Math.floor(Math.random() * 10) *
      Math.floor(Math.random() * 2 >= 1 ? 1 : -1);
    student.grade = student.grade + change;
    return `${student.name}'s grade changed by ${change} and is now ${
      student.grade
    }`;
  }
}

class Student extends Person {
  constructor(a) {
    super(a);
    this.previousBackground = a.previousBackground;
    this.className = a.className;
    this.favSubjects = a.favSubjects;
    this.grade = a.grade;
  }

  listsSubjects() {
    return this.favSubjects.join("");
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }

  graduate() {
    if (this.grade >= 70) return `${this.name} has graduated!`;
    else return `Keep grading assignments!`;
  }
}

class ProjectManagers extends Instructor {
  constructor(a) {
    super(a);
    this.gradClassName = a.gradClassName;
    this.favInstructor = a.favInstructor;
  }

  standUp(slack) {
    return `${this.name} announces to ${slack}, @channel standy times!`;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

const Adam = new Instructor({
  name: "Adam",
  location: "Austin",
  age: 30,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});

const Brian = new Instructor({
  name: "Brian",
  location: "Boston",
  age: 31,
  gender: "male",
  favLanguage: "JavaScript II",
  specialty: "Back-end",
  catchPhrase: `Don't forget the roomies`
});

const Carol = new Instructor({
  name: "Carol",
  location: "Chicago",
  age: 32,
  gender: "female",
  favLanguage: "JavaScript III",
  specialty: "Middle-end",
  catchPhrase: `Don't forget the boonies`
});

const Ditto = new Student({
  name: "Ditto",
  location: "Denver",
  age: 33,
  gender: "???",
  favSubjects: [
    "JavaScript",
    "Transformations",
    "How To Tackle",
    "How To Hyper Beam"
  ],
  className: "web18",
  previousBackground: "pokemon",
  grade: 50
});

const Frank = new Student({
  name: "Frank",
  location: "Fort Worth",
  age: 34,
  gender: "male",
  favSubjects: ["JavaScript II", "Vigilante Training"],
  className: "web19",
  previousBackground: "train vigilantes",
  grade: 80
});

const Grace = new Student({
  name: "Grace",
  location: "Fort Worth",
  age: 35,
  gender: "female",
  favSubjects: ["JavaScript III", "Catching Bad Guys"],
  className: "web20",
  previousBackground: "catch bad guys",
  grade: 90
});

const Hope = new ProjectManagers({
  name: "Hope",
  location: "Havana",
  age: 36,
  gender: "female",
  favLanguage: "JavaScript IV",
  specialty: "Upper-end",
  catchPhrase: `Don't forget the goonies`,
  gradClassName: "web14",
  favInstructor: Adam
});

const Isaac = new ProjectManagers({
  name: "Isaac",
  location: "Indianapolis",
  age: 37,
  gender: "male",
  favLanguage: "JavaScript V",
  specialty: "Lower-end",
  catchPhrase: `Don't forget the cooties`,
  gradClassName: "web15",
  favInstructor: Brian
});

const Jane = new ProjectManagers({
  name: "Jane",
  location: "Jupiter",
  age: 999,
  gender: "ULTIMATE GENDER",
  favLanguage: "ULTIMATE JAVASCRIPT",
  specialty: "ULTIMATE END",
  catchPhrase: `Yo`,
  gradClassName: "webULTIMATE",
  favInstructor: Carol
});

console.log(Adam.grade(Ditto, Ditto.favSubjects[0]));
console.log(Brian.demo(Brian.specialty));
console.log(Carol);
console.log(Ditto);
console.log(Ditto.listsSubjects);
console.log(Frank.PRAssignment("Vigilantes Are People Too"));
console.log(
  Grace.sprintChallenge("Catching Bad Guys Won't Fill The Empty Hole Inside")
);
console.log(Hope.standUp("web20"));
console.log(Isaac.debugsCode(Ditto, Ditto.favSubjects[1]));
console.log(Jane);
console.log(Carol.graded(Ditto));
console.log(Jane.graded(Ditto));
console.log(Ditto.grade);
console.log(Ditto.graduate());
console.log(Grace.graduate());
