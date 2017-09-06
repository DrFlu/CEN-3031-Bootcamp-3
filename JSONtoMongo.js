'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config.js');

/* Connect to your database */

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
mongoose.connect(config.db.uri);

fs.readFile('listings.json', 'utf8', function(err, data)
{
    if(err) return console.error(err);
    
    var listingData = JSON.parse(data);
    
    for(var i = 0; i < listingData.entries.length; i++ )
        {
            var temp = new Listing();
            
            temp.code = listingData.entries[i].code;
            temp.name = listingData.entries[i].name;
            temp.coordinates = listingData.entries[i].coordinates;
            temp.address = listingData.entries[i].address;
            
            temp.save(function(err){
                console.log('Data saved');
            });
        }
    
    
});




/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */