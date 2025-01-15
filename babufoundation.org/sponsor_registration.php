<?php include('header1.php');?>
<div class="c-main-content" role="main">

<div class="content-separator"></div>
<div class="yui3-g">
	<div class="yui3-u-1"></div>
</div>
	<div class="yui3-g">
		<div class="yui3-u-1">
			<div class="block-content c-general-content clearfix">
				<div class="paragraph clearfix">
					<h3>SPONSORSHIP REGISTRATION FORM</h3>	
				</div>
			</div>	
			<form enctype="multipart/form-data" 
				action ="sponsor_registration_processing.php" method ="post"
				onsubmit="return validate()" name="myForm">	
			<div class="row">
			 	<div class="small-12 medium-6 large-6 columns">
			 		<label>First Name
						<input type="text" name="first_name" 
						style="height:35px;border-radius:2px;"/>
					</label>
			 	</div>
			 	<div class="small-12 medium-6 large-6 columns">
			 		<label>Last Name
						<input type="text" name="last_name"
						style="height:35px;border-radius:2px;"/>
					</label>
			 	</div>
			</div>
			<div class="row">
			 	<div class="small-12 medium-6 large-6 columns">
			 		<label>Province
						<input type="text" name="province" 
						style="height:35px;border-radius:2px;"/>
					</label>
			 	</div>
			 	<div class="small-12 medium-6 large-6 columns">
			 		<label>Country
						<input type="text" name="country" 
						style="height:35px;border-radius:2px;"/>
					</label>
			 	</div>
			</div>
			<div class="row">
			 	<div class="small-12 medium-6 large-6 columns">
			 		<label>Phone Number
						<input type="text" name="phone" 
						style="height:35px;border-radius:2px;"/>
					</label>
			 	</div>
			 	<div class="small-12 medium-6 large-6 columns">
			 		<label>Email
						<input type="text" name="email" 
						style="height:35px;border-radius:2px;"/>
					</label>
			 	</div>
			</div>
			<div class="row">
			 	<div class="small-12 medium-6 large-6 columns">
			 		<label>Username
						<input type="text" name="username" 
						style="height:35px;border-radius:2px;"/>
					</label>
			 	</div>
			 	<div class="small-12 medium-6 large-6 columns">
			 		<label>Password
						<input type="password" name="password" 
						style="height:35px;border-radius:2px;"/>
					</label>
			 	</div>
			</div>
			<div class="row">
				<input type="submit" name="Submit" value="REGISTER">
			</div>
		</form>
		</div>
	</div>
</div>
<?php include('footer1.php');?>