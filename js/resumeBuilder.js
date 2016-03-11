// var formattedName = HTMLheaderName.replace("%data%", "Ammon Lockwood");
// var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
var bio = {
	"name": "Ammon Lockwood",
	"role": "Web Developer",
	"welcomeMessage": "Welcome to my rad site.",
	"contacts": {
		"mobile": "801-987-0676",
		"email": "ammon@plaidtie.net",
		"github": "sumnercreations",
		"twitter": "paviktherin",
		"location": "Utah"
	},
	"skills": [
		"JS",
		"CSS",
		"PHP",
		"Yii"
	],
};

var education = {
	"schools": [
		{
			"name": "Salt Lake Community College",
			"city": "Salt Lake",
			"years": "2008-2012",
			"degree": "Associates",
			"major": "Computer Engineering"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com/course/nd001"
		}
	]
};

var work = {
	"jobs": [
		{
			"employer": "3form",
			"title": "Web Developer",
			"location": "Salt Lake",
			"dates": "2012-2015",
			"description": "Full-Stack developer working with Yii, Bootstrap, BackboneJS and more."
		},
		{
			"employer": "Sorenson Communications",
			"title": "Software Test Engineer",
			"location": "Salt Lake",
			"dates": "2008-2012",
			"description": "Test the quality of the software provided using automation and test sessions."
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Foobar",
			"dates": "2012-2015",
			"description": "Foobar greatness.",
			"images": [
				"images/foobar-1.jpg",
				"images/foobar-2.jpg",
				"images/foobar-3.jpg"
			]
		},
		{
			"title": "Cookies",
			"dates": "2010-2012",
			"description": "Cookies are so yummy",
			"images": [
				"images/cookies-1.jpg",
				"images/cookies-2.jpg",
				"images/cookies-3.jpg"
			]
		}
	]
};

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
}
