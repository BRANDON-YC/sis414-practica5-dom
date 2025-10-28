// main.ts — Práctica 5 DOM
const $ = <T extends Element>(sel: string) => document.querySelector<T>(sel)!;
const result = $("#result");
const searchBtn = $("#searchBtn") as HTMLButtonElement;
const clearBtn = $("#clearBtn") as HTMLButtonElement;
const input = $("#pokemonName") as HTMLInputElement;

// 1) Manejo de eventos
searchBtn.addEventListener("click", async () => {
  const name = input.value.trim().toLowerCase();
  if (!name) return showMessage("Ingrese un nombre.");
  try {
    showMessage("Buscando...");
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(r => {
      if (!r.ok) throw new Error("No encontrado");
      return r.json();
    });
    // 2) Creación dinámica de elementos (DOM)
    const card = document.createElement("div");
    card.className = "pokemon";
    const img = document.createElement("img");
    img.alt = data.name;
    img.src = data.sprites.front_default;
    const info = document.createElement("div");
    // 3) textContent vs innerHTML
    const title = document.createElement("h3");
    title.textContent = data.name; // seguro contra inyección
    const meta = document.createElement("p");
    meta.innerHTML = `<strong>Altura:</strong> ${data.height} • <strong>Peso:</strong> ${data.weight}`; // HTML intencional
    info.append(title, meta);
    card.append(img, info);
    result.replaceChildren(card);
  } catch (e) {
    showMessage("No se encontró el Pokémon");
  }
});

clearBtn.addEventListener("click", () => {
  input.value = "";
  result.textContent = ""; // limpia seguro
});

function showMessage(msg: string) {
  const p = document.createElement("p");
  p.textContent = msg;
  result.replaceChildren(p);
}

// 4) Demo textContent vs innerHTML
$("#demoTextContent").addEventListener("click", () => {
  $("#demoBox").textContent = "<b>Esto es texto literal</b> (seguro)";
});

$("#demoInnerHTML").addEventListener("click", () => {
  $("#demoBox").innerHTML = "<b>Esto se renderiza en negrita</b> (cuidado con entradas del usuario)";
});
