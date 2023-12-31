const addBtn = document.getElementById("add");
const notes = JSON.parse(localStorage.getItem("note"));

addBtn.addEventListener("click", () => controlNote());

const controlNote = (text = " ") => {
	const note = document.createElement("div");
	note.classList.add("note");
	note.innerHTML = `
         <div class="tools">
            <button class="edit">
                <i class="fas fa-edit"></i>
            </button>
            <button class="delete">
                <i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="main ${text ? " " : "hidden"}"></div>
        <textarea class="${text ? "hidden" : " "}"></textarea>`;

	const deleteBtn = note.querySelector(".delete");
	const editBtn = note.querySelector(".edit");
	const main = note.querySelector(".main");
	const textArea = note.querySelector("textarea");

	textArea.value = text;
	main.innerHTML = text;

	deleteBtn.addEventListener("click", () => {
		note.remove();
		update();
	});

	editBtn.addEventListener("click", () => {
		main.classList.toggle("hidden");
		textArea.classList.toggle("hidden");
	});

	textArea.addEventListener("input", (e) => {
		const value = e.target.value;
		main.innerHTML = value;
		update();
	});

	document.body.appendChild(note);
};

function update() {
	const notesText = document.querySelectorAll("textarea");
	const notes = [];
	notesText.forEach((note) => notes.push(note.value));
	localStorage.setItem("note", JSON.stringify(notes));
}

if (notes && notes.length > 0) {
	notes.forEach((note) => {
		controlNote(note);
	});
}