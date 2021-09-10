const key = "L6hLw10R0bLGztF9APZn68K21ZWbFlAC";

//Section query selectors
const artsSearchForm = document.querySelector("#artsSearchForm");
const automobilesSearchForm = document.querySelector("#automobilesSearchForm");
const bookssSearchForm = document.querySelector("#booksSearchForm");

//ARTS SECTION SEARCH
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
	makeCards(filteredRes, "arts", searchTerm);
	searchInput.value = " ";
});

//AUTOMOBILES SECTION SEARCH
automobilesSearchForm.addEventListener("submit", async function (e) {
	e.preventDefault();
	const searchTerm = automobilesSearchForm.elements.query.value.toUpperCase();
	const searchInput = document.querySelector('#searchAutomobiles');
	const res = await axios.get(
		`https://api.nytimes.com/svc/topstories/v2/automobiles.json?api-key=${key}`
	);
	const arrayResults = res.data.results;
	const filteredRes = arrayResults.filter((result) =>
		result.title.toUpperCase().includes(searchTerm)
	);
	makeCards(filteredRes, "automobiles", searchTerm);
	searchInput.value = " ";
});

//AUTOMOBILES SECTION SEARCH
bookssSearchForm.addEventListener("submit", async function (e) {
	e.preventDefault();
	const searchTerm = bookssSearchForm.elements.query.value.toUpperCase();
	const searchInput = document.querySelector('#searchbooks');
	const res = await axios.get(
		`https://api.nytimes.com/svc/topstories/v2/automobiles.json?api-key=${key}`
	);
	const arrayResults = res.data.results;
	const filteredRes = arrayResults.filter((result) =>
		result.title.toUpperCase().includes(searchTerm)
	);
	makeCards(filteredRes, "books", searchTerm);
	searchInput.value = " ";
});

async function grabArticles(key, topic) {
	const res = await axios.get(
		`https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=${key}`
	);
	let arrayResults = res.data.results;
	//makes cards according to specific topic
	makeCards(arrayResults, `${topic}`);
}

//Creates article cards
function makeCards(results, topic, searchTerm) {
	let section = document.body.querySelector(`#${topic}ResultsAll`);
	section.innerHTML = "";
	if (results.length === 0){
		const textBox = document.createElement("DIV");
		const title = document.createElement("P");
		textBox.className = 'noResCard';
		title.className = 'noRestitle';
		title.innerHTML = `No Results for ${searchTerm}`;
		textBox.appendChild(title);
		section.appendChild(textBox);
	}
	for (let article of results) {
		const card = document.createElement("A");
		const textBox = document.createElement("DIV");
		const img = document.createElement("IMG");
		const title = document.createElement("P");
		const authors = document.createElement("P");
		title.innerHTML = article.title;
		authors.innerHTML = article.byline;
		if(article.multimedia === null) {
			img.src = './noImg.png';
		} else {
			img.src = article.multimedia[4].url;
		}
		card.href = article.short_url;
		card.className = "card";
		textBox.className = "textBox";
		title.className = "title";
		textBox.appendChild(title);
		textBox.appendChild(authors);
		if(img ){
			card.appendChild(img);
		}
		
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

grabArticles(key, topicsArray[0]);
grabArticles(key, topicsArray[1]);
grabArticles(key, topicsArray[2]);
