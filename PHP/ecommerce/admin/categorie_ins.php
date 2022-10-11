<?php
session_start();
if($_SESSION['logged'] == false){
  header('Location: ../login.php');
}
include("../dbcon.php");
?>
<?php include("layout/head.php"); ?>
<body>
    
<?php include("layout/header.php"); ?>

<div class="container-fluid">
  <div class="row">
    <?php include("layout/menu.php"); ?>

    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Inserisci Categoria</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group me-2">
            <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
          </div>
          <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
            <span data-feather="calendar" class="align-text-bottom"></span>
            This week
          </button>
        </div>
      </div>

      <h2>Section title</h2>
      <form method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Nome Categoria</label>
            <input type="text" name="nome_cat" class="form-control" id="exampleFormControlInput1">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Descrizione</label>
            <textarea class="form-control" name="desc" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div class="mb-3">
            <input type="submit" value="Inserisci">
        </div>
    </form>
    <?php
    //Faccio la query di inserimento se invio i dati
    if(isset($_POST["nome_cat"])){
       $query = "INSERT INTO categorie VALUES (NULL, '".$_POST['nome_cat']."', '".$_POST["desc"]."')";
       $result = $db_con->query($query);

       if($result){
        echo '<div class="alert alert-success" role="alert">Categoria inserita</div>';
        }else{
            echo "Problemi in fase di registrazione";
        }
    }
    ?>

    <div>Vedo la tabella delle categoria presenti
    <table class="table table-hover">
    </table>
    </div>
    </main>
  </div>
</div>


 <?php include("layout/footer.php"); ?>
