const rooms = [
    { roomNo: 101, status: "Occupied", cleanliness: "Clean", vacantSeats: 0 },
    { roomNo: 102, status: "Vacant", cleanliness: "Needs Cleaning", vacantSeats: 2 },
    { roomNo: 103, status: "Occupied", cleanliness: "Clean", vacantSeats: 0 },
    { roomNo: 104, status: "Vacant", cleanliness: "Clean", vacantSeats: 2 },
    { roomNo: 105, status: "Occupied", cleanliness: "Needs Cleaning", vacantSeats: 0 },
    { roomNo: 106, status: "Vacant", cleanliness: "Clean", vacantSeats: 2 },
    { roomNo: 107, status: "Occupied", cleanliness: "Needs Cleaning", vacantSeats: 0 },
    { roomNo: 108, status: "Vacant", cleanliness: "Clean", vacantSeats: 2 },
    { roomNo: 109, status: "Occupied", cleanliness: "Clean", vacantSeats: 0 },
    { roomNo: 110, status: "Vacant", cleanliness: "Needs Cleaning", vacantSeats: 2 },
    { roomNo: 111, status: "Occupied", cleanliness: "Needs Cleaning", vacantSeats: 0 },
    { roomNo: 112, status: "Vacant", cleanliness: "Clean", vacantSeats: 2 },
    { roomNo: 113, status: "Occupied", cleanliness: "Clean", vacantSeats: 0 },
    { roomNo: 114, status: "Vacant", cleanliness: "Needs Cleaning", vacantSeats: 2 },
    { roomNo: 115, status: "Occupied", cleanliness: "Needs Cleaning", vacantSeats: 0 },
    { roomNo: 116, status: "Vacant", cleanliness: "Clean", vacantSeats: 2 },
    { roomNo: 117, status: "Occupied", cleanliness: "Clean", vacantSeats: 0 },
    { roomNo: 118, status: "Vacant", cleanliness: "Needs Cleaning", vacantSeats: 2 },
    { roomNo: 119, status: "Occupied", cleanliness: "Clean", vacantSeats: 0 },
    { roomNo: 120, status: "Vacant", cleanliness: "Clean", vacantSeats: 2 },
    { roomNo: 121, status: "Occupied", cleanliness: "Needs Cleaning", vacantSeats: 0 },
    { roomNo: 122, status: "Vacant", cleanliness: "Clean", vacantSeats: 2 },
    { roomNo: 123, status: "Occupied", cleanliness: "Clean", vacantSeats: 0 },
    { roomNo: 124, status: "Vacant", cleanliness: "Needs Cleaning", vacantSeats: 2 },
    { roomNo: 125, status: "Occupied", cleanliness: "Clean", vacantSeats: 0 },
    { roomNo: 126, status: "Vacant", cleanliness: "Clean", vacantSeats: 2 },
    { roomNo: 127, status: "Occupied", cleanliness: "Needs Cleaning", vacantSeats: 0 },
    { roomNo: 128, status: "Vacant", cleanliness: "Clean", vacantSeats: 2 },
    { roomNo: 129, status: "Occupied", cleanliness: "Clean", vacantSeats: 0 },
    { roomNo: 130, status: "Vacant", cleanliness: "Needs Cleaning", vacantSeats: 2 },
    { roomNo: 131, status: "Occupied", cleanliness: "Clean", vacantSeats: 0 },
    { roomNo: 132, status: "Vacant", cleanliness: "Clean", vacantSeats: 2 },
    { roomNo: 133, status: "Occupied", cleanliness: "Needs Cleaning", vacantSeats: 0 },
    { roomNo: 134, status: "Vacant", cleanliness: "Clean", vacantSeats: 2 },
    { roomNo: 135, status: "Occupied", cleanliness: "Clean", vacantSeats: 0 },
    { roomNo: 136, status: "Vacant", cleanliness: "Needs Cleaning", vacantSeats: 2 },
    { roomNo: 137, status: "Occupied", cleanliness: "Clean", vacantSeats: 0 },
    { roomNo: 138, status: "Vacant", cleanliness: "Clean", vacantSeats: 2 },
    { roomNo: 139, status: "Occupied", cleanliness: "Needs Cleaning", vacantSeats: 0 },
    { roomNo: 140, status: "Vacant", cleanliness: "Clean", vacantSeats: 2 },
    { roomNo: 141, status: "Occupied", cleanliness: "Needs Cleaning", vacantSeats: 0 },
    { roomNo: 142, status: "Vacant", cleanliness: "Clean", vacantSeats: 2 },
    { roomNo: 143, status: "Occupied", cleanliness: "Clean", vacantSeats: 0 },
    { roomNo: 144, status: "Vacant", cleanliness: "Needs Cleaning", vacantSeats: 2 },
    { roomNo: 145, status: "Occupied", cleanliness: "Clean", vacantSeats: 0 },
    { roomNo: 146, status: "Vacant", cleanliness: "Needs Cleaning", vacantSeats: 2 },
    { roomNo: 147, status: "Occupied", cleanliness: "Clean", vacantSeats: 0 },
    { roomNo: 148, status: "Vacant", cleanliness: "Clean", vacantSeats: 2 },
    { roomNo: 149, status: "Occupied", cleanliness: "Needs Cleaning", vacantSeats: 0 },
    { roomNo: 150, status: "Vacant", cleanliness: "Clean", vacantSeats: 2 },
    { roomNo: 151, status: "Occupied", cleanliness: "Clean", vacantSeats: 0 },
    { roomNo: 152, status: "Vacant", cleanliness: "Needs Cleaning", vacantSeats: 2 },
    { roomNo: 153, status: "Occupied", cleanliness: "Clean", vacantSeats: 0 },
    { roomNo: 154, status: "Vacant", cleanliness: "Clean", vacantSeats: 2 },
    { roomNo: 155, status: "Occupied", cleanliness: "Needs Cleaning", vacantSeats: 0 },
    { roomNo: 156, status: "Vacant", cleanliness: "Clean", vacantSeats: 2 },
    { roomNo: 157, status: "Occupied", cleanliness: "Clean", vacantSeats: 0 },
    { roomNo: 158, status: "Vacant", cleanliness: "Needs Cleaning", vacantSeats: 2 },
    { roomNo: 159, status: "Occupied", cleanliness: "Clean", vacantSeats: 0 },
    { roomNo: 160, status: "Vacant", cleanliness: "Clean", vacantSeats: 2 },
    { roomNo: 161, status: "Occupied", cleanliness: "Needs Cleaning", vacantSeats: 0 },
    { roomNo: 162, status: "Vacant", cleanliness: "Clean", vacantSeats: 2 },
    { roomNo: 163, status: "Occupied", cleanliness: "Clean", vacantSeats: 0 },
    { roomNo: 164, status: "Vacant", cleanliness: "Needs Cleaning", vacantSeats: 2 },
    { roomNo: 165, status: "Occupied", cleanliness: "Clean", vacantSeats: 0 },
    { roomNo: 166, status: "Vacant", cleanliness: "Clean", vacantSeats: 2 },
    { roomNo: 167, status: "Occupied", cleanliness: "Needs Cleaning", vacantSeats: 0 },
    { roomNo: 168, status: "Vacant", cleanliness: "Clean", vacantSeats: 2 },
    { roomNo: 169, status: "Occupied", cleanliness: "Clean", vacantSeats: 0 },
    { roomNo: 170, status: "Vacant", cleanliness: "Needs Cleaning", vacantSeats: 2 },
    { roomNo: 171, status: "Occupied", cleanliness: "Clean", vacantSeats: 0 },
    { roomNo: 172, status: "Vacant", cleanliness: "Clean", vacantSeats: 2 },
    { roomNo: 173, status: "Occupied", cleanliness: "Needs Cleaning", vacantSeats: 0 },
    { roomNo: 174, status: "Vacant", cleanliness: "Clean", vacantSeats: 2 },
    { roomNo: 175, status: "Occupied", cleanliness: "Clean", vacantSeats: 0 },
    { roomNo: 176, status: "Vacant", cleanliness: "Needs Cleaning", vacantSeats: 2 },
    { roomNo: 177, status: "Occupied", cleanliness: "Clean", vacantSeats: 0 },
    { roomNo: 178, status: "Vacant", cleanliness: "Clean", vacantSeats: 2 },
    { roomNo: 179, status: "Occupied", cleanliness: "Needs Cleaning", vacantSeats: 0 },
    { roomNo: 180, status: "Vacant", cleanliness: "Clean", vacantSeats: 2 },
    { roomNo: 181, status: "Occupied", cleanliness: "Needs Cleaning", vacantSeats: 0 },
    { roomNo: 182, status: "Vacant", cleanliness: "Clean", vacantSeats: 2 },
    { roomNo: 183, status: "Occupied", cleanliness: "Clean", vacantSeats: 0 },
    { roomNo: 184, status: "Vacant", cleanliness: "Needs Cleaning", vacantSeats: 2 },
    { roomNo: 185, status: "Occupied", cleanliness: "Clean", vacantSeats: 0 },
    { roomNo: 186, status: "Vacant", cleanliness: "Needs Cleaning", vacantSeats: 2 },
    { roomNo: 187, status: "Occupied", cleanliness: "Clean", vacantSeats: 0 },
    { roomNo: 188, status: "Vacant", cleanliness: "Clean", vacantSeats: 2 },
    { roomNo: 189, status: "Occupied", cleanliness: "Needs Cleaning", vacantSeats: 0 },
    { roomNo: 190, status: "Vacant", cleanliness: "Clean", vacantSeats: 2 },
    { roomNo: 191, status: "Occupied", cleanliness: "Clean", vacantSeats: 0 },
    { roomNo: 192, status: "Vacant", cleanliness: "Needs Cleaning", vacantSeats: 2 },
    { roomNo: 193, status: "Occupied", cleanliness: "Clean", vacantSeats: 0 },
    { roomNo: 194, status: "Vacant", cleanliness: "Clean", vacantSeats: 2 },
    { roomNo: 195, status: "Occupied", cleanliness: "Needs Cleaning", vacantSeats: 0 },
    { roomNo: 196, status: "Vacant", cleanliness: "Clean", vacantSeats: 2 },
    { roomNo: 197, status: "Occupied", cleanliness: "Clean", vacantSeats: 0 },
    { roomNo: 198, status: "Vacant", cleanliness: "Needs Cleaning", vacantSeats: 2 },
    { roomNo: 199, status: "Occupied", cleanliness: "Clean", vacantSeats: 0 },
    { roomNo: 200, status: "Vacant", cleanliness: "Clean", vacantSeats: 2 }
  ];
  
  function displayRooms(roomList) {
    const container = document.getElementById("roomContainer");
    container.innerHTML = "";
  
    const table = document.createElement("table");
    table.className = "room-table";
  
    const thead = document.createElement("thead");
    thead.innerHTML = `
      <tr>
        <th>Room No.</th>
        <th>Status</th>
        <th>Cleanliness</th>
        <th>Vacant Seats</th>
      </tr>`;
    table.appendChild(thead);
  
    const tbody = document.createElement("tbody");
    roomList.forEach(room => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${room.roomNo}</td>
        <td>${room.status}</td>
        <td>${room.cleanliness}</td>
        <td>${room.vacantSeats}</td>`;
      tbody.appendChild(row);
    });
  
    table.appendChild(tbody);
    container.appendChild(table);
  }
  
  function applyFilters() {
    const vacantChecked = document.getElementById("filterVacant").checked;
    const cleanChecked = document.getElementById("filterClean").checked;
  
    const filtered = rooms.filter(room => {
      return (!vacantChecked || room.status === "Vacant") &&
             (!cleanChecked || room.cleanliness === "Clean");
    });
  
    displayRooms(filtered);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    displayRooms(rooms);
    document.getElementById("filterVacant").addEventListener("change", applyFilters);
    document.getElementById("filterClean").addEventListener("change", applyFilters);
  });