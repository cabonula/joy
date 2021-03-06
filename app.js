const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const config = require("./config.json");
const http = require("http");
const { Client, RichEmbed, Attachment } = require("discord.js");
const express = require("express");

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
// increase the limit
myEmitter.setMaxListeners(11);

for (let i = 0; i < 11; i++) {
  myEmitter.on("event", _ => console.log(i));
}

myEmitter.emit("event");

const Canvas = require("canvas");
const snekfetch = require("snekfetch");

const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

///////////////////STATUS
bot.on("ready", () => {
  bot.user.setActivity("Happy Womens Month", { type: "Playing" });
});
const swearWords = ["ᶜᶻ"];

//////////////////////////////////////////////////IMAGESEND

bot.on("message", message => {
  const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "sendimage") {
    if (
      message.member.roles.find(r => r.id === "483935150112243722") ||
      message.member.roles.find(r => r.id === "483212978296979467") ||
      message.member.roles.find(r => r.id === "502851803684274178") ||
      message.member.roles.find(r => r.id === "585632320552304667") ||
      message.member.roles.find(r => r.id === "506350777380372491")
    ) {
      const channel = args.shift().slice(2, -1); // this is due to how channel mentions work in discord (they are sent to bots as <#462650628376625169>, this cuts off the first <# and the finishing >)
      const sayImage = args.join(` `);

      bot.channels.get(channel).send(" ", { files: [sayImage] });
    }
  }
});

bot.on("message", message => {
  const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "qotdheader") {
    const sayImage = args.join(` `);

    bot.channels.get("648387222982098973").send(" ", { files: [sayImage] });
  }
});

///////////////////////////////////////TOPICCCC/////////////////////
bot.on("message", message => {
  const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "topic") {
    var topics = [
      "What is your favorite show?",
      "Would you rather be super rich with no friend or have many friends but not well off",
      "Anong pipiliin mo, dota o ako?",
      "Minahal ka ba ng mahal mo?",
      "Ano plano mo pag nasa mid-20's ka na?",
      "Yung pangarap mo nong bata ka, unti-unti mo na bang natutupad ngayon?",
      "What is your ideal woman/man?",
      "Matangkad o cute ang height?",
      "Bukod sa okay ka lang, kumusta ka na?",
      "Kung di mo kailangan ng tulog, ano gagawin mo?",
      "Ano pinakagusto mong katangian ng barkada mo?",
      "Do you like what you are doing right now in life?",
      "Anong nakain mo na weird sa panlasa mo?",
      "Umulan or mag-snow?",
      "Ano ang pinakamasarap na pagkain na naluto mo?",
      "Sino unang nakasampal sayo?",
      "Ano gusto mong sabihin sa mga pinaasa mo?",
      "Ano kinakatakutan mo?",
      "Long hair or short hair?",
      "Ano ang paborito mong amoy?"
    ];
    var topic = Math.floor(Math.random() * topics.length);
    message.channel.send(topics[topic]);
  }
});

bot.on("message", message => {
  const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "quote") {
    var quotes = [
      ">>> *Tough times don’t last. Tough people do. – Robert H. Schuller*",
      ">>> *Keep going. Everything you need will come to you at the perfect time.*",
      ">>> *You have to be at your strongest when you’re feeling at your weakest.*",
      ">>> *Never give up. Great things take time. Be patient.*",
      ">>> *It does not matter how slowly you go as long as you do not stop. – Confucius*",
      ">>> *Courage is one step ahead of fear. – Coleman Young*",
      ">>> *If you feel like giving up, just look back on how far you are already.*",
      ">>> *Focus on your goal. Don’t look in any direction but ahead.*",
      ">>> *Everything you’ve ever wanted is on the other side of fear. — George Addair*",
      ">>> *Pain is temporary. Quitting lasts forever. – Lance Armstrong*",
      ">>> *The pain you feel today will be the strength you feel tomorrow. – Unknown*",
      ">>> *We must embrace pain and burn it as fuel for our journey. – Kenji Miyazawa*",
      ">>> *A problem is a chance for you to do your best. – Duke Ellington*",
      ">>> *Hard times don’t create heroes. It is during the hard times when the ‘hero’ within us is revealed. – Bob Riley*",
      ">>> *Remember it’s just a bad day, not a bad life.h*",
      ">>> *blah*",
      ">>> *Whatever is worrying you right now, forget about it. Take a deep breath, stay positive and know that things will get better. – Unknown*",
      ">>> *It’s not about perfect. It’s about effort. – Jillian Michaels*",
      ">>> *Believe you can and you’re halfway there. – Theodore Roosevelt*",
      ">>> *Challenges are what make life interesting. Overcoming them is what makes them meaningful.*",
      ">>> *You are so much more than what you are going through. – John Tew*",
      ">>> *Passion first and everything will fall into place. – Holly Holm*",
      ">>> *Difficult roads always lead to beautiful destinations. – Zig Ziglar*",
      ">>> *Staying positive does not mean that things will turn out okay. Rather it is knowing that you will be okay no matter how things turn out. – Unknown*",
      ">>> *Success is what happens after you have survived all of your disappointments.*",
      ">>> *Goals may give focus, but dreams give power. – John Maxwell*",
      ">>> *Don’t wish it were easier. Wish you were better. ― Jim Rohn*",
      ">>> *Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change.*",
      ">>> *Hustle until you no longer have to introduce yourself.*",
      ">>> *You don’t always get what you wish for. But you always get what you work for.*",
      ">>> *You don’t find will power, you create it.*",
      ">>> *Once you choose hope, anything’s possible. – Christopher Reeve*",
      ">>> *Push yourself because no one else is going to do it*",
      ">>> *You cannot fail at being yourself. – Wayne Dyer*",
      ">>> *Don’t wait for opportunity. Create it.*",
      ">>> *You are the only one who can limit your greatness. – Unknown*",
      ">>> *The first and greatest victory is to conquer self. – Plato*",
      ">>> *Results happen over time, not overnight. Work hard, stay consistent, and be patient.*",
      ">>> *With confidence you have won before you have started. – Marcus Garvey*",
      ">>> *Success is what comes after you stop making excuses. – Luis Galarza*",
      ">>> *You don’t want to look back and know you could have done better.*",
      ">>> *The moment you doubt whether you can fly, you cease for ever to be able to do it. – J.M. Barrie*",
      ">>> *Be so good they can’t ignore you. – Steve Martin*",
      ">>> *You will never always be motivated. You have to learn to be disciplined.*",
      ">>> *Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy. – Norman Vincent Peale*",
      ">>> *When you know what you want, and want it bad enough, you’ll find a way to get it. – Jim Rohn*",
      ">>> *The best way to gain self-confidence is to do what you are afraid to do. – Swati Sharma*",
      ">>> *Motivation is what gets you started. Habit is what keeps you going. – Jim Rohn*",
      ">>> *Never stop trying. Never stop believing. Never give up. Your day will come. – Unknown*",
      ">>> *Results happen over time, not overnight. Work hard, stay consistent, and be patient. – Unknown*",
      ">>> *Our greatest glory is not in never falling, but in rising every time we fall. — Confucius*",
      ">>> *Don’t try to be perfect. Just try to be better than you were yesterday. – Unknown*",
      ">>> *Start where you are. Use what you have. Do what you can. – Arthur Ashe*",
      ">>> *Don’t stop until you’re proud.*",
      ">>> *Strength does not come from physical capacity. It comes from an indomitable will. – Mahatma Gandhi*",
      ">>> *I’m not telling you it is going to be easy, I’m telling you it’s going to be worth it. – Art Williams*",
      ">>> *If you want it, you’ll find a way. If you don’t, you’ll find an excuse.*",
      ">>> *Perseverance is the hard work you do after you get tired of doing the hard work you already did. – Newt Gingrich*",
      ">>> *It is during our darkest moments that we must focus to see the light. — Aristotle Onassis*",
      ">>> *Perfection is not attainable, but if we chase perfection we can catch excellence. — Vince Lombardi*",
      ">>> *We may encounter many defeats but we must not be defeated. – Maya Angelou*",
      ">>> *Strength doesn’t come from what you can do. It comes from overcoming the things you once thought you couldn’t. – Rikki Rogers*",
      ">>> *He who is not courageous enough to take risks will accomplish nothing in life. – Muhammad Ali*",
      ">>> *We don’t develop courage by being happy every day. We develop it by surviving difficult times and challenging adversity. – Barbara De Angelis*",
      ">>> *When you fear your struggles, your struggles consume you. When you face your struggles, you overcome them.*",
      ">>> *I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear. – Nelson Mandela*",
      ">>> *Keep going. Everything you need will come to you at the perfect time.*",
      ">>> *Set a goal so big that you can’t achieve it until you grow into the person who can. – Unknown*",
      ">>> *All our dreams can come true, if we have the courage to pursue them. – Walt Disney*",
      ">>> *The path to success is to take massive, determined action. – Tony Robbins*",
      ">>> *The only person you are destined to become is the person you decide to be. —Ralph Waldo Emerson*",
      ">>> *If you get tired, learn to rest, not quit.*",
      ">>> *Pessimism leads to weakness, optimism to power. – William James*",
      ">>> *The struggle you’re in today is developing the strength you need for tomorrow. – Unknown*",
      ">>> *Life is 10% what happens to you and 90% how you react to it. – Charles R. Swindoll*",
      ">>> *Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine. ― Roy T. Bennett*",
      ">>> *Strength is the product of struggle. You must do what others don’t to achieve what others wont. – Henry Rollins*",
      ">>> *Don’t think about what might go wrong. Think about what might go right. – Unknown*",
      ">>> *Your hardest times often lead to the greatest moments of your life. Keep going. Tough situations build strong people in the end. – Roy T. Bennett*",
      ">>> *You have to fight through some bad days to earn the best days of your life. – Unknown*",
      ">>> *Make the most of yourself….for that is all there is of you. – Ralph Waldo Emerson*",
      ">>> *It takes courage to grow up and become who you really are. – E.E. Cummings*",
      ">>> *Every next level of your life will demand a different version of you. – Unknown*",
      ">>> *Don’t let your fear decide your future. – Shalane Flanagan*",
      ">>> *Do something today that your future self will thank you for.*",
      ">>> *You were put on this Earth to achieve your greatest self, to live out your purpose, and to do it courageously. – Steve Maraboli*",
      ">>> *The future belongs to those who believe in the beauty of their dreams. – Franklin D. Roosevelt*",
      ">>> *Don’t downgrade your dream just to fit your reality. Upgrade your conviction to match your destiny. – John Assaraf*",
      ">>> *Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. ― Roy T. Bennett*",
      ">>> *Choosing to be positive and having a grateful attitude is going to determine how you’re going to live your life. – Joel Osteen*",
      ">>> *If you believe it will work out, you’ll see opportunities. If you believe it won’t, you will see obstacles. – Wayne Dyer*",
      ">>> *Life is a process. We are a process. The universe is a process. – Anne Wilson Schaef*",
      ">>> *Life shrinks or expands in proportion to one’s courage. – Anaïs Nin*",
      ">>> *Whatever the mind of man can conceive and believe, it can achieve. –Napoleon Hill*",
      ">>> *If you are not willing to risk the usual, you will have to settle for the ordinary. -Jim Rohn*",
      ">>> *Life is about making an impact, not making an income. –Kevin Kruse*",
      ">>> *Positive thinking is powerful thinking. If you want happiness, fulfillment, success and inner peace, start thinking you have the power to achieve those things. Focus on the bright side of life and expect positive results. ― Germany Kent*",
      ">>> *Strive not to be a success, but rather to be of value. –Albert Einstein*",
      ">>> *Great minds discuss ideas; average minds discuss events; small minds discuss people. Eleanor Roosevelt*",
      ">>> *Definiteness of purpose is the starting point of all achievement. –W. Clement Stone*",
      ">>> *I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed. –Michael Jordan*",
      ">>> *Through challenge and difficulty, we learn to see life differently than before. ― Auliq-Ice*",
      ">>> *It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change. -Charles Darwin*",
      ">>> *…when we cease asking questions, when we stop being self-critical, and when we no longer engage with others, then we surrender our ability to grow–to progress. Let’s begin the conversation. ― Mehdi Ghafourifar*",
      ">>> *A key to the brighter future is to reassess goals, priorities and do best to make things happen. ― Martin M. Stupak*",
      ">>> *A difficult time can be more readily endured if we retain the conviction that our existence holds a purpose – a cause to pursue, a person to love, a goal to achieve. – John C. Maxwell*"
    ];
    var quote = Math.floor(Math.random() * quotes.length);
    message.channel.send(quotes[quote]);
  }
});

///////////////////////////////////

///////////////BREATHE////////////////////

bot.on("message", message => {
  const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "breathe") {
    const embed = new RichEmbed()
      .setTitle(" *Sync your breathing with this gif* ")
      .setColor(0xabf8ec)
      .setImage(
        "https://thumbs.gfycat.com/SpottedFlippantIrishwolfhound-size_restricted.gif"
      )
      .setFooter("© ChillVibes");
    message.channel.send(embed);
  }
});

////////////////////////////////////////FRAME

bot.on("message", async message => {
  if (message.channel.id === "755433721691373758") {
    const args = message.content
      .slice(config.prefix.length)
      .trim()
      .split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command === "pink") {
      if (message.member.roles.find(r => r.id === "594816711543488523")) {
        const canvas = Canvas.createCanvas(400, 400);
        const ctx = canvas.getContext("2d");

        // Since the image takes time to load, you should await it
        const background = await Canvas.loadImage(
          message.author.displayAvatarURL
        );
        // This uses the canvas dimensions to stretch the image onto the entire canvas
        ctx.drawImage(background, 75, 68, 250, 250);
        // Use helpful Attachment class structure to process the file for you
        const avatar = await Canvas.loadImage(
          "https://cdn.discordapp.com/attachments/683490334700732423/755407862267904010/image0.png"
        );
        // Move the image downwards vertically and constrain its height to 200, so it's a square
        ctx.drawImage(avatar, 0, 0, 400, 400);

        const attachment = new Discord.Attachment(
          canvas.toBuffer(),
          "cvupink.png"
        );

        bot.channels.get("755433721691373758").send(message.author, attachment);
      } else {
        return message.reply(
          "You have to be in Pink Class to be able to use this command. Get your class role here <#694396584661614605>"
        );
      }
    }
  }
});

bot.on("message", async message => {
  if (message.channel.id === "755433721691373758") {
    const args = message.content
      .slice(config.prefix.length)
      .trim()
      .split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command === "mint") {
      if (message.member.roles.find(r => r.id === "594816703356207126")) {
        const canvas = Canvas.createCanvas(400, 400);
        const ctx = canvas.getContext("2d");

        // Since the image takes time to load, you should await it
        const background = await Canvas.loadImage(
          message.author.displayAvatarURL
        );
        // This uses the canvas dimensions to stretch the image onto the entire canvas
        ctx.drawImage(background, 75, 68, 250, 250);
        // Use helpful Attachment class structure to process the file for you
        const avatar = await Canvas.loadImage(
          "https://cdn.discordapp.com/attachments/683490334700732423/755407859230965820/image0.png"
        );
        // Move the image downwards vertically and constrain its height to 200, so it's a square
        ctx.drawImage(avatar, 0, 0, 400, 400);

        const attachment = new Discord.Attachment(
          canvas.toBuffer(),
          "cvupink.png"
        );

        bot.channels.get("755433721691373758").send(message.author, attachment);
      } else {
        return message.reply(
          "You have to be in Mint Class to be able to use this command. Get your class role here <#694396584661614605>"
        );
      }
    }
  }
});

bot.on("message", async message => {
  if (message.channel.id === "755433721691373758") {
    const args = message.content
      .slice(config.prefix.length)
      .trim()
      .split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command === "violet") {
      if (message.member.roles.find(r => r.id === "594816708762402816")) {
        const canvas = Canvas.createCanvas(400, 400);
        const ctx = canvas.getContext("2d");

        // Since the image takes time to load, you should await it
        const background = await Canvas.loadImage(
          message.author.displayAvatarURL
        );
        // This uses the canvas dimensions to stretch the image onto the entire canvas
        ctx.drawImage(background, 75, 68, 250, 250);
        // Use helpful Attachment class structure to process the file for you
        const avatar = await Canvas.loadImage(
          "https://cdn.discordapp.com/attachments/683490334700732423/755407863706550302/image0.png"
        );
        // Move the image downwards vertically and constrain its height to 200, so it's a square
        ctx.drawImage(avatar, 0, 0, 400, 400);

        const attachment = new Discord.Attachment(
          canvas.toBuffer(),
          "cvupink.png"
        );

        bot.channels.get("755433721691373758").send(message.author, attachment);
      } else {
        return message.reply(
          "You have to be in Violet Class to be able to use this command. Get your class role here <#694396584661614605>"
        );
      }
    }
  }
});

////////////////////DELETE RPG
bot.on("message", message => {
  if (message.channel.id === "719397109765373982") {
    if (
      message.content.includes(
        "A Bot for assisting with RPG made by Henry#6174"
      )
    ) {
      message.delete(1000);
    }
  }
});

bot.on("message", message => {
  if (message.channel.id === "719397109765373982") {
    if (
      message.content.includes("Check your or another character's inventory.")
    ) {
      message.delete(1000);
    }
  }
});

bot.on("message", message => {
  if (message.channel.id === "719397109765373982") {
    if (
      message.content.includes(
        "Roll a number of dice with given sides (ndx notation)"
      )
    ) {
      message.delete(1000);
    }
  }
});


//////////////AUTOREACT

bot.on("message", message => {
  if (message.channel.id === "696598721156218911") {
    if (message.content.includes("Chillizens")) {
      message.react("697059867067678740");
      message.react("696284345756942357");
      message.react("697101169830658118");
      message.react("620633262007779328");
      message.react("697098962502418493");
      message.react("697098507428823100");
      message.react("691482669443186749");
      message.react("691482663151992915");
      message.react("691276032413532252");
      message.react("691276032879362298");
      message.react("687478536583512087");
      message.react("687478536780644404");
      message.react("691482672484319262");
      message.react("697099100885352549");
    }
  }
});

///////////////////////////SUGGESTIONS DELEET

bot.on("message", message => {
  if (message.channel.id === "653864514676064269") {
    if (message.author.bot) return;
    message.delete();
  }
});

///////////////////CONNECT TO VC
bot.on("message", message => {
  const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === "join") {
    // Note that this will only work if the message was sent in a guild
    // and the author is actually in a voice channel.
    // You might want to check for all that stuff first
    const channel = message.member.voiceChannel;

    channel
      .join()
      .then(connection => console.log("Connected!"))
      .catch(console.error);
  }
});

/////////////////////CONFESSION

bot.on("message", async message => {
  if (message.channel.type === "dm") {
    if (message.author.id === "649015902322425867") return;
    if (message.author.id === "441685043832946699") return;
    if (message.author.id === "668330792203845674") return;
    if (message.author.id === "145698197082341376") return;
    if (message.author.id === "666264899382411274") return;
    if (message.author.id === "498062070844227584") return;
    if (message.content.startsWith("confess")) {
      let rest_of_the_string = message.content.slice("confess".length); //removes the first part
      let array_of_arguments = rest_of_the_string.split("$"); //[title, description, link, image]et color = ((1 << 24) * Math.random() | 0).toString(16);
      let color = (((1 << 24) * Math.random()) | 0).toString(16);

      const embed = new RichEmbed()
        .setColor(`#${color}`)
        .setDescription(array_of_arguments[0]);
      message.author.send(
        "<:_check:712509088764002354> **Confession Sent.** Head over <#515857497626640394> to see"
      );
      bot.channels.get("515857497626640394").send(embed);
    } else {
    }
  }
});

////////////////////////////////////////SEND TO MY DM///////////////////////////////////////

bot.on("message", async message => {
  if (message.channel.type === "dm") {
    const args = message.content
      .slice(config.prefix.length)
      .trim()
      .split(/ +/g);
    const command = args.shift().toLowerCase();

    if (message.author.bot) return;

    const sayMessage = args.join(` `);
    bot.users
      .get("420788589698482187")
      .send(
        message.author +
          " " +
          message.author.id +
          " " +
          message.author.tag +
          " " +
          message.content
      );
  }
});


///////////////////SEND TO USER DM

bot.on("message", message => {
  const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === "reply") {
    if (
      message.member.roles.find(r => r.id === "483935150112243722") ||
message.member.roles.find(r=> r.id === "483212978296979467") ||
message.members.roles.find(r=> r.id === "502851803684274178")||
message.member.roles.find(r=> r.id ==="585632320552304667") ||
message.member.roles.find(r=>r.id === "506350777380372491")
    ) {
      const sayMessage = args.join(` `);

      message.mentions.members.first().send(sayMessage);
    } else {
      return message.reply(
        "Sorry but this is a premium command that can only be used by Boosters/Sponsors/Supreme/Staff."
      );
    }
  }
});

/////////////////////////////////IMAGE EMBED////////////////////////////////////////////////

bot.on("message", message => {
  const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  const sayMessage = args.join(` `);

  if (command === "image") {
    const embed = new RichEmbed().setColor(0xabf8ec).setImage(sayMessage);
    message.delete();
    message.channel.send({ embed });
  }
});



bot.on("message", message => {
  if (message.channel.id === "687475448615272495") {
    if (message.author.bot) return;
    message.delete();
  }
});

//////////////////////////////////////CLUBENTRY
bot.on("message", message => {
  const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  const sayMessage = args.join(` `);

  if (command === "clubentry") {
    const embed = new RichEmbed()
      .setTitle(message.author.username)
      .setThumbnail(message.author.displayAvatarURL)
      .setDescription(message.author + "\n" + sayMessage)
      .setColor(0xabf8ec)
      .setFooter("ChillVibes");
    message.delete();
    message.author.send(
      "<:_check:712509088764002354> **Club Entry Sent.** Kindly wait as the staff will review your entry. Thank you! 💜"
    );
    bot.channels.get("522430068769685514").send(embed);
  }
});

/////////////////////////////SUUGGESTION///

bot.on("message", message => {
  const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  const sayMessage = args.join(` `);

  if (command === "suggest") {
    const embed = new RichEmbed()
      .setTitle("Suggestion")
      .setAuthor(message.author.username, message.author.displayAvatarURL)
      .setDescription(sayMessage)
      .setColor(0xabf8ec)
      .setFooter("Chill Vibes", bot.user.avatarURL);
    bot.channels
      .get("653864514676064269")
      .send({ embed })
      .then(sentEmbed => {
        sentEmbed.react("712509088764002354");
        sentEmbed.react("712509088151371818");
      });
  }
});

//////////////////////////////////////

bot.on("message", message => {
  if (message.content.startsWith("Introduction:")) {
    let rest_of_the_string = message.content.slice("Introduction:".length); //removes the first part
    let array_of_arguments = rest_of_the_string.split("|"); //[title, description, link, image]

    let embed = new Discord.RichEmbed()
      .setTitle(array_of_arguments[0])
      .setDescription(array_of_arguments[9])
      .setImage(array_of_arguments[10])
      .addField("Age", array_of_arguments[1])
      .addField("Gender", array_of_arguments[2])
      .addField("Nationality", array_of_arguments[3])
      .addField("Location", array_of_arguments[4])
      .addField("Birthdate", array_of_arguments[5])
      .addField("Hobbies", array_of_arguments[6])
      .addField("Likes", array_of_arguments[7])
      .addField("DisLikes", array_of_arguments[8])
      .setThumbnail(message.author.displayAvatarURL)
      .setColor(0xabf8ec)
      .setTimestamp();
    message.author.send(
      "<:_check:712509088764002354> **Introduction sent!** Please check <#486494776527552541> to see your introduction! If you would like to edit your introduction, please ask a moderator so they can remove your previous submission. Troll submissions will be also deleted. Thank you!"
    );
    bot.channels.get("704193038435745894").send(message.author, { embed });
  }
});

bot.on("message", message => {
  const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  if (message.author.bot) return;
  // This is where we'll put our code.
  if (message.content.indexOf(config.prefix) !== 0) return;

  if (command === "introduction") {
    let embed = new Discord.RichEmbed().setDescription(
      "Your introduction that you will send here should look similar to this: \n\nIntroduction: Juan Dela Cruz | 18 | Male | Filipino | Manila | 01-01-2001 | Socializing, Gaming, and Watching | Balut | Ipis | Hi Im Juan im very friendly, dm if you want a friend | https://myphoto1234567890.jpeg \n\nKindly send your introduction here by copying and editing this format:"
    );

    message.author.send({ embed });

    message.author.send(
      "Introduction: (Name) | (Age) | (Gender) | (Nationality) | (Location) | (Birthdate) | (Hobbies) | (Likes) | (Dislikes) | (Optional: Description) | (Optional: Image Link) "
    );
  }
});

///////////////////-----///////////////////

bot.on("message", message => {
  const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  if (message.author.bot) return;
  // This is where we'll put our code.
  if (message.content.indexOf(config.prefix) !== 0) return;

  ///////////////////HELP

  if (command === "help") {
    const embed = new RichEmbed()
      .setTitle("Help")
      .setColor(0xabf8ec)
      .setDescription("Type `cv commands` for the different commands.");
    message.channel.send(embed);
  }

  ///////////////////COMMANDS
  else if (command === "commands") {
    const embed = new RichEmbed()
      .setTitle("Commands")
      .setColor(0xabf8ec)
      .setDescription("**prefix**: `cv `")
      .addField(
        "`confess message` ➖",
        "DM the bot with this format to send love confessions"
      )
      .addField("`cv breathe` ➖", "Send a gif of a breathing exercise")
      .addField("`cv info` ➖", "Show info about the server")
      .addField("`cv chill` ➖", "~~The bot has something to say~~ -disabled")
      .addField("`cv quote` ➖", "Gives a motivational quote")
      .addField("`cv topic` ➖", "Will give you random questions/topic")
      .addField("`cv review message` ➖", "~~Send reviews about this server~~ -disabled")
      .addField("`cv join`* ➖", "Connect the bot into the voice channel*")
      .addField("`cv afk`* ➖", "~~Leave an afk message when youre away*~~ -disabled")
      .addField("`cv avatar @user`* ➖", "Show the users avatar*")
      .addField(
        "`cv embed #channel message`* ➖ ",
        "Announce at any channel in embed form just like this one*"
      )
      .addField(
        "`cv say #channel message`* ➖ ",
        "Say something in a channel without embed just like a normal user*"
      )
      .addField(
        "`cv prune XX`* ➖",
        "Bulk delete messages in a channel XX- Number of messages*"
      )
      .addField(
        "`cv reply @user message`* ➖",
        "Send a message to someone anonymously*"
      )
      .addField(
        "*",
        "***Premium commands only available to Boosters, Sponsors, Supreme, and Staff**"
      );
    message.channel.send(embed);
  }

  ///////////////////PRUNE
  else if (command === "prune") {
    if (
      message.member.roles.find(r => r.id === "483935150112243722") ||
      message.member.roles.find(r => r.id === "483212978296979467")
    ) {
      const amount = parseInt(args[0]) + 1;

      if (isNaN(amount)) {
        return message.reply("that doesn't seem to be a valid number.");
      } else if (amount <= 1 || amount > 100) {
        return message.reply("you need to input a number between 1 and 99.");
      }

      message.channel.bulkDelete(amount, true).catch(err => {
        console.error(err);
        message.channel.send(
          "there was an error trying to prune messages in this channel!"
        );
      });
    } else {
      return message.reply(
        "Sorry but this is a premium command that can only be used by Boosters/Sponsors/Supreme/Staff."
      );
    }
  }

  ///////////////////AVATAR

  if (command === "avatar") {
    if (
      message.member.roles.find(r => r.id === "483935150112243722") ||
      message.member.roles.find(r => r.id === "483212978296979467") ||
      message.member.roles.find(r => r.id === "502851803684274178") ||
      message.member.roles.find(r => r.id === "585632320552304667") ||
      message.member.roles.find(r => r.id === "506350777380372491")
    ) {
      if (!message.mentions.users.size) {
        return message.channel.send(
          `Your avatar: ${message.author.displayAvatarURL}`
        );
      }

      const avatarList = message.mentions.users.map(user => {
        return `${user.username}'s avatar: ${user.displayAvatarURL}`;
      });

      message.channel.send(avatarList);
    } else {
      return message.reply(
        "Sorry but this is a premium command that can only be used by Boosters/Sponsors/Supreme/Staff."
      );
    }
  }

  ///////////////////PING

  if (command === "ping") {
    message.channel
      .send("Pinging ...") // Placeholder for pinging ...
      .then(msg => {
        // Resolve promise
        msg.edit("**Ping:** " + (Date.now() - msg.createdTimestamp)); // Edits message with current timestamp minus timestamp of message
      });
  }

  ///////////////////EMBED
  else if (command === "embed") {
    if (
      message.member.roles.find(r => r.id === "483935150112243722") ||
      message.member.roles.find(r => r.id === "483212978296979467") ||
      message.member.roles.find(r => r.id === "502851803684274178") ||
      message.member.roles.find(r => r.id === "585632320552304667") ||
      message.member.roles.find(r => r.id === "506350777380372491")
    ) {
      const channel = args.shift().slice(2, -1); // this is due to how channel mentions work in discord (they are sent to bots as <#462650628376625169>, this cuts off the first <# and the finishing >)
      const sayMessage = args.join(` `);

      const embed = new RichEmbed()
        .setColor(0xabf8ec)
        .setDescription(sayMessage); // you may want to add a catch() here, i didn't because my bot requires permissions to be added to a server
      bot.channels.get(channel).send({ embed }); // bot here may need to be replaced with bot, or app, or whatever you're using - bot.channels returns a collection, which we use get() to find an item in
    } else {
      return message.reply(
        "Sorry but this is a premium command that can only be used by Boosters/Sponsors/Supreme/Staff."
      );
    }
  }

  ///////////////////SAY

  if (command === "say") {
    if (
      message.member.roles.find(r => r.id === "483935150112243722") ||
      message.member.roles.find(r => r.id === "483212978296979467") ||
      message.member.roles.find(r => r.id === "502851803684274178") ||
      message.member.roles.find(r => r.id === "585632320552304667") ||
      message.member.roles.find(r => r.id === "697078992305520691") ||
      message.member.roles.find(r => r.id === "506350777380372491")
    ) {
      const channel = args.shift().slice(2, -1);  // this is due to how channel mentions work in discord (they are sent to bots as <#462650628376625169>, this cuts off the first <# and the finishing >)
      const sayMessage = args.join(` `);

      // you may want to add a catch() here, i didn't because my bot requires permissions to be added to a server
      bot.channels.get(channel).send(sayMessage); // bot here may need to be replaced with bot, or app, or whatever you're using - bot.channels returns a collection, which we use get() to find an item in
    } else {
      return message.reply(
        "Sorry but this is a premium command that can only be used by Boosters/Sponsors/Supreme/Staff."
      );
    }
  }
});

bot.login(process.env.TOKEN);
