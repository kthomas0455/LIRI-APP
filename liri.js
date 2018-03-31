require("dotenv").config();

var keys = require('./keys.js');
var Twitter = require('twitter')
var inquirer = require('inquirer')
var Spotify = require('node-spotify-api')
var spotify = new Spotify(keys.spotify);
var user = new Twitter(keys.twitter);


if (process.argv[2] == "my-tweets") {
  viewtweets();
}

if (process.argv[2] == "spotify-this-song") {
  getSong();
}

if (process.argv[2] == "movie-this") {
  getMovie();
}

function viewtweets() {
    var rules = { screen_name: 'ihatetwitter99', count: 20};
    user.get('statuses/user_timeline', rules, function (err, tweets, response) {
        if (!err){
            tweets.forEach(element => {
                console.log('-------------')
                console.log(element.text)
                console.log('-------------')
            });
        }
    })
 } 

 function getSong(searchType, songQuery) {
     var kind = searchType
     var search = songQuery
     spotify.search({
         type: kind,
         query: search,
         limit: 1,
        }, function(err,data){
          if(err){
              return console.log('Error occured: ' + err)
          }
          console.log('-------------')
          console.log('Title: ' + data.tracks.items[0].name)
          console.log('Artist: ' + data.tracks.items[0].artists[0].name) 
          console.log('Album Name: ' + data.tracks.items[0].album.name)   
          console.log('Preview URL' + data.tracks.items[0].preview_url)
          console.log('-------------') 
        })
 }

  function getMovie(MovieChoice){

  var movieTitle = MovieChoice || process.argv[3] || "Mr. Nobody";

  request("http://www.omdbapi.com/?apikey=trilogy&t=" + movieTitle, function(error, response, body) {

  if(!error && response.statusCode === 200) {
    
  }

 I didnt have time to finish the OMDB movie portion of this homework. The instructions were very convoluted, confusing and with aa crazy amount of text. It took me quite some time just to decipher how to get the homewokr started. It was really frustrating.

if (process.argv[2] == "do-what-it-says") {

  fs.readFile("./random.txt", "utf8", function(error, data){
    if (error) throw error;

    data = data.split(",");

    switch(data[0]) {
      case "my-tweets":
        viewtweets();
        break;
      case "spotify-this-song":
        getSong(data[1]);
        break;
      case "movie-this":
        getMovie(data[1]);
        break;
    }
  });
}
