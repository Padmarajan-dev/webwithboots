<?php 
include "connection.php";
if(isset($_POST['sav']))
{
	$da=$_POST['data'];
	//$le=sizeof($da);
	foreach($da as $key=>$va) {
		$na=$da['name'];
		$te=$da['tech'];
		$exp=$da['exp'];
		$rno=$da['rno'];
		$stn=$da['sname'];
		$year=$da['year'];
		$age=$da['Age'];
		$le=sizeof($na);
		}
		for($i=0;$i<$le;$i++)
		  {
             	$qu="insert into multitab(Name,tech,exp,rno,stname,year,age)values('$na[$i]','$te[$i]','$exp[$i]','$rno[$i]','$stn[$i]','$year[$i]','$age[$i]')";
	mysqli_query($con,$qu);
		  }
		   
}
               
?>
<!DOCTYPE html>
<html>
<head>
	<title>Multi Dimensional</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
</head>
<body>
	<section class="container">
		<form action="multidforeach.php" method="post">
			<table class="table table-dark table-bordered table-striped" id='t1'>
				<thead>
					<tr>
						<td>Select</td>
						<td>Name</td>
						<td>Tech</td>
						<td>EXP</td>
					</tr>
				</thead>
				<tbody>
					<tr>
					</tr>
				</tbody>
			</table>
			<table class="table table-dark table-bordered table-striped" id='t2'>
				<thead>
					<tr>
						<td>rno</td>
						<td>student</td>
						<td>year</td>
						<td>Age</td>
					</tr>
				</thead>
				<tbody id="tb1">
					<tr>
					</tr>
				</tbody>
			</table>
			<button type="submit" class="btn btn-info"name="sav">Save</button>
			<button type="button" class="btn btn-success" name="sav" id="add">Add</button>
			<button type="button" class="btn btn-danger" name="sav" id="del">Del</button>
		</form>
	</section>
	<div id="res">
		<?php
		?>
	</div>
	<script type="text/javascript">
		$("#add").click(function()
		{
			var html;
			html+="<tr>";
			html+="<td><input type='checkbox' name='req'></td>";
			html+="<td><input type='text' name='data[name][]'></td>";
			html+="<td><input type='text' name='data[tech][]'></td>";
			html+="<td><input type='number' name='data[exp][]'></td>";
			html+="</tr>";
			$("#t1 tbody").append(html);
			var htm;
			htm+="<tr>";
			htm+="<td><input type='text' name=data[rno][]></td>";
			htm+="<td><input type='text' name=data[sname][]></td>";
			htm+="<td><input type='text' name=data[year][]></td>";
			htm+="<td><input type='text' name=data[Age][]></td>";
			htm+="</tr>";
			$("#tb1").append(htm);
					});
		$("#del").click(function()
		{
			$("table tbody input[type='checkbox']").each(function()
			{
				if($(this).is(":checked"))
				{

					$(this).parents("tr").remove();
				}
			});
		});
	</script>
</body>
</html>
