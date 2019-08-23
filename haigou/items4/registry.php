
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>注册表单验证demo</title>
	<!-- <script src="js/httpCacheutil.js"></script> -->
	<script src="js/HttpCacheutil-constructor.js"></script>
	<script>
			// httpCacheUtil.update("css/base.css");
   //      	httpCacheUtil.update("css/registry.css");
   //      	httpCacheUtil.update("js/registry.js");

   			new HttpCacheUtil().update("css/base.css")
   			new	HttpCacheUtil().update("css/registry.css");
   			new HttpCacheUtil().update("js/jQuery.checkForm.js");
        	new HttpCacheUtil().update("js/registry.js");
        	
	</script>
	<link rel="stylesheet" type="text/css" href="css/base.css" />
	<link rel="stylesheet" type="text/css" href="iconfont/iconfont.css" />
	<link rel="stylesheet" type="text/css" href="css/registry.css" />
	<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
	<script type="text/javascript" src="js/vue.js"></script>
	<script type="text/javascript" src="js/jQuery.checkForm.js"></script>
	
</head>
<body>
<?php
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
	
		// 获取表单数据
		$form_username = $_POST['username'];
		$form_password = $_POST["password"];
		$form_tel = $_POST["tel"];
		$form_email = $_POST["email"];
		$form_sex = $_POST["sex"];
		$form_sex_encode = "";
		if ($form_sex == "man") {
			$form_sex_encode = "先生";
		}else if ($form_sex == "woman") {
			$form_sex_encode = "女士";
		}
		// echo($form_username);

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
?>	
		<div class="dialog">
			<div class="dialog-header"><h1>注册成功</h1></div>
			<div class="dialog-body">
				<div class="dialog-body-title">
					尊敬的<span class=""> <?php echo $form_username;?></span>
					<span><?php echo $form_sex_encode;?></span>
					
				</div>
				<div class="dialog-body-content">
					<p>恭喜您：注册成功</p>
					<p>
						<!-- <?php
							echo "用户名:".$form_username."<br />";
							echo "手机号码:".$form_tel."<br />";
							echo "邮箱:".$form_email."<br />";

						?> -->
					</p>
					<p>请妥善保管好您的用户名,密码,用户名是您在本站的唯一标识</p>
					<p>本页面将在 <time class="time" >5</time>秒 后跳转到登陆页面 是否 <button type="button" id="post_btn">取消</button></p>
					
				</div>
			</div>
			<div class="dialog-footer">
				<p >
						<a href="index.html">首页</a>
						<a href="">登陆</a>
					</p>
			</div>
		</div>
		
		<div class="dialog-bg"></div>
		<script type="text/javascript">
			endTime(5)
			function endTime(time){
				// 倒计时
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

	}
?>
	<!-- this is header -->
	<header>
		<h1 class="document-msg">

			<a href="index.html"><img class="logo" src="img/xiaojinping.png" alt=""></a>
			<span>我是肖金平，大家的肯定是我最大的满意，希望能与大家的一起携手共行</span>
			
		</h1>
	</header>
	<!-- End header -->
	<!-- this is nav -->
	
	<!-- End nav -->
	<!-- this is content -->
	<div class="content">
		<form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="post"  id="liming_form" class="checkform-demo">
			<div>
				<h2 class="form-title">这里是XJP智库,欢迎加入我们 <span class="iconfont icon-yonghu"></span></h2>
				<h2 class="form-chaos">html css php node vue.js bootstrap php javaklasdfsd siadfuyespdsfds</h2>
			</div>
			<div class="form-group">
				<label for="username" class="x-input-control">用户名</label>
				<input type="text" id="username" name="username" value="" placeholder="请输入您的用户名,这是您在本站的唯一标识,不可更改" />
				<i class="input-correct iconfont icon-zhengque"></i>
			</div>
			<div class="input-tip"></div>
			<div class="form-group">
				<label for="password" class="x-input-control">密码</label>
				<input type="password" id="password" name="password" value="" placeholder="设置密码" />
				<i class="input-correct iconfont icon-zhengque"></i>
			</div>
			<div class="input-tip"></div>
			<div class="form-group" >
				<label for="confirm_password" class="x-input-control">确认密码</label>
				<input type="password" id="confirm_password" name="confirm-password" value="" placeholder="确认密码" />
				<i class="input-correct iconfont icon-zhengque"></i>
			</div>
			<div class="input-tip"></div>
			<div class="form-group">
				<label for="tel" class="x-input-control">手机认证</label>
				<input type="text" id="tel" name="tel" value="" placeholder="请输入您的手机号码" />
				<i class="input-correct iconfont icon-zhengque"></i>
			</div>
			<div class="input-tip"></div>
			<div class="form-group">
				<label for="email" class="x-input-control">邮箱认证</label>
				<input type="text" id="email" name="email" value="" placeholder="请输入您的手机号码" />
				<i class="input-correct iconfont icon-zhengque"></i>
			</div>
			<div class="input-tip"></div>
			<div class="form-group border-none" >
				<span  class="x-input-control">性别</span>
				<div class="x-input-group">
					<label for="man" class="right-label">
						<input type="radio" name="sex" id="man" value="man" checked>男
					</label>
					<label for="woman" class="right-label">
						<input type="radio" name="sex" id="woman" value="woman">女
					</label>
					<i class="input-correct iconfont icon-zhengque"></i>
				</div>
				
			</div>
			<div class="input-tip"></div>
			<div class="form-group border-none" >
				<div class="x-input-group">
					<input type="radio" name="agree" id="agree" value="agree" checked>是否同意本协议
					<i class="input-correct iconfont icon-zhengque"></i>
				</div>
				
			</div>
			<div class="input-tip"></div>
			<div class="form-group">
				<input type="submit" value="提交" >
			</div>
		</form>
	</div>
	<!-- End content -->
	<!-- this is footer -->
	<footer></footer>
	<!-- End footer -->
	<!-- body  Layer-->
	<div id="body_layer" class="body-layer body-layer-1"></div>
	<div id="" class="body-layer body-layer-2"></div>
	<!-- <div id="body_layer" class="body-layer"></div> -->
	<div id="dialog" style="width:200px;height: 200px;position: fixed;background: red;display: none;"></div>
<script type="text/javascript" src="js/registry.js"></script>
</body>
</html>