
    $(function() {
      var socket = io();
      var $messageForm = $('#messageForm');
      var $message = $('#message');
      var $chat = $('#chat');
      var $userFormArea = $('#userFormArea');
      var $userForm = $('#userForm');
      var $messageArea = $('#messageArea');
      var $users = $('#users');
      var $username = $('#username');
      var username = null;

      $userForm.submit(function(e) {
        e.preventDefault();
        username = $username.val();
        $username.val("");
      });

      $messageForm.submit(function(e) {
        e.preventDefault();

        if (!username) return;

        var message = $message.val();
        $message.val("");

        socket.emit('message', { username:  username, message: message });
      });

      socket.on('message', function(userMessage) {
        $chat.append('<div class = "well"><strong>' + userMessage.username + '</strong>:' + userMessage.message + '<div>');
      });

    });