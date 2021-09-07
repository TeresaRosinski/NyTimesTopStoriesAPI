const key = "L6hLw10R0bLGztF9APZn68K21ZWbFlAC";

//Arts Search Form Code
const artsSearchForm = document.querySelector("#artsSearchForm");

artsSearchForm.addEventListener("submit", async function(e){
  e.preventDefault();

  const searchTerm = artsSearchForm.elements.query.value.toUpperCase();
  
  const res = await axios.get(
		`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${key}`
	);
 
  const arrayResults = res.data.results;
  const filteredRes = arrayResults.filter(result => result.title.toUpperCase().includes(searchTerm))
  console.log('filtered ', filteredRes);
  makeCards(filteredRes, 'arts');
  })
  

//Function to dynamically create event listeners for specific search forms base don section name
//API CALL -- > Retrieves articles according to specific topic
async function grabArticles(key, topic) {
	const res = await axios.get(
		`https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=${key}`
	);
	let arrayResults = res.data.results;

	//makes cards according to specific topic
	makeCards(arrayResults, `${topic}`);
}

function makeCards(results, topic) {
	let section = document.body.querySelector(`#${topic}`);
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

/*
grabArticles(key, topicsArray[0]);


grabArticles(key, topicsArray[1]);
grabArticles(key, topicsArray[2]);
*/