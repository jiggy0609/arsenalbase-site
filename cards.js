const cards = [
  { id: "FQ06-001", name: "ガンダム", rarity: "C" },
  { id: "FQ06-070", name: "キララ", rarity: "P" },
  { id: "FQ06-080", name: "νガンダム", rarity: "SEC" }
];

const table = document.getElementById("card-table");

cards.forEach(card => {
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${card.id}</td>
    <td>${card.name}</td>
    <td class="rarity-${card.rarity}">${card.rarity}</td>
  `;

  table.appendChild(tr);
});
