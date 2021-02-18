const addBtn = document.querySelector(".plus");
const input = document.querySelector(".todo-input");
const todolist = document.querySelector(".todolist");

addBtn.addEventListener("click", (addTodo) => {
	addTodo.preventDefault();
	if (input.value === "") {
		alert("plz write something");
	} else {
		const div = document.createElement("div");
		div.classList.add("todo");

		// create new Li element element
		const li = document.createElement("li");
		li.classList.add("todo-items");
		li.innerText = input.value;
		div.appendChild(li);

		// create new check box
		const completeBtn = document.createElement("button");
		completeBtn.classList.add("check");
		completeBtn.innerHTML = '<i class="far fa-check-circle"></i>';
		div.appendChild(completeBtn);
		completeBtn.addEventListener("click", () => {
			li.classList.add("checked");
		});

		// create new trash button for delete it terget li(.todo-items)
		const trashBtn = document.createElement("button");
		trashBtn.classList.add("trash");
		trashBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
		div.appendChild(trashBtn);

		// grab the trash btn for delete Li
		trashBtn.addEventListener("click", () => {
			li.parentElement.remove();
		});

		todolist.appendChild(div);
		//clear the input field 
		input.value = "";
	}
});
