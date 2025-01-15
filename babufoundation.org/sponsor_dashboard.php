<?php 
	session_start();
	$username 	= $_SESSION['username'];
	$sponsor_id = $_SESSION['sponsor_id'];
?>
<?php include('header1.php');?>
<?php include('conn.php');?>
<div class="c-main-content" role="main">
	<div class="content-separator"></div>
	<div class="yui3-g">
		<div class="yui3-u-1"></div>
	</div>
	<div class="yui3-g">
		<div class="yui3-u-1">
			<div class="block-content c-general-content clearfix">
				<div class="paragraph clearfix">
					<h3>SPONSORS DASHBORD</h3>	
				</div>
			</div>				
			<div class = "row">
				<h3>The child(ren) not yet sponsored</h3>	
				<div class ="small-12 medium-12 large-12 columns" 
					style="margin-top:20px;">					
					  		<?php
					    	 $select = 
					    	 "SELECT * FROM children WHERE sponsor_id = 0";
					    	 $result = mysqli_query($connection,$select);
					    	 while($row = mysqli_fetch_array($result)):
					     	?>	
					     	<form action="view_a_child.php" method="get">
								<input type="hidden" name="sponsor_id" 
								value="<?php echo $sponsor_id; ?>">
						  		<div class="row" style="margin:40px 0px;">
						     		<div class="small-4 columns" style="margin-bottom:20px;">
										<img src="<?php echo 'childphotos/'.$row['photo'];?>" style="float:right;padding:0;width: 200px;height:200px;">		
									</div>
									<div class ="small-8 columns" style="margin-bottom:20px;">
										<table border="0" width="100%">
											<tr>
												<td class="paragraphs">
													<b>Name:</b>
												</td>
												<td class="paragraphs">
													<?php echo $row['c_name'];?>
													<input type="hidden" value="<?php echo $row['children_id'];?>" name="children_id">
												</td>
											</tr>
											<tr>
												<td class="paragraphs">
													<b>Age:</b>
												</td>
												<td class="paragraphs">
													<?php echo $row['age'];?>
												</td>
											</tr>
											<tr>
												<td class="paragraphs">
													<b>Class:</b>
												</td>
												<td class="paragraphs">
													<?php echo $row['class'];?>
												</td>
											</tr>
											<tr>
												<td class="paragraphs">
													<b>School:</b>
												</td>
												<td class="paragraphs">
													<?php echo $row['school'];?>
												</td>
											</tr>
											<tr>
												<td class="paragraphs">
													<b>Parent Status:</b>
												</td>
												<td class="paragraphs">
													<?php echo $row['parent_status'];?>
												</td>
											</tr>
										</table>			
									</div>
								</div>
								<div class="row">
									<div class="small-12 columns">
										<input type ="submit" 
										value ="Please Choose Me" style ="float:right;margin-top:20px;color:#000;" name="submit"> <br> <br>
										<hr style="margin:10px;">
									</div>
								</div>	
							</form>
							<?php endwhile;?>
				</div>
				<div class="row">
					<div class ="small-12 medium-12 large-12 columns" 
						style="margin-top:20px;">
						<h3>The child(ren) that you sponsor</h3>						
						<table border="1" width ="100%">
							<thead>
								<tr>									
									<th style="width:50%">
										Name
									</th>
									<th style="width:50%">
										Age
									</th>
								</tr>
								<?php
							    	 $select = "SELECT * FROM children WHERE sponsor_id = '$sponsor_id'";
							    	 $result = mysqli_query($connection, $select);
							    	 while($row = mysqli_fetch_array($result)):
							     	?>
								<tr>
							     	<td><?php echo $row['c_name']; ?></td>
							     	<td><?php echo $row['age']; ?></td>
							     	<td><?php echo $row['class']; ?></td>	
							     	<td><?php echo $row['school']; ?></td>	
								</tr>								
							    <?php endwhile;?> 
							</thead>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<?php include('footer1.php');?>