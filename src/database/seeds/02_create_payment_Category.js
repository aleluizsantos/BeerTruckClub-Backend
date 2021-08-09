exports.seed = async function (knex) {
  await knex("payment").insert([
    { type: "Dinheiro", active: 1, image: "icoCast.png" },
    { type: "Visa", active: 1, image: "icoVisa.png" },
    { type: "Master Card", active: 1, image: "icoMast.png" },
    { type: "Elo", active: 1, image: "icoElo.png" },
    { type: "American Express", active: 1, image: "icoAEx.png" },
  ]);

  await knex("category").insert([
    { name: "Smash", image: "c1.jpg", categoryVisible: true },
    { name: "Hambúrgueres", image: "c2.jpg", categoryVisible: true },
    { name: "Porções", image: "c3.jpg", categoryVisible: true },
    { name: "Bebidas", image: "c4.jpg", categoryVisible: true },
  ]);
};
