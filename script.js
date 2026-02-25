const receptek = [
    { nev: "Palacsinta", hozzavalok: ["tojás","liszt","tej","cukor"] },
    { nev: "Rántotta", hozzavalok: ["tojás","sajt"] },
    { nev: "Sajtos paradicsomos omlett", hozzavalok: ["tojás","sajt","paradicsom"] },
    { nev: "Grízes tészta", hozzavalok: ["liszt","cukor","vaj"] },
    { nev: "Paradicsomos tészta", hozzavalok: ["liszt","paradicsom","sajt"] },
    { nev: "Sajtos melegszendvics", hozzavalok: ["sajt","vaj"] },
    { nev: "Túrós palacsinta", hozzavalok: ["tojás","liszt","tej","cukor","túró"] },
    { nev: "Csirkés rizs", hozzavalok: ["csirke","rizs","só"] },
    { nev: "Sült krumpli", hozzavalok: ["krumpli","só","olaj"] },
    { nev: "Rizses hús", hozzavalok: ["csirke","rizs","só","olaj"] },
    { nev: "Krumplipüré", hozzavalok: ["krumpli","vaj","tej","só"] },
    { nev: "Sajtos tészta", hozzavalok: ["liszt","sajt","vaj"] },
    { nev: "Tojásos nokedli", hozzavalok: ["tojás","liszt","só"] },
    { nev: "Bundás kenyér", hozzavalok: ["tojás","tej","só","olaj"] },
    { nev: "Tejeskávé", hozzavalok: ["tej","cukor"] },
    { nev: "Csirkepörkölt", hozzavalok: ["csirke","olaj","só","paradicsom"] },
    { nev: "Sajtos krumpli", hozzavalok: ["krumpli","sajt","vaj"] },
    { nev: "Paradicsomleves", hozzavalok: ["paradicsom","só","cukor"] },
    { nev: "Rizsfelfújt", hozzavalok: ["rizs","tej","cukor","tojás"] },
    { nev: "Túrós csusza", hozzavalok: ["liszt","túró","tejföl","só"] },
    { nev: "Sajtos omlett", hozzavalok: ["tojás","sajt","só"] }
];

function hozzavalokGeneralasa() {

    const osszesHozzavalo = new Set();

    receptek.forEach(recept => {
        recept.hozzavalok.forEach(h => osszesHozzavalo.add(h));
    });

    const listaDiv = document.getElementById("hozzavaloLista");

    [...osszesHozzavalo].sort().forEach(hozzavalo => {

        const label = document.createElement("label");

        label.innerHTML = `
            <input class="ingredient" type="checkbox" value="${hozzavalo}">
            ${hozzavalo.charAt(0).toUpperCase() + hozzavalo.slice(1)}
        `;

        listaDiv.appendChild(label);
    });
}

function keres() {

    const kivalasztott = Array.from(document.querySelectorAll('.ingredient:checked'))
        .map(i => i.value);

    const resultsSection = document.querySelector('.results');
    resultsSection.innerHTML = "<h3>Találatok</h3>";

    const lista = document.createElement("ul");

    const szurt = kivalasztott.length === 0
        ? receptek
        : receptek.filter(r =>
            kivalasztott.every(h => r.hozzavalok.includes(h))
        );

    if (szurt.length === 0) {
        resultsSection.innerHTML += "<p>Nincs találat.</p>";
        return;
    }

    szurt.forEach(r => {
        const li = document.createElement("li");
        li.textContent = r.nev;
        lista.appendChild(li);
    });

    resultsSection.appendChild(lista);
}

document.addEventListener("DOMContentLoaded", () => {
    hozzavalokGeneralasa();
    document.getElementById("keresGomb").addEventListener("click", keres);
});