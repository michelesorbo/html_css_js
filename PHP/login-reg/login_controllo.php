<?php
include "dbcon.php";

$email = trim(strtolower($_POST['email']));
$pwd = md5($_POST['pwd']);

$result = $db_con->query("SELECT * FROM utenti WHERE email = '$email'"); //Creo ed eseguo la query

$row = $result->fetch_array(); //Serve a salvare il risultato della query come un array associativo

if($row['email'] == $email && $row['pwd'] == $pwd){
    echo "Benvenuto";
}else{
    header('Location: login.php?msg=1');
}



?>