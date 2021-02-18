function solution() {
  let button = document
    .getElementsByClassName("card")[0]
    .getElementsByTagName("button")[0];

  button.addEventListener("click", () => {
    let list = document
      .getElementsByClassName("card")[1]
      .getElementsByTagName("ul")[0];
    let li = document.createElement("li");
    let gift = document
      .getElementsByClassName("card")[0]
      .getElementsByTagName("input")[0].value;
    li.classList.add("gift");
    li.textContent = gift;
    let button1 = document.createElement("button");
    button1.setAttribute("id", "sendButton");
    button1.textContent = "Send";
    let button2 = document.createElement("button");
    button2.setAttribute("id", "discardButton");
    button2.textContent = "Discard";
    button1.addEventListener("click", () => {
      let list1 = document
        .getElementsByClassName("card")[2]
        .getElementsByTagName("ul")[0];
      let li1 = document.createElement("li");
      li1.textContent = gift;
      li1.classList.add("gift");
      list1.appendChild(li1);
      li.remove();
    });
    button2.addEventListener("click", () => {
      let list2 = document
        .getElementsByClassName("card")[3]
        .getElementsByTagName("ul")[0];
      let li2 = document.createElement("li");
      li2.textContent = gift;
      li2.classList.add("gift");
      list2.appendChild(li2);
      li.remove();
    });
    li.appendChild(button1);
    li.appendChild(button2);
    list.appendChild(li);
  });
}
