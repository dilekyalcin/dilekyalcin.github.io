<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
if (!empty($_POST["name"])) {
    echo $_POST["name"] . "<br>";
} else {
    echo "Name: Not Provided<br>";
}

if (!empty($_POST["username"])) {
    echo $_POST["username"] . "<br>";
} else {
    echo "Username: Not Provided<br>";
}

if (!empty($_POST["password"])) {
    echo $_POST["password"] . "<br>";
} else {
    echo "Password: Not Provided<br>";
}

if (!empty($_POST["address"])) {
    echo $_POST["address"] . "<br>";
} else {
    echo "Address: Not Provided<br>";
}

if (!empty($_POST["country"])) {
    echo $_POST["country"] . "<br>";
} else {
    echo "Country: Not Provided<br>";
}

if (!empty($_POST["zipcode"])) {
    echo $_POST["zipcode"] . "<br>";
} else {
    echo "ZIP Code: Not Provided<br>";
}

if (!empty($_POST["sex"])) {
    for($i=0;$i<sizeof($_POST['sex']);$i++){
        echo ($_POST['sex'][$i]) . "<br>";
    }
} else {
    echo "Sex: Not Provided<br>";
}

if (!empty($_POST["language"])) {
    for($i=0;$i<sizeof($_POST['language']);$i++){
        echo ($_POST['language'][$i]) . "<br>";
    }
} else {
    echo "Language: Not Provided<br>";
}

if (!empty($_POST["about"])) {
    echo $_POST["about"] . "<br>";
} else {
    echo "About: Not Provided<br>";
}
?>
</body>
</html>