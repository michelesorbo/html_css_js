<!DOCTYPE html>
<html>
    <head>
        <title>Prima PHP</title>
    </head>
    <body>
        <h1>Sono il PHP</h1>

        <ul>
        
        <?php //Inizio codice
            $pwd = 1234;
            for($i = 0; $i <= 10; $i++){
                echo "<li>". $i ."</li>";
            }

            echo "<li>".$pwd."</li>";


        //Fine codice ?>
        </ul>
    </body>
</html>