// Event List
const data = `
Saturday, March 7, 2026 | 5:30 - 7:30 p.m. | Discretion Brewery | 2703 41st Ave, Soquel, CA
Friday, March 13, 2026 | 6:00 - 9:00 p.m. | Shanty Shack Brewing | 138 Fern St, Santa Cruz, CA
Friday, March 20, 2026 | 8:00 - 11:00 p.m. | Crow's Nest | 218 E Cliff Dr, Santa Cruz, CA
`;

const container = document.getElementById("events");

container.innerHTML = data.trim().split("\n").map(line => {
  const [date, time, venue, address] = line.split("|").map(x => x.trim());

  return `
    <div class="event-bubble">
      <div class="event-date event-item">${date}</div>
      <div class="event-time event-item">${time}</div>
      <div class="event-venue event-item">${venue}</div>
      <div class="event-address event-item">${address}</div>
    </div>
  `;
}).join("");