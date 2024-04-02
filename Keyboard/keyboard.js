// console.log('Project 5');

const insert = document.getElementById("insert");

window.addEventListener("keydown", function (e) {
  insert.innerHTML = `<table>
  <tbody>
    <tr>
      <th>Key</th>
      <th>KeyCode</th>
      <th>Code</th>
     
    </tr>
    <tr>
      <td>${e.key === " " ? "Space" : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>f
    </tr>
  </tbody>
</table>`;
});
