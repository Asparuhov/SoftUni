function getArticleGenerator(articles) {
  let currentArticle;

  function getNext() {
    if (articles.length > 0) {
      currentArticle = articles.shift();
      let article = document.createElement("article");
      article.textContent = currentArticle;
      document.getElementById("content").appendChild(article);
    }
  }
  return getNext;
}
