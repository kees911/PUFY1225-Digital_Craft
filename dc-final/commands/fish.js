const csv = require ('csv-parser');
const fs = require('fs');

const fishData = "../blathersbot/assets/fish.csv"
const fishOutput = [];
//initializes the fs.ReadStream object and assigns it to a const
fs.createReadStream(fishData)
    .on('error', () => {
        // handle error: checks for errors with the given filepath before we start trying to pipe in its data.
    })

    .pipe(csv())
    //begins to pipe data into our ReadStream, which is now listening for the next two events
    .on('data', (fishData) => {
        fishOutput.push(fishData);
        //console.log(fishOutput);
        // use row data: the console.log part returns each line of the CSV row-by-row, accessible in its callback as 'row'
    })

    .on('end', () => {
        // handle end of CSV: you can use this event to call methods you need after the entire file is read.
        //the following bit is just for debugging to ensure that the entire CSV is being read.
        /*console.log (fishOutput.length);
        console.log(fishOutput[i]);
    for (var i = 0; i < fishOutput.length; i++) {
        console.log(fishOutput[i].Name);
    }*/
        
    })



module.exports = {
	name: 'fish', //name of the command, used to call it
	description: 'Information about fish in Animal Crossing: New Horizons.', //description of what the command does
    args: true, //this command requires arguments (fish names)
    usage: '<fish name>', //the argument required for this to work
	execute(message, args) {
        
        //If they only type !fish, lets user know that they didn't include a fish name. This is overriden by code in index.js, however, that also displays how the message should be formatted.
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
            
        //Used to debug just to see if the code is even running. Type !fish foo to return bar.
		} else if (args[0] === 'foo') {
			return message.channel.send('bar');
            
        //Exception made specifically for Goldfish because it otherwise breaks the Ranchu Goldfish and Pop-eyed Goldfish entries
        } else if (args[0] === 'goldfish') {
            return message.channel.send('goldfish (' + fishOutput[6].ID + ')' + '\r\nSelling Price: ' + fishOutput[6].Value + ' Bells\r\nSize: ' + fishOutput[6].Size + '\r\nAppears in ' + fishOutput[6].Location + 's ' + fishOutput[6].Time + ', ' + fishOutput[6].Seasonality);
        } else if (args[0] === 'Goldfish') {
            return message.channel.send('goldfish (' + fishOutput[6].ID + ')' + '\r\nSelling Price: ' + fishOutput[6].Value + ' Bells\r\nSize: ' + fishOutput[6].Size + '\r\nAppears in ' + fishOutput[6].Location + 's ' + fishOutput[6].Time + ', ' + fishOutput[6].Seasonality);
            
		} else { //code that is used to generate information about the fish otherwise
                for (var i = 0; i < fishOutput.length; i++){
                    if (message.content.toLowerCase().includes(fishOutput[i].Name)){
                //if the content of the message, once converted completely to lowercase, matches the name of a fish on the list
                return message.channel.send(fishOutput[i].Name + ' (' + fishOutput[i].ID + ')' + '\r\nSelling Price: ' + fishOutput[i].Value + ' Bells\r\nSize: ' + fishOutput[i].Size + '\r\nAppears in ' + fishOutput[i].Location + 's ' + fishOutput[i].Time + ', ' + fishOutput[i].Seasonality);
                    }
                }
            //if the fish name entered is invalid, sends this. Also prints an error to the console.
                message.channel.send(`You entered: ${args}, which is not a valid fish name. Remember to include proper spacing and punctuation!`) /*Arguments length: ${args.length}*/
                return console.log('error encountered');
                }
	}
};