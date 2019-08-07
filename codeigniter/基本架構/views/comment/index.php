<div>
	<div>
		<h1>留言板</h1>	
	</div>
<?php 
	if($comment !== null){
		foreach ($comment as $data_item): 
?>
		
		<div class = "main">
					<p><?php echo $data_item['nickname'] ?></p>
<?php 
	endforeach;
	}
 ?>

		
		</div>
</div>

		