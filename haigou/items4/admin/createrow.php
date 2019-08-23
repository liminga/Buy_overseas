<?php
	// 连接数据库
	$servername="localhost";
	$username="root";
	$password="";
	$conn = new mysqli($servername,$username,$password,"xjp");
	if ($conn->connect_error) {
		die("连接失败".$conn->connect_error);
	};
	echo "连接成功";

	// 创建行
	$sql="INSERT INTO registry (username,password,tel,email,sex)  VALUE ('xjp103','web123','17773917504','290762142@qq.com','man')";

	// 返回数据表中的数据
	$sql_select="select * from registry";

	// 执行行
	mysqli_query($conn,$sql);//执行方式 一
	$result=mysqli_query($conn,$sql_select);//方式 二
	// 关闭结果集
	mysqli_free_result($result);
	$conn->close();
?>