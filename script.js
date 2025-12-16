const presentList = document.getElementById("presentList");
const absentList = document.getElementById("absentList");

let presentStudents = JSON.parse(localStorage.getItem("present")) || [];
let absentStudents = JSON.parse(localStorage.getItem("absent")) || [];

function render() {
  presentList.innerHTML = "";
  absentList.innerHTML = "";

  presentStudents.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    presentList.appendChild(li);
  });

  absentStudents.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    absentList.appendChild(li);
  });

  localStorage.setItem("present", JSON.stringify(presentStudents));
  localStorage.setItem("absent", JSON.stringify(absentStudents));
}

function markPresent() {
  const name = document.getElementById("name").value.trim();
  if (name === "") return alert("Enter student name");

  if (!presentStudents.includes(name)) {
    presentStudents.push(name);
  }

  absentStudents = absentStudents.filter(n => n !== name);

  document.getElementById("name").value = "";
  render();
}

function markAbsent() {
  const name = document.getElementById("name").value.trim();
  if (name === "") return alert("Enter student name");

  if (!absentStudents.includes(name)) {
    absentStudents.push(name);
  }

  presentStudents = presentStudents.filter(n => n !== name);

  document.getElementById("name").value = "";
  render();
}

render();
