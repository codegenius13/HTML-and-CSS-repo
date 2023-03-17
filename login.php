<?php

@include 'config.php';

session_start();

if(isset($_POST['submit'])) {
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $pass = md5($_POST['password']);
    $cpass = md5($_POST['cpassword']);
    $user_type = $_POST['user_type'];

    $select2 = " SELECT * FROM login_form WHERE email = '$email' && password = '$pass'";
    $result2 = mysqli_query($conn, $select2);
    if(mysqli_num_rows($result2) > 0) {
       $row = mysqli_fetch_array($result2);
       if ($row['user_type'] == 'admin') {

          $_SESSION['admin_name'] = $row['name'];
          header('location:admin_page.php');

       }elseif ($row['user_type'] == 'user') {

            $_SESSION['user_name'] = $row['name'];
            header('location:user.php');
        }
    }else {
        $error[] = 'incorrect email or password';
    }
};
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form</title>
    <!-- Styles -->
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <div class="form-container">
        <form action="" method="post">
            <h3>Login Here</h3>
            <?php
            if (isset($error)) {
                foreach($error as $error){
                echo '<span class="error-msg">'.$error.'</span>';
                };
            }; 
            ?>
            <input type="email" name="email" required placeholder="Enter your email">
            <input type="password" name="password" required placeholder="Enter your password">
            <input type="submit" name="submit" value="Login now" class="form-btn">
            <p>Don't Have an Account? <a href="index.php">Register Now</a></p>
        </form>
    </div>
</body>
</html>