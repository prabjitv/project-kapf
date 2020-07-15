const db = require("../../models");
const router = require("express").Router();
const isAuthenticated = require("../../config/middleware/isAuthenticated");

/**
 * User Read - All
 */
router.get("/", isAuthenticated, function (req, res) {
  db.Dislike.findAll(req.query)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

/**
 * User Read - One
 */
router.get("/:id", isAuthenticated, function (req, res) {
  db.Dislike.findByPk(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

/**
 * User - Create
 * Notice how we are using the 'withPassword' scope.
 * This allows for us to modify a user's password, as defined in the User model
 */
router.post("/", function (req, res) {
  db.Dislike.scope("withPassword")
    .create(req.body)
    .then(dbModel => {
      db.Child.findByPk(req.user.id).then(
        child => {
          dbModel.addChild(child).then(dislike => res.json(dislike));
        })})
    .catch(err => res.status(422).json(err));
});

/**
 * User - Update
 */
router.put("/:id", isAuthenticated, function (req, res) {
  db.Dislike.update(req.body, { where: { id: req.params.id } })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

/** 
 * User - Delete
 */
router.delete("/:id", isAuthenticated, function (req, res) {
  db.Dislike.destroy({ where: { id: req.params.id } })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
