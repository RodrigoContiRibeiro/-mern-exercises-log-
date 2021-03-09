const router = require("express").Router();
let Exercise = require("../models/exerciseModel.js");

router.route("/").get((req, res) => {
  //localhost:5000/exercises/
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json(`Erro: ${err}`));
});

router.route("/add").post((req, res) => {
  //localhost:5000/exercises/add
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  newExercise
    .save()
    .then(() => res.json("Exercício Adicionado!"))
    .catch((err) => res.status(400).json(`Erro: ${err}`));
});

router.route("/:id").get((req, res) => {
  //localhost:5000/exercises/:id
  Exercise.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json(`Erro: ${err}`));
});

router.route("/:id").delete((req, res) => {
  //localhost:5000/exercises/:id
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercício Deletado"))
    .catch((err) => res.status(400).json(`Erro: ${err}`));
});

router.route("/update/:id").post((req, res) => {
  //localhost:5000/exercises/update/:id
  Exercise.findById(req.params.id)
    .then((exercise) => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise.save()
        .then(() => res.json("Exercício Atualizado"))
        .catch((err) => res.status(400).json(`Erro: ${err}`));
    })
    .catch((err) => res.status(400).json(`Erro: ${err}`));
});

module.exports = router;
