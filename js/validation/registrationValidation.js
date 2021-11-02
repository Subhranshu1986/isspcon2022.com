function FnameValidation(id,place)
{
	if(document.getElementById(id).value == "")
	{
		document.getElementById(place).innerHTML = "First name cannot be empty.";
		$("#"+place).fadeOut("slow");
		$("#"+place).fadeIn();
		return false;
	}
	else if(document.getElementById(id).value != "")
	{
		document.getElementById(place).innerHTML = "";
		return true;
	}
}
function LnameValidation(id,place)
{
	if(document.getElementById(id).value == "")
	{
		document.getElementById(place).innerHTML = "Last name cannot be empty.";
		$("#"+place).fadeOut("slow");
		$("#"+place).fadeIn();
		return false;
	}
	else if(document.getElementById(id).value != "")
	{
		document.getElementById(place).innerHTML = "";
		return true;
	}
}
function MnameValidation(id,place)
{
	if(document.getElementById(id).value == "")
	{
		document.getElementById(place).innerHTML = "Middle name cannot be empty.";
		$("#"+place).fadeOut("slow");
		$("#"+place).fadeIn();
		return false;
	}
	else if(document.getElementById(id).value != "")
	{
		document.getElementById(place).innerHTML = "";
		return true;
	}
}

function GenderValidation(id,place)
{
	if(document.getElementById(id).value == "")
	{
		document.getElementById(place).innerHTML = "Gender must be selected";
		$("#"+place).fadeOut("slow");
		$("#"+place).fadeIn();
		return false;
	}
	else if(document.getElementById(id).value != "")
	{
		document.getElementById(place).innerHTML = "";
		return true;
	}
}

function AddressValidation(id,place)
{
	if(document.getElementById(id).value == "")
	{
		document.getElementById(place).innerHTML = "Address cannot be empty.";
		$("#"+place).fadeOut("slow");
		$("#"+place).fadeIn();
		return false;
	}
	else if(document.getElementById(id).value != "")
	{
		document.getElementById(place).innerHTML = "";
		return true;
	}
}

function CityValidation(id,place)
{
	if(document.getElementById(id).value == "")
	{
		document.getElementById(place).innerHTML = "City cannot be empty.";
		$("#"+place).fadeOut("slow");
		$("#"+place).fadeIn();
		return false;
	}
	else if(document.getElementById(id).value != "")
	{
		document.getElementById(place).innerHTML = "";
		return true;
	}
}

function StateValidation(id,place)
{
	if(document.getElementById(id).value == "")
	{
		document.getElementById(place).innerHTML = "State cannot be empty.";
		$("#"+place).fadeOut("slow");
		$("#"+place).fadeIn();
		return false;
	}
	else if(document.getElementById(id).value != "")
	{
		document.getElementById(place).innerHTML = "";
		return true;
	}
}

function PincodeValidation(id,place)
{
	if(document.getElementById(id).value == "")
	{
		document.getElementById(place).innerHTML = "Pincode cannot be empty.";
		$("#"+place).fadeOut("slow");
		$("#"+place).fadeIn();
		return false;
	}
	else if(document.getElementById(id).value != "")
	{
		document.getElementById(place).innerHTML = "";
		return true;
	}
}

function ISAValidation(id,place)
{
	if(document.getElementById(id).value == "")
	{
		document.getElementById(place).innerHTML = "ISA Registration Number cannot be empty.";
		$("#"+place).fadeOut("slow");
		$("#"+place).fadeIn();
		return false;
	}
	else if(document.getElementById(id).value != "")
	{
		document.getElementById(place).innerHTML = "";
		return true;
	}
}

function MobileValidation(id,place)
{
     if(document.getElementById(id).value == "")
     {
          
		  document.getElementById(place).innerHTML = "Mobile Number cannot be empty.";
		  $("#"+place).fadeOut("slow");
		  $("#"+place).fadeIn();
		  return false;
     }
	 else if(document.getElementById(id).value != "")
     {
        var y = document.getElementById(id).value;
		if(isNaN(y) || y.indexOf(" ")!=-1)
		{
			document.getElementById(place).style.display = "block";
          	document.getElementById(place).style.color = "red";
			document.getElementById(place).innerHTML = "Invalid Mobile No..";
			document.getElementById(id).focus();
			return false;
		}
		
		if (y.length>10 || y.length<10)
		{
			document.getElementById(place).style.display = "block";
          	document.getElementById(place).style.color = "red";
			document.getElementById(place).innerHTML = "Mobile No. should be 10 digit.";
			document.getElementById(id).focus();
			return false;
		}
		if (!(y.charAt(0)=="9" || y.charAt(0)=="8" || y.charAt(0)=="7"))
		{
			document.getElementById(place).style.display = "block";
          	document.getElementById(place).style.color = "red";
			document.getElementById(place).innerHTML = "Mobile No. should start with 9 or 8 or 7.";
			document.getElementById(id).focus();
			return false
		}
		else
		{
			document.getElementById(place).innerHTML = "";
			return true;
		}
     }
}

function EmailValidation(id,place)
{
	if(document.getElementById(id).value == "")
	{
		//alert("IN");
		document.getElementById(place).innerHTML = "Email ID cannot be empty";
		$("#"+place).fadeOut("slow");
		$("#"+place).fadeIn();
		return false;
	}
	else if(document.getElementById(id).value != "")
    {
        var emailstr = document.getElementById(id).value;
		//var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		var reg = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

		if(reg.test(emailstr) == false) 
		{
			document.getElementById(place).innerHTML = "Invalid Email-Id";
			$("#"+place).fadeOut("slow");
			$("#"+place).fadeIn();
			return false;
		} 
		else 
		{
			document.getElementById(place).innerHTML = "";
			return true;
		}
     }
}

function CheckindateValidation(id,place)
{
	if(document.getElementById(id).value == "")
	{
		document.getElementById(place).innerHTML = "Check in date cannot be empty.";
		$("#"+place).fadeOut("slow");
		$("#"+place).fadeIn();
		return false;
	}
	else if(document.getElementById(id).value != "")
	{
		document.getElementById(place).innerHTML = "";
		return true;
	}
}
function ArrivaltimeValidation(id,place)
{
	if(document.getElementById(id).value == "")
	{
		document.getElementById(place).innerHTML = "Time of Arrival cannot be empty.";
		$("#"+place).fadeOut("slow");
		$("#"+place).fadeIn();
		return false;
	}
	else if(document.getElementById(id).value != "")
	{
		document.getElementById(place).innerHTML = "";
		return true;
	}
}
function CheckoutdateValidation(id,place)
{
	if(document.getElementById(id).value == "")
	{
		document.getElementById(place).innerHTML = "Check Out Date cannot be empty.";
		$("#"+place).fadeOut("slow");
		$("#"+place).fadeIn();
		return false;
	}
	else if(document.getElementById(id).value != "")
	{
		document.getElementById(place).innerHTML = "";
		return true;
	}
}
function DeparturetimeValidation(id,place)
{
	if(document.getElementById(id).value == "")
	{
		document.getElementById(place).innerHTML = "Time of Departure cannot be empty.";
		$("#"+place).fadeOut("slow");
		$("#"+place).fadeIn();
		return false;
	}
	else if(document.getElementById(id).value != "")
	{
		document.getElementById(place).innerHTML = "";
		return true;
	}
}

function PhotoValidation(id,place)
{
	if(document.getElementById(id).value == "")
	{
		document.getElementById(place).innerHTML = "Please Select your image.";
		$("#"+place).fadeOut("slow");
		$("#"+place).fadeIn();
		return false;
	}
	else if(document.getElementById(id).value != "")
	{
		document.getElementById(place).innerHTML = "";
		return true;
	}
}

function extraFirstValid(id,place)
{
	if(document.getElementById(id).value == "")
	{		
		document.getElementById(place).innerHTML = "First Name cannot be empty";
		$("#"+place).fadeOut("slow");
		$("#"+place).fadeIn();
		return false;
	}
	else if(document.getElementById(id).value != "")
	{
		document.getElementById(place).innerHTML = "";
		return true;
	}
}

function extraLastValid(id,place)
{
	if(document.getElementById(id).value == "")
	{
		document.getElementById(place).innerHTML = "Last Name cannot be empty";
		$("#"+place).fadeOut("slow");
		$("#"+place).fadeIn();
		return false;
	}
	else if(document.getElementById(id).value != "")
	{
		document.getElementById(place).innerHTML = "";
		return true;
	}
}

function extraEmailValid(id,place)
{
	if(document.getElementById(id).value == "")
	{
		document.getElementById(place).innerHTML = "Email cannot be empty";
		$("#"+place).fadeOut("slow");
		$("#"+place).fadeIn();
		return false;
	}
	else if(document.getElementById(id).value != "")
	{
		document.getElementById(place).innerHTML = "";
		return true;
	}
}

function extraMobileValid(id,place)
{
	if(document.getElementById(id).value == "")
	{
		document.getElementById(place).innerHTML = "Mobile cannot be empty";
		$("#"+place).fadeOut("slow");
		$("#"+place).fadeIn();
		return false;
	}
	else if(document.getElementById(id).value != "")
	{
		document.getElementById(place).innerHTML = "";
		return true;
	}
}

function getValidationAccomodation()
{
	if(document.getElementById('fname').value == "")
	{
		document.getElementById('FnameValidation').innerHTML = "First Name cannot be empty.";
		$("#FnameValidation").fadeOut("slow");
		$("#FnameValidation").fadeIn();
		document.getElementById('fname').focus();
		return false;
	}
	if(document.getElementById('lname').value == "")
	{
		document.getElementById('LnameValidation').innerHTML = "Last Name cannot be empty.";
		$("#LnameValidation").fadeOut("slow");
		$("#LnameValidation").fadeIn();
		document.getElementById('lname').focus();
		return false;
	}
	if(document.getElementById('mobile').value == "")
	{
		document.getElementById('MobileValidation').innerHTML = "Mobile cannot be empty.";
		$("#MobileValidation").fadeOut("slow");
		$("#MobileValidation").fadeIn();
		document.getElementById('mobile').focus();
		return false;
	}
	if(document.getElementById('mobile').value != "")
	{
		var y = document.getElementById('mobile').value;
		if(isNaN(y) || y.indexOf(" ")!=-1)
		{
			document.getElementById('MobileValidation').style.display = "block";
          	document.getElementById('MobileValidation').style.color = "red";
			document.getElementById('MobileValidation').innerHTML = "Invalid Mobile No..";
			$("#MobileValidation").fadeOut("slow");
			$("#MobileValidation").fadeIn();
			document.getElementById('mobile').focus();
			return false;
		}
		if (y.length>10 || y.length<10)
		{
			document.getElementById('MobileValidation').style.display = "block";
          	document.getElementById('MobileValidation').style.color = "red";
			document.getElementById('MobileValidation').innerHTML = "Mobile No. should be 10 digit.";
			$("#MobileValidation").fadeOut("slow");
			$("#MobileValidation").fadeIn();
			document.getElementById('mobile').focus();
			return false;
		}
		if (!(y.charAt(0)=="9" || y.charAt(0)=="8" || y.charAt(0)=="7"))
		{
			document.getElementById('MobileValidation').style.display = "block";
          	document.getElementById('MobileValidation').style.color = "red";
			document.getElementById('MobileValidation').innerHTML = "Mobile No. should start with 9 or 8 or 7.";
			$("#MobileValidation").fadeOut("slow");
			$("#MobileValidation").fadeIn();
			document.getElementById('mobile').focus();
			return false
		}
		else
		{
			document.getElementById('MobileValidation').innerHTML = '';
		}
	}
	if(document.getElementById('email').value == "")
	{
		document.getElementById('EmailValidation').innerHTML = "Email cannot be empty.";
		$("#EmailValidation").fadeOut("slow");
		$("#EmailValidation").fadeIn();
		document.getElementById('email').focus();
		return false;
	}
	if(document.getElementById('email').value != "")
	{
		//alert('IN');
        var emailstr = document.getElementById('email').value;
		var reg = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

		if(reg.test(emailstr) == false) 
		{
			document.getElementById('EmailValidation').innerHTML = "Invalid Email-ID";
			$("#EmailValidation").fadeOut("slow");
			$("#EmailValidation").fadeIn();
			document.getElementById('email').focus();
			return false;
		}
		else
		{
			document.getElementById('EmailValidation').innerHTML = '';
		}
    }
	if(document.getElementById('checkindate').value == "")
	{
		document.getElementById('CheckindateValidation').innerHTML = "Check in Date cannot be empty.";
		$("#CheckindateValidation").fadeOut("slow");
		$("#CheckindateValidation").fadeIn();
		document.getElementById('checkindate').focus();
		return false;
	}
	if(document.getElementById('checkoutdate').value == "")
	{
		document.getElementById('CheckoutdateValidation').innerHTML = "Check Out Date cannot be empty.";
		$("#CheckoutdateValidation").fadeOut("slow");
		$("#CheckoutdateValidation").fadeIn();
		document.getElementById('checkoutdate').focus();
		return false;
	}
	
	if(document.getElementById('arrivaltime').value == "")
	{
		document.getElementById('ArrivaltimeValidation').innerHTML = "Time of Arrival cannot be empty.";
		$("#ArrivaltimeValidation").fadeOut("slow");
		$("#ArrivaltimeValidation").fadeIn();
		document.getElementById('arrivaltime').focus();
		return false;
	}
	if(document.getElementById('departuretime').value == "")
	{
		document.getElementById('DeparturetimeValidation').innerHTML = "Time of Departure cannot be empty.";
		$("#DeparturetimeValidation").fadeOut("slow");
		$("#DeparturetimeValidation").fadeIn();
		document.getElementById('departuretime').focus();
		return false;
	}
	
	
	if(document.getElementById('state').value == "")
	{
		document.getElementById('StateValidation').innerHTML = "State cannot be empty.";
		$("#StateValidation").fadeOut("slow");
		$("#StateValidation").fadeIn();
		document.getElementById('state').focus();
		return false;
	}
	if(document.getElementById('city').value == "")
	{
		document.getElementById('CityValidation').innerHTML = "City cannot be empty.";
		$("#CityValidation").fadeOut("slow");
		$("#CityValidation").fadeIn();
		document.getElementById('city').focus();
		return false;
	}
	if(document.getElementById('pincode').value == "")
	{
		document.getElementById('PincodeValidation').innerHTML = "Pincode cannot be empty.";
		$("#PincodeValidation").fadeOut("slow");
		$("#PincodeValidation").fadeIn();
		document.getElementById('pincode').focus();
		return false;
	}
	
	 if(document.getElementById('agree').checked == false)
	 {
			document.getElementById('agreeValidation').innerHTML = "Please tick on agree terms & condition";
			$("#agreeValidation").fadeOut("slow");
			$("#agreeValidation").fadeIn();
			document.getElementById('agree').focus();
			return false;
	 }
	 if(document.getElementById('onlinemode').checked == false)
	 {
		if(document.getElementById('offlinemode').checked == false)
		{
			document.getElementById('paymentmodeValidation').innerHTML = "Please Select payment mode.";
			$("#paymentmodeValidation").fadeOut("slow");
			$("#paymentmodeValidation").fadeIn();
			document.getElementById('onlinemode').focus();
			return false;
		}
		else
		{
			document.getElementById('submitloader').style.display = "block";
			document.getElementById('datasubmit').style.backgroundColor = "#6ebce4";
			document.getElementById('datasubmit').style.display = "none";
			ShowProgressAnimation();
			return true;
		}
	 }
	 else
	 {
		document.getElementById('submitloader').style.display = "block";
		document.getElementById('datasubmit').style.backgroundColor = "#6ebce4";
		document.getElementById('datasubmit').style.display = "none";
		ShowProgressAnimation();
		return true;
	 }
}

function getValidation()
{
	if(document.getElementById('fname').value == "")
	{
		document.getElementById('FnameValidation').innerHTML = "First Name cannot be empty.";
		$("#FnameValidation").fadeOut("slow");
		$("#FnameValidation").fadeIn();
		document.getElementById('fname').focus();
		return false;
	}
	if(document.getElementById('lname').value == "")
	{
		document.getElementById('LnameValidation').innerHTML = "Last Name cannot be empty.";
		$("#LnameValidation").fadeOut("slow");
		$("#LnameValidation").fadeIn();
		document.getElementById('lname').focus();
		return false;
	}
	if(document.getElementById('mobile').value == "")
	{
		document.getElementById('MobileValidation').innerHTML = "Mobile cannot be empty.";
		$("#MobileValidation").fadeOut("slow");
		$("#MobileValidation").fadeIn();
		document.getElementById('mobile').focus();
		return false;
	}
	if(document.getElementById('mobile').value != "")
	{
		var y = document.getElementById('mobile').value;
		if(isNaN(y) || y.indexOf(" ")!=-1)
		{
			document.getElementById('MobileValidation').style.display = "block";
          	document.getElementById('MobileValidation').style.color = "red";
			document.getElementById('MobileValidation').innerHTML = "Invalid Mobile No..";
			$("#MobileValidation").fadeOut("slow");
			$("#MobileValidation").fadeIn();
			document.getElementById('mobile').focus();
			return false;
		}
		if (y.length>10 || y.length<10)
		{
			document.getElementById('MobileValidation').style.display = "block";
          	document.getElementById('MobileValidation').style.color = "red";
			document.getElementById('MobileValidation').innerHTML = "Mobile No. should be 10 digit.";
			$("#MobileValidation").fadeOut("slow");
			$("#MobileValidation").fadeIn();
			document.getElementById('mobile').focus();
			return false;
		}
		if (!(y.charAt(0)=="9" || y.charAt(0)=="8" || y.charAt(0)=="7"))
		{
			document.getElementById('MobileValidation').style.display = "block";
          	document.getElementById('MobileValidation').style.color = "red";
			document.getElementById('MobileValidation').innerHTML = "Mobile No. should start with 9 or 8 or 7.";
			$("#MobileValidation").fadeOut("slow");
			$("#MobileValidation").fadeIn();
			document.getElementById('mobile').focus();
			return false
		}
		else
		{
			document.getElementById('MobileValidation').innerHTML = '';
		}
	}
	if(document.getElementById('email').value == "")
	{
		document.getElementById('EmailValidation').innerHTML = "Email cannot be empty.";
		$("#EmailValidation").fadeOut("slow");
		$("#EmailValidation").fadeIn();
		document.getElementById('email').focus();
		return false;
	}
	if(document.getElementById('email').value != "")
	{
		//alert('IN');
        var emailstr = document.getElementById('email').value;
		var reg = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

		if(reg.test(emailstr) == false) 
		{
			document.getElementById('EmailValidation').innerHTML = "Invalid Email-ID";
			$("#EmailValidation").fadeOut("slow");
			$("#EmailValidation").fadeIn();
			document.getElementById('email').focus();
			return false;
		}
		else
		{
			document.getElementById('EmailValidation').innerHTML = '';
		}
    }
	if(document.getElementById('state').value == "")
	{
		document.getElementById('StateValidation').innerHTML = "State cannot be empty.";
		$("#StateValidation").fadeOut("slow");
		$("#StateValidation").fadeIn();
		document.getElementById('state').focus();
		return false;
	}
	if(document.getElementById('city').value == "")
	{
		document.getElementById('CityValidation').innerHTML = "City cannot be empty.";
		$("#CityValidation").fadeOut("slow");
		$("#CityValidation").fadeIn();
		document.getElementById('city').focus();
		return false;
	}
	if(document.getElementById('pincode').value == "")
	{
		document.getElementById('PincodeValidation').innerHTML = "Pincode cannot be empty.";
		$("#PincodeValidation").fadeOut("slow");
		$("#PincodeValidation").fadeIn();
		document.getElementById('pincode').focus();
		return false;
	}
	
	 if(document.getElementById('agree').checked == false)
	 {
			document.getElementById('agreeValidation').innerHTML = "Please tick on agree terms & condition";
			$("#agreeValidation").fadeOut("slow");
			$("#agreeValidation").fadeIn();
			document.getElementById('agree').focus();
			return false;
	 }
	 if(document.getElementById('onlinemode').checked == false)
	 {
		if(document.getElementById('offlinemode').checked == false)
		{
			document.getElementById('paymentmodeValidation').innerHTML = "Please Select payment mode.";
			$("#paymentmodeValidation").fadeOut("slow");
			$("#paymentmodeValidation").fadeIn();
			document.getElementById('onlinemode').focus();
			return false;
		}
		else
		{
			if(document.getElementById('offlinemode').checked == true)
			{
				if(document.getElementById('paymentbytext').value == "")
				{
					document.getElementById('paymentbytextValidation').innerHTML = "Please Enter reference details";
					$("#paymentbytextValidation").fadeOut("slow");
					$("#paymentbytextValidation").fadeIn();
					document.getElementById('paymentbytext').focus();
					return false;
				}
				else
				{
					document.getElementById('submitloader').style.display = "block";
					document.getElementById('datasubmit').style.backgroundColor = "#6ebce4";
					document.getElementById('datasubmit').style.display = "none";
					ShowProgressAnimation();
					return true;
				}
			}
			else
			{
				document.getElementById('submitloader').style.display = "block";
				document.getElementById('datasubmit').style.backgroundColor = "#6ebce4";
				document.getElementById('datasubmit').style.display = "none";
				ShowProgressAnimation();
				return true;
			}
		}
	 }
	 else
	 {
		document.getElementById('submitloader').style.display = "block";
		document.getElementById('datasubmit').style.backgroundColor = "#6ebce4";
		document.getElementById('datasubmit').style.display = "none";
		ShowProgressAnimation();
		return true;
	 }
}

function getValidationServices()
{
	if(document.getElementById('reg1').checked == true)
	{
		var extaradult = parseInt(document.getElementById('extraadultnumber').value);
		extaradult = extaradult + 1;
		for(var i = 1;i<=extaradult;i++)
		{
			var temp1 = "acmpfnma"+i;
			var temp2 = "acmplnma"+i;
			var temp3 = "acmpemaila"+i;
			var temp4 = "acmpmobilea"+i;
			
			if(document.getElementById(temp1).value == "")
			{
				document.getElementById('extraadultValidation').innerHTML = "First Name cannot be empty.";
				$("#extraadultValidation").fadeOut("slow");
				$("#extraadultValidation").fadeIn();
				document.getElementById(temp1).focus();
				return false;
			}
			if(document.getElementById(temp2).value == "")
			{
				document.getElementById('extraadultValidation').innerHTML = "Last Name cannot be empty.";
				$("#extraadultValidation").fadeOut("slow");
				$("#extraadultValidation").fadeIn();
				document.getElementById(temp2).focus();
				return false;
			}
			if(document.getElementById(temp3).value == "")
			{
				document.getElementById('extraadultValidation').innerHTML = "Email cannot be empty.";
				$("#extraadultValidation").fadeOut("slow");
				$("#extraadultValidation").fadeIn();
				document.getElementById(temp3).focus();
				return false;
			}
			if(document.getElementById(temp4).value == "")
			{
				document.getElementById('extraadultValidation').innerHTML = "Mobile cannot be empty.";
				$("#extraadultValidation").fadeOut("slow");
				$("#extraadultValidation").fadeIn();
				document.getElementById(temp4).focus();
				return false;
			}
		}
	}
	/*if(document.getElementById('reg2').checked == true)
	{
		var extrachild = parseInt(document.getElementById('extrachildnumber').value);
		extrachild = extrachild + 1;
		for(var i = 1;i<=extrachild;i++)
		{
			var temp1 = "acmpfnmc"+i;
			var temp2 = "acmplnmc"+i;
			
			if(document.getElementById(temp1).value == "")
			{
				document.getElementById('extrachildValidation').innerHTML = "First Name cannot be empty.";
				$("#extrachildValidation").fadeOut("slow");
				$("#extrachildValidation").fadeIn();
				document.getElementById(temp1).focus();
				return false;
			}
			if(document.getElementById(temp2).value == "")
			{
				document.getElementById('extrachildValidation').innerHTML = "Last Name cannot be empty.";
				$("#extrachildValidation").fadeOut("slow");
				$("#extrachildValidation").fadeIn();
				document.getElementById(temp2).focus();
				return false;
			}
		}
	}*/
	if(document.getElementById('totalfees').value == 0)
	{
		document.getElementById('paymentmodeValidation').innerHTML = "No Addons selected. Please select atleast one addon";
		$("#paymentmodeValidation").fadeOut("slow");
		$("#paymentmodeValidation").fadeIn();
		return false;
	}
	if(document.getElementById('agree').checked == false)
	{
		document.getElementById('agreeValidation').innerHTML = "Please tick on agree terms & condition";
		$("#agreeValidation").fadeOut("slow");
		$("#agreeValidation").fadeIn();
		document.getElementById('agree').focus();
		return false;
	}
	if(document.getElementById('onlinemode').checked == false)
	{
		if(document.getElementById('offlinemode').checked == false)
		{
			document.getElementById('paymentmodeValidation').innerHTML = "Please Select payment mode.";
			$("#paymentmodeValidation").fadeOut("slow");
			$("#paymentmodeValidation").fadeIn();
			document.getElementById('onlinemode').focus();
			return false;
		}
		else
		{
			setextraadultvalue();
			setextrachildvalue();
			document.getElementById('submitloader').style.display = "block";
			document.getElementById('datasubmit').style.backgroundColor = "#6ebce4";
			document.getElementById('datasubmit').style.display = "none";
			ShowProgressAnimation();
			return true;
		}
	}
	else
	{
		setextraadultvalue();
		setextrachildvalue();
		document.getElementById('submitloader').style.display = "block";
		document.getElementById('datasubmit').style.backgroundColor = "#6ebce4";
		document.getElementById('datasubmit').style.display = "none";
		return true;
	}
}

function getValidationProfile()
{
	if(document.getElementById('address1').value == "")
	{
		document.getElementById('Address1Validation').innerHTML = "Address1 cannot be empty.";
		$("#Address1Validation").fadeOut("slow");
		$("#Address1Validation").fadeIn();
		document.getElementById('address1').focus();
		return false;
	}
	if(document.getElementById('city').value == "")
	{
		document.getElementById('CityValidation').innerHTML = "City cannot be empty.";
		$("#CityValidation").fadeOut("slow");
		$("#CityValidation").fadeIn();
		document.getElementById('city').focus();
		return false;
	}
	if(document.getElementById('state').value == "")
	{
		document.getElementById('Address1Validation').innerHTML = "State cannot be empty.";
		$("#StateValidation").fadeOut("slow");
		$("#StateValidation").fadeIn();
		document.getElementById('state').focus();
		return false;
	}
	if(document.getElementById('pincode').value == "")
	{
		document.getElementById('Address1Validation').innerHTML = "Pincode cannot be empty.";
		$("#PincodeValidation").fadeOut("slow");
		$("#PincodeValidation").fadeIn();
		document.getElementById('pincode').focus();
		return false;
	}
	else
	{
		document.getElementById('submitloader').style.display = "block";
		document.getElementById('datasubmit').style.backgroundColor = "#6ebce4";
		document.getElementById('datasubmit').style.display = "none";
		return true;
	}
}

function getpgValidation()
{
	if(document.getElementById('pgsinstitute').value == "")
	{
		document.getElementById('pgValidation').innerHTML = "Institute Name cannot be empty.";
		$("#pgValidation").fadeOut("slow");
		$("#pgValidation").fadeIn();
		document.getElementById('pgsinstitute').focus();
		return false;
	}
	if(document.getElementById('pgshodmobile').value == "")
	{
		document.getElementById('pgValidation').innerHTML = "Mobile cannot be empty.";
		$("#pgValidation").fadeOut("slow");
		$("#pgValidation").fadeIn();
		document.getElementById('pgshodmobile').focus();
		return false;
	}
	if(document.getElementById('pgshodmobile').value != "")
	{
		var y = document.getElementById('pgshodmobile').value;
		if(isNaN(y) || y.indexOf(" ")!=-1)
		{
			document.getElementById('pgValidation').style.display = "block";
          	document.getElementById('pgValidation').style.color = "red";
			document.getElementById('pgValidation').innerHTML = "Invalid Mobile No..";
			$("#pgValidation").fadeOut("slow");
			$("#pgValidation").fadeIn();
			document.getElementById('pgshodmobile').focus();
			return false;
		}
		if (y.length>10 || y.length<10)
		{
			document.getElementById('pgValidation').style.display = "block";
          	document.getElementById('pgValidation').style.color = "red";
			document.getElementById('pgValidation').innerHTML = "Mobile No. should be 10 digit.";
			$("#pgValidation").fadeOut("slow");
			$("#pgValidation").fadeIn();
			document.getElementById('pgshodmobile').focus();
			return false;
		}
		if (!(y.charAt(0)=="9" || y.charAt(0)=="8" || y.charAt(0)=="7"))
		{
			document.getElementById('pgValidation').style.display = "block";
          	document.getElementById('pgValidation').style.color = "red";
			document.getElementById('pgValidation').innerHTML = "Mobile No. should start with 9 or 8 or 7.";
			$("#pgValidation").fadeOut("slow");
			$("#pgValidation").fadeIn();
			document.getElementById('pgshodmobile').focus();
			return false
		}
		else
		{
			document.getElementById('pgValidation').innerHTML = '';
		}
	}
	if(document.getElementById('pgshodemail').value == "")
	{
		document.getElementById('pgValidation').innerHTML = "Email cannot be empty.";
		$("#pgValidation").fadeOut("slow");
		$("#pgValidation").fadeIn();
		document.getElementById('pgshodemail').focus();
		return false;
	}
	if(document.getElementById('pgshodemail').value != "")
	{
		//alert('IN');
		var emailstr = document.getElementById('pgshodemail').value;
		var reg = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		
		if(reg.test(emailstr) == false) 
		{
			document.getElementById('pgValidation').innerHTML = "Invalid Email-ID";
			$("#pgValidation").fadeOut("slow");
			$("#pgValidation").fadeIn();
			document.getElementById('pgshodemail').focus();
			return false;
		}
		else
		{
			document.getElementById('pgValidation').innerHTML = '';
		}
	}
	if(document.getElementById('pgshod').value == "")
	{
		document.getElementById('pgValidation').innerHTML = "HOD Name cannot be empty.";
		$("#pgValidation").fadeOut("slow");
		$("#pgValidation").fadeIn();
		document.getElementById('pgshod').focus();
		return false;
	}
	else
	{
		document.getElementById('submitloader1').style.display = "block";
		document.getElementById('datasubmit1').style.backgroundColor = "#6ebce4";
		document.getElementById('datasubmit1').style.display = "none";
		return true;
	}
}

function setextraadultvalue()
{
	var str = "";
	var count = document.getElementById('extraadultnumber').value;
	if(count > 0)
	{
		var temp = count;
		var startvalue = 2;
		while(temp > 0)
		{
			var tempacmpfnma = "acmpfnma"+startvalue;
			var tempacmplnma = "acmplnma"+startvalue;
			var tempacmpgendera = "acmpgendera"+startvalue;
			var tempacmpmobilea = "acmpmobilea"+startvalue;
			var tempacmpemaila = "acmpemaila"+startvalue;
			
			if(startvalue > 2)
			{
				str = str + ",";
			}
			str = str + document.getElementById(tempacmpfnma).value + "," + document.getElementById(tempacmplnma).value + "," + document.getElementById(tempacmpgendera).value + "," + document.getElementById(tempacmpmobilea).value + "," + document.getElementById(tempacmpemaila).value;
			
			temp--; startvalue++;
		}
	}
	document.getElementById('extraadultdata').value = str;
}

function setextrachildvalue()
{
	var str = "";
	var count = document.getElementById('extrachildnumber').value;
	if(count > 0)
	{
		var temp = count;
		var startvalue = 2;
		while(temp > 0)
		{
			var tempacmpfnmc = "acmpfnmc"+startvalue;
			var tempacmplnmc = "acmplnmc"+startvalue;
			var tempacmpgenderc = "acmpgenderc"+startvalue;
			
			if(startvalue > 2)
			{
				str = str + ",";
			}
			str = str + document.getElementById(tempacmpfnmc).value + "," + document.getElementById(tempacmplnmc).value + "," + document.getElementById(tempacmpgenderc).value;
			
			temp--; startvalue++;
		}
	}
	document.getElementById('extrachilddata').value = str;
}

function getValidationAssociate()
{
	if(document.getElementById('fname').value == "")
	{
		document.getElementById('FnameValidation').innerHTML = "First Name cannot be empty.";
		$("#FnameValidation").fadeOut("slow");
		$("#FnameValidation").fadeIn();
		document.getElementById('fname').focus();
		return false;
	}
	if(document.getElementById('mname').value == "")
	{
		document.getElementById('MnameValidation').innerHTML = "Middle Name cannot be empty.";
		$("#MnameValidation").fadeOut("slow");
		$("#MnameValidation").fadeIn();
		document.getElementById('mname').focus();
		return false;
	}
	if(document.getElementById('lname').value == "")
	{
		document.getElementById('LnameValidation').innerHTML = "Last Name cannot be empty.";
		$("#LnameValidation").fadeOut("slow");
		$("#LnameValidation").fadeIn();
		document.getElementById('lname').focus();
		return false;
	}
	if(document.getElementById('address1').value == "")
	{
		document.getElementById('Address1Validation').innerHTML = "Address1 cannot be empty.";
		$("#Address1Validation").fadeOut("slow");
		$("#Address1Validation").fadeIn();
		document.getElementById('address1').focus();
		return false;
	}
	if(document.getElementById('city').value == "")
	{
		document.getElementById('CityValidation').innerHTML = "City cannot be empty.";
		$("#CityValidation").fadeOut("slow");
		$("#CityValidation").fadeIn();
		document.getElementById('city').focus();
		return false;
	}
	if(document.getElementById('state').value == "")
	{
		document.getElementById('StateValidation').innerHTML = "State cannot be empty.";
		$("#StateValidation").fadeOut("slow");
		$("#StateValidation").fadeIn();
		document.getElementById('state').focus();
		return false;
	}
	if(document.getElementById('pincode').value == "")
	{
		document.getElementById('PincodeValidation').innerHTML = "Pincode cannot be empty.";
		$("#PincodeValidation").fadeOut("slow");
		$("#PincodeValidation").fadeIn();
		document.getElementById('pincode').focus();
		return false;
	}
	if(document.getElementById('mobile').value == "")
	{
		document.getElementById('MobileValidation').innerHTML = "Mobile cannot be empty.";
		$("#MobileValidation").fadeOut("slow");
		$("#MobileValidation").fadeIn();
		document.getElementById('mobile').focus();
		return false;
	}
	if(document.getElementById('mobile').value != "")
	{
		var y = document.getElementById('mobile').value;
		if(isNaN(y) || y.indexOf(" ")!=-1)
		{
			document.getElementById('MobileValidation').style.display = "block";
          	document.getElementById('MobileValidation').style.color = "red";
			document.getElementById('MobileValidation').innerHTML = "Invalid Mobile No..";
			$("#MobileValidation").fadeOut("slow");
			$("#MobileValidation").fadeIn();
			document.getElementById('mobile').focus();
			return false;
		}
		if (y.length>10 || y.length<10)
		{
			document.getElementById('MobileValidation').style.display = "block";
          	document.getElementById('MobileValidation').style.color = "red";
			document.getElementById('MobileValidation').innerHTML = "Mobile No. should be 10 digit.";
			$("#MobileValidation").fadeOut("slow");
			$("#MobileValidation").fadeIn();
			document.getElementById('mobile').focus();
			return false;
		}
		if (!(y.charAt(0)=="9" || y.charAt(0)=="8" || y.charAt(0)=="7"))
		{
			document.getElementById('MobileValidation').style.display = "block";
          	document.getElementById('MobileValidation').style.color = "red";
			document.getElementById('MobileValidation').innerHTML = "Mobile No. should start with 9 or 8 or 7.";
			$("#MobileValidation").fadeOut("slow");
			$("#MobileValidation").fadeIn();
			document.getElementById('mobile').focus();
			return false
		}
		else
		{
			document.getElementById('MobileValidation').innerHTML = '';
		}
	}
	if(document.getElementById('email').value == "")
	{
		document.getElementById('EmailValidation').innerHTML = "Email cannot be empty.";
		$("#EmailValidation").fadeOut("slow");
		$("#EmailValidation").fadeIn();
		document.getElementById('email').focus();
		return false;
	}
	if(document.getElementById('email').value != "")
	{
		//alert('IN');
        var emailstr = document.getElementById('email').value;
		var reg = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

		if(reg.test(emailstr) == false) 
		{
			document.getElementById('EmailValidation').innerHTML = "Invalid Email-ID";
			$("#EmailValidation").fadeOut("slow");
			$("#EmailValidation").fadeIn();
			document.getElementById('email').focus();
			return false;
		}
		else
		{
			document.getElementById('EmailValidation').innerHTML = '';
		}
     }
	 /*if(document.getElementById('file').value == "")
	 {
		document.getElementById('PhotoValidation').innerHTML = "Please Select your image.";
		$("#PhotoValidation").fadeOut("slow");
		$("#PhotoValidation").fadeIn();
		document.getElementById('file').focus();
		return false;
	 }*/
	 if((document.getElementById('reg3_1').checked == false) && (document.getElementById('reg3_3').checked == false) && (document.getElementById('reg3_4').checked == false) && (document.getElementById('reg3_4').checked == false) && (document.getElementById('reg3_5').checked == false))
	 {
		 	document.getElementById('workshopValidation').innerHTML = "No workshop selected";
			$("#workshopValidation").fadeOut("slow");
			$("#workshopValidation").fadeIn();
			document.getElementById('reg3_1').focus();
			return false;
	 }
	 
	 if(document.getElementById('agree').checked == false)
	 {
			document.getElementById('agreeValidation').innerHTML = "Please tick on agree terms & condition";
			$("#agreeValidation").fadeOut("slow");
			$("#agreeValidation").fadeIn();
			document.getElementById('agree').focus();
			return false;
	 }
	 if(document.getElementById('onlinemode').checked == false)
	 {
		if(document.getElementById('offlinemode').checked == false)
		{
			document.getElementById('paymentmodeValidation').innerHTML = "Please Select payment mode.";
			$("#paymentmodeValidation").fadeOut("slow");
			$("#paymentmodeValidation").fadeIn();
			document.getElementById('onlinemode').focus();
			return false;
		}
		else
		{
			document.getElementById('submitloader').style.display = "block";
			document.getElementById('datasubmit').style.backgroundColor = "#6ebce4";
			document.getElementById('datasubmit').style.display = "none";
			ShowProgressAnimation();
			return true;
		}
	 }
	 else
	 {
		document.getElementById('submitloader').style.display = "block";
		document.getElementById('datasubmit').style.backgroundColor = "#6ebce4";
		document.getElementById('datasubmit').style.display = "none";
		ShowProgressAnimation();
		return true;
	 }
}

function getValidation_rc()
{
	if(document.getElementById('fname').value == "")
	{
		document.getElementById('FnameValidation').innerHTML = "First Name cannot be empty.";
		$("#FnameValidation").fadeOut("slow");
		$("#FnameValidation").fadeIn();
		document.getElementById('fname').focus();
		return false;
	}
	if(document.getElementById('mname').value == "")
	{
		document.getElementById('MnameValidation').innerHTML = "Middle Name cannot be empty.";
		$("#MnameValidation").fadeOut("slow");
		$("#MnameValidation").fadeIn();
		document.getElementById('mname').focus();
		return false;
	}
	if(document.getElementById('lname').value == "")
	{
		document.getElementById('LnameValidation').innerHTML = "Last Name cannot be empty.";
		$("#LnameValidation").fadeOut("slow");
		$("#LnameValidation").fadeIn();
		document.getElementById('lname').focus();
		return false;
	}
	if(document.getElementById('address1').value == "")
	{
		document.getElementById('Address1Validation').innerHTML = "Address1 cannot be empty.";
		$("#Address1Validation").fadeOut("slow");
		$("#Address1Validation").fadeIn();
		document.getElementById('address1').focus();
		return false;
	}
	if(document.getElementById('city').value == "")
	{
		document.getElementById('CityValidation').innerHTML = "City cannot be empty.";
		$("#CityValidation").fadeOut("slow");
		$("#CityValidation").fadeIn();
		document.getElementById('city').focus();
		return false;
	}
	if(document.getElementById('state').value == "")
	{
		document.getElementById('StateValidation').innerHTML = "State cannot be empty.";
		$("#StateValidation").fadeOut("slow");
		$("#StateValidation").fadeIn();
		document.getElementById('state').focus();
		return false;
	}
	if(document.getElementById('pincode').value == "")
	{
		document.getElementById('PincodeValidation').innerHTML = "Pincode cannot be empty.";
		$("#PincodeValidation").fadeOut("slow");
		$("#PincodeValidation").fadeIn();
		document.getElementById('pincode').focus();
		return false;
	}
	if(document.getElementById('isa').value == "yes")
	{
		if(document.getElementById('isano').value == "")
		{
			document.getElementById('ISAValidation').innerHTML = "ISA registration number cannot be empty.";
			$("#ISAValidation").fadeOut("slow");
			$("#ISAValidation").fadeIn();
			document.getElementById('isano').focus();
			return false;
		}
	}
	if(document.getElementById('mobile').value == "")
	{
		document.getElementById('MobileValidation').innerHTML = "Mobile cannot be empty.";
		$("#MobileValidation").fadeOut("slow");
		$("#MobileValidation").fadeIn();
		document.getElementById('mobile').focus();
		return false;
	}
	if(document.getElementById('mobile').value != "")
	{
		var y = document.getElementById('mobile').value;
		if(isNaN(y) || y.indexOf(" ")!=-1)
		{
			document.getElementById('MobileValidation').style.display = "block";
          	document.getElementById('MobileValidation').style.color = "red";
			document.getElementById('MobileValidation').innerHTML = "Invalid Mobile No..";
			$("#MobileValidation").fadeOut("slow");
			$("#MobileValidation").fadeIn();
			document.getElementById('mobile').focus();
			return false;
		}
		if (y.length>10 || y.length<10)
		{
			document.getElementById('MobileValidation').style.display = "block";
          	document.getElementById('MobileValidation').style.color = "red";
			document.getElementById('MobileValidation').innerHTML = "Mobile No. should be 10 digit.";
			$("#MobileValidation").fadeOut("slow");
			$("#MobileValidation").fadeIn();
			document.getElementById('mobile').focus();
			return false;
		}
		if (!(y.charAt(0)=="9" || y.charAt(0)=="8" || y.charAt(0)=="7"))
		{
			document.getElementById('MobileValidation').style.display = "block";
          	document.getElementById('MobileValidation').style.color = "red";
			document.getElementById('MobileValidation').innerHTML = "Mobile No. should start with 9 or 8 or 7.";
			$("#MobileValidation").fadeOut("slow");
			$("#MobileValidation").fadeIn();
			document.getElementById('mobile').focus();
			return false
		}
		else
		{
			document.getElementById('MobileValidation').innerHTML = '';
		}
	}
	if(document.getElementById('email').value == "")
	{
		document.getElementById('EmailValidation').innerHTML = "Email cannot be empty.";
		$("#EmailValidation").fadeOut("slow");
		$("#EmailValidation").fadeIn();
		document.getElementById('email').focus();
		return false;
	}
	if(document.getElementById('email').value != "")
	{
		//alert('IN');
        var emailstr = document.getElementById('email').value;
		var reg = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

		if(reg.test(emailstr) == false) 
		{
			document.getElementById('EmailValidation').innerHTML = "Invalid Email-ID";
			$("#EmailValidation").fadeOut("slow");
			$("#EmailValidation").fadeIn();
			document.getElementById('email').focus();
			return false;
		}
		else
		{
			document.getElementById('EmailValidation').innerHTML = '';
		}
     }
	 /*if(document.getElementById('file').value == "")
	 {
		document.getElementById('PhotoValidation').innerHTML = "Please Select your image.";
		$("#PhotoValidation").fadeOut("slow");
		$("#PhotoValidation").fadeIn();
		document.getElementById('file').focus();
		return false;
	 }*/
	
	 else
	 {
		document.getElementById('submitloader').style.display = "block";
		document.getElementById('datasubmit').style.backgroundColor = "#6ebce4";
		document.getElementById('datasubmit').style.display = "none";
		ShowProgressAnimation();
		return true;
	 }
}