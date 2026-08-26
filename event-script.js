// Event List
const data = `
Saturday, Aug 29, 2026 | 8:30 - 11:30 p.m. | The Sand Bar |  211 Esplanade, Capitola, CA 95010

Friday, Sept 11, 2026 | 7:00 - 10:00 p.m. | Vino By The Sea | 55 Municipal Wharf Ste B, Santa Cruz, CA 95060

Sunday, Sept 20, 2026 | 1:00 - 4:00 p.m. | Miramar Vineyards | 12255 New Ave, San Martin, CA 95046

Friday, Sept 25, 2026 | 5:30 - 7:30 p.m. | Kissed By An Angel Wines | 222 Mt Hermon Rd Ste I, Scotts Valley, CA 95066
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