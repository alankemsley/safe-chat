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

INSERT INTO dummychat(username,message) VALUES("kenny", "good meeting today");
INSERT INTO dummychat(username,message) VALUES("brian", "great presentation");
INSERT INTO dummychat(username,message) VALUES("kenny", "we'll do even better next time");
INSERT INTO dummychat(username,message) VALUES("brian", "i'm ready for a new challenge");
INSERT INTO dummychat(username,message) VALUES("kenny", "it wasn't my best effort");
INSERT INTO dummychat(username,message) VALUES("brian", "who's running the next meet and greet?");
INSERT INTO dummychat(username,message) VALUES("kenny", "not sure. do you know the date?");
INSERT INTO dummychat(username,message) VALUES("brian", "I think it's Sven");
INSERT INTO dummychat(username,message) VALUES("kenny", "we need to change the time of these things");
INSERT INTO dummychat(username,message) VALUES("brian", "i was impressed with kevin's team");
INSERT INTO dummychat(username,message) VALUES("brian", "sharon is a great presenter");
INSERT INTO dummychat(username,message) VALUES("kenny", "I forgot to turn my phone off this time");
INSERT INTO dummychat(username,message) VALUES("brian", "I heard your phone buzz");
INSERT INTO dummychat(username,message) VALUES("kenny", "when does the SME show up next week?");
INSERT INTO dummychat(username,message) VALUES("brian", "coffee is bad. we need to hire a new intern.");
INSERT INTO dummychat(username,message) VALUES("kenny", "I agree. ");
INSERT INTO dummychat(username,message) VALUES("brian", "I wan't sure.");
INSERT INTO dummychat(username,message) VALUES("kenny", "Did we cover that?");
INSERT INTO dummychat(username,message) VALUES("brian", "I remember talking about it last time.");
INSERT INTO dummychat(username,message) VALUES("kenny", "When do we have the holiday party?");
INSERT INTO dummychat(username,message) VALUES("brian", "Our a/c is malfunctioning");
INSERT INTO dummychat(username,message) VALUES("kenny", "lol");
INSERT INTO dummychat(username,message) VALUES("brian", "Who's buying coffee this week?");
INSERT INTO dummychat(username,message) VALUES("kenny", "Not until Friday");
INSERT INTO dummychat(username,message) VALUES("brian", "That's what I thought too");
INSERT INTO dummychat(username,message) VALUES("kenny", "We need more time");
INSERT INTO dummychat(username,message) VALUES("brian", "Who brought up the client complaints");
INSERT INTO dummychat(username,message) VALUES("kenny", "I'm not sure");
INSERT INTO dummychat(username,message) VALUES("brian", "We need more of this");
INSERT INTO dummychat(username,message) VALUES("kenny", "How much more?");
INSERT INTO dummychat(username,message) VALUES("brian", "We're like an episode of Westworld");
INSERT INTO dummychat(username,message) VALUES("kenny", "I'ven ever seen that show");
INSERT INTO dummychat(username,message) VALUES("brian", "You totally should");
INSERT INTO dummychat(username,message) VALUES("kenny", "We're a Golden Girls house");
INSERT INTO dummychat(username,message) VALUES("brian", "Ok maybe not then");
INSERT INTO dummychat(username,message) VALUES("kenny", "Don't judge ha ha");
INSERT INTO dummychat(username,message) VALUES("brian", "I think it's time for a break");
INSERT INTO dummychat(username,message) VALUES("kenny", "OK, ttyl");
INSERT INTO dummychat(username,message) VALUES("brian", "I'm back");
INSERT INTO dummychat(username,message) VALUES("kenny", "that was fast");