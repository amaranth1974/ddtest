function handleDragStart(e) {
	this.style.opacity="0.5";
}

function handleDragOver(e) {
	// allows drop
	if (e.preventDefault) {
		e.preventDefault();
	}

	e.dataTransfer.dropEffect = "move";
	return false;
}

function handleDragEnter(e) {
	this.classList.add("over");
}

function handleDragLeave(e) {
	this.classList.remove("over");
}

function handleDrop(e) {
	// stop browser from redirecting
	if (e.stopPropagation) {
		e.stopPropagation();
	}

	return false;
}

function handleDragEnd(e) {
	[].forEach.call(cols, function (col) {
		col.classList.remove("over");
	});
}

var cols = document.querySelectorAll("#columns .column");
[].forEach.call(cols, function (col) {
	call.addEventListener("dragstart", handleDragStart, false);
	call.addEventListener("dragenter", handleDragStart, false);
	call.addEventListener("dragover", handleDragOver, false);
	call.addEventListener("dragleave", handleDragLeave, false);
	call.addEventListener("drop"), handleDrop, false);
	call.addEventListener("dragend"), handleDragEnd, false);
});
