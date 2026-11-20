// Event List
const data = `
Friday, Nov 20, 2026 | 6:45 - 9:15 p.m. |  Private Event 

Saturday, Dec 5th, 2026 | 5:30 - 7:30 p.m. | Kissed By An Angel Wines | 222 Mt Hermon Rd Ste I, Scotts Valley, CA 95066

Friday, Dec 11, 2026 | 7:00 - 10:00 p.m. | SEVYs Bar and Kitchen | 7500 Old Dominion Ct, Aptos, CA 95003

Thursday, Dec 17th, 2026 | 5:30 - 7:30 p.m. | Kissed By An Angel Wines | 222 Mt Hermon Rd Ste I, Scotts Valley, CA 95066

Thursday, Dec 31st, 2026 | 7:00 - 12:30 a.m. | Vino By The Sea | 55 Municipal Wharf Ste B, Santa Cruz, CA 95060
`;

const container = document.getElementById("events");

container.innerHTML = data.trim().split("\n").filter(line => line.trim()).map(line => {
  const [date, time, venue, address] = line.split("|").map(x => x.trim());

  return `
    <div class="event-bubble">
      <div class="event-date event-item">${date}</div>
      <div class="event-time event-item">${time}</div>
      <div class="event-venue event-item">${venue}</div>
      <div class="event-address event-item">${address || ""}</div>
    </div>
  `;
}).join("");