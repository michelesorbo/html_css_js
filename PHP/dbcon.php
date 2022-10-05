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
}else{
    echo "Connessione ok <br>";
}

//Creiamo la nostra prima query
$query = "SELECT * FROM utenti"; //Scrivo la mia query di estrazione

$result = $db_con->query($query); //Vado a far eseguire la query e salvo il risultato nella variabile result
//$result = $db_con->query("SELECT * FROM utenti");
while($row = $result->fetch_array()){
    echo $row['id'] . " - " . $row['email'] . " - " . $row['pwd'] . "<br>";
}

$query = "SELECT * FROM utenti WHERE email = 'michele.sorbo@gmail.com'";

$result = $db_con->query($query);
echo "<br> utenti con email certa sono $result->num_rows";