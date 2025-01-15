<?php include("conn.php"); ?>
<?php if(isset($_POST['LOGIN'])): ?>
<?php 
	//1. Testing username and password
	$username = $_POST['username'];
	$password = md5($_POST['password']);
	$select = "SELECT * FROM sponsors WHERE username = '$username' AND password = '$password'";
	$result = mysqli_query($connection, $select);
	while($row = mysqli_fetch_array($result)){		
		$db_username = $row['username'];
		$db_password = $row['password'];
		$sponsor_id  = $row['sponsor_id'];
	}
	if($username == $db_username && $password == $db_password){	
		session_start();
   		$_SESSION['username'] = $username;
   		$_SESSION['sponsor_id'] =$sponsor_id;
		header('Location: sponsor_dashboard.php');		
	}
	else
		echo "Login failed, check your username and password!<b> 
            <a href='sponsor_login.php'><span>Login Again!</span></a></b>";   
	
 ?>
<?php endif; ?>
