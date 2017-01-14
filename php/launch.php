<?php
    session_start();
    
    system("gpio write " . $_SESSION["pin"] . " 1 && sleep 2 && gpio write "  . $_SESSION["pin"] . " 0");
?>