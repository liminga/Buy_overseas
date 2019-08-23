<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		.error{
			color:red;
		}
		.popbox{
			position: absolute;
			width:300px;
			height:200px;
			top:50%;
			left:50%;
			margin-top:-100px;
			margin-left:-150px;
			background: #fff;
			text-align: center;
			border:2px solid #ccc;
			box-shadow: 2px 2px 3px #ddd;
			z-index: 100;
		}
		.popbg{
			position: absolute;
			width:100%;
			height:100%;
			top:0;
			left:0;
			right:0;
			bottom:0;
			background: rgba(0,0,0,.5);
			z-index: 99;
		}
	</style>
</head>
<body>
	<?php
		$name=$password=$repassword=$sex=$age=$address="";
		$hobby=array();
		$nameErr=$passwordErr=$repasswordErr=$sexErr=$ageErr=$addressErr=$hobbyErr="";
		//验证表单是否提交
		if($_SERVER["REQUEST_METHOD"]=="POST"){
			// 验证名字
			if(empty($_POST['name'])){
				$nameErr="用户名不能为空";
			}else{
				$name=process_input($_POST['name']);
				if(!preg_match("/^[a-zA-Z0-9]*$/",$name)){
					$nameErr="用户名必须是字母和数字";
				}elseif(strlen($name)<6){
					$nameErr="用户名不能少于6位";
				}
			}
			// 验证密码
			if(empty($_POST['password'])){
				$passwordErr="密码不能为空";
			}else{
				$password=process_input($_POST['password']);
				if(strlen($password)<6){
					$passwordErr="密码不能少于6位";
				}
			}
			// 验证重复密码
			if(empty($_POST['repassword'])){
				$repasswordErr="重复密码不能为空";
			}else{
				$repassword=process_input($_POST['repassword']);
				if($password!==$repassword){
					$repasswordErr="两次输入的密码不相同";
				}
			}
			// 验证性别
			if(empty($_POST['sex'])){
				$sexErr="性别不能为空";
			}else{
				$sex=process_input($_POST['sex']);
			}
			// 验证年龄
			if(empty($_POST['age'])){
				$ageErr="年龄不能为空";
			}else{
				$age=process_input($_POST['age']);
			}
			// 验证爱好
			if(empty($_POST['hobby'])){
				$hobbyErr="爱好至少选中一项";
			}else{
				$hobby=$_POST['hobby'];
				// print_r($hobby);
			}

			// 提交了表单，并且所有元素验证通过，弹出注册成功
			if(empty($nameErr)&&empty($passwordErr)&&empty($repasswordErr)&&empty($sexErr)&&empty($ageErr)&&empty($addressErr)&&empty($hobbyErr)){
				//所有验证都通过
			?>
				<!-- 弹窗 -->
				<div class="popbox">
				<h3>注册成功</h3>
					<p><?php
						if($sex=="man"){
							echo $name."先生";
						}elseif($sex=="woman"){
							echo $name."女士";
						}

					?>，恭喜注册成功！</p>
				</div>
				<div class="popbg"></div>
			<?php
			}
		}
	?>
		
		
	<?php
		// 定义处理输入字段的函数
		function process_input($data){
			$data=trim($data);//取出前后空格
			$data=stripslashes($data);//取出多余的反斜杠 (\)
			$data=htmlspecialchars($data);//字符转换成HTML实体
			return $data;
		}
	?>
	<h2>PHP 表单注册验证</h2>
	<form method="post" action=""> 
	   用户名: 
	   <input type="text" name="name" value="<?php echo $name;?>">
	   <span class="error">* <?php echo $nameErr;?></span>
	   <br><br>

	   密码: 
	   <input type="text" name="password" value="<?php echo $password;?>">
	   <span class="error">* <?php echo $passwordErr;?></span>
	   <br><br>

	   重复密码: 
	   <input type="text" name="repassword" value="<?php echo $repassword;?>">
	   <span class="error">* <?php echo $repasswordErr;?></span>
	   <br><br>
	
	   性别:
	   <input type="radio" name="sex" <?php if( isset($sex) && $sex=="woman" ){ echo "checked";}?>  value="woman">女
	   <input type="radio" name="sex"  <?php if( isset($sex) && $sex=="man" ){ echo "checked";}?> value="man">男
	   <span class="error">* <?php echo $sexErr;?></span>
	   <br><br>
	
		爱好：
		<input type="checkbox" name="hobby[]" value="song" <?php if(in_array('song',$hobby)){echo 'checked';} ?>>唱歌
		<input type="checkbox" name="hobby[]" value="dance" <?php if(in_array('dance',$hobby)){echo 'checked';} ?>>跳舞
		<input type="checkbox" name="hobby[]" value="football" <?php if(in_array('football',$hobby)){echo 'checked';} ?>>足球
		<span class="error">* <?php echo $hobbyErr;?></span>
		<br><br>

		年龄：
		<select name="age" value="">
			<option value="">--</option>
			<option value="2" <?php if(isset($age) && $age=='2'){echo "selected";}?>>20~30</option>
			<option value="3" <?php if(isset($age) && $age=='3'){echo "selected";}?>>30~40</option>
			<option value="4" <?php if(isset($age) && $age=='4'){echo "selected";}?>>40~50</option>
			<option value="5" <?php if(isset($age) && $age=='5'){echo "selected";}?>>50~</option>
		</select>
		<span class="error">*<?php echo $ageErr;?></span>
	   	<br><br>

	   	收件地址：
	   	<input type="text" name="address" value="<?php echo $address;?>">
	   	<span class="error"><?php echo $addressErr;?></span>
	   	<br><br>
	   
	   <input type="submit" name="submit" value="提交"> 
	</form>
	
	
	

<?php
	// echo "<h2>您输入的内容是:</h2>";
	// echo $name;
	// echo "<br>";
	// echo $password;
	// echo "<br>";
	// echo $repassword;
	// echo "<br>";
	// echo $sex;
	// echo "<br>";
	// echo $age;
	// echo "<br>";
	// echo $address;
	// echo "<br>";
?>

<script>
	document.getElementsByClassName("popbg")[0].onclick=function(){
	document.getElementsByClassName("popbg")[0].style.display="none";
	document.getElementsByClassName("popbox")[0].style.display="none";
	}


</script>
</body>
</html>