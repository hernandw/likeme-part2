const express = require("express");

const router = express.Router();
const { getPosts, guardarPost, likePost, deletePost } = require("./consultas");

router.get("/", (req, res) => {
  res.send("Servidor Activo en express");
});

router.post("/posts", async (req, res) => {
  try {
    const post = req.body;
    const result = await guardarPost(post);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/posts", async (req, res) => {
  try {
    const posts = await getPosts();
    res.send(posts);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/posts/like/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await likePost(id);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});


router.delete('/posts/:id', async (req, res) => {
try {
  const { id } = req.params;
  const result = await deletePost(id);
  res.send(result)
} catch (error) {
  console.log(error)
}

})

module.exports = router;
