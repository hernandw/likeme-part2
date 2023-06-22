const  pool  = require("./conexion");
/* const { guardarPost, getPosts, likePost, deletePost } = require("./consultas"); */

const getPosts = async () => {
  const result = await pool.query("SELECT * FROM posts");
  console.log(result.rows)
  return result.rows;
};

const guardarPost = async (post) => {
  const values = Object.values(post);
  const consulta = {
    text: "INSERT INTO posts (id, titulo, img, descripcion, likes ) values (DEFAULT, $1, $2, $3, 0) RETURNING *",
    values,
  };
  const result = await pool.query(consulta);
  console.log(result);
  return result.rows[0];
};

const likePost = async (id) => {
  const result = await pool.query(
    "UPDATE posts SET likes = likes + 1 WHERE id = $1",
    [id]
  );
  return result.rows;
};

const deletePost = async (id) => {
  const result = await pool.query("DELETE FROM posts WHERE id = $1", [id]);
  return result.rows;
};


module.exports = { getPosts, guardarPost, likePost, deletePost };
