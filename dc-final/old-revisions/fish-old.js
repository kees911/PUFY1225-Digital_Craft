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
        console.log (fishOutput.length);
        //console.log(fishOutput[i]);
    for (var i = 0; i < fishOutput.length; i++) {
        console.log(fishOutput[i].Name);}
        
    })

module.exports = {
	name: 'fish',
	description: 'Information about fish in Animal Crossing: New Horizons.',
    args: true,
    usage: '<FishName without spaces>',
	execute(message, args) {
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		} else if (args[0] === 'foo') {
			return message.channel.send('bar');
		} else {
                for (var i = 0; i < fishOutput.length; i++){
                    if (args == fishOutput[i].Name){
                return message.channel.send(fishOutput[i].Name + ' (' + fishOutput[i].ID + ')' + '\r\nSell Price: ' + fishOutput[i].Value + '\r\nSize: ' + fishOutput[i].Size + '\r\nAppears in ' + fishOutput[i].Location + 's ' + fishOutput[i].Time + ', ' + fishOutput[i].Seasonality);
                    }
                }
            
                return console.log('error encountered');
                }
	}
};