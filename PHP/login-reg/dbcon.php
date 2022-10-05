<?php 
//Come connettere un DB a PHP usando mysqli_connect

$db = "corso_php"; //Nome del database
$db_host = "localhost";//Server del database
$db_user = "root"; //Utente del DB
$db_password = "root"; //Password del'utente del DB

$db_con = mysqli_connect($db_host,$db_user,$db_password,$db);

if(!$db_con){
    echo "Errore connessione";
    exit;
}

?>