<?php
	$servername="localhost";
	$username="root";
	$password="";
	$conn = new mysqli($servername,$username,$password,"xjp");
	if ($conn->connect_error) {
		die("连接失败".$conn->connect_error);
	};
	echo "连接成功";

	// 创建表：
	// mysqli_select_db($conn, "xjp");
	$sql="CREATE TABLE registry(
		username VARCHAR(30) NOT NULL, 
		password VARCHAR(30) NOT NULL, 
		tel VARCHAR(30) NOT NULL,
		email VARCHAR(50),
		sex VARCHAR(50)
		
	)";
	if (mysqli_query($conn,$sql)) {
		echo "数据表创建成功";
	}else{
		echo mysqli_error($conn);
	}

	

	$conn->close();
?>