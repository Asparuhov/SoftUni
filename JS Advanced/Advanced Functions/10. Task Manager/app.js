function solve() {
  let openDiv = document.querySelectorAll("section")[1];
  let openButton = document.getElementById("add");
  openButton.addEventListener("click", (e) => {
    e.target.type = "button";
    const task = document.getElementById("task").value;
    const desc = document.getElementById("description").value;
    const date = document.getElementById("date").value;
    const createArticle = () => {
      let newArticle = document.createElement("article");
      //h3 insert
      let h3 = document.createElement("h3");
      let h3Text = document.createTextNode(task);
      h3.appendChild(h3Text);
      newArticle.appendChild(h3);
      //p insert
      let p = document.createElement("p");
      let pText = document.createTextNode(desc);
      p.appendChild(pText);
      newArticle.appendChild(p);
      //date insert
      let p1 = document.createElement("p");
      let p1Text = document.createTextNode(date);
      p1.appendChild(p1Text);
      newArticle.appendChild(p1);
      //insert div
      let div = document.createElement("div");
      div.classList.add("flex");
      //create and insert button into div
      let button1 = document.createElement("button");
      button1.classList.add("red");
        button1.textContent = "Delete";
        button1.addEventListener('click', (e) => {
            e.target.type = 'button';
            newArticle.remove();
      })
      div.appendChild(button1);
      let button2 = document.createElement("button");
      button2.classList.add("green");
      button2.textContent = "Start";
      div.appendChild(button2);
      newArticle.appendChild(div);
      return newArticle;
    };
    openDiv.querySelectorAll("div")[1].appendChild(createArticle());
  });
}
