// 1. Releases — edit this list for each artist
const releases = [
  {
    title: "Midnight Metro",
    type: "Single · 2026",
    colors: ["#7b2ff7", "#f107a3"],
  },
  { title: "Paper Skies", type: "EP · 2025", colors: ["#0f9b8e", "#1e3c72"] },
  {
    title: "Chai at 3AM",
    type: "Single · 2025",
    colors: ["#f7971e", "#c0392b"],
  },
  {
    title: "Static Hearts",
    type: "Single · 2024",
    colors: ["#434343", "#b388ff"],
  },
];

// Build a card for each release. Gradient colours act as album covers
// (for a real artist, use their actual cover images instead).
document.getElementById("releaseGrid").innerHTML = releases
  .map(
    (r) => `
  <div class="release">
    <div class="cover" style="background: linear-gradient(135deg, ${r.colors[0]}, ${r.colors[1]})"></div>
    <div class="release-info">
      <h3>${r.title}</h3>
      <span>${r.type}</span>
    </div>
  </div>
`,
  )
  .join("");

// 2. Shows — same idea, a list turned into rows
const shows = [
  { date: "Nov 14", venue: "Summer House Café", city: "New Delhi" },
  { date: "Nov 29", venue: "Hard Rock Café", city: "Gurugram" },
  { date: "Dec 20", venue: "Campus Fest", city: "Chandigarh" },
];

document.getElementById("showList").innerHTML = shows
  .map(
    (s) => `
  <div class="show">
    <span class="date">${s.date}</span>
    <span>${s.venue}</span>
    <span>${s.city}</span>
    <a href="#book" class="btn outline">Enquire</a>
  </div>
`,
  )
  .join("");

// 3. Booking form — saves the enquiry, then thanks the person
document.getElementById("bookForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const enquiry = {
    name: document.getElementById("bName").value,
    email: document.getElementById("bEmail").value,
    type: document.getElementById("bType").value,
    message: document.getElementById("bMsg").value,
    sentAt: new Date().toLocaleString(), // records when it was sent
  };

  const all = JSON.parse(localStorage.getItem("enquiries") || "[]");
  all.push(enquiry);
  localStorage.setItem("enquiries", JSON.stringify(all));

  document.getElementById("bookMsg").textContent =
    `Thanks ${enquiry.name}! Your ${enquiry.type.toLowerCase()} enquiry has been sent.`;
  e.target.reset();
});
