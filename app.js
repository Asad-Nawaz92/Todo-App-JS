
var getul = document.getElementById('ul')

function addtodo() {
    var a = document.getElementById('inp')
    var li = document.createElement('li')
    var liText = document.createTextNode(a.value)
    li.appendChild(liText)
    getul.appendChild(li)
    a.value = ''
    var deletebtn = document.createElement('button')
    var deletebtnText = document.createTextNode('Delete')
    deletebtn.appendChild(deletebtnText)
    li.appendChild(deletebtn)
    deletebtn.setAttribute('onclick', 'del(this)')
    var editbtn = document.createElement('button')
    var editbtnText = document.createTextNode('Update')
    editbtn.appendChild(editbtnText)
    li.appendChild(editbtn)
    editbtn.setAttribute('onclick', 'editfun(this)')
    deletebtn.setAttribute('class', 'btn btn-danger m-2')
    editbtn.setAttribute('class', 'btn btn-info m-2')
}

function deleteall() {
    getul.innerHTML = ''
}

function del(e) {
    e.parentNode.remove()
}

function editfun(e) {
    var userEdit = prompt('Enter Edit Value', e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = userEdit
}