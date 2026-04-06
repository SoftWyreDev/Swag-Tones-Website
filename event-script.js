// Event List
const data = `
Saturday, April 11, 2026 | 7:00 - 10:00 p.m. | Sevy's Bar + Kitchen | 7500 Old Dominion Ct, Aptos, CA
Friday, April 17, 2026 | 6:45 - 9:15 p.m. | Santa Cruz Yacht Club | 244 4th Ave, Santa Cruz, CA
Friday, April 24, 2026 | 7:00 - 10:00 p.m. | Vino by the Sea | 55 Municipal Wharf Ste B, Santa Cruz, CA
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