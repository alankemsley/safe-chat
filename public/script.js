$(document).ready(function(){
  // Confirmation message for testing
  console.log("Client-side JavaScript file (script.js) is properly linked. You may begin chatting.");
  
  // Variables and functions
  var socket = io();
  var messageForm = $('#messageForm');
  var message = $('#message');
  var chat = $('#messages');
  var messageArea = $('#messageArea');
  var users = $('#users');
  var dummyShown = true;
  var showReal = function() {
    $('#messageArea2').addClass("hide");
    $('#messageArea').removeClass("hide");
    dummyShown = false;
    Materialize.toast("Now showing real messages.", 2000);
  };
  var showDummy = function() {
    $('#messageArea2').removeClass("hide");
    $('#messageArea').addClass("hide");
    dummyShown = true;
  };

  // Prompt for user's name
  var name = prompt("Please enter your name.");

  // If user name is blank, assign a random animal
  var randomAnimalArray = [
    "Alligator", "Anteater", "Armadillo", "Aurochi", "Axolotl", "Badger", "Bat", "Beaver", "Buffalo", "Camel", "Chameleon", "Cheetah", "Chipmunk", "Chinchilla", "Coyote", "Crow", "Dingo", "Dinosaur", "Dolphin", "Elephant", "Fox", "Giraffe", "Gopher", "Hippo", "Jackal", "Iguana", "Koala", "Lemur", "Llama", "Monkey", "Otter", "Panda", "Raccoon", "Skunk", "Squirrel", "Turtle", "Walrus", "Wombat"
  ];
  var randomAnimal = randomAnimalArray[Math.floor(Math.random()*38)];
  if (name == null || name === "") {
    name = "Anonymous " + randomAnimal;
    Materialize.toast("Welcome, " + name + " ! Press ESC to go between real and fake messages.", 4000);
  } else {
    Materialize.toast("Welcome, " + name + " ! Press ESC to go between real and fake messages.", 4000);
  }

  // Append message to chat window when message is sent
  socket.on('message', function(userMessage) {
    chat.append('<p><h6>' + userMessage.username + '</h6>' + userMessage.message + '</p>');
  });

  // Toggle between real and dummy messages
  document.addEventListener("keydown", function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    if(key === 27 && dummyShown === true) {
      showReal();
    } else if (key === 27 && dummyShown === false) {
      showDummy();
    }
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

  // Materialize smooth scrolling effect to marker
  $('.scrollspy').scrollSpy();
});
