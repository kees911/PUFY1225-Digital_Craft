const csv = require ('csv-parser');
const fs = require('fs');

const bugData = "../blathersbot/assets/bugs.csv"
const bugOutput = [];
//initializes the fs.ReadStream object and assigns it to a const
fs.createReadStream(bugData)
    .on('error', () => {
        // handle error: checks for errors with the given filepath before we start trying to pipe in its data.
    })

    .pipe(csv())
    //begins to pipe data into our ReadStream, which is now listening for the next two events
    .on('data', (bugData) => {
        bugOutput.push(bugData);
        //console.log(bugOutput);
        // use row data: the console.log part returns each line of the CSV row-by-row, accessible in its callback as 'row'
    })

    .on('end', () => {
        // handle end of CSV: you can use this event to call methods you need after the entire file is read.
        //the following bit is just for debugging to ensure that the entire CSV is being read.
        /*console.log (bugOutput.length);
        console.log(bugOutput[i]);
    for (var i = 0; i < bugOutput.length; i++) {
        console.log(bugOutput[i].Name);
    }*/
        
    })



module.exports = {
	name: 'bug', //name of the command, used to call it
	description: 'Information about bugs in Animal Crossing: New Horizons.', //description of what the command does
    args: true, //this command requires arguments (bug names)
    usage: '<bug name>', //the argument required for this to work
	execute(message, args) {
        
        //If they only type !bug, lets user know that they didn't include a fish name. This is overriden by code in index.js, however, that also displays how the message should be formatted.
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
            
        //Used to debug just to see if the code is even running. Type !bug ping to return pong.
		} else if (args[0] === 'ping') {
			return message.channel.send('pong');
            
        //Exception made specifically for Moths because otherwise it breaks the Atlas Moth and Madagascan Sunset Moth entries
        } else if (args[0] === 'moth') {
            return message.channel.send('moth (' + bugOutput[12].ID + ')' + '\r\nSelling Price: ' + bugOutput[12].Value + ' Bells\r\nFound ' + bugOutput[12].Location + ', ' + bugOutput[12].Time + ', ' + bugOutput[12].Seasonality);
        } else if (args[0] === 'Moth') {
            return message.channel.send('moth (' + bugOutput[12].ID + ')' + '\r\nSelling Price: ' + bugOutput[12].Value + ' Bells\r\nFound ' + bugOutput[12].Location + ', ' + bugOutput[12].Time + ', ' + bugOutput[12].Seasonality);
        
         //Exception made specifically for Grasshoppers because otherwise it breaks the Rice Grasshopper entry
        } else if (args[0] === 'grasshopper') {
            return message.channel.send('moth (' + bugOutput[18].ID + ')' + '\r\nSelling Price: ' + bugOutput[18].Value + ' Bells\r\nFound ' + bugOutput[18].Location + ', ' + bugOutput[18].Time + ', ' + bugOutput[18].Seasonality);
        } else if (args[0] === 'Grasshopper') {
            return message.channel.send('moth (' + bugOutput[18].ID + ')' + '\r\nSelling Price: ' + bugOutput[18].Value + ' Bells\r\nFound ' + bugOutput[18].Location + ', ' + bugOutput[18].Time + ', ' + bugOutput[18].Seasonality);
            
         //Exception made specifically for Crickets because otherwise it breaks the Mole Cricket and Bell Cricket entries
        } else if (args[0] === 'cricket') {
            return message.channel.send('moth (' + bugOutput[19].ID + ')' + '\r\nSelling Price: ' + bugOutput[19].Value + ' Bells\r\nFound ' + bugOutput[19].Location + ', ' + bugOutput[19].Time + ', ' + bugOutput[19].Seasonality);
        } else if (args[0] === 'Crickets') {
            return message.channel.send('moth (' + bugOutput[19].ID + ')' + '\r\nSelling Price: ' + bugOutput[19].Value + ' Bells\r\nFound ' + bugOutput[19].Location + ', ' + bugOutput[19].Time + ', ' + bugOutput[19].Seasonality);
        
        //Exception made specifically for Mantises because otherwise it breaks the Orchid Mantis entry
        } else if (args[0] === 'mantis') {
            return message.channel.send('moth (' + bugOutput[21].ID + ')' + '\r\nSelling Price: ' + bugOutput[21].Value + ' Bells\r\nFound ' + bugOutput[21].Location + ', ' + bugOutput[21].Time + ', ' + bugOutput[21].Seasonality);
        } else if (args[0] === 'Mantis') {
            return message.channel.send('moth (' + bugOutput[21].ID + ')' + '\r\nSelling Price: ' + bugOutput[21].Value + ' Bells\r\nFound ' + bugOutput[21].Location + ', ' + bugOutput[21].Time + ', ' + bugOutput[21].Seasonality);
            
        
		} else { //code that is used to generate information about the bugs otherwise
                for (var i = 0; i < bugOutput.length; i++){
                    if (message.content.toLowerCase().includes(bugOutput[i].Name)){
                //if the content of the message, once converted completely to lowercase, matches the name of a bug on the list
                return message.channel.send(bugOutput[i].Name + ' (' + bugOutput[i].ID + ')' + '\r\nSelling Price: ' + bugOutput[i].Value + ' Bells\r\nFound ' + bugOutput[i].Location + ', ' + bugOutput[i].Time + ', ' + bugOutput[i].Seasonality);
                    }
                }
            //if the bug name entered is invalid, sends this. Also prints an error to the console.
                message.channel.send(`You entered: ${args}, which is not a valid bug name. Remember to include proper spacing and punctuation!`) /*Arguments length: ${args.length}*/
                return console.log('error encountered');
                }
	}
};
