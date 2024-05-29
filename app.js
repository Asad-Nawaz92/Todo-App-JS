let getul = document.getElementById("ul");

function addtodo() {
  let inpEl = document.getElementById("inp");

  if (inpEl.value.trim() === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Input field cannot be empty!",
    });
    return;
  }

  let li = document.createElement("li");
  let liText = document.createTextNode(inpEl.value);
  li.appendChild(liText);
  getul.appendChild(li);
  inpEl.value = "";
  li.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-center",
    "align-items-center"
  );

  // ******* DELETE BTN *******
  let deletebtn = document.createElement("button");
  let deletebtnText = document.createTextNode("Delete");
  deletebtn.appendChild(deletebtnText);
  li.appendChild(deletebtn);
  deletebtn.setAttribute("onclick", "del(this)");

  // ****** EDIT BTN *******
  let editbtn = document.createElement("button");
  let editbtnText = document.createTextNode("Update");
  editbtn.appendChild(editbtnText);
  li.appendChild(editbtn);
  editbtn.setAttribute("onclick", "edit(this)");

  deletebtn.setAttribute("class", "btn btn-danger m-2");
  editbtn.setAttribute("class", "btn btn-info m-2");
}

function deleteall() {
  getul.innerHTML = "";
}

function del(e) {
  e.parentNode.remove();
}

function edit(e) {
  let li = e.parentNode.firstChild.nodeValue;

  Swal.fire({
    title: "Update Your Task",
    input: "text",
    inputLabel: "Your Task",
    inputValue: li,
    showCancelButton: true,
    confirmButtonText: "Update",
    cancelButtonText: "Cancel",
    inputValidator: (value) => {
      if (!value) {
        return "You need to write something!";
      }
    },
  }).then((result) => {
    if (result.isConfirmed) {
      e.parentNode.firstChild.nodeValue = result.value;
    }
  });
}
