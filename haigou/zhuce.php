<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<meta charset="UTF-8">
	<title>蘑菇街账号注册</title>
	<link rel="stylesheet" href="css/zhuce.css">
	<script type="text/javascript" src="js/jquery-3.2.1.js"></script>
	<script type="text/javascript" src="js/jQuery.checkForm.js"></script>
	
</head>
<body>
	<canvas id="space"></canvas>

	<a href="#" id="warp">WARP SPEED</a>

<?php
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
	
		// 获取表单数据
		$form_username = "";
		$form_password = $_POST["password"];
		$form_tel = $_POST["tel"];
		$form_email = null;
		$form_sex = "man";
		$form_sex_encode = "";
		if ($form_sex == "man") {
			$form_sex_encode = "先生";
		}else if ($form_sex == "woman") {
			$form_sex_encode = "女士";
		}
		

		// 连接数据库
		$conn = new mysqli("localhost","root","","xjp");
		if ($conn->connect_error) {
			die("连接失败".$conn->connect_error);

		};
		
		// 创建行
		$sql="INSERT INTO registry (username,password,tel,email,sex)  VALUE ('".$form_username."','".$form_password."','".$form_tel."','".$form_email."','".$form_sex."')";
		$sql_select="select * from registry";
		// 执行

		mysqli_query($conn,$sql);
		$result=mysqli_query($conn,$sql_select);//方式 二
		
		// 关闭数据库
		mysqli_free_result($result);
		$conn->close();
		
		

	}
?>

	<div class="register">
		<div class="register-right">
			<span>新用户注册</span>
			<form action="zhuce.php" method="post" name="user" id="user">
				<div class="li-1">
					<select name="country" id="country">
						<option value="中国">&nbsp;&nbsp;&nbsp;中&nbsp;&nbsp;国</option>
						<option value="美国">&nbsp;&nbsp;&nbsp;美&nbsp;&nbsp;国</option>
					</select>
					<input type="text" class="input" name="tel" id="tel" placeholder="  手机号码">
				</div>
				<div class="input-tip"></div>
				<div class="li-2">
					<span class="span">密&nbsp;&nbsp;&nbsp;&nbsp;码</span>
					<input type="password" class="input" placeholder="  密码" name="password" id="password" value="">
				</div>
				<div class="input-tip"></div>
				<div class="li-3">
					<span class="span">确认密码</span>
					<input type="password"  class="input" placeholder="  确认密码" id="passwordture">
				</div>
				<div class="input-tip"></div>
				<!-- <div class="li-3 text-left">
					<input type="text" class="li-3-input" placeholder="  验证码" id="str">
					<input type="submit" value="点击获取验证码" class="li-3-1-input"  id="verify">
				</div> -->
				<div class="submit-left">
					<input type="submit" value="立即注册" class="li-3-2-input" id="submit">
				</div>
				<div class="a-left">
					<input type="checkbox" id="checkbox" checked="">
					<span>我已阅读并且同意<a href="#">《蘑菇街网络服务使用协议》</a></span>
				</div>
			</form>
			<div class="a-right"><a href="denglu.php">《已有账号登陆</a></div>
		</div>
	</div>
<script src="js/zhuce2.js"></script>
<script type="text/javascript" src="js/xingkong.js"></script>
</body>
</html>