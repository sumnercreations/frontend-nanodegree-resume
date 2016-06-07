var bio = {
	"name": "Ammon Lockwood",
	"role": "Web Developer",
	"welcomeMessage": "Welcome, thanks for joining me on this Adventure.",
	"contacts": {
		"mobile": "801-987-0676",
		"email": "ammon@plaidtie.net",
		"github": "sumnercreations",
		"twitter": "@paviktherin",
		"location": "Utah"
	},
	"skills": [
		"JS",
		"CSS",
		"PHP",
		"HTML",
		"Yii",
		"Ruby on Rails",
	],
	"biopic": "https://www.gravatar.com/avatar/9c4e0b214051dd4bc76f9f3808586a83.jpg",
	"display": function(){
		$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
		$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
		$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
		$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

		for (contact in bio.contacts) {
			if(bio.contacts.hasOwnProperty(contact)) {
				$("#topContacts").append(HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", bio.contacts[contact]));

				$("#footerContacts").append(HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", bio.contacts[contact]));
			}
		}

		if(bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (skill in bio.skills) {
				if(bio.skills.hasOwnProperty(skill)) {
					$("ul#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
				}
			}
		}

		// If work isn't blank then display the work
		if(work.jobs.length > 0) {
			work.display();
		}

		// if the projects section isn't blank then display the projects
		if(projects.projects.length > 0) {
			projects.display();
		}

		// Add internationalization button
		// $("#main").append(internationalizeButton);

		// add the map
		$("#mapDiv").append(googleMap);
	}
};

var education = {
	"schools": [
		{
			"name": "Salt Lake Community College",
			"location": "Salt Lake City, UT",
			"years": "2008-2012",
			"degree": "Associates",
			"major": "Computer Engineering"
		}
	],
	"onlineCourses": [
		{
			"name": "Udactiy",
			"location": "Online",
			"title": "Front-End Web Developer Nanodegree",
			"dates": "2015",
			"url": "https://www.udacity.com/course/nd001"
		}
	]
};

var work = {
	"jobs": [
		{
			"employer": "3form",
			"title": "Web Developer & Server Admin",
			"location": "Salt Lake City, UT",
			"dates": "2012-2015",
			"description": "Full-Stack developer working with Yii, Bootstrap, BackboneJS and more."
		},
		{
			"employer": "Sorenson Communications",
			"title": "Software Test Engineer",
			"location": "Salt Lake City, UT",
			"dates": "2008-2012",
			"description": "Test the quality of the software provided using automation and test sessions."
		}
	],
	"display": function() {
		for (job in work.jobs) {
			if(work.jobs.hasOwnProperty(job)) {
				$("#workExperience").append(HTMLworkStart);
				var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
				var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
				var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
				var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
				var formattedDescr = HTMLworkDescription.replace("%data%", work.jobs[job].description);

				$(".work-entry:last").append(formattedEmployer + " " + formattedTitle + formattedDates + formattedLocation + formattedDescr);
			}
		}
	}
};

var projects = {
	"projects": [
		{
			"title": "Foobar",
			"dates": "2012-2015",
			"description": "Foobar greatness.",
			"images": [
				"images/197x148.gif",
				"images/197x148.gif",
				"images/197x148.gif"
			]
		},
		{
			"title": "Cookies",
			"dates": "2010-2012",
			"description": "Cookies are so yummy",
			"images": [
				"images/197x148.gif",
				"images/197x148.gif",
				"images/197x148.gif"
			]
		}
	]
};

projects.display = function () {
	for (project in projects.projects) {
		if(projects.projects.hasOwnProperty(project)) {
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			var formattedDescr = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

			images = [];
			for (image in projects.projects[project].images) {
				var newImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				images.push(newImage);
			}

			$(".project-entry:last").append(formattedTitle + formattedDates + formattedDescr + images);
		}
	}
}

// display our bio.
bio.display();

//     ____                 __  _
//    / __/_  ______  _____/ /_(_)___  ____  _____
//   / /_/ / / / __ \/ ___/ __/ / __ \/ __ \/ ___/
//  / __/ /_/ / / / / /__/ /_/ / /_/ / / / (__  )
// /_/  \__,_/_/ /_/\___/\__/_/\____/_/ /_/____/


function locationizer(work_obj) {
	var locations = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locations.push(newLocation);
	}

	return locations;
}

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	lname = name[1].toUpperCase();
	fname = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	intName = fname + " " + lname;
	console.log(intName);

	return intName;
}