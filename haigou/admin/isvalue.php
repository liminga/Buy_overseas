<?php
/*
接收一个value值，这个value值是表单中的列名,
根据这个value,在mysql中查询，如果有这个值，返回一个false,没有则返回一个true

*/	
	$keyName = $_POST["keyName"];
	$keyValue = $_POST["keyValue"];
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
	
	
	$formNames = array();
	$bool = false;
	
	if ($len>0) {
		for ($i=0;$i<$len;$i++) {
			$formNames[$i] = mysqli_fetch_array($result)[$keyName];
		}
 	};
 	for ($i=0;$i<$len;$i++) {
 		if ($keyValue == $formNames[$i] ) {
 			$bool = true;
 			break;
 		}else{
 			$bool = false;
 		}
 	}
 	echo json_encode($bool);
 	mysqli_free_result($result);
	$conn->close();
?>