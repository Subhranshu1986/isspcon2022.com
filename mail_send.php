<?php
session_start();
if(empty($_SESSION['captcha_code'] ) || strcasecmp($_SESSION['captcha_code'], $_POST['captcha_code']) != 0)
{
	echo "<script>alert('The Capcha code does not match!')</script>";
	echo "<script>location.href='registration.php'</script>";
}
else
{
	function SendHTMLMail($to,$subject,$mailcontent,$from)
	{
		$headers1  = "MIME-Version: 1.0\r\n";
		$headers1 .= "Content-type: text/html; charset=iso-8859-1\r\n";
		$headers1 .= "From: $from\r\n";
		mail($to,$subject,$mailcontent,$headers1);
	}
	$cname=$_POST['cname'];
	$dob=$_POST['dob'];
	$name_inst=$_POST['name_inst'];
	$email=$_POST['email'];
	$meal_type=$_POST['meal_type'];
	$acco_person=$_POST['acco_person'];
	$address=$_POST['address'];
	$designation=$_POST['designation'];
	$mobile=$_POST['mobile'];
	$att_work=$_POST['att_work'];
	$beverage_pref=$_POST['beverage_pref'];
	$regd_amount=$_POST['regd_amount'];
	
	$acco_person_name=$_POST['acco_person_name'];
	$acco_person_age=$_POST['acco_person_age'];
	
	$to="rakesh.b@quantuminfratech.com";
	$subject="ISSPCON 2021: New Registerd Request";
	$from = "subhranshu@quantuminfratech.com";
	if($_POST['acco_person']=="YES")
	{
	$msg = '<style>
	table {
	  border-collapse: collapse;
	  width: 100%;
	}
	.style1 {color: #FFFFFF}
	</style>
	</head>
	<body>
	Dear Admin,<br> Please check the below registration details of a member, <br>
	<table border="1" cellpadding="1" cellspacing="1" bordercolor="#FFFFFF">
	<tr>
	<th width="26%" bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;"><strong>NAME</strong></div></th>
	<th width="74%" bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">'.strtoupper($_POST['cname']).'</div></th>
	</tr>
	<tr>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">MOBILE NO.</div></th>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">'.strtoupper($_POST['mobile']).'</div></th>
	</tr>
	<tr>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">EMAIL-ID </div></th>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">'.strtoupper($_POST['email']).'</div></th>
	</tr>
	<tr>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">DATE OF BIRTH </div></th>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">'.strtoupper($_POST['dob']).'</div></th>
	</tr>
	<tr>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">ADDRESS  </div></th>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">'.strtoupper($_POST['address']).'</div></th>
	</tr>
	<tr>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">DESIGNATION  </div></th>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">'.strtoupper($_POST['designation']).'</div></th>
	</tr>
	<tr>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">NAME OF THE INSTITUTION</div></th>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">'.strtoupper($_POST['name_inst']).'</div></th>
	</tr>
	<tr>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">MEAL PREFERENCE </div></th>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">'.strtoupper($_POST['meal_type']).'</div></th>
	</tr>
	<tr>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">ATTENDING WORKSHOP </div></th>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">'.strtoupper($_POST['att_work']).'</div></th>
	</tr>
	<tr>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">BEVERAGE PREFERENCE </div></th>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">'.strtoupper($_POST['beverage_pref']).'</div></th>
	</tr>
	<tr>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">ANY ACCOMPANYING PERSON </div></th>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">'.strtoupper($_POST['acco_person']).'</div></th>
	</tr>
	<tr>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">NAME </div></th>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">'.strtoupper($_POST['acco_person_name']).'</div></th>
	</tr>
	<tr>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">AGE </div></th>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">'.strtoupper($_POST['acco_person_age']).'</div></th>
	</tr>
	<tr>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">REGISTRATION AMOUNT</div></th>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">Rs.'.strtoupper($_POST['regd_amount']).'</div></th>
	</tr>
	</table>';
	/*$msg = "Dear Admin,<br> Please check the below registration details of a member, <br>
	NAME: ".strtoupper($_POST['cname'])."<br>
	MOBILE NO. : ".$_POST['mobile']."<br>
	EMAIL : ".strtoupper($_POST['email'])."<br>
	DATE OF BIRTH : ".strtoupper($_POST['dob'])."<br>
	ADDRESS : ".strtoupper($_POST['address'])."<br>
	DESIGNATION : ".strtoupper($_POST['designation'])."<br>
	NAME OF THE INSTITUTION : ".strtoupper($_POST['name_inst'])."<br>
	MEAL PREFERENCE : ".$_POST['meal_type']."<br>
	ATTENDING WORKSHOP : ".$_POST['att_work']."<br>
	BEVERAGE PREFERENCE : ".$_POST['beverage_pref']."<br>
	ANY ACCOMPANYING PERSON : ".$_POST['acco_person']."<br>
	NAME : ".strtoupper($_POST['acco_person_name'])."<br>
	AGE : ".strtoupper($_POST['acco_person_age'])."<br>
	REGISTRATION AMOUNT : Rs. ".$_POST['regd_amount']."";*/
	}
	if($_POST['acco_person']=="NO")
	{
	$msg = '<style>
	table {
	  border-collapse: collapse;
	  width: 100%;
	}
	.style1 {color: #FFFFFF}
	</style>
	</head>
	<body>
	Dear Admin,<br> Please check the below registration details of a member, <br>
	<table border="1" cellpadding="1" cellspacing="1" bordercolor="#FFFFFF">
	<tr>
	<th width="26%" bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;"><strong>NAME</strong></div></th>
	<th width="74%" bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">'.strtoupper($_POST['cname']).'</div></th>
	</tr>
	<tr>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">MOBILE NO.</div></th>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">'.strtoupper($_POST['mobile']).'</div></th>
	</tr>
	<tr>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">EMAIL-ID </div></th>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:#FFFFFF !important;">'.strtoupper($_POST['email']).'</div></th>
	</tr>
	<tr>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">DATE OF BIRTH </div></th>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">'.strtoupper($_POST['dob']).'</div></th>
	</tr>
	<tr>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">ADDRESS  </div></th>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">'.strtoupper($_POST['address']).'</div></th>
	</tr>
	<tr>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">DESIGNATION  </div></th>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">'.strtoupper($_POST['designation']).'</div></th>
	</tr>
	<tr>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">NAME OF THE INSTITUTION</div></th>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">'.strtoupper($_POST['name_inst']).'</div></th>
	</tr>
	<tr>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">MEAL PREFERENCE </div></th>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">'.strtoupper($_POST['meal_type']).'</div></th>
	</tr>
	<tr>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">ATTENDING WORKSHOP </div></th>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">'.strtoupper($_POST['att_work']).'</div></th>
	</tr>
	<tr>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">BEVERAGE PREFERENCE </div></th>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">'.strtoupper($_POST['beverage_pref']).'</div></th>
	</tr>
	<tr>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">ANY ACCOMPANYING PERSON </div></th>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">'.strtoupper($_POST['acco_person']).'</div></th>
	</tr>
	<tr>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">REGISTRATION AMOUNT</div></th>
	<th bgcolor="#0759a8"><div align="left" class="style1" style="margin-left:10px;color:white;">Rs.'.strtoupper($_POST['regd_amount']).'</div></th>
	</tr>
	</table>';
	/*$msg = "Dear Admin,<br> Please check the below registration details of a member, <br>
	NAME: ".strtoupper($_POST['cname'])."<br>
	MOBILE NO. : ".$_POST['mobile']."<br>
	EMAIL : ".strtoupper($_POST['email'])."<br>
	DATE OF BIRTH : ".strtoupper($_POST['dob'])."<br>
	ADDRESS : ".strtoupper($_POST['address'])."<br>
	DESIGNATION : ".strtoupper($_POST['designation'])."<br>
	NAME OF THE INSTITUTION : ".strtoupper($_POST['name_inst'])."<br>
	MEAL PREFERENCE : ".$_POST['meal_type']."<br>
	ATTENDING WORKSHOP : ".$_POST['att_work']."<br>
	BEVERAGE PREFERENCE : ".$_POST['beverage_pref']."<br>
	ANY ACCOMPANYING PERSON : ".$_POST['acco_person']."<br>
	REGISTRATION AMOUNT : Rs. ".$_POST['regd_amount']."";*/
	}
	SendHTMLMail($to,$subject,$msg,$from);
	echo "<script>alert('Thank you for registering for ISSPCON 2021....Soon our team will get back you for more details.... kindly send us the acknowledgement copy /screen shot after you deposit the money...thru mail id isspcon2021@gmail.com or whatsapp on 7606002165.');</script>";
	echo "<script>location.href='registration.php'</script>";
}
?>