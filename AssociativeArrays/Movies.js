function solve(commands) {
    const movies = {};
  
    commands.forEach((command) => {
      if (command.slice(0, 9) === "addMovie ") {
        const name = command.slice(9);
        movies[name]={name:name};
      }
  
      if (command.indexOf(" directedBy ") > -1) {
        const [name, director] = command.split(" directedBy ");
        if (movies[name]) { 
          // This will only be true if an 'addMovie' has added this key to 'movies'.
          movies[name].director = director;
        }
      }
  
      if (command.indexOf(" onDate ") > -1) {
        const [name, date] = command.split(" onDate ");
        if (movies[name]) {
          movies[name].date = date;
        }
      }
    });
  //sort
    Object.keys(movies).forEach(name=>{
      const movie=movies[name];
      if(movie && movie.director && movie.date){
        console.log(JSON.stringify(movie))
      }
    })
  }