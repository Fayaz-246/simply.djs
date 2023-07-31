const { Client, GatewayIntentBits, ActivityType } = require("discord.js");
const chalk = require("chalk");
const {
  SimplyErrorMajor,
  SimplyErrorMinor,
} = require("../commands/console-error");

module.exports = class ClientCreate {
  constructor(options) {
    if (!options) return new SimplyErrorMajor("No options provided.");
    if (!options.token)
      return new SimplyErrorMajor("No token provided for the bot.");
    this.token = options.token;
    this.embedColor = options.embedColor;
    const clientDJS = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
      ],
    });
    this.client = clientDJS;
  }
  login() {
    this.client.login(this.token);
  }
  ready(name, type, status) {
    let Activ;
    const typeOf = type.toUpperCase();
    if (typeOf === "PLAYING") Activ = ActivityType.Playing;
    else if (typeOf === "WATCHING") Activ = ActivityType.Watching;
    else if (typeOf === "LISTENING") Activ = ActivityType.Listening;
    else if (typeOf === "COMPETING") Activ = ActivityType.Competing;
    else new SimplyErrorMinor("Invalid Type.");
    const stateOf = status.toLowerCase();
    let ss;
    if (stateOf === "dnd") ss = "dnd";
    else if (stateOf === "idle") ss = "idle";
    else if (stateOf === "online") ss = "online";
    else if (stateOf === "invisible") ss = "invisible";
    else new SimplyErrorMinor("Invalid Status");
    this.client.on("ready", () => {
      this.client.user.setPresence({
        activities: [
          {
            name: `${name}`,
            type: Activ,
          },
        ],
        status: `${ss}`,
      });
      console.log(
        chalk.greenBright(">"),
        `${new Date()}||${this.client.user.username} Is online! [${
          this.client.user.id
        }]`
      );
      console.log(
        chalk.greenBright(">"),
        `${new Date()}||Status - ${ss}. Name - ${name}. Type - ${type.toLowerCase()}`
      );
    });
  }
};
