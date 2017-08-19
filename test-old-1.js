// drag and drop handlers

function handleDragstart(evt) {
	console.log("dragstart");

	// add the target element's id to the data transfer object
	evt.dataTransfer.setData("text/plain", evt.target.id);
	evt.dataTransfer.dropEffect = "move";
}

function handleDragenter(evt) {
	console.log("dragenter");
}

function handleDragover(evt) {
	console.log("dragover");

	evt.preventDefault();
	evt.dataTransfer.dropEffect = "move";
}

function handleDragleave(evt) {
	console.log("dragleave");
}

function handleDrag(evt) {
	console.log("drag");
}

function handleDrop(evt) {
	console.log("drop");

	evt.preventDefault();
	// get the id of the target and add the moved element to the target's DOM
	var data = evt.dataTransfer.getData("text");
	evt.target.appendChild(document.getElementById(data));
}

function handleDragend(evt) {
	console.log("dragend");
}


// jquery
// enable drag and drop
$(document).ready(function() {
	$(".imgPane").draggable();
});


// testing functions

function test1() {
	// query selector test
	var panes = document.querySelector(".pane");
	var panesAll = document.querySelectorAll(".pane");

	console.log("querySelector:");
	console.log(panes);

	console.log("querySelectorAll:");
	console.log(panesAll);
	console.log(panesAll.length);
	console.log(panesAll[0].id);
}

function test2() {
}

function test3() {
}
