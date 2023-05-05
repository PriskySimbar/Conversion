function acc (form) {
    const item = document.getElementById ('first').value;
    const ul = document.getElementById ('list');
    const li = document.createElement ('li');
    li.appendChild (document.createTextNode (item));
    ul.appendChild (li);
    document.getElementById ('item').value = '';
}

function deletex () {
    const ul = document.getElementById ('list');
    
    ul.innerHTML = '';
}
