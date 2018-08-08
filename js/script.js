$(document).ready(function(){
	var ctx = $("#sketch").get(0).getContext("2d");

	var data = [
		{
			value: 80,
			color: "cornflowerblue",
			
		},
		{
			value: 20,
			color: "orange",
			
			
		}
	];

	var chart = new Chart(ctx).Doughnut(data);
	var ctx = $("#balsamiq").get(0).getContext("2d");

	var data = [
		{
			value: 90,
			color: "cornflowerblue",
			
			
		},
		{
			value: 10,
			color: "orange",
			
			
		}
	];

	var chart = new Chart(ctx).Doughnut(data);
});