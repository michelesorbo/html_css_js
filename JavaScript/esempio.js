const paragraph = document.querySelector('p');

paragraph.addEventListener('click', updateName);

function updateName(){
    let name = prompt('Inserisci un nuovo player');
    paragraph.textContent = 'Player 1: ' + name;
}