<?php include('header1.php');?>
<div class="row">
    <div class="small-12 medium-12 large-12 columns" 
        style="padding:50px;margin:50px 0px;">
        <?php 
        if(isset($_POST["Submit"])){
            $first_name     = $_POST['first_name'];
            $last_name      = $_POST['last_name'];
            $province       = $_POST['province'];
            $country        = $_POST['country'];
            $phone          = $_POST['phone'];
            $email          = $_POST['email'];
            $username       = $_POST['username'];
            $password       = md5($_POST['password']);
            $insert_sponsor = "INSERT INTO sponsors(first_name, last_name, province, country, phone, email, username, password) VALUES ('$first_name', '$last_name', '$province', '$country', '$phone', '$email', '$username', '$password')";  
            $insert_sponsor_query = mysqli_query($connection,$insert_sponsor);
            if(!$insert_sponsor_query){   
               echo "Sponsor Not Registered<b> 
               <a href='sponsor_registration.php'>
               <span>Click Here to Try again</span></a></b>".mysqli_error();
            }
            else
               echo "Sponsor Succesfully Registered!<b> 
               <a href='sponsor_login.php'><span>Login To Your Account</span></a></b>";          
            }   
        ?>
    </div>
</div>
<?php include('footer1.php');?>    