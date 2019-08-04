# liri-node-app

## Requirements
  * Node.js app dependant on user input from the command line
  * Integrated with Bands in Town Artist Events, Spotify, and OMDb APIs
  * Use API calls and parse through returned JSON objects, outputting them in a specified format
  * Read commands and queries from file


## Technologies Used
  * Node.js
  * JavaScript
  * Bands in Town Artist Events (via request npm module)
  * Spotify API (via spotify npm module)
  * OMDb API (via request npm module)


## Code Explanation
* Authentication keys for Spotify are stored in "keys.js", then its contents are exported to the main "liri.js" file

* 4 main functions, which depend on user types: (1) Bands in Town Artist Events search events by artist, (2) Spotify lookup for a song, (3) OMDb lookup for a movie, and (4) read command and query from another file

* The program makes a request to the Bands in Town Artist Event API, the return JSON object that includes a large array, the first (most upcoming) event is selected as the output
![concert image](https://raw.githubusercontent.com/gundmr/liri-node-app/master/concert.png)


* The program also makes a request to the Spotify API, and we get back a JSON object that includes everything we need (artist(s), song, preview link, and album)
![spotify image](/images/spotify.png)

* The program also makes a HTTP request to the OMDb API using the request NPM module, this returns a JSON object that includes our return output (title, year, IMDb rating, language, etc.)
![OMDB image](/images/movie.png)

* The program also reads from a file called "random.text" and executes the command and query found there using string and array methods
![txt image](/images/readThis.png)

