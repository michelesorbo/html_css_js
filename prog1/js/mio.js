let qta = document.querySelectorAll(".qta");
let prezzi = document.querySelectorAll("#prezzo");

console.log(qta);
console.log(prezzi);

qta.forEach((el, index) => {
    //console.log(el.value);
    el.addEventListener("change", function(e){
        //console.log("Valore: "+el.value + " Indice:" +index + " Il prezzo è: " + prezzi[index].textContent);
        let old_pr = prezzi[index].textContent;
        console.log(old_pr.slice(old_pr.indexOf("€")+1));
        prezzi[index].innerHTML = "€" + (Number(old_pr.slice(old_pr.indexOf("€")+1)) * Number(el.value));
    });
});
