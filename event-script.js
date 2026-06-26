// Event List
const data = `

Saturday, June 27, 2026 | 10:00 - 11:59 p.m. | Fernwood Campground and Resort | 47200 CA-1, Big Sur, CA 93920

Monday, June 29, 2026 | 6:00 - 9:00 p.m. | The Sand Bar |  211 Esplanade, Capitola, CA 95010

Friday, July 10, 2026 | 7:00 - 10:00 p.m. | SEVYs Bar and Kitchen | 7500 Old Dominion Ct, Aptos, CA 95003

Sunday, July 19, 2026 | 2:00 - 4:00 p.m. | Art and Wine Festival at Bargetto Winery | 3535 N Main St, Soquel, CA 95073

Friday, July 24, 2026 | 6:00 - 8:30p.m. | Four Points by Sheraton Presents Music Under The Stars | 5030 Scotts Valley Dr, Scotts Valley, CA 95066

Saturday, July 31, 2026 | 7:00 - 10:00 p.m. | Bruno’s Bar and Grill | 230 Mt Hermon Rd, Scotts Valley, CA 95066
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