<?php include('header1.php');?>
<?php include('conn.php');?>
<div class="c-main-content" role="main">
	<div class="content-separator"></div>
	<div class="yui3-g">
		<div class="yui3-u-1"></div>
	</div>
	<div class="yui3-g" style="background-color:#ccc;padding:20px;">
		<form action="login_processing.php" method="post">
			<div class="yui3-u-1">
				<div class="block-content c-general-content clearfix">
					<div class="paragraph clearfix">
						<h3>SPONSORSHIP LOGIN FORM</h3>	
					</div>
				</div>	
				<div class="row">
				 	<div class="small-12 medium-12 large-12 columns">
				 		<label>Username
							<input type="text" name="username" 
							style="height:35px;border-radius:2px;"/>
						</label>
				 	</div>
				</div>
				<div class="row">			 	
				 	<div class="small-12 medium-12 large-12 columns">
				 		<label>Password
							<input type="password" name="password" 
							style="height:35px;border-radius:2px;"/>
						</label>
				 	</div>
				</div>
				<input type="hidden" name="sponsor_id">
				<div class="row">
					<input type="submit" name="LOGIN" value="LOGIN">
				</div>
			</div>
		</form>
	</div>
</div>
<?php include('footer1.php');?>