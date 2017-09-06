/* Fill out these functions using Mongoose queries*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config.js');

mongoose.connect(config.db.uri);
var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
    
    Listing.findOne({name: "Library West"}, function(err, listing){
        if(err) return console.error(err);
    
         console.log(listing.name);
    });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
    Listing.findOneAndRemove({code: 'CABL'}, function(err,listing){
        if (err) throw err;
        
        console.log(listing);
    
    });
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
    Listing.findOneAndUpdate({code: 'PHL'}, {address: 'Phelps Lab, Gainesville, FL 32603'}, function(err,listing){
        if (err) throw err;
        
        
        console.log("%s has a new addresss of: %s", listing.name, listing.address);
    });
    
    
    
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
    
    Listing.find({}, function(err, listing){
        if(err) throw err;
     listing.forEach(function(listing){
         console.log(listing);
     })
        
 });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
