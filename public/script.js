$(document).ready(function(){
  console.log("Client-side JavaScript file (script.js) is properly linked. You may begin chatting.");
  var socket = io();
  var messageForm = $('#messageForm');
  var message = $('#message');
  var chat = $('#messages');
  var messageArea = $('#messageArea');
  var users = $('#users');
  
  // Prompt for user's name
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

  // (Code here for getting previously sent messages from database using handlebars)

  // Append message to chat window when message is sent
  socket.on('message', function(userMessage) {
    chat.append('<p><h6>' + userMessage.username + '</h6>' + userMessage.message + '</p>');
  });

  // When user clicks SEND, send message to DB and clear input field
  $('#sendMessage').click(function(){
    // If the user sends a legitiamte message:
    if (message.val() !="") {
      socket.emit("message", { username: name, message: message.val()});
      console.log(name + ' said: "' + message.val() + '"');
      $('#messageForm')[0].reset();
      // If user sends a blank message:
    } else {
      Materialize.toast("You didn't type a message!", 2000);
    }
  });

  // When user presses ENTER, do the same as above
  $('#messageForm').submit(function(e){
    e.preventDefault();
    $('#sendMessage').click();
  });

});