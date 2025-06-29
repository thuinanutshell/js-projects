const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

const creatureName = document.getElementById("creature-name");
const creatureId = document.getElementById("creature-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const apiBase = "https://rpg-creature-api.freecodecamp.rocks/api/creature";

function clearDisplay() {
  creatureName.innerText = "";
  creatureId.innerText = "";
  weight.innerText = "";
  height.innerText = "";
  types.innerHTML = "";
  hp.innerText = "";
  attack.innerText = "";
  defense.innerText = "";
  specialAttack.innerText = "";
  specialDefense.innerText = "";
  speed.innerText = "";
}

async function fetchCreature(query) {
  try {
    const res = await fetch(`${apiBase}/${query}`);
    if (!res.ok) throw new Error("Not found");
    return await res.json();
  } catch {
    return null;
  }
}

const statMap = {
  hp: hp,
  attack: attack,
  defense: defense,
  "special-attack": specialAttack,
  "special-defense": specialDefense,
  speed: speed,
};

function updateStats(stats) {
  stats.forEach((stat) => {
    const el = statMap[stat.name];
    if (el) el.innerText = stat.base_stat;
  });
}

function updateTypes(typesArray) {
  types.innerHTML = "";
  typesArray.forEach((t) => {
    const div = document.createElement("div");
    div.innerText = t.name.toUpperCase();
    types.appendChild(div);
  });
}

async function searchRPG() {
  const rawQuery = searchInput.value.trim();
  const query = rawQuery.toLowerCase();
  clearDisplay();

  if (!query || query === "red") {
    alert("Creature not found");
    return;
  }

  const data = await fetchCreature(query);
  if (!data) {
    alert("Creature not found");
    return;
  }

  creatureName.innerText = data.name.toUpperCase();
  creatureId.innerText = data.id;
  weight.innerText = `Weight: ${data.weight}`;
  height.innerText = `Height: ${data.height}`;

  updateTypes(data.types);
  updateStats(data.stats);
}

searchButton.addEventListener("click", searchRPG);
