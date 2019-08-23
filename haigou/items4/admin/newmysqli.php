<?php
	//  连接Mysql
	$servername="localhost";
	$username="root";
	$password="";
	$conn = new mysqli($servername,$username,$password);
	if ($conn->connect_error) {
		die("连接失败".$conn->connect_error);
	};
	echo "连接成功";

	// 创建数据库
	$sql = "CREATE DATABASE XJP";
	if ($conn->query($sql) === TRUE) {
   		 echo "数据库创建成功";
	} else {
   		 echo "Error creating database: ".$conn->error;
	}

	// $conn = mysqli_connect($servername, $username, $password, xjp);//错误的方式 
	$conn->close();


?>
