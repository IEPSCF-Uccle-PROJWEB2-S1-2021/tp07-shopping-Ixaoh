// Écrivez votre code JavaScript ici.

// Création des variables (Étape 2)
const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');


// Étape 3 - 11
button.onclick = function() {
  let myItem = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = 'Delete';
  list.appendChild(listItem);

  listBtn.onclick = function(e) {
    list.removeChild(listItem);
  }

  input.focus();
}


