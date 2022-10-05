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

// echo $_POST["email"];
// echo md5($_POST["pwd"]);

$result = $db_con->query("SELECT * FROM utenti WHERE email = '".$_POST["email"]."'");

if($result->num_rows > 0){
    $row = $result->fetch_array();
    echo $row['pwd'];
}

// if(strtolower($_POST['email']) == $user['user_name'] && (int)$_POST['pwd'] == $user['password']){
//     echo "Benvenuto";
// }else{
//     echo "Login Errato";
// }

?>