// Test 04 – Diáknap 2026
// Do not change the data below.

const programs = [
  { title: "Focikupa", place: "Tornaterem", time: "9:00", type: "sport" },
  { title: "Karaoke", place: "Aula", time: "10:30", type: "zene" },
  { title: "Társasjáték-sarok", place: "Könyvtár", time: "11:00", type: "játék" },
  { title: "Kosárdobó verseny", place: "Udvar", time: "12:00", type: "sport" },
  { title: "Tanárzenekar", place: "Aula", time: "13:30", type: "zene" },
  { title: "Kahoot-bajnokság", place: "Informatika terem", time: "14:00", type: "játék" }
];

const workshop = { name: "Robotépítő műhely", seats: 3 };

// Write your code below this line.

// ===================================================================
// A · Napszak gombok
// Kattintásra a BEKEZDÉS szövege változik (nem a gombé).
// ===================================================================

// 1. Megkeresem a bekezdést az id-je alapján (index.html: <p id="day-text">).
const dayText = document.getElementById("day-text");

// 2. Megkeresem a Reggel gombot, és ráteszek egy kattintásfigyelőt.
//    A function () { ... } belseje CSAK kattintáskor fut le.
document.getElementById("morning-btn").addEventListener("click", function () {
  // 3. Bal oldalt: MIT írok át (a bekezdést). Jobb oldalt: MIRE.
  dayText.textContent = "Reggel 9-kor indul a Focikupa a tornateremben.";
});

// Ugyanez a másik két gombbal, csak más szöveggel.
document.getElementById("noon-btn").addEventListener("click", function () {
  dayText.textContent = "Délben kosárdobó verseny az udvaron.";
});

document.getElementById("evening-btn").addEventListener("click", function () {
  dayText.textContent = "Este 6-kor diákdisco az aulában.";
});

// ===================================================================
// B · Programkártyák
// Minden programból egy kártya: <article class="card"> benne <h3> és <p>.
// ===================================================================

// 1. Megkeresem a dobozt, AMIBE a kártyák kerülnek (index.html: <div id="cards">).
const cards = document.getElementById("cards");

// 2. Ciklus: i = 0, 1, 2, 3, 4, 5. Annyiszor fut, ahány program van (programs.length).
for (let i = 0; i < programs.length; i++) {
  // programs[i] = EGY program (egy objektum).
  // programs[i].title = annak a programnak a címe.

  // 3. Létrehozok egy új <article>-t, és megkapja a "card" osztályt.
  const card = document.createElement("article");
  card.classList.add("card");

  // 4. Létrehozok egy <h3>-at, a szövege a program címe.
  const title = document.createElement("h3");
  title.textContent = programs[i].title;

  // 5. Létrehozok egy <p>-t, a szövege: hely, vessző, szóköz, idő ("Tornaterem, 9:00").
  const info = document.createElement("p");
  info.textContent = programs[i].place + ", " + programs[i].time;

  // 6. A <h3> és a <p> bekerül a kártyába.
  card.appendChild(title);
  card.appendChild(info);

  // BONUS: egy szív gomb is kerül minden kártyába.
  const heart = document.createElement("button");
  heart.classList.add("heart");
  heart.textContent = "♡";
  card.appendChild(heart);

  // 7. A kész kártya bekerül a dobozba. Enélkül nem látszik az oldalon!
  cards.appendChild(card);
}
// (A kártyák egymás mellé rendezése a style.css-ben van: .cards { display: flex; ... })

// ===================================================================
// C · Jelentkezem gomb
// A szám az OBJEKTUMBAN van: workshop.seats. Azt változtatjuk.
// ===================================================================

// 1. Megkeresem a számot mutató <span>-t és a gombot.
const seatsSpan = document.getElementById("seats");
const joinBtn = document.getElementById("join-btn");

// 2. Betöltéskor: a ? helyére kiírom a helyek számát. Nem kell hozzá figyelő,
//    mert ez a sor azonnal lefut, amikor a script betöltődik.
seatsSpan.textContent = workshop.seats;

// 3. Minden kattintásnál:
joinBtn.addEventListener("click", function () {
  // 3a. ELŐBB csökkentem a számot az objektumban (3 → 2 → 1 → 0) ...
  workshop.seats = workshop.seats - 1;

  // 3b. ... kiírom az új számot ...
  seatsSpan.textContent = workshop.seats;

  // 3c. ... és CSAK UTÁNA nézem meg, elfogyott-e.
  if (workshop.seats <= 0) {
    // Elfogyott: a GOMB változik, három dolog.
    joinBtn.textContent = "Betelt";    // a felirata
    joinBtn.disabled = true;           // nem lehet többet rákattintani
    joinBtn.classList.add("full");     // szürke lesz (a .full a style.css-ben van)
  }
});

// ===================================================================
// D · Szűrés típus szerint
// A <select> az index.html-ben van. Választáskor újratöltjük a listát.
// ===================================================================

// 1. Megkeresem a legördülő listát és az üres <ul>-t.
const typeSelect = document.getElementById("type-select");
const results = document.getElementById("results");

// 2. "change": akkor fut le, amikor valaki mást választ a listából.
typeSelect.addEventListener("change", function () {
  // 3. ELŐBB kiürítem a listát, különben a régi találatok is ott maradnak.
  results.innerHTML = "";

  // 4. Végigmegyek az összes programon.
  for (let i = 0; i < programs.length; i++) {
    // typeSelect.value = a választott <option> value-ja ("all", "sport", "zene" vagy "játék").
    // Két eset jó: ha az "Összes" van kiválasztva (all), VAGY (||) ha a program típusa egyezik.
    // Figyelj: === az összehasonlítás. Egy = beírná az értéket!
    if (typeSelect.value === "all" || programs[i].type === typeSelect.value) {
      // 5. Talált: egy új <li> a program címével, és bekerül a listába.
      const li = document.createElement("li");
      li.textContent = programs[i].title;
      results.appendChild(li);
    }
  }
});

// ===================================================================
// BONUS · Kedvencek (szívek)
// A szívek a B ciklusában jöttek létre. EGY figyelő kell, a szülőn (#cards).
// ===================================================================

// 1. A figyelő a kártyák dobozán van. Bármelyik szívre kattintasz, ide is "eljut" a kattintás.
cards.addEventListener("click", function (event) {
  // 2. event.target = az az elem, amire TÉNYLEG kattintottak.
  //    Csak akkor csinálunk valamit, ha az egy szív (heart osztályú).
  if (event.target.classList.contains("heart")) {
    // 3. toggle: ha nincs rajta a "fav", rárakja; ha rajta van, leveszi.
    event.target.classList.toggle("fav");

    // 4. A jel a "fav" szerint: ha rajta van, teli szív, ha nincs, üres.
    if (event.target.classList.contains("fav")) {
      event.target.textContent = "♥";
    } else {
      event.target.textContent = "♡";
    }
  }
});
