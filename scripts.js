const key = "L6hLw10R0bLGztF9APZn68K21ZWbFlAC";

//Arts Search Form Code
const artsSearchForm = document.querySelector("#artsSearchForm");

artsSearchForm.addEventListener("submit", async function (e) {
	e.preventDefault();
	const searchTerm = artsSearchForm.elements.query.value.toUpperCase();
	const searchInput = document.querySelector('#searchArts');
	const res = await axios.get(
		`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${key}`
	);
	const arrayResults = res.data.results;
	const filteredRes = arrayResults.filter((result) =>
		result.title.toUpperCase().includes(searchTerm)
	);

	
		//if the searched results returned empty - return a card that says, search results for 'searchTerm' returned no resutls - specific to arts section and arts design
	console.log('filt length', filteredRes.length);	
	if(filteredRes.length === 0) 
		{
			makeNoResCard(searchTerm);
			console.log("ran");
		} 

	makeCards(filteredRes, "arts");
	searchInput.value = " ";
});

//Function to dynamically create event listeners for specific search forms base don section name
//API CALL -- > Retrieves articles according to specific topic
async function grabArticles(key, topic) {

	//async api call
	const res = await axios.get(
		`https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=${key}`
	);

	// creating an array from returned API call
	let arrayResults = res.data.results;
	
	//makes cards according to specific topic
	makeCards(arrayResults, `${topic}`);
}


//Creates success cards
function makeCards(results, topic) {
	let section = document.body.querySelector(`#${topic}ResultsAll`);
	//clears results that are already populating the section - important for search feature or card are added onto the previous results
	section.innerHTML = "";
	for (let article of results) {
		const card = document.createElement("A");
		const textBox = document.createElement("DIV");
		const img = document.createElement("IMG");
		const title = document.createElement("P");
		const authors = document.createElement("P");
		title.innerHTML = article.title;
		authors.innerHTML = article.byline;
		img.src = article.multimedia[4].url;
		card.href = article.short_url;
		card.className = "card";
		textBox.className = "textBox";
		title.className = "title";
		textBox.appendChild(title);
		textBox.appendChild(authors);
		card.appendChild(img);
		card.appendChild(textBox);
		section.appendChild(card);
	}
}
function makeNoResCard (searchTerm) {
	const section = document.body.querySelector('#artsResultsAll');
	const card = document.createElement("DIV");
	const text = document.createElement("P");
	text.innerHTML = `There are no current results for ${searchTerm}`;
	text.className = "title";
	card.className = "card";
	card.appendChild(text);
	section.appendChild(card);
	console.log(card);
	console.log(section);
}

const topicsArray = [
	"arts",
	"automobiles",
	"books",
	/*
  "business",
  "fashion",
  "food",
  "health",
  "home",
  "insider",
  "magazine",
  "movies",
  "nyregion",
  "obituaries",
  "opinion",
  "politics",
  "realestate",
  "science",
  "sports",
  "sundayreview",
  "technology",
  "theater",
  "t-magazine",
  "travel",
  "upshot",
  "us",
  "world", */
];

grabArticles(key, topicsArray[0]);

//grabArticles(key, topicsArray[1]);
//grabArticles(key, topicsArray[2]);
