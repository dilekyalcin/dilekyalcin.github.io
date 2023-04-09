<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        label {
            display: inline-block;
            width: 80px;
            margin-left:20px;
        }
        input {
            display: inline-block;
            height: 20px;
        }
        select{
            height: 25px;
        }
        .submitBtn{
           text-align:right;
           width:500px;

        }
    </style>
</head>
<body>
    <form method="POST">
        <label>From:</label>
        <input type="text" name="from" id="from">
        <label>Currency:</label>
        <select name="currencyFrom">
            <option value="USD">US Dollar</option>
            <option value="CAD">Canadian Dollar</option>
            <option value="EUR">Euro</option>
        </select> <br> <br>
        <label>To: </label>
        <input type="text" name="to" id="to">
        <label>Currency:</label>
        <select name="currencyTo">
            <option value="USD">US Dollar</option>
            <option value="CAD">Canadian Dollar</option>
            <option value="EUR">Euro</option>
        </select> <br> <br>
        <div class="submitBtn">
        <input type="submit" name="submit" value="convert" />
        </div>

    </form>
</body>
</html>
<?php
$USD=array("USD"=> 1,"CAD"=> 1.36, "EUR"=>0.91);
$CAD=array("USD"=> 0.74,"CAD"=> 1, "EUR"=>0.68);
$EUR=array("USD"=> 1.10,"CAD"=> 1.47, "EUR"=> 1);

if (isset($_POST["submit"])) {
    if(isset($_POST["from"])){
        $from=intval($_POST["from"]);
        if($_POST["currencyFrom"]== "USD" && $_POST["currencyTo"]== "USD" ){
            $result = $from * $USD["USD"];
        }
        if($_POST["currencyFrom"]== "USD" && $_POST["currencyTo"]== "CAD" ){
            $result = $from * $USD["CAD"];
         }
         if($_POST["currencyFrom"]== "USD" && $_POST["currencyTo"]== "EUR" ){
            $result = $from * $USD["EUR"];
         }
         if($_POST["currencyFrom"]== "CAD" && $_POST["currencyTo"]== "CAD" ){
            $result = $from * $CAD["CAD"];
         }
         if($_POST["currencyFrom"]== "CAD" && $_POST["currencyTo"]== "USD" ){
            $result = $from * $CAD["USD"];
         }
         if($_POST["currencyFrom"]== "CAD" && $_POST["currencyTo"]== "EUR" ){
            $result = $from * $CAD["EUR"];
     
         }
         if($_POST["currencyFrom"]== "EUR" && $_POST["currencyTo"]== "EUR" ){
            $result = $from * $EUR["EUR"];
         }
         if($_POST["currencyFrom"]== "EUR" && $_POST["currencyTo"]== "CAD" ){
            $result = $from * $EUR["CAD"];
         }
         if($_POST["currencyFrom"]== "EUR" && $_POST["currencyTo"]== "USD" ){
            $result = $from * $EUR["USD"];
         }
         echo "<script>
                document.getElementById('from').value = $from;
                document.getElementById('to').value = $result;
            </script>";
    }
   
}


?>