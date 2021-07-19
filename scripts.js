const key = "L6hLw10R0bLGztF9APZn68K21ZWbFlAC";
const topic = "arts";

//API CALL -- > Retrieves articles according to specific topic
async function grabArticles(key, topic) {
  const res = await axios.get(
    `https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=${key}`
  );
  let arrayResults = res.data.results;
  //makes cards according to specific topic
  makeCards(arrayResults, `${topic}`);
}

//Makes title for each topic -- successfully creates list of all topics
function makeSections(topicList) {
  allStoriesContainer = document.body.querySelector("#newsStories");
  for (let topic of topicList) {
    let topicContainer = document.createElement("DIV");
    topicContainer.id = `${topic}`;
    const topicTitle = document.createElement("P");
    topicTitle.className = `${topic}Title`;
    topicTitle.innerHTML = `${topic}`;
    topicContainer.appendChild(topicTitle);
    allStoriesContainer.appendChild(topicContainer);
  }
}

function makeCards(results, topic) {
  console.log("topic:", topic);
  console.log("results:", results);
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
grabArticles(key, topicsArray[0]);
grabArticles(key, topicsArray[1]);
grabArticles(key, topicsArray[2]);
