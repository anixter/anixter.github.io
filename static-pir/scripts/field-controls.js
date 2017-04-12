$(document).ready(function() {
  var date = new Date();
  var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  var end = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  $('#date-requested').datepicker({
format: "mm/dd/yyyy",
startDate: today,
  });

  $('#date-requested').datepicker('setDate', today);

});
