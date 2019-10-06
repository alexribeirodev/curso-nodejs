const router = require("express").Router();

const UserController = require("./controllers/UserController");
const PostController = require("./controllers/PostController");

router.get("/", (req, res) => {
  res.json({
    message: "Bem Vindo!"
  });
});

//Users routes
router.get("/users", UserController.index);
router.post("/users", UserController.store);
router.get("/users/:id", UserController.show);
router.put("/users/:id", UserController.update);
router.delete("/users/:id", UserController.delete);

//Posts routes
router.get("/posts", PostController.index);
router.post("/posts", PostController.store);
router.get("/posts/:id", PostController.show);
router.put("/posts/:id", PostController.update);
router.delete("/posts/:id", PostController.delete);

module.exports = router;
