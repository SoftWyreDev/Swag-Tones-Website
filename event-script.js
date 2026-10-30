// Event List
const data = `
Saturday, Oct 31, 2026 | 8:00 p.m - 11:00 p.m. | Bruno's Bar and Grill | 230 Mt Hermon Rd, Scotts Valley, 95066

Friday, Nov 6, 2026 | 8:30 - 11:30 p.m. | The Sand Bar | 211 Esplanade, Capitola, CA 95010

Friday , Nov 13, 2026 | 7:00 - 10:00 p.m. | SEVYs Bar and Kitchen | 7500 Old Dominion Ct, Aptos, CA 95003

Friday, Nov 20, 2026 | 5:45 - 9:30 p.m. |  Private Event 
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