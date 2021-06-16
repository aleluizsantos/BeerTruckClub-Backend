exports.seed = async function (knex) {
  await knex("payment").insert([
    { type: "Dinheiro", active: 1 },
    { type: "Cartão de Crédito", active: 1 },
    { type: "Cartão de Débito", active: 1 },
    { type: "Cartão SODEX", active: 1 },
    { type: "Cartão VR", active: 0 },
    { type: "Cheque", active: 0 },
  ]);

  await knex("category").insert([
    { name: "Lanches", image: "1.jpg", categoryVisible: true },
    { name: "Bebidas", image: "2.jpg", categoryVisible: true },
    { name: "Pasteis", image: "3.jpg", categoryVisible: true },
    { name: "Porções", image: "4.jpg", categoryVisible: true },
  ]);
};
