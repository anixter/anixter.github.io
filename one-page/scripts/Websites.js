
//var servicesUrl = 'http://localhost:52042/SSOWebService.asmx';
var servicesUrl = 'http://utilidevinternal.hdsupply.com/SSOService/SSOWebService.asmx';


$(document).ready(function () {
	console.log("load website...");
	$.ajax({
		type: 'POST',
		data: '',
		url: servicesUrl + '/ApplicationList',
		contentType: 'application/json; charset=utf-8',
		dataType: 'json',
		success:
		  function (data, textStatus, XMLHttpRequest) {
			console.log(data.d);
			var appObject = $.parseJSON(data.d);
			if (appObject.Status == "SUCCESS") {
				console.log("success retrieve the application list.");
				//loadApplicationList(appObject);
			}
			else {
				alert(appObject.Status + " " + appObject.StatusMessage);
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
	  
	  
		//Chang password click event
		$('#resetPWBtn').click(function (event){ 
			console.log("reset password");
			event.preventDefault(); 
			var oldPwd = $("input#currentPassword").val();
			var newPwd = $("input#newPassword").val();
			var confPwd = $("input#confirmNewPassword").val();
			if (oldPwd != "" && newPwd != "") {
				console.log("reset password: " + newPwd);
				changePassword(oldPwd,newPwd);
			}
			 
			//return false; //for good measure
		});
	
		//Signout click event
	  $('a#signoutBtn').click(function (event){ 
		 event.preventDefault(); 
		 var id = $(this).attr("id");
		 //alert(id);
		 if(id=="signoutBtn") {
			signout();
		 }
		 //return false; //for good measure
	});
	
  });
  
  
function changePassword(oldPwd, newPwd) {
	  $.ajax({
		type: 'POST',
		data: "{"
					+ "oldPassword:'" + oldPwd + "', "
					+ "newPassword:'" + newPwd + "' "
					+ "}",
		url: servicesUrl + '/ChangePassword',
		contentType: 'application/json; charset=utf-8',
		dataType: 'json',
		success:
		  function (data, textStatus, XMLHttpRequest) {
			console.log(data.d);
			var userObject = $.parseJSON(data.d);
			if (userObject.Status == "SUCCESS") {
				//clear the input fields
				$("#currentPassword").val('');
				$("#newPassword").val('');
				$("#confirmNewPassword").val('');
				$('#resetpassword').modal('hide');
				alert(userObject.StatusMessage);
			}
			else {
				console.log(userObject.Status + " " + userObject.StatusMessage);
				var msg = 'Sorry, the current password is not correct.';
				$("p#invalid-pwd").text(msg);
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


function signout() {
	$.ajax({
		type: 'POST',
		data: '',
		url: servicesUrl + '/Logout',
		contentType: 'application/json; charset=utf-8',
		dataType: 'json',
		success:
		  function (data, textStatus, XMLHttpRequest) {
			//alert(data.d);
			//need check for parent window... if open then close the child window
			//window.location.href = "index.html";
			//window.close();
		  },
		error:
		  function (jqXHR, textStatus, errorThrown) {
			console.log(textStatus);
			console.log(XMLHttpRequest.responseText);
			console.log(errorThrown.Message);
			alert(errorMessage(jqXHR, errorThrown));
		  }
	  });
	  
	  //close the window anyway regardless of failed or success 
	  window.close();
}
function loadApplicationList(data) 
{
	alert ("loadApplicationList: " + data[0].WebsiteUserLogin);
	for (var i = 0; i < data.length; i++) {
		//addBlankWebsite();
		var varStr1 = BlankWebsiteHtml("Update");
		$('#websitesDiv'+uid).append(strVar1);
		
		//build the websitename select options list
		$('#WebsiteName').empty();
		$.each(allWebsitesList, function(i, value) {	
			$('#WebsiteName').append($('<option>').text(value.WebsiteDescription).attr('value', value.WebsiteName));
		});
		
		//change the id to an unique name
		$('#WebsiteName').prop('id','WebsiteName'+i);
		$('#WebsiteUserLogin').prop('id','WebsiteUserLogin'+i);
		
		//alert($('#WebsiteName'+i).val());
		
		//set value to input fields
		$('#WebsiteName'+i).val( data[i].WebsiteName.trim() );		
		$('#WebsiteUserLogin'+i).val( data[i].WebsiteUserLogin );
						
		//disable fields
		$('#WebsiteName'+i).prop('disabled', true);
		//$('#WebsiteUserLogin'+i).prop('disabled', true);
	}	
	
}
	  
	  