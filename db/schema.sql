DROP DATABASE IF EXISTS safechat;

CREATE DATABASE safechat;

USE safechat;


CREATE TABLE messages(
id INT AUTO_INCREMENT NOT NULL,
photo VARCHAR(999),
username VARCHAR(20) NOT NULL,
message VARCHAR(500) NOT NULL,
timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (username)
);


CREATE TABLE dummychat(
  username VARCHAR(20) NOT NULL,
  message VARCHAR(500) NOT NULL
);

INSERT INTO dummychat(message) VALUES("good meeting today");
INSERT INTO dummychat(message) VALUES("great presentation");
INSERT INTO dummychat(message) VALUES("we'll do even better next time");
INSERT INTO dummychat(message) VALUES("i'm ready for a new challenge");
INSERT INTO dummychat(message) VALUES("it wasn't my best effort");
INSERT INTO dummychat(message) VALUES("who's running the next meet and greet?");
INSERT INTO dummychat(message) VALUES("not sure. do you know the date?");
INSERT INTO dummychat(message) VALUES("I think it's Sven");
INSERT INTO dummychat(message) VALUES("we need to change the time of these things");
INSERT INTO dummychat(message) VALUES("i was impressed with kevin's team");
INSERT INTO dummychat(message) VALUES("sharon is a great presenter");
INSERT INTO dummychat(message) VALUES("I forgot to turn my phone off this time");
INSERT INTO dummychat(message) VALUES("I heard your phone buzz");
INSERT INTO dummychat(message) VALUES("when does the SME show up next week?");
INSERT INTO dummychat(message) VALUES("coffee is bad. we need to hire a new intern.");
INSERT INTO dummychat(message) VALUES("I agree. ");
INSERT INTO dummychat(message) VALUES("I wan't sure.");
INSERT INTO dummychat(message) VALUES("more small talk");
INSERT INTO dummychat(message) VALUES("more small talk");
INSERT INTO dummychat(message) VALUES("more small talk");
INSERT INTO dummychat(message) VALUES("more small talk");
INSERT INTO dummychat(message) VALUES("more small talk");
INSERT INTO dummychat(message) VALUES("more small talk");
INSERT INTO dummychat(message) VALUES("more small talk");
INSERT INTO dummychat(message) VALUES("more small talk");
INSERT INTO dummychat(message) VALUES("more small talk");
INSERT INTO dummychat(message) VALUES("more small talk");
INSERT INTO dummychat(message) VALUES("more small talk");
INSERT INTO dummychat(message) VALUES("more small talk");
INSERT INTO dummychat(message) VALUES("more small talk");
INSERT INTO dummychat(message) VALUES("more small talk");
INSERT INTO dummychat(message) VALUES("more small talk");
INSERT INTO dummychat(message) VALUES("more small talk");
INSERT INTO dummychat(message) VALUES("more small talk");
INSERT INTO dummychat(message) VALUES("more small talk");
INSERT INTO dummychat(message) VALUES("more small talk");
INSERT INTO dummychat(message) VALUES("more small talk");
INSERT INTO dummychat(message) VALUES("more small talk");
INSERT INTO dummychat(message) VALUES("more small talk");
INSERT INTO dummychat(message) VALUES("more small talk");