var ganttData = [
	{
		id: 1, name: "Feature 1", series: [
			{ name: "Planned", start: new Date(2020,00,01), end: new Date(2020,00,03) ,color: "#a3d2ca"},
			{ name: "Actual", start: new Date(2020,00,02), end: new Date(2020,00,05), color: "#056676" }
		]
	},
	{
		id: 2, name: "Feature 2", series: [
			{ name: "Planned", start: new Date(2020,00,05), end: new Date(2020,00,20) ,color: "#a3d2ca"},
			{ name: "Actual", start: new Date(2020,00,06), end: new Date(2020,00,17), color: "#056676" }
		]
	},
	{
		id: 3, name: "Feature 3", series: [
			{ name: "Planned", start: new Date(2020,00,11), end: new Date(2020,01,03) ,color: "#a3d2ca"},
			{ name: "Actual", start: new Date(2020,00,15), end: new Date(2020,01,03), color: "#056676" }
		]
	},
	{
		id: 4, name: "Feature 4", series: [
			{ name: "Planned", start: new Date(2020,01,01), end: new Date(2020,01,03) ,color: "#a3d2ca"},
			{ name: "Actual", start: new Date(2020,01,01), end: new Date(2020,01,05), color: "#056676" }
		]
	},
	{
		id: 5, name: "Feature 5", series: [
			{ name: "Planned", start: new Date(2020,02,01), end: new Date(2020,03,20) ,color: "#a3d2ca"},
			{ name: "Actual", start: new Date(2020,02,01), end: new Date(2020,03,26), color: "#056676" }
		]
	},
	{
		id: 6, name: "Feature 6", series: [
			{ name: "Planned", start: new Date(2020,00,05), end: new Date(2020,00,20) ,color: "#a3d2ca"},
			{ name: "Actual", start: new Date(2020,00,06), end: new Date(2020,00,17), color: "#056676" }
		]
	},
	{
		id: 7, name: "Feature 7", series: [
			{ name: "Planned", start: new Date(2020,00,11), end: new Date(2020,01,03) ,color: "#a3d2ca"},
		]
	},
	{
		id: 8, name: "Feature 8", series: [
			{ name: "Planned", start: new Date(2020,01,01), end: new Date(2020,01,03) ,color: "#a3d2ca"},
			{ name: "Actual", start: new Date(2020,01,01), end: new Date(2020,01,05), color: "#056676" }
		]
	}
];
var btnLogout = document.getElementById('logout_btn');
btnLogout.addEventListener('click', function() {
  window.location.href = "http://140.113.209.9/hack/src/index.php";
});
