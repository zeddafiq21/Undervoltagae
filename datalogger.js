 function addLog(voltage, current, power) {
    const table = document.getElementById("dataLogger").querySelector("tbody");
    const row = document.createElement("tr");

    let timestamp = new Date().toLocaleString();

    row.innerHTML = `
      <td class="p-2 border">${timestamp}</td>
      <td class="p-2 border">${voltage} V</td>
      <td class="p-2 border">${current} A</td>
      <td class="p-2 border">${power} W</td>
    `;
    table.prepend(row); // prepend supaya data terbaru muncul di atas
  }

  // contoh: tiap 5 detik tambah data random
  setInterval(() => {
    let v = (220 + Math.random() * 5).toFixed(2);
    let i = (2 + Math.random()).toFixed(2);
    let p = (v * i).toFixed(2);
    addLog(v, i, p);
  }, 5000);