document.getElementById('logForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const action = document.getElementById('action').value;
    const time = new Date().toLocaleString();
  
    if (name) {
      const table = document.getElementById('logTable').querySelector('tbody');
      const row = table.insertRow();
      row.innerHTML = `
        <td>${name}</td>
        <td>${action}</td>
        <td>${time}</td>
      `;
  
      document.getElementById('logForm').reset();
    }
  });
  
  
