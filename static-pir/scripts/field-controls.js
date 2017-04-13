$(document).ready(function() {

//CALENDAR CONTROLS
  var date = new Date();
  var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  var end = new Date(date.getFullYear(), date.getMonth(), date.getDate());

	$('#dateRequested').datepicker({
		format: "mm/dd/yyyy",
		startDate: today,
	});

	$('#dateRequested').datepicker('setDate', today);

	$('#dateRequested').datepicker({
		format: "mm/dd/yyyy"
	});

	$('#dateRequested').datepicker({
		format: "mm/dd/yyyy",
		startDate: today,
	});

	$('#poFirmEndDate').datepicker('setDate', today);

	$('#poFirmEndDate').datepicker({
		format: "mm/dd/yyyy"
	});

	$('#poFirmEndDate').datepicker({
		format: "mm/dd/yyyy",
		startDate: today,
	});

  $('#dateRequested').datepicker('setDate', today);

  $('#dateRequested').datepicker({
  	format: "mm/dd/yyyy"
   });

//TOGGLE CHECKBOX CONTROLS

    $('.services-op-check').click(function() {
     if( $(this).is(':checked')) {
        $("#services-op-wrapper").show();
     } else {
        $("#services-op-wrapper").hide();
     }
    });

    $('.multipleReleases').click(function() {
     if( $(this).is(':checked')) {
        $("#release-options").show();
     } else {
        $("#release-options").hide();
     }
    });

    $('.purchase-order').click(function() {
     if( $(this).is(':checked')) {
        $("#customerPo").show();
     } else {
        $("#customerPo").hide();
     }
    });

     $('.firmShipDate').click(function() {
     if( $(this).is(':checked')) {
        $("#firmShipDate").show();
     } else {
        $("#firmShipDate").hide();
     }
    });

     $('.signedAgreement').click(function() {
     if( $(this).is(':checked')) {
        $("#signedAgreement").show();
     } else {
        $("#signedAgreement").hide();
     }
    });

     $('.customerAcknow').click(function() {
     if( $(this).is(':checked')) {
        $("#customerAcknow").show();
     } else {
        $("#customerAcknow").hide();
     }
    });

     $('.returnableMaterial').click(function() {
     if( $(this).is(':checked')) {
        $("#returnableMaterial").show();
     } else {
        $("#returnableMaterial").hide();
     }
    });

     $('.restockFee').click(function() {
     if( $(this).is(':checked')) {
        $("#restockFee").show();
     } else {
        $("#restockFee").hide();
     }
    });

     $('.valueOfInventory').click(function() {
     if( $(this).is(':checked')) {
        $("#valueOfInventory").show();
     } else {
        $("#valueOfInventory").hide();
     }
    });

      $('.returnOffset').click(function() {
     if( $(this).is(':checked')) {
        $("#returnOffset").show();
     } else {
        $("#returnOffset").hide();
     }
    });

      $('.vendorRelationship').click(function() {
     if( $(this).is(':checked')) {
        $("#vendorRelationship").show();
     } else {
        $("#vendorRelationship").hide();
     }
    });

});

//FIND TOTAL BOM COST

 function findTotal(){
    var arr = document.getElementsByName('qty');
    var tot=0;
    for(var i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    document.getElementById('totalBOMCost').value = tot;
}