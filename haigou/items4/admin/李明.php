<?php
	$servername="localhost";
	$username="root";
	$password="";
	// 1、面向过程创建连接
	$conn=mysqli_connect($servername,$username,$password);
	if(!$conn){
		die("连接失败:".mysql_connect_error());
	};
	// echo "连接成功";
	//2、mysql面向过程创建数据库
	// $sql="CREATE DATABASE tableweb8";
	// if(mysqli_query($conn,$sql)){
	// 	echo "数据库创建成功";
	// }else{
	// 	echo "数据库创建失败".mysqli_error($conn);
	// }
 // 3、选择数据库
 	mysqli_select_db($conn,"tableweb8");
 	// 创建数据表
 	// $sql = "CREATE TABLE web9(
 	// 	id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 	// 	name VARCHAR(30) NOT NULL,
 	// 	age VARCHAR(30) NOT NULL,
 	// 	email VARCHAR(50),
 	// 	reg_date TIMESTAMP
 	//  )";
 	// // 返回结果集
 	// mysqli_query($conn,$sql);
 	// // 函数选择数据库文件
 	// mysqli_select_db( $conn, 'web9' );
 	// if(mysqli_query($conn,$sql))
 	// {
 	//     echo "数据表创建成功";
 	// }else{
 	// 	echo mysqli_error($conn);
 	// }
 	// 4、插入数据
 // 	$sql1="INSERT INTO web8 (name,age,email) VALUES ('zhoubo','21','31312@qq.com')";
	// $sql2="INSERT INTO web8(name,age,email) VALUES ('yishiwei','22','dasdsa2@qq.com')";
	// $sql3="INSERT INTO web8 (name,age,email) VALUES ('xiaolong','21','weqe2@qq.com')";
 	// mysqli_select_db( $conn, 'tableweb8' );
 	// $retval = mysqli_query( $conn, $sql3 );
 	// if(! $retval )
 	// {
 	//   die('无法插入数据: ' . mysqli_error($conn));
 	// }
 	// echo "数据插入成功\n";
 	// 执行sql语句
 	// mysqli_query($conn,$sql1);
 	// mysqli_query($conn,$sql2);
 	// mysqli_query($conn,$sql3);
 	// 返回数据表中的数据
 	$sql_select="select * from web8";
 	$sql_select="select * from web8 where name='zhoubo'";//类是周波的
 	$sql_select="select * from web8 order by age desc";
 	// update和delete仅操作数据表中数据，而没有返回的结果集
 	// 修改数据库数据
 	// $sql_select="update mytable set firstname='zhao' where lastname='lei'";
 	// mysqli_query($conn,$sql_select);
 	// // 删除数据行
 	// $sql_select="delete from mytable where firstname='yu'";
 	// mysqli_query($conn,$sql_select);
 	// mysql_query()函数执行sql语句，返回结果集，输出arr对象
 	$result=mysqli_query($conn,$sql_select);
 	// 输出当前表格中的1、2数据数组长度
	// echo "</br>";
 // 	echo mysqli_num_rows($result);
	// echo "</br>";
 // 	print_r(mysqli_fetch_assoc($result));
 // 	echo "</br>";
 // 	print_r(mysqli_fetch_assoc($result));
 // 	echo "</br>";
 	// obj输出当前表格中的所有数据
 	// if(mysqli_num_rows($result)>0){
 	// 	while($row=mysqli_fetch_assoc($result)){
 	// 		print_r("<table><tr><td>".$row['name']."</td><td>".$row['age']."</td><td>".$row['email']."</td></tr></table>");
 	// 		echo "</br>";
 	// 	}
 	// }
 	// arr输出当前表格中的所有数据
 	if (mysqli_num_rows($result)>0) {
 		while ($row=mysqli_fetch_array($result)) {
 			print_r("<table><tr><td>".$row[1]."</td><td>".$row[2]."</td><td>".$row[3]."</td></tr></table>");
	 			echo "</br>";
 		}
 	}
 	// 关闭结果集
 	mysqli_free_result($result);
 	// 关闭服务器连接
 	mysqli_close($conn);
 	
?>