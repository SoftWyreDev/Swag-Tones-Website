// Event List
const data = `
Friday, May 29, 2026 | 5:00 - 8:00 p.m. | Skypark Food Trucks-a-go-go | 361 Kings Village Rd, Scotts Valley, CA 95066

Friday, June 6, 2026 | 9:00 - 11:59 p.m. | The Sand Bar |  211 Esplanade, Capitola, CA 95010

Saturday, June 20, 2026 | 5:00 - 8:00 p.m. | Private Event | Watsonville

Sunday, June 21, 2026 | 4:00 - 7:00 p.m. | Fathers Day at El Vaquero Winery Tasting Room | 2901 Freedom Blvd, Corralitos, CA 95076

Saturday, June 27, 2026 | 10:00 - 11:59 p.m. | Fernwood Campground and Resort | 47200 CA-1, Big Sur, CA 93920
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