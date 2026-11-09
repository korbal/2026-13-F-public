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

// ---------- A · Napszak gombok (8 pont) ----------
const dayText = document.getElementById("day-text");

document.getElementById("morning-btn").addEventListener("click", function () {
  dayText.textContent = "Reggel 9-kor indul a Focikupa a tornateremben.";
});

document.getElementById("noon-btn").addEventListener("click", function () {
  dayText.textContent = "Délben kosárdobó verseny az udvaron.";
});

document.getElementById("evening-btn").addEventListener("click", function () {
  dayText.textContent = "Este 6-kor diákdisco az aulában.";
});

// ---------- B · Programkártyák (12 pont) ----------
// programs egy TÖMB, benne objektumok: programs[i] egy program, programs[i].title a címe
const cards = document.getElementById("cards");

for (let i = 0; i < programs.length; i++) {
  const card = document.createElement("article");
  card.classList.add("card");

  const title = document.createElement("h3");
  title.textContent = programs[i].title;

  const info = document.createElement("p");
  info.textContent = programs[i].place + ", " + programs[i].time;

  card.appendChild(title);
  card.appendChild(info);

  // BONUS: szív gomb minden kártyán
  const heart = document.createElement("button");
  heart.classList.add("heart");
  heart.textContent = "♡";
  card.appendChild(heart);

  cards.appendChild(card);
}

// ---------- C · Jelentkezem gomb (10 pont) ----------
const seatsSpan = document.getElementById("seats");
const joinBtn = document.getElementById("join-btn");

seatsSpan.textContent = workshop.seats;

joinBtn.addEventListener("click", function () {
  workshop.seats = workshop.seats - 1; // az OBJEKTUMOT változtatjuk
  seatsSpan.textContent = workshop.seats;

  if (workshop.seats <= 0) {
    joinBtn.textContent = "Betelt";
    joinBtn.disabled = true;
    joinBtn.classList.add("full");
  }
});

// ---------- D · Szűrés típus szerint (10 pont) ----------
const typeSelect = document.getElementById("type-select");
const results = document.getElementById("results");

typeSelect.addEventListener("change", function () {
  results.innerHTML = ""; // előbb kiürítjük a listát

  for (let i = 0; i < programs.length; i++) {
    if (typeSelect.value === "all" || programs[i].type === typeSelect.value) {
      const li = document.createElement("li");
      li.textContent = programs[i].title;
      results.appendChild(li);
    }
  }
});

// ---------- BONUS · Kedvencek (+4 pont) ----------
// A szívek JS-ből jönnek létre, ezért EGY figyelő a szülőn (#cards), és event.target mondja meg, mire kattintottak
cards.addEventListener("click", function (event) {
  if (event.target.classList.contains("heart")) {
    event.target.classList.toggle("fav");
    if (event.target.classList.contains("fav")) {
      event.target.textContent = "♥";
    } else {
      event.target.textContent = "♡";
    }
  }
});
