<?php
/*
接收一个value值，这个value值是表单中的列名,
根据这个value,在mysql中查询，如果有这个值，返回一个false,没有则返回一个true

*/	
	// $keyName = $_POST["keyName"];
	// $keyValue = $_POST["keyValue"];
	// // 连接数据库
	// $keyValue = "xjp113";
	
	$conn=mysqli_connect("localhost","root","");
	if(!$conn){
		die("连接失败:".mysql_connect_error());
	};
	// 选择数据库
	mysqli_select_db($conn,"xjp");
	// 返回数据表中的数据
	$sql_select="select * from registry";
	// 返回结果集
	$result=mysqli_query($conn,$sql_select);

	// // 结果集的长度;
	$len = mysqli_num_rows($result);
	
	
	$xjp_form_info = array();
	$bool = false;
	
	if(mysqli_num_rows($result)>0){
		$i=0;
		while($row=mysqli_fetch_array($result)){

			$str = "{"."username:".$row[0].",password:".$row[1].",tel:".$row[2].",email:".$row[3].",sex:".$row[4]."}";
			$xjp_form_info[$i] = $row;
			$i++;
		}
		
 	
 	};
 

	// echo $xjp_form_info;
 	// echo json_encode($xjp_form_info);
 	mysqli_free_result($result);
	$conn->close();
	$myfile = fopen("login.json", "w") or die("Unable to open file!");
	$txt = json_encode($xjp_form_info);
	fwrite($myfile, $txt);
	fclose($myfile);
?>