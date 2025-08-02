function addNote() {
  const input = document.getElementById("noteInput");
  const text = input.value.trim();
  if (text === "") return;

  let notes = JSON.parse(localStorage.getItem("notes") || "[]");
  notes.push(text);
  localStorage.setItem("notes", JSON.stringify(notes));

  input.value = "";
  displayNotes();
}

function displayNotes() {
  const notesContainer = document.getElementById("notesContainer");
  const notes = JSON.parse(localStorage.getItem("notes") || "[]");

  notesContainer.innerHTML = "";

  notes.forEach((note, index) => {
    const noteEl = document.createElement("div");
    noteEl.className = "note";
    noteEl.innerText = note;

    const btn = document.createElement("button");
    btn.className = "delete-btn";
    btn.innerText = "Delete";
    btn.onclick = () => deleteNote(index);

    noteEl.appendChild(btn);
    notesContainer.appendChild(noteEl);
  });
}

function deleteNote(index) {
  let notes = JSON.parse(localStorage.getItem("notes") || "[]");
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}

displayNotes();
