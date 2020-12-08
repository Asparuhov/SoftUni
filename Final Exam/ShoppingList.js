function solve(inputArr){
    let copiedArr = [...inputArr];
    let list = copiedArr.shift().split("!");
    function commander(command){
        let element = command.split(" ");

        if(element[0] == 'Urgent' && list.includes(element[1] == false)){
            list.unshift(element[1]);
        }
        else if(element[0] == 'Unnecessary' && list.includes(element[1]) == true){
            let index = list.indexOf(element[1]);
            list.splice(index, 1);
        }
        else if(element[0] == 'Correct' && list.includes(element[1]) == true){
          list.forEach(function(item, i) { if (item == element[1]) list[i] = element[2]; });
        }
        else if(element[0] == 'Rearrange' && list.includes(element[1]) == true){
            let index1 = list.indexOf(element[1]);
            let spliced = list.splice(index1,1);
            list.push(spliced);
        }
        else if(element[0] == "Go"){
            return list.join(', ');
        }
    }
    console.log(copiedArr.map(el => commander(el)).filter(el => el != undefined).join(', '));
  }