const { prefix } = require('../config.json');

module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
    args: false,
	execute(message, args) {
		message.channel.send('Use !fish <fish name> or !bug <bug name> to find out more about each critter!');
	},
};