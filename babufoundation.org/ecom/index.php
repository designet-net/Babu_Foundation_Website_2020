<?php
include 'includes/session.php'; ?>
<?php include 'includes/header.php'; ?>
<body class="hold-transition skin-blue layout-top-nav">
<div class="wrapper">

	<?php include 'includes/navbar.php'; ?>
	 
	  <div class="content-wrapper">
	    <div class="container">

	      <!-- Main content -->
	      <section class="content">
	        <div class="row">
	        	<div class="col-sm-12 col-md-12 col-lg-12">
	        		<?php
	        			if(isset($_SESSION['error'])){
	        				echo "
	        					<div class='alert alert-danger'>
	        						".$_SESSION['error']."
	        					</div>
	        				";
	        				unset($_SESSION['error']);
	        			}
	        		?>
		            <h2>Support the vulnerable, buy an artpiece!</h2>
		            <p style="font-size: 16px;">
		            	Ivan is volunteer at Babu Foundation, he takes an effort to support the organisation by designing 
		            	art pieces. These art pieces are sold and the little money that is got is used to provide for the needs of the beneficiaries. <br>
		            	When you buy an artpiece, you help lay a hand to the vulnerable. 
		            </p>
                    <div class='col-sm-4'>
                      <div class='box box-solid'>
                        <div class='box-body prod-body'>
                          <img src='images/1.jpg' width='100%' height='260px' class='thumbnail'>
                        </div>
                      </div>
                    </div>
                  <div class='col-sm-4'>
                      <div class='box box-solid'>
                        <div class='box-body prod-body'>
                          <img src='images/21.jpg' width='100%' height='260px' class='thumbnail'>
                        </div>
                      </div>
                    </div>
                  <div class='col-sm-4'>
                      <div class='box box-solid'>
                        <div class='box-body prod-body'>
                          <img src='images/17.jpg' width='100%' height='260px' class='thumbnail'>
                        </div>
                      </div>
                    </div>
	        	</div>	        	
	        </div>
	      </section>
	     
	    </div>
	  </div>
  	<?php include 'includes/footer.php'; ?>
</div>
<!-- Including the javascript -->
<?php include 'includes/scripts.php'; ?>
</body>
</html>