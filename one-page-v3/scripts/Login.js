
//var servicesUrl = 'http://localhost:52042/SSOWebService.asmx';
var servicesUrl = 'http://utilidevinternal.hdsupply.com/SSOService/SSOWebService.asmx';


$(document).ready(function () {
	$("#signinBtn").click(function (e) {
		e.preventDefault();
		var lg = $("input#login").val();
		var pwd = $("input#password").val();
		if (lg != "" && pwd != "") {
			userLogin(lg,pwd);
		}
	});
	
	//forgotpasswordBtn action
	$("#resetPWBtn").click(function (e) {
		e.preventDefault();
		console.log("reset pwd");
		var email = $("input#emailFP").val();
		if (email != "") {
			forgotpassword(email);
		}
	});
	
	//contactUs form
	$("#contactUsBtn").click(function (e) {
		e.preventDefault();
		console.log("Submit ContactUs form...");
		var email = $("input#txtEmail").val();
		if (email != "") {
			contactUs();
		}
	});
	
	
	//register form
	$("#registerBtn").click(function (e) {
		e.preventDefault();
		console.log("Submit register form...");
		var email = $("input#email").val();
		if (email != "") {
			registerUser();
		}
	});
	
  });
	  
	  
function userLogin(username, password) {
	  $.ajax({
		type: 'POST',
		data: "{"
					+ "name:'" + username + "', "
					+ "password:'" + password + "' "
					+ "}",
		url: servicesUrl + '/Login',
		contentType: 'application/json; charset=utf-8',
		dataType: 'json',
		success:
		  function (data, textStatus, XMLHttpRequest) {
			// console.log(data.d);
			var userObject = $.parseJSON(data.d);
			if (userObject.Status == "SUCCESS") {
				$("#lblWelcomeName").append(" " + userObject.UserName + ".");
				//clear input fields
				$("input#login").val('');
				$("input#password").val('');
				//window.location.href = "login-landing.html";
				//window.open("login-landing.html");
				$( ".if-not-signed-in" ).hide();
				$( ".if-signed-in" ).show();
				$( "#signIn" ).hide();
				$( "#signoutBtn" ).show();
			}
			else {
				alert(userObject.Status + " " + userObject.StatusMessage);
			}
		  },
		error:
		  function (jqXHR, textStatus, errorThrown) {
			console.log(textStatus);
			console.log(XMLHttpRequest.responseText);
			console.log(errorThrown.Message);
			alert(errorMessage(jqXHR, errorThrown));
		  }
	  });
}


function forgotpassword(uemail) {
	  $.ajax({
		type: 'POST',
		data: "{"
					+ "email:'" + uemail + "' "
					+ "}",
		url: servicesUrl + '/ForgotPassword',
		contentType: 'application/json; charset=utf-8',
		dataType: 'json',
		success:
		  function (data, textStatus, XMLHttpRequest) {
			console.log(data.d);
			var userObject = $.parseJSON(data.d);
			if (userObject.Status == "SUCCESS") {
				$("#forgotpassword").val('');
				$('#forgotpassword').modal('hide');
				alert(userObject.StatusMessage);
			}
			else {
				//alert(userObject.Status + " " + userObject.StatusMessage);
				var msg = 'Sorry, the E-mail address provided is not valid.';
				$("p#invalid-email").text(msg);
			}
		  },
		error:
		  function (jqXHR, textStatus, errorThrown) {
			console.log(textStatus);
			console.log(XMLHttpRequest.responseText);
			console.log(errorThrown.Message);
			alert(errorMessage(jqXHR, errorThrown));
		  }
	  });
}

function contactUs() {
	/*var requests = new Object();
	requests.ddHelp = $("#ddHelp").val();
	requests.txtName = $("#txtName").val();
	requests.txtLast = $("#txtLast").val();
	requests.txtEmail = $("#txtEmail").val();
	requests.ddIndustry = $("#ddIndustry").val();
	requests.txtCoName = $("#txtCoName").val();
	requests.txtAcctNum = $("#txtAcctNum").val();
	requests.txtAddress = $("#txtAddress").val();
	requests.txtCity = $("#txtCity").val();
	requests.txtState = $("#txtState").val();
	requests.txtZip = $("#txtZip").val();
	requests.txtCoPhone = $("#txtCoPhone").val();
	requests.txtCellPhone = $("#txtCellPhone").val();
	requests.rdUpdates_0 = $("#rdUpdates_0").prop("checked");
	requests.rdUpdates_1 = $("#rdUpdates_1").prop("checked");
	requests.txtComments = $("#txtComments").val();
	var parms = JSON.stringify(requests);*/

	  $.ajax({
		type: 'POST',
		data: "{"
			+ "ddHelp:'" + $("#ddHelp").val() + "', "
			+ "txtName:'" + $("#txtName").val() + "', "
			+ "txtLast:'" + $("#txtLast").val() + "', "
			+ "txtEmail:'" + $("#txtEmail").val() + "', "
			+ "ddIndustry:'" + $("#ddIndustry").val() + "', "
			+ "txtCoName:'" + $("#txtCoName").val() + "', "
			+ "txtAcctNum:'" + $("#txtAcctNum").val() + "', "
			+ "txtAddress:'" + $("#txtAddress").val() + "', "
			+ "txtCity:'" + $("#txtCity").val() + "', "
			+ "txtState:'" + $("#txtState").val() + "', "
			+ "txtZip:'" + $("#txtZip").val() + "', "
			+ "txtCoPhone:'" + $("#txtCoPhone").val() + "', "
			+ "txtCellPhone:'" + $("#txtCellPhone").val() + "', "
			+ "rdUpdates_0:'" + $("#rdUpdates_0").prop("checked") + "', "
			+ "rdUpdates_1:'" + $("#rdUpdates_1").prop("checked") + "', "
			+ "txtComments:'" + $("#txtComments").val() + "' "
			+ "}",
		url: servicesUrl + '/SendContactRequest',
		contentType: 'application/json; charset=utf-8',
		dataType: 'json',
		success:
		  function (data, textStatus, XMLHttpRequest) {
			console.log(data.d);
			if (data.d == "SUCCESS") {
				var msg = "Your  request has been submitted." ;
				alert(msg);
			}
			else {
				alert(data.d);
			}
		  },
		error:
		  function (jqXHR, textStatus, errorThrown) {
			console.log(textStatus);
			console.log(XMLHttpRequest.responseText);
			console.log(errorThrown.Message);
			alert(errorMessage(jqXHR, errorThrown));
		  }
	  });
}


function registerUser() {

	  $.ajax({
		type: 'POST',
		data: "{"
			+ "firstName:'" + $("#fname").val() + "', "
			+ "lastName:'" + $("#lname").val() + "', "
			+ "company:'" + $("#company").val() + "', "
			+ "address:'" + $("#address").val() + "', "
			+ "address2:'" + $("#address2").val() + "', "
			+ "city:'" + $("#city").val() + "', "
			+ "state:'" + $("#state").val() + "', "
			+ "country:'" + $("#country").val() + "', "
			+ "zip:'" + $("#zip").val() + "', "
			+ "phone:'" + $("#phone").val() + "', "
			+ "email:'" + $("#email").val() + "', "
			+ "eStorefront:'" + $("#eStorefront").prop("checked") + "', "
			+ "mobileWarehouse:'" + $("#mw").prop("checked") + "', "
			+ "reservationCenter:'" + $("#rc").prop("checked") + "', "
			+ "dts:'" + $("#dts").prop("checked") + "', "
			//+ "qms:'" + $("#qms").prop("checked") + "', "
			+ "performanceDashboard:'" + $("#performanceDashboard").prop("checked") + "', "
			+ "quoteXchange:'" + $("#quoteXchange").prop("checked") + "', "
			+ "invGateway:'" + $("#invGateway").prop("checked") + "' "
			+ "}",
		url: servicesUrl + '/RegisterUser',
		contentType: 'application/json; charset=utf-8',
		dataType: 'json',
		success:
		  function (data, textStatus, XMLHttpRequest) {
			console.log(data.d);
			if (data.d == "SUCCESS") {
				$('#register').modal('hide');
				
				var msg = "Your registration request has been submitted and will be processed within 24 hours.  " +
                        "An email has been sent to confirm the registration and to provide more information " +
                        "about your online account.";
				alert(msg);
				
				//clear all fields
				$("#fname").val('');
				$("#lname").val('');
				$("#company").val('');
				$("#address").val('');
				$("#address2").val('');
				$("#city").val('');
				$("#state").val('');
				$("#country").val('');
				$("#zip").val('');
				$("#phone").val('');
				$("#email").val('');
			}
			else {
				alert(unescape(data.d));
			}
		  },
		error:
		  function (jqXHR, textStatus, errorThrown) {
			console.log(textStatus);
			console.log(XMLHttpRequest.responseText);
			console.log(errorThrown.Message);
			alert(errorMessage(jqXHR, errorThrown));
		  }
	  });
}


function userInSession() {
	//check for user in session
	$.ajax({
		type: 'POST',
		data: '',
		url: 'http://utilidevinternal.hdsupply.com/SSOService/SSOWebService.asmx/InSession',
		contentType: 'application/json; charset=utf-8',
		dataType: 'json',
		success:
		  function (data, textStatus, XMLHttpRequest) {
			var json = $.parseJSON(data.d);
			//alert(data.d);
			toggleMenu(json.Status);
			$("#welcome").html("Welcome, " + json.UserName + ".");
		  },
		error:
		  function (jqXHR, textStatus, errorThrown) {
			console.log(textStatus);
			console.log(XMLHttpRequest.responseText);
			console.log(errorThrown.Message);
			alert(errorMessage(jqXHR, errorThrown));
		  }
	  });
}