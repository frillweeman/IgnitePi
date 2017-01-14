<?php
    session_start();
    
    $_SESSION["pin"] = $_POST["pin"];
    system("gpio mode " . $_SESSION["pin"] . " out", $returnval);

    if ($returnval == 0) {
        echo $_SESSION["pin"];
    } else {
        echo -1;
    }
?>