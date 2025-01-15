<?php include('header1.php');?>
<div class="row">
    <div class="small-12 medium-12 large-12 columns" 
        style="padding:50px;margin:50px 0px;">
        <?php 
        if(isset($_GET["submit"])):
            $sponsor_id     = $_GET['sponsor_id'];
            $children_id    = $_GET['children_id']; 
            $update = ("UPDATE children SET sponsor_id = '$sponsor_id'
            WHERE children_id ='$children_id'"); 

            if(mysqli_query($connection, $update)){
                echo "Child registered under your sponsorship!<b> 
                <a href='sponsor_dashboard.php'><span>View the children you sponsor!</span></a></b>";
            } else {
                echo "ERROR: Could not update. ".mysqli_error($update);
            } 
        ?>
    <?php endif; ?>
    </div>
</div>
<?php include('footer1.php');?>  