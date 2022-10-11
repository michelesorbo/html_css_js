<?php
session_start();
if($_SESSION['logged'] == false){
  header('Location: ../login.php');
}
?>
<?php include("layout/head.php"); ?>
<body>
    
<?php include("layout/header.php"); ?>

<div class="container-fluid">
  <div class="row">
    <?php include("layout/menu.php"); ?>

    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Base</h1>
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
      <div class="table-responsive">
        <p>Content here</p>
      </div>
    </main>
  </div>
</div>


 <?php include("layout/footer.php"); ?>
