<?php
	// 连接数据库
	$servername="localhost";
	$username="root";
	$password="";
	$conn=mysqli_connect($servername,$username,$password);
	if(!$conn){
		die("连接失败:".mysql_connect_error());
	};
	// 选择数据库
	mysqli_select_db($conn,"xjp");
	// 返回数据表中的数据
	$sql_select="select * from registry";
	// 返回结果集
	$result=mysqli_query($conn,$sql_select);

	// 结果集的长度;
	$len = mysqli_num_rows($result);
	
	$usernames = array();
	
	if ($len>0) {
		for ($i=0;$i<$len;$i++) {
			$usernames[$i] = mysqli_fetch_array($result)["username"];
		}
 		echo json_encode($usernames);
 	};
 	
 	mysqli_free_result($result);
	$conn->close();
?>