exports.seed = async function (knex) {
  await knex("additional").insert([
    { description: "Azeitona", price: 1 },
    { description: "Requeijão Cremoso", price: 1 },
    { description: "Ovo", price: 1 },
    { description: "Milho Verde", price: 1 },
    { description: "Linguiça calabresa", price: 2 },
    { description: "Filé de Frango", price: 2 },
    { description: "Cebola", price: 1 },
    { description: "Batata palha", price: 1 },
    { description: "Bacon", price: 4 },
    { description: "Cheder", price: 2 },
  ]);
};
