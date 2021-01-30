function solve() {
  let openDiv = document.querySelectorAll("section")[1];
  let openButton = document.getElementById("add");
  openButton.addEventListener("click", (e) => {
    e.target.type = "button";
    const task = document.getElementById("task").value;
    const desc = document.getElementById("description").value;
    const date = document.getElementById("date").value;
    const createArticle = () => {
      let passedTask = task;
      let passedDesc = desc;
      let passedDate = date;
      let newArticle = document.createElement("article");
      //h3 insert
      let h3 = document.createElement("h3");
      let h3Text = document.createTextNode(task);
      h3.appendChild(h3Text);
      newArticle.appendChild(h3);
      //p insert
      let p = document.createElement("p");
      let pText = document.createTextNode(`Description: ${desc}`);
      p.appendChild(pText);
      newArticle.appendChild(p);
      //date insert
      let p1 = document.createElement("p");
      let p1Text = document.createTextNode(`Due Date: ${date}`);
      p1.appendChild(p1Text);
      newArticle.appendChild(p1);
      //insert div
      let div = document.createElement("div");
      div.classList.add("flex");
      //create and insert button into div
      let button1 = document.createElement("button");
      button1.classList.add("red");
      button1.textContent = "Delete";
      button1.addEventListener("click", (e) => {
        e.target.type = "button";
        newArticle.remove();
      });
      div.appendChild(button1);
      let button2 = document.createElement("button");
      button2.classList.add("green");
      button2.textContent = "Start";
      button2.addEventListener("click", (e) => {
        let task1 = passedTask;
        let desc1 = passedDesc;
        let date1 = passedDate;
        e.target.type = "button";
        let progress = document.getElementById("in-progress");
        console.log(progress);
        let article1 = document.createElement("article");
        //insert h3
        let h3 = document.createElement("h3");
        let h3Text = document.createTextNode(passedTask);
        h3.appendChild(h3Text);
        article1.appendChild(h3);
        //insert p
        let p = document.createElement("p");
        let pText = document.createTextNode(`Description: ${passedDesc}`);
        p.appendChild(pText);
        article1.appendChild(p);
        //date insert
        let p1 = document.createElement("p");
        let p1Text = document.createTextNode(`Due Date: ${passedDate}`);
        p1.appendChild(p1Text);
        article1.appendChild(p1);
        //insert div
        let div1 = document.createElement("div");
        div1.classList.add("flex");
        //create and insert button into div
        let button1 = document.createElement("button");
        button1.classList.add("red");
        button1.textContent = "Delete";
        button1.addEventListener("click", (e) => {
          e.target.type = "button";
          article1.remove();
        });
        div1.appendChild(button1);
        let button2 = document.createElement("button");
        button2.classList.add("orange");
        button2.textContent = "Finish";
        button2.addEventListener("click", (e) => {
          e.target.type = "button";
          let modifiedArticle = article1;
          let div = modifiedArticle.getElementsByTagName("div")[0];
          modifiedArticle.removeChild(div);
          let complete = document.querySelectorAll("section")[3];
          let div1 = complete.querySelectorAll("div")[1];
          div1.appendChild(modifiedArticle);
        });
        div1.appendChild(button2);
        article1.appendChild(div1);
        progress.appendChild(article1);
        newArticle.remove();
      });
      div.appendChild(button2);
      newArticle.appendChild(div);
      return newArticle;
    };
    if (desc && task && date) {
      openDiv.querySelectorAll("div")[1].appendChild(createArticle());
    }
  });
}
