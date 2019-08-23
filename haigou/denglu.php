<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<meta charset="UTF-8">
	<title>蘑菇街登录</title>
	<link rel="stylesheet" href="css/zhuce.css">
	<script type="text/javascript" src="js/jquery-3.2.1.js"></script>
	<script type="text/javascript" src="js/jQuery.checkForm.js"></script>
</head>
<body>
<!-- this is php check-->
	<!-- 普通登录 -->
	<canvas id="space"></canvas>

	<a href="#" id="warp">WARP SPEED</a>

	<div class="register" id="display2">
		<div class="register-right register-right-denglu">
			<span>
				<a href="javascript:;" class="title-denglu">普通登录</a>
				<a href="javascript:;" class="title-cdenglu"  id="method_1">手机无密码登录</a>
				<!-- <img src="img/mblogo.jpg" alt="手机登录二维码" id="method_2"> -->
			</span>
			
			<form action="denglu.php" method="post" name="user" id="user">
				<div class="li-2">
					<input type="text" class="span-denglu" name="tel" placeholder="  昵称/邮箱/密码" id="tel" value="">
					<span></span>
					<i></i>
				</div>
				<div class="input-tip">&nbsp;</div>
				<div class="li-2">
					<input type="password" class="span-denglu" name="password"  placeholder="  密码" id="password" value="">
					<span></span>
					<i></i>
				</div>
				<div class="input-tip">&nbsp;</div>
				<div>
					<label>
						<input type="checkbox" checked>
						<span>两周内自动登录</span>
					</label>
					<a href="javascript:;" id="denglu_a">忘记密码？</a>
					
				</div>
				<div class="submit-left">
					<input type="submit" value="登录" class="li-3-2-input">
				</div>
				<div class="a-left-denglu">
					<a href="javascript:;">海外手机登录</a>
					<a href="zhuce.php">新用户注册</a>
				</div>
			</form>
			<div class="a-right-denglu">
				<p>无需注册即可登录:</p>
				<div>
					<img src="img/qq.jpg" alt="">
					<img src="img/weixin.jpg" alt="">
					<img src="img/weibo.jpg" alt="">
				</div>
			</div>
		</div>
	</div>
<script type="text/javascript" src="js/login.js"></script>
<script type="text/javascript" src="js/xingkong.js"></script>
<?php
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
			// 获取表单数据
		// echo "this is ok";
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
		$conn = new mysqli("localhost","root","");
		if ($conn->connect_error) {
			die("连接失败".$conn->connect_error);

		};

		// 选择数据库
		mysqli_select_db($conn,"xjp");
		// 返回数据表中的数据
		$sql_select="select * from registry";
		// 返回结果集
		$result=mysqli_query($conn,$sql_select);
		// // 结果集的长度;
		

		// 查询
		
		$bool = false;

		if(mysqli_num_rows($result)>0){
	 		while($row=mysqli_fetch_assoc($result)){
	 			if ($row['tel'] == $form_tel && $row['password'] == $form_password) {
	 				
	 					$sex= $row['sex'];
						$bool = true;
	 			}
	 			
	 		}
	 	}
		
	 	mysqli_free_result($result);
		$conn->close();
		// echo $bool;
		if ($sex == "man") {
			$form_sex_encode = "先生";
		}else if ($sex == "woman") {
			$form_sex_encode = "女士";
		}
	if ($bool == true) {
?>
<div class="dialog">
			<!-- <div class="dialog-footer">
				<p >
						<a href="index.html">首页</a>
					</p>
			</div> -->
		</div>
		<div class="dialog-bg"></div>
		<script type="text/javascript">
			endTime(5);
			var telValue = <?php echo $form_tel;?>;
			var sexValue = <?php echo '"'.$form_sex_encode.'"';?>;
			localStorage.setItem("limingformtel",telValue);
			localStorage.setItem("limingformsex",sexValue);
			function endTime(time){
				// 倒计时
				alert("ok");
				var s = time;
				var interval =null;
				interval = setInterval(function(){
					s--;
					$(".time").text(s);
					if (s == 0){
						clearTimeout(interval);
						location.assign("index.html")
					}
				},1000);

				$("#post_btn").click(function(){
					clearTimeout(interval);
				})


				

			}

		</script>
<?php		
		} //判断$bool == true 的结尾 
		else{
?>
	<script>
		document.getElementsByClassName("input-tip")[0].innerHTML = "登陆名或者密码不正确";
	</script>
<?php
		}//判断$bool == false 的结尾 
	
	}	//这是php判断是表单是否提交的结尾
?>
</body>
</html>