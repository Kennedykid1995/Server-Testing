const express = require("express");
const server = express();
server.use(express.json());

let movies = [
  { id: 0, film: "Romy and Michele Highschool Reunion" },
  { id: 1, film: "Halloween" }
];

server.get("/movies", (req, res) => {
  res.status(200).json(movies);
});
server.post("/movies/:id", (req, res) => {
  const { film } = req.body;
  const id = movies.length;
  movies.push({id, film});
  res.status(201).json(movies);
});
server.delete("/movies/:title", (req, res) => {
    const {id} = req.params; 
    if(movies.find(movie => Number(movie.id) === Number(id))){
        movies = movies.filter(movie => {
            return Number(movie.id) !== Number(id); 
        });
        res.status(201).json(movies);
    }else{
        res.status(404).json({message: "id does not exist"})
    }
});
module.exports = server;
