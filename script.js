const addBtn = document.getElementById("add");

addBtn.addEventListener("click", () => addNewNote());

function addNewNote() {
	const note = document.createElement("div");
	note.classList.add("note");
	note.innerHTML = `
	<div class="tools">
		<button class="edit">
			<icon class="fas fa-edit"></icon>
		</button>
		<button class="delete">
			<icon class="fas fa-trash-alt"></icon>
		</button>
		<button class="delete"></button>
	</div>
	<div class="hidden"></div>
	<textarea></textarea>`;

	const deleteBtn = note.querySelector(".delete");

	deleteBtn.addEventListener("click", () => {
		note.remove();
	});

	document.body.appendChild(note);
}
