const key = "L6hLw10R0bLGztF9APZn68K21ZWbFlAC";
const topic = "arts"

async function grabArticles(key, topic){
  const res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=${key}`);

  return res.data.results;
  console.log(res.data.results);
}
  

  const artsArray = grabArticles(key, topic);
  console.log(artsArray);