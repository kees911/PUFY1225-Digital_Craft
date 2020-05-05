//fs is Node's native file system module
const fs = require('fs');
// require the discord.js module
const Discord = require('discord.js');
//load in the token from config.json
const { prefix, token } = require('./config.json'); //this file has been altered for the GitHub upload for security purposes.

// create a new Discord client
const client = new Discord.Client();
client.commands = new Discord.Collection();

//The fs.readdirSync() method will return an array of all the file names in that directory
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

//message receipt and sending
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	if (!client.commands.has(commandName)) return;
    
    const command = client.commands.get(commandName);
    
    if (command.args && !args.length) {
        let reply = `You didn't provide any arguments, ${message.author}!`;
        if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }     
        return message.channel.send(reply);
    }

    try {
	   command.execute(message, args);
    } catch (error) {
        console.log(error);
	   console.error(error);
	   message.reply('there was an error trying to execute that command!');
    }
	// other commands...
});

// login to Discord with your app's token
client.login(token);
