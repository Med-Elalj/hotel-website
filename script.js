const hotels = {
  "Sunrise Hotel": [
    { name: "Single Room", price: 80 },
    { name: "Double Room", price: 110 },
    { name: "Suite", price: 150 },
  ],
  "Blue Ocean Resort": [
    { name: "Sea View Room", price: 140 },
    { name: "Family Suite", price: 180 },
  ],
  "Mountain View Lodge": [
    { name: "Standard Room", price: 70 },
    { name: "Luxury Suite", price: 120 },
  ],
  "City Lights Inn": [
    { name: "Business Room", price: 100 },
    { name: "Premium Suite", price: 140 },
  ],
  "Palm Paradise": [
    { name: "Garden View", price: 160 },
    { name: "Beachfront Room", price: 200 },
    { name: "Private Villa", price: 260 },
  ],
  "Golden Sand Suites": [
    { name: "Economy Room", price: 90 },
    { name: "Executive Suite", price: 130 },
  ],
  "Lakeside Retreat": [
    { name: "Cabin Room", price: 100 },
    { name: "Lake View Suite", price: 140 },
    { name: "Family Lodge", price: 170 },
  ],
  "Royal Garden Hotel": [
    { name: "Classic Room", price: 150 },
    { name: "Deluxe Room", price: 190 },
    { name: "Royal Suite", price: 250 },
  ],
  "Forest Breeze Inn": [
    { name: "Eco Room", price: 80 },
    { name: "Forest View Room", price: 100 },
  ],
  "Desert Pearl Resort": [
    { name: "Standard Tent Room", price: 120 },
    { name: "Oasis Suite", price: 160 },
    { name: "Luxury Villa", price: 210 },
  ],
  "Coral Reef Hotel": [
    { name: "Ocean Room", price: 130 },
    { name: "Coral Suite", price: 175 },
    { name: "Presidential Suite", price: 240 },
  ],
  "Skyline View Tower": [
    { name: "City View Room", price: 150 },
    { name: "Panoramic Suite", price: 190 },
    { name: "Penthouse", price: 270 },
  ],
};

function showRooms(hotelName) {
  document.getElementById("hotelList").classList.add("hidden");
  const roomSection = document.getElementById("roomSection");
  roomSection.classList.remove("hidden");

  document.getElementById("selectedHotel").textContent = hotelName;
  const roomList = document.getElementById("roomList");
  roomList.innerHTML = "";

  hotels[hotelName].forEach((room) => {
    const div = document.createElement("div");
    div.className = "room";
    div.innerHTML = `
      <h3>${room.name}</h3>
      <p>Price: $${room.price} / night</p>
      <button onclick="reserveRoom('${room.name}', '${hotelName}')">Reserve Room</button>
    `;
    roomList.appendChild(div);
  });
}

function reserveRoom(roomName, hotelName) {
  alert(`✅ You selected ${roomName} at ${hotelName}!`);
}

function goBack() {
  document.getElementById("roomSection").classList.add("hidden");
  document.getElementById("hotelList").classList.remove("hidden");
}



function loginUser(event) {
  event.preventDefault(); // stop page refresh

  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const message = document.getElementById("loginMessage");

  // simple fake login check
  if (user === "admin" && pass === "1234") {
    message.style.color = "green";
    message.textContent = "✅ Login successful! Redirecting...";
    setTimeout(() => {
      window.location.href = "index.html"; // go to hotels page
    }, 1500);
  } else {
    message.style.color = "red";
    message.textContent = "❌ Wrong username or password!";
  }

  return false;
}



function sendMessage(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("message").value;
  const contactMsg = document.getElementById("contactMessage");

  if (name && email && msg) {
    contactMsg.style.color = "green";
    contactMsg.textContent = `✅ Thank you, ${name}! Your message has been sent successfully.`;
    document.getElementById("contactForm").reset();
  } else {
    contactMsg.style.color = "red";
    contactMsg.textContent = "❌ Please fill in all fields before sending.";
  }

  return false;
}
