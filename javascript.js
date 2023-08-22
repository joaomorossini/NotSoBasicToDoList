var userInput = document.getElementById("userInput");
var submitInput = document.getElementById("submitInput");
var taskList = document.querySelector("#taskList");
var deleteAllTasks = document.querySelector("#deleteAllTasks");
var colorPicker = document.querySelector("#colorPicker");
var deleteSelected = document.querySelector("#deleteSelected");
var checkBoxes = document.getElementsByClassName("checkBox");
var tasks = taskList.children;

function inputLenght () {
	return userInput.value.length;
};

//Delete selected tasks - Forward loop
// deleteSelected.onclick = function () {
// 	let listLength = taskList.children.length;
// 	for (let i = 0; i <= listLength; i++) {
// 		if ( checkBoxes[i].checked === true ) {
// 			checkBoxes[i].parentElement.parentElement.remove();
// 			listLength = listLength + 1;
// 		}
// 	}
// };

//Delete selected tasks - Reverse loop
deleteSelected.onclick = function () {
	for (let i = taskList.children.length - 1 ; i>0 ; i--) {
		if (tasks[i].checked === true) {
			tasks.Items.removeAt(i);
		}
	}
};

function addTask () {

	//Criar novo div
	var thirdDiv = document.querySelector("#thirdDiv");
	var newDiv1 = document.createElement("div");	
	var newDiv2 = document.createElement("div");
	newDiv2.className = "newDiv2";
	newDiv1.className = "newDiv1";

	//Adicionar tarefa à lista de tarefas
	var newTask = document.createElement("li");
	newTask.className = "taskPending";
	newTask.appendChild(document.createTextNode(userInput.value));

	//Marcar tarefa como concluída
	newTask.onclick = function() {
		if (newTask.className === "taskPending") {
			newTask.className = "taskDone";
		}
		else {
			newTask.className = "taskPending";
		};

	};

	//Criar check-box para cada tarefa
	var checkBox = document.createElement("input");
	checkBox.type = "checkBox";
	checkBox.className = "checkBox";


	// Append children
	newDiv2.appendChild(checkBox);
	newTask.appendChild(newDiv2);
	newDiv1.appendChild(newTask);
	taskList.appendChild(newDiv1);

	//Criar botão delete para cada tarefa
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete"));
	newDiv2.appendChild(deleteButton);

	//Apagar texto após criar nova tarefa
	userInput.value = "";

	//Botão para deletar tarefa especifica
	deleteButton.onclick = function deleteTask () {
		newTask.remove();
	};
		newDiv1.style.backgroundColor = colorPicker.value ;


};




submitInput.addEventListener("click" , function () {
	if (inputLenght () > 0) {
		addTask ();
	}
	else {
		alert("The task must be described before submiting");
	}
});


userInput.addEventListener("keypress" , function (event) {
	if ( inputLenght () > 0 && event.which === 13 ) {
		addTask ();
	}
	else if ( event.which === 13 ) {
		alert("The task must be described before submiting");
	}
});


deleteAllTasks.addEventListener("click" , function deleteTaskList() {
	taskList.innerHTML = "";
});