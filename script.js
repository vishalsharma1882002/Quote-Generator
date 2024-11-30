let base_url = "https://api.quotable.io/random";
let quoteText = document.querySelector(".quote-text p");
let author = document.querySelector(".author p");
let reload = document.querySelector(".new-quote button");
let tweet = document.querySelector(".tweet button");
async function getQuotes(url) {
  const response = await fetch(base_url);
  const data = await response.json();
  console.log(data);
  quoteText.innerHTML = '"' + data.content + '"';
  author.innerHTML = "- " + data.author;
}

reload.addEventListener("click", () => {
  getQuotes(base_url);
});
getQuotes(base_url);
tweet.addEventListener("click", () => {
  window.open(
    `https://twitter.com/intent/tweet?text=${quoteText.innerHTML}-${author.innerHTML}`,
    `Tweet Window`,
    "width=600",
    "height=400"
  );
});
