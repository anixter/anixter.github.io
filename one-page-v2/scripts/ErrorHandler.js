function errorMessage(jqXHR, exception) {
	var msg = '';
	if (jqXHR != null || jqXHR.length > 0) {
		if (jqXHR.status === 0) {
			msg = 'Can not connect to server.\n please verify Network connection!';
		} else if (jqXHR.status == 404) {
			msg = 'Requested page not found. [404]';
		} else if (jqXHR.status == 500) {
			msg = 'Internal Server Error [500].';
		} else if (jqXHR.status == 403) {
            msg = 'Sorry, your session has expired. Please login again to continue';
        //    window.location.href ="/index.html";
		} else if (exception === 'parsererror') {
			msg = 'Requested JSON parse failed.';
		} else if (exception === 'timeout') {
			msg = 'Time out error.';
		} else if (exception === 'abort') {
			msg = 'Ajax request aborted.';
		} else {
			msg = 'Uncaught Error.\n' + jqXHR.responseText;
		}
	}
	return msg;
}