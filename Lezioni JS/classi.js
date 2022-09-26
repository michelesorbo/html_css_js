class Persona{
    //Costruttore
    constructor(nome, cognome){
        this.nome = nome;
        this.cognome = cognome;
        this._email = ""; 
        this.inidrizzo = "";
    }

    saluta() { //Funzione della classe
        console.log("La persona è: " + this.nome)
    }

    mostraNomeCompleto(){
        return this.nome + " " + this.cognome;
    }

    get email(){ //Ritorna la variabile mail
        return this._email;
    }
    set email(valore){
        var emailRegExp = /\w+@\w+\.\w{2,4}/i;
        if(emailRegExp.test(valore)){
            this._email = valore
        }else{
            console.log("Email non valida")
        }
    }
}

//Estendo la classe Persona
class Programmatore extends Persona {
    constructor(nome, cognome){
        super(nome, cognome);
        this.linguaggiconosciuti = [];
    }

    ling(){
        return this.linguaggiconosciuti;
    }

    saluta(){ //override del metodo saluta
        console.log("Il programmatore è: " +this.nome)
    }

}

class Docente extends Persona{
    constructor(nome, cognome){
        super(nome, cognome);
        this.materia = "";
    }
}

class ProJunior extends Programmatore{

}

//Associo una classe ad una variabile che diventerà oggetto della classe
var mario = new Persona("Mario", "Rossi") //Ho creato l'oggetto della classe
mario.saluta() //Metodo della classe

var fabio = new Persona("Fabio", "Billeri")
console.log(fabio.mostraNomeCompleto())

console.log(mario.mostraNomeCompleto())

//mario.email = "nuova@mail.it"
//console.log(mario.email)
mario.email = "mario@rossi.it"

console.log(mario.email)

//Creo un programmatore
var prog1 = new Programmatore("Francesco", "Solofra")
prog1.ling = ["Java", "JS"]
prog1.mostraNomeCompleto();
prog1.saluta();
fabio.saluta();