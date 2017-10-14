// Front-end by Alan
$(document).ready(function(){
  // User name prompt
  var name = prompt("Please enter your name.");
  // If user name is blank, assign a random animal
  var randomAnimalArray = [
    "Alligator",
    "Anteater",
    "Armadillo",
    "Aurochi",
    "Axolotl",
    "Badger",
    "Bat",
    "Beaver",
    "Buffalo",
    "Camel",
    "Chameleon",
    "Cheetah",
    "Chipmunk",
    "Chinchilla",
    "Coyote",
    "Crow",
    "Dingo",
    "Dinosaur",
    "Dolphin",
    "Elephant",
    "Fox",
    "Giraffe",
    "Gopher",
    "Hippo",
    "Jackal",
    "Iguana",
    "Koala",
    "Lemur",
    "Llama",
    "Monkey",
    "Otter",
    "Panda",
    "Raccoon",
    "Skunk",
    "Squirrel",
    "Turtle",
    "Walrus",
    "Wombat"
  ];

  var randomAnimal = randomAnimalArray[Math.floor(Math.random()*38)];

  if (name == null || name === "") {
    name = "Anonymous " + randomAnimal;
    Materialize.toast("Welcome, " + name + " !", 2000);
  } else {
    Materialize.toast("Welcome, " + name + " !", 2000);
  }

});