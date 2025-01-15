<?php include('header1.php');?>
<?php include('conn.php');?>
	<?php if(isset($_GET['submit'])):
 		$children_id = $_GET['children_id'];
 		$sponsor_id = $_GET['sponsor_id'];

  	?>
  		<?php
    	 	$select = "SELECT * FROM children where children_id =$children_id";
    	 	$result = mysqli_query($connection,$select);
    	 	while($row = mysqli_fetch_array($result)):
     	?>
     	<div class="row" style="margin:40px 0px;">	
     		<div class="small-4 columns">
				<img src="<?php echo 'childphotos/'.$row['photo'];?>" style="float:right;padding:0;width: 200px;height:200px;">		
			</div>
			<div class ="small-8 columns">
				<table border="0" width="100%">
					<tr>
						<td class="paragraphs">
							<b>Name:</b>
						</td>
						<td class="paragraphs">
							<?php echo $row['c_name'];?>
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
				<form action="insert_child.php" method="get">
					<input type="hidden" name="sponsor_id" 
							value="<?php echo $sponsor_id; ?>">
					<input type="hidden" name="children_id" 
						value="<?php echo $children_id; ?>">
					<input type ="submit" value ="Sponsor Now" name="submit" 
					style ="float:right;margin-top:20px;color:#000;padding:10px 30px;
					background-color: red;color:#fff;">
					<a href="sponsor_dashboard.php" class="button">Cancel</a>
				</form>				
			</div>
		</div>
     <?php endwhile; ?>
  <?php endif; ?>
<?php include('footer1.php');?>