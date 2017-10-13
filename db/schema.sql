DROP DATABASE IF EXISTS safechat;

CREATE DATABASE safechat;

USE safechat;


CREATE TABLE messages(
id INT AUTO_INCREMENT NOT NULL,
photo VARCHAR(999),
username VARCHAR(20) NOT NULL,
message VARCHAR(500) NOT NULL,
timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);


CREATE TABLE dummychat(
  username VARCHAR(20) NOT NULL,
  message VARCHAR(500) NOT NULL
);

INSERT INTO dummychat(username,message) VALUES("thisguy", "good meeting today");
INSERT INTO dummychat(username,message) VALUES("thisguy", "great presentation");
INSERT INTO dummychat(username,message) VALUES("thisguy", "we'll do even better next time");
INSERT INTO dummychat(username,message) VALUES("thisguy", "i'm ready for a new challenge");
INSERT INTO dummychat(username,message) VALUES("thisguy", "it wasn't my best effort");
INSERT INTO dummychat(username,message) VALUES("thisguy", "who's running the next meet and greet?");
INSERT INTO dummychat(username,message) VALUES("thisguy", "not sure. do you know the date?");
INSERT INTO dummychat(username,message) VALUES("thisguy", "I think it's Sven");
INSERT INTO dummychat(username,message) VALUES("thisguy", "we need to change the time of these things");
INSERT INTO dummychat(username,message) VALUES("thisguy", "i was impressed with kevin's team");
INSERT INTO dummychat(username,message) VALUES("thisguy", "sharon is a great presenter");
INSERT INTO dummychat(username,message) VALUES("thisguy", "I forgot to turn my phone off this time");
INSERT INTO dummychat(username,message) VALUES("thisguy", "I heard your phone buzz");
INSERT INTO dummychat(username,message) VALUES("thisguy", "when does the SME show up next week?");
INSERT INTO dummychat(username,message) VALUES("thisguy", "coffee is bad. we need to hire a new intern.");
INSERT INTO dummychat(username,message) VALUES("thisguy", "I agree. ");
INSERT INTO dummychat(username,message) VALUES("thisguy", "I wan't sure.");
INSERT INTO dummychat(username,message) VALUES("thisguy", "Did we cover that?");
INSERT INTO dummychat(username,message) VALUES("thisguy", "I remember talking about it last time.");
INSERT INTO dummychat(username,message) VALUES("thisguy", "When do we have the holiday party?");
INSERT INTO dummychat(username,message) VALUES("thisguy", "Our a/c is malfunctioning");
INSERT INTO dummychat(username,message) VALUES("thisguy", "lol");
INSERT INTO dummychat(username,message) VALUES("thisguy", "Who's buying coffee this week?");
INSERT INTO dummychat(username,message) VALUES("thisguy", "Not until Friday");
INSERT INTO dummychat(username,message) VALUES("thisguy", "That's what I thought too");
INSERT INTO dummychat(username,message) VALUES("thisguy", "We need more time");
INSERT INTO dummychat(username,message) VALUES("thisguy", "Who brought up the client complaints");
INSERT INTO dummychat(username,message) VALUES("thisguy", "I'm not sure");
INSERT INTO dummychat(username,message) VALUES("thisguy", "We need more of this");
INSERT INTO dummychat(username,message) VALUES("thisguy", "How much more?");
INSERT INTO dummychat(username,message) VALUES("thisguy", "We're like an episode of Westworld");
INSERT INTO dummychat(username,message) VALUES("thisguy", "I'ven ever seen that show");
INSERT INTO dummychat(username,message) VALUES("thisguy", "You totally should");
INSERT INTO dummychat(username,message) VALUES("thisguy", "We're a Golden Girls house");
INSERT INTO dummychat(username,message) VALUES("thisguy", "Ok maybe not then");
INSERT INTO dummychat(username,message) VALUES("thisguy", "Don't judge ha ha");
INSERT INTO dummychat(username,message) VALUES("thisguy", "I think it's time for a break");
INSERT INTO dummychat(username,message) VALUES("thisguy", "OK, ttyl");
INSERT INTO dummychat(username,message) VALUES("thisguy", "I'm back");
INSERT INTO dummychat(username,message) VALUES("thisguy", "that was fast");