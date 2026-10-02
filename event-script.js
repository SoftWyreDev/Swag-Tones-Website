// Event List
const data = `
Friday, Oct 2, 2026 | 8:00 - 11:00 p.m. | Crows Nest Restaurant | 2218 E Cliff Dr, Santa Cruz, CA 95062

Wednesday, Oct 7, 2026 | 4:00 - 6:00 p.m. | Bay Bar and Grill Happy Hour | 209 Esplanade, Capitola, CA 95010

Friday, Oct 16, 2026 | 6:00 - 9:00 p.m. | El Vaquero Winery Tasting Room | 2901 Freedom Blvd Corralitos, CA 95076

Thursday, Oct 22, 2026 | 5:30 - 7:30 p.m. | Kissed By An Angel Wines | 222 Mt Hermon Rd Ste I, Scotts Valley, CA 95066

Saturday, Oct 31, 2026 | 8:00 p.m - 11:00 p.m. | Bruno's Bar and Grill | 230 Mt Hermon Rd, Scotts Valley, 95066
`;

const container = document.getElementById("events");

container.innerHTML = data.trim().split("\n").filter(line => line.trim()).map(line => {
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