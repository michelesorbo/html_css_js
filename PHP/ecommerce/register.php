<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registrazione Utente</title>
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
</head>
<body>
    <div class="container">
    <h1>Registrazione Nuovo utente</h1>
    
    <form method="post" action="register_user.php">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>

        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" name="pwd" required>
        </div>

        <div class="mb-3">
            <label for="exampleInputName" class="form-label">Nome</label>
            <input type="text" class="form-control" id="exampleInputName" name="nome" required>
        </div>

        <div class="mb-3">
            <label for="exampleInputCognome" class="form-label">Cognome</label>
            <input type="text" class="form-control" id="exampleInputCognome" name="cognome" required>
        </div>

        <div class="mb-3">
            <?php
                if(isset($_GET['msg'])){
                    echo "Utente già presente";
                }
            ?>
        </div>
        
        <button type="submit" class="btn btn-primary">Registrami</button>
    </form>
    </div>

<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
</body>
</html>