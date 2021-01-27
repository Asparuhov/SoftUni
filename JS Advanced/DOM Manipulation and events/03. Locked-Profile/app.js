function lockedProfile() {
  //User 1
  let user1 = document.getElementsByClassName("profile")[0];
    let user1Button = user1.getElementsByTagName("button")[0];
    console.log(user1);
    if (user1Button.textContent === 'Show more') {
        user1Button.addEventListener("click", () => {
            user1.getElementsByTagName("div")[0].style.display = "inline";
            user1Button.textContent = "Hide it";
        });
    }
    if (user1Button.textContent === 'Hide it') {
        console.log('clicked');
        user1Button.addEventListener("click", () => {
            user1.getElementsByTagName("div")[0].style.display = "";
            user1Button.textContent = "Show more";
        });
    }
    console.log(user1Button.textContent);
  //User 2
  let user2 = document.getElementsByClassName("profile")[1];
  let user2Button = user2.getElementsByTagName("button")[0];
  user2Button.addEventListener("click", () => {
    user2.getElementsByTagName("div")[0].style.display = "inline";
  });
  //User 3
  let user3 = document.getElementsByClassName("profile")[2];
    let user3Button = user3.getElementsByTagName("button")[0];
    let clicked3 = false;
  user3Button.addEventListener("click", () => {
    user3.getElementsByTagName("div")[0].style.display = "inline";
  });
}
