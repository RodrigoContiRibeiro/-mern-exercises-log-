const router = require("express").Router();
let User = require("../models/userModel.js");

router.route("/").get((req, res) => {
  //localhost:5000/users/
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`Erro: ${err}`));
});

router.route("/add").post((req, res) => {
  //localhost:5000/users/add
  const username = req.body.username;
  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("Usuário salvo"))
    .catch((err) => res.status(400).json(`Erro: ${err}`));
});

router.route("/:id").get((req, res) => {
  //localhost:5000/users/:id
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json(`Erro: ${err}`));
});

router.route("/:id").delete((req, res) => {
  //localhost:5000/users/:i
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("Usuário deletado"))
    .catch((err) => res.status(400).json(`Erro: ${err}`));
});

module.exports = router;
