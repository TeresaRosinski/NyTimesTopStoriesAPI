const key = "L6hLw10R0bLGztF9APZn68K21ZWbFlAC";
const topic = "arts";

//API CALL -- > TO RETRIEVE ARTICLES AND STORE THEM ACCORDING TO TOPIC
async function grabArticles(key, topic) {
  const res = await axios.get(
    `https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=${key}`
  );
  let arrayResults = res.data.results;
  console.log(arrayResults);
  makeCards(arrayResults, topic);
}

//Makes title for each topic -- successfully creates list of all topics
function makeSections(topicList) {
  allStoriesContainer = document.body.querySelector("#newsStories");
  for (let topic of topicList) {
    let topicContainer = document.createElement("DIV");
    topicContainer.className = `${topic}`;
    const topicTitle = document.createElement("P");
    topicTitle.innerHTML = `${topic}`;
    topicContainer.appendChild(topicTitle);
    allStoriesContainer.appendChild(topicContainer);
  }
}


function makeCards(results, topic) {
  console.log(`${topic}`);
  let section = document.querySelector(`#${topic}`)
  for (let article of results) {
    const card = document.createElement("A");
    const textBox = document.createElement("DIV");
    const img = document.createElement("IMG");
    const title = document.createElement("P");
    const authors = document.createElement("P");
    title.innerHTML = article.abstract;
    authors.innerHTML = article.byline;
    img.src = article.multimedia[4].url;
    card.className = "card";
    textBox.className = "textBox";
    textBox.appendChild(title);
    textBox.appendChild(authors);
    card.appendChild(img);
    card.appendChild(textBox);

    section.appendChild(card);
  }
  allStoriesContainer.appendChild(topicContainer);
}

const topicsArray = [
  "arts",
  "automobiles",
  "books",
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
  "world",
];
makeSections(topicsArray);
const artsArticles = grabArticles(key, 'arts');
console.log('array', artsArticles);

