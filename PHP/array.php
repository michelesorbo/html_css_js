<?php

$animali = array("cane", "gatto", "squalo"); //Tramite oggetto

echo $animali[0]; //Stampo il primo elemento

echo "<br>";

echo count($animali); //Conta il numero di elementi

//Stampare tutti gli elementi di un array con il for
for($i = 0; $i < count($animali); $i++){
    echo "<br>" . $animali[$i];
}

$alunni = ["Luca", "Giovanni"];

echo $alunni[0]; //Vecchia

//Array Associativi
$alunno = array( //Tramito oggetti
    'nome' => "Luca",
    'cognome' => "Rossi",
    100 => "ok"
);


$alunno2 = [
    'Nome' => "Giovanni",
    'Cognome' => "Verdi"
];

echo $alunno2['Nome'];


$user = [
    'user_name' => "Spyke",
    'password' => 1234
];

echo "<br>";
foreach( $user as $al){
    echo $al;
}

?>