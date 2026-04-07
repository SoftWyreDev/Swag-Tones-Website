// Event List
const data = `
Saturday, April 11, 2026 | 7:00 - 10:00 p.m. | Sevy's Bar + Kitchen | 7500 Old Dominion Ct, Aptos, CA
Friday, April 17, 2026 | 6:45 - 9:15 p.m. | Santa Cruz Yacht Club | 244 4th Ave, Santa Cruz, CA
Friday, April 24, 2026 | 7:00 - 10:00 p.m. | Vino by the Sea | 55 Municipal Wharf Ste B, Santa Cruz, CA
Saturday, May 16, 2026 | 5:00 - 8:00 p.m. | Swag Tones Appreciation Event Swag Shop |  13026 Central Ave, Boulder Creek, CA, 95006
Thursday, May 21, 2026 | 6:00 - 8:00 p.m. | Bargetto Winery | 3535 N Main St, Soquel, CA 95073
Friday, May 29, 2026 | 5:00 - 8:00 p.m. | Skypark Food Trucks-a-go-go | 361 Kings Village Rd, Scotts Valley, CA 95066
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