function solve() {
  let name = document.getElementsByName("lecture-name");
  let date = document.getElementsByName("lecture-date");
  let module = document.getElementsByName('lecture-module');
  if (
    !date &&
    !name &&
    !mnodule &&
    date !== date.defaultValue &&
    name !== name.defaultValue &&
    module !== module.defaultValue 
  ) {
      let div = document.getElementsByClassName('modules');
      let newDiv = document.createElement('div');
      newDiv.classList.add('module');
      let h3 = document.createElement('h3');
      h3.textContent = module;
      newDiv.appendChild(h3);
      //div.appendChild(newDiv);
  }
}
