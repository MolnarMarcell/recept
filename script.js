const receptek = [
    {
        nev: "Palacsinta",
        hozzavalok: ["tojás", "liszt", "tej", "cukor"]
    },
    {
        nev: "Rántotta",
        hozzavalok: ["tojás", "sajt"]
    },
    {
        nev: "Sajtos paradicsomos omlett",
        hozzavalok: ["tojás", "sajt", "paradicsom"]
    },
    {
        nev: "Grízes tészta",
        hozzavalok: ["liszt", "cukor", "vaj"]
    },
    {
        nev: "Paradicsomos tészta",
        hozzavalok: ["liszt", "paradicsom", "sajt"]
    },
    {
        nev: "Sajtos melegszendvics",
        hozzavalok: ["sajt", "vaj"]
    },
    {
        nev: "Túrós palacsinta",
        hozzavalok: ["tojás", "liszt", "tej", "cukor", "túró"]
    },
    {
        nev: "Csirkés rizs",
        hozzavalok: ["csirke", "rizs", "só"]
    },
    {
        nev: "Sült krumpli",
        hozzavalok: ["krumpli", "só", "olaj"]
    },
    {
        nev: "Rizses hús",
        hozzavalok: ["csirke", "rizs", "só", "olaj"]
    },
    {
        nev: "Krumplipüré",
        hozzavalok: ["krumpli", "vaj", "tej", "só"]
    },
    {
        nev: "Sajtos tészta",
        hozzavalok: ["liszt", "sajt", "vaj"]
    },
    {
        nev: "Tojásos nokedli",
        hozzavalok: ["tojás", "liszt", "só"]
    },
    {
        nev: "Bundás kenyér",
        hozzavalok: ["tojás", "tej", "só", "olaj"]
    },
    {
        nev: "Tejeskávé",
        hozzavalok: ["tej", "cukor"]
    },
    {
        nev: "Csirkepörkölt",
        hozzavalok: ["csirke", "olaj", "só", "paradicsom"]
    },
    {
        nev: "Sajtos krumpli",
        hozzavalok: ["krumpli", "sajt", "vaj"]
    },
    {
        nev: "Paradicsomleves",
        hozzavalok: ["paradicsom", "só", "cukor"]
    },
    {
        nev: "Rizsfelfújt",
        hozzavalok: ["rizs", "tej", "cukor", "tojás"]
    },
    {
        nev: "Túrós csusza",
        hozzavalok: ["liszt", "túró", "tejföl", "só"]
    },
    {
        nev: "Sajtos omlett",
        hozzavalok: ["tojás", "sajt", "só"]
    }
];

function keres() {
    const keresettHozzavalok = document.getElementById("hozzavalok").value.toLowerCase().split(",").map(h => h.trim());
    const eredmenyek = receptek.filter(recept => 
        keresettHozzavalok.every(h => recept.hozzavalok.includes(h))
    );
    const eredmenyLista = document.createElement("ul");
    eredmenyLista.id = "eredmenyLista";
    document.body.appendChild(eredmenyLista);
    eredmenyLista.innerHTML = "";
    if (eredmenyek.length > 0) {
        eredmenyek.forEach(recept => {
            const li = document.createElement("li");
            li.textContent = recept.nev;
            eredmenyLista.appendChild(li);
        });
    } else {
        eredmenyLista.textContent = "Nincs találat.";
    }
}

document.getElementById("keresGomb").addEventListener("click", keres);