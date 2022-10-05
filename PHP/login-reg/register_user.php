<?php
include "dbcon.php";

$email = trim(strtolower($_POST["email"]));
$pwd =  md5($_POST["pwd"]);
$nome = trim(strtolower($_POST["nome"]));
$cognome = trim(strtolower($_POST["cognome"]));

/*
    La quesry di inserimento è fatta in questo modo:
    INSERT INTO table_name (column1, column2, column3, ...)
        VALUES (value1, value2, value3, ...);
*/

//Controllo se la mail è presente nel DB con una SELECT FROM WHERE
$result = $db_con->query("SELECT * FROM utenti WHERE email = '$email'"); //Creo la mail nel DB

if($result->num_rows > 0){
    header('Location: register.php?msg=1');
}else{
    $result = $db_con->query("INSERT INTO utenti (email, pwd, nome, cognome) VALUES ('".$email."', '".$pwd."', '".$nome."', '".$cognome."')");

    if($result){
        echo "Utente registrato";
    }else{
        echo "Problemi in fase di registrazione";
    }
}
?>