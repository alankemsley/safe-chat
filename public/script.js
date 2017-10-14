$(document).ready(function(){
  console.log("script.js linked properly");
  var socket = io();
  var messageForm = $('#messageForm');
  var message = $('#message');
  var chat = $('#messages');
  var messageArea = $('#messageArea');
  var users = $('#users');
  
  // User name prompt
  var name = prompt("Please enter your name.");
  // If user name is blank, assign a random animal
  var randomAnimalArray = [
    "Alligator", "Anteater", "Armadillo", "Aurochi", "Axolotl", "Badger", "Bat", "Beaver", "Buffalo", "Camel", "Chameleon", "Cheetah", "Chipmunk", "Chinchilla", "Coyote", "Crow", "Dingo", "Dinosaur", "Dolphin", "Elephant", "Fox", "Giraffe", "Gopher", "Hippo", "Jackal", "Iguana", "Koala", "Lemur", "Llama", "Monkey", "Otter", "Panda", "Raccoon", "Skunk", "Squirrel", "Turtle", "Walrus", "Wombat"
  ];
  var randomAnimal = randomAnimalArray[Math.floor(Math.random()*38)];
  if (name == null || name === "") {
    name = "Anonymous " + randomAnimal;
    Materialize.toast("Welcome, " + name + " !", 2000);
  } else {
    Materialize.toast("Welcome, " + name + " !", 2000);
  }

  // Send message

  // Can delete if works:
  // messageForm.submit(function(e) {
  //   e.preventDefault();
  //   var message = message.val();
  //   message.val("");
  //   socket.emit('message', { username:  name, message: message });
  // });

  socket.on('message', function(userMessage) {
    chat.append('<p><h6>' + userMessage.username + '</h6>' + userMessage.message + '</p>');
  });

  $('#sendMessage').click(function(){
    socket.emit("message", { username: name, message: message.val()});
    console.log("Message was sent!");
  });

});