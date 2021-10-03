import fetch from 'node-fetch'
globalThis.fetch = fetch
let myUrl="game of thrones"
encodeURIComponent(myUrl)
fetch("https://imdb8.p.rapidapi.com/auto-complete?q=" + encodeURIComponent(myUrl), {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": "afd9d1be42msh1b665f8ce9715dep1ee6dfjsn25764f4088b8"
	}
})
.then(response => response.json())
.then(data => console.log(data))