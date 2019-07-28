require("dotenv").config();

const axios = require('axios');

var Spotify = require('node-spotify-api');

var keys = require("./keys.js");

const fs = require('fs');

const [, , ...args] = process.argv


//switch statement:
switch(getInfo) {
    case 'concert-this':
        listOfFunctions[args[0]]();
        break;
    case 'spotify-this-song':
        listOfFunctions[args[0]]();
        break;
    case 'movie-this':
        listOfFunctions[args[0]]();
        break;
    default:
        console.log('Enter your search like example: spotify-this-song,"I Want it That Way"');

}



//Function to read txt and determine what it will do and look for:
 function getInfo(){
    fs.readFile('random.txt', 'utf8', function(err, fileContent){
        if(err){
            return console.log('error');
        }
        var dataArray = fileContent.split(', ');
    
        console.log(dataArray)
    });
}


//check if 0 element is one of 4 commands [concert-this, spotify-this, movie-this]
//depending on option, call nessecary command
//inside of command - talk to appropriate API
//give output back to user - via console log
const listOfFunctions = {
    // "do-what-it-says": function () {
    //     fs.readFile('random.txt', 'utf8', function(err, fileContent){
    //         if(err){
    //             return console.log('error');
    //         }
    //         var dataArray = fileContent.split(', ');
        
    //         console.log(dataArray)
    //     });
    // },

    "concert-this": function () {
        axios.get(`https://rest.bandsintown.com/artists/` + args[1] + `/events?app_id=codingbootcamp`)
            .then(function (response) {
                // console.log(  response.data, Array.isArray(response.data))

                if (response.data && response.data.length) {
                    console.log(response.data[0].venue.name);
                    console.log(response.data[0].venue.city, response.data[0].venue.region);
                    console.log(response.data[0].datetime);

                } else {
                    console.log("No upcoming events found");

                }
            })
            .catch(function (error) {
                console.log("No upcoming events found");
            })
    },

    "spotify-this-song": () => {
        // console.log('2nd', spotifySecrets)

        var spotify = new Spotify({
            id: keys.spotify.id,
            secret: keys.spotify.secret
          });
           
          spotify
            .search({ type: 'track', query: args[1], limit: 1 })
            .then(function(response) {
                console.log(response.tracks.items[0].album.artists[0].name); //artist name
                console.log(args[1]); //song name
                console.log(response.tracks.items[0].album.name); //album name
                console.log(response.tracks.items[0].album.external_urls.spotify); //album name
                // console.log(response.tracks.items[0].album.artists);
            })
            .catch(function(err) {
              console.log(err);
            });

    },

    "movie-this": function () {
        axios.get(`http://omdbapi.com/?t=` + args[1] + `&plot=short&apikey=trilogy`).then(function(response){
        console.log(response.data.Title);
        console.log(response.data.Year);  // year movie came out
        console.log(response.data.imdbRating);  // imdb rating
        console.log(response.data.Ratings[0].Value);  // rotten tomatoes
        console.log(response.data.Country);  // country where movie produced
        console.log(response.data.Language);  // launguage
        console.log(response.data.Plot);  // plot movie
        console.log(response.data.Actors);  // actors
});
    }

}


//calls function above
listOfFunctions[args[0]]();



