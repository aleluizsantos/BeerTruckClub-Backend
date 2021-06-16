const express = require("express");
const connection = require("../../database/connection");
const authMiddleware = require("../middleware/auth");
const Yup = require("yup");

const router = express.Router();

router.use(authMiddleware);

router.get("/", async (req, res) => {
  try {
    const additional = await connection("additional")
      .select("*")
      .orderBy("description", "asc");
    return res.json(additional);
  } catch (error) {
    return res.json({ error: error.message });
  }
});

router.post("/create", async (req, res) => {
  const { description, price } = req.body;
  const schema = Yup.object().shape({
    description: Yup.string().required(),
    price: Yup.number().required(),
  });

  const additional = { description, price };

  if (!schema.isValidSync(additional))
    return res.json({ error: "Validation data" });

  const insertId = await connection("additional").insert(additional, "id");

  return res.json({ id: insertId[0], description, price });
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const isDelete = await connection("additional").where("id", "=", id).delete();
  return res.json({
    success: Boolean(isDelete),
    message: isDelete ? "Item foi excluído." : "Falha ao excluir item.",
  });
});

router.put("/upgrade/:id", async (req, res) => {
  const { id } = req.params;
  const { description, price } = req.body;

  const schema = Yup.object().shape({
    description: Yup.string().required(),
    price: Yup.number().required(),
  });

  const additional = { description, price };

  if (!schema.isValidSync(additional))
    return res.json({ error: "Validation data" });

  const isUpdate = await connection("additional")
    .where("id", "=", id)
    .update(additional);

  return res.json({
    success: Boolean(isUpdate),
    message: isUpdate ? "Item foi atualizado." : "Falha ao atualizar o item.",
  });
});

module.exports = (app) => app.use("/additional", router);
