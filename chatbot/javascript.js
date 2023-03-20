function talk(){
    var know = {
      "who are you" : "Hello, Codewith_Newbie here ",
      "how are you" : "Good :)",
      "what can i do for you" : "Please Give us A Follow & Like.",
      "your followers" : "I have my family of 5000 members, i don't have follower ,have supportive Famiy ",
      "ok" : "Thank You So Much ",
      "bye" : "Okay! Will meet soon.."
    };
    var user = document.getElementById('userBox').value.toLowerCase(); // convert to lowercase
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
      document.getElementById('chatLog').innerHTML += know[user] + "<br>"; // use += to append to the chat log
    } else {
      document.getElementById('chatLog').innerHTML += "Sorry, I didn't understand <br>"; // use += to append to the chat log
    }
  }
  