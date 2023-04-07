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
        }
        input {
            display: inline-block;
            height: 30px;
        }
        input[type='checkbox']{
            height: auto;
        }
        input[type='radio']{
            height: auto;
        }
        input[type='submit']{
            position:relative;
            left:85px;
        }
        select{
            width:85px;
            height: 30px;
        }
        
    </style>
</head>
<body>
    <h1>Registration Form</h1>
    <form action="Activity4-preview.php" method="POST">
        <label>Name:</label>
        <input type="text" name="name"> <br/><br/>
        <label>Username:</label> 
        <input type="text" name="username"> <br/><br/>
        <label>Password:</label> 
        <input type="password" name="password"> <br/><br/>
        <label>Address:</label>
        <input type="text" name="address"> <br/><br/>
        <label>Country:</label>
        <select name="country"> <br/><br/>
            <option value="England">England</option>
            <option value="USA" selected>USA</option>
            <option value="S.Korea">S.Korea</option>
            <option value="Germany">Germany</option>
        </select> <br/><br/>
        <label>ZIP Code:</label>
        <input type="text" name="zipcode"> <br/><br/>
        <label>Email:</label>
        <input type="email" name="email"> <br/><br/>
        <label>Sex:</label> 
        <input type="radio" name="sex[]" value="Male"> Male
        <input type="radio" name="sex[]" value="Female"> Female <br/><br/>
        <label>Language:</label> 
        English<input type="checkbox" name="language[]" value="English">   
        French<input type="checkbox" name="language[]" value="French">
        Germany<input type="checkbox" name="language[]" value="Germany"><br/><br/>
        <label>About:</label> 
        <textarea name="about" cols="30" rows="5"></textarea> <br/><br/>    
        <input type="submit" value="submit">
    </form>
</body>
</html>