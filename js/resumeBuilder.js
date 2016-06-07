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

		// if the education section isn't blank then display the eduction
		if(education.schools.length > 0) {
			education.display();
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
			"url": "http://slcc.edu",
			"location": "Salt Lake City, UT",
			"dates": "2008-2012",
			"degree": "Associates",
			"major": "Computer Engineering"
		}
	],
	"onlineCourses": [
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://udacity.com/courses/ud304"
		},
		{
			"title": "Javascript Basics",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com/course/ud804"
		},
		{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"dates": "2015 - 2016",
			"url": "https://www.udacity.com/course/nd001"
		}
	],
	"display": function() {
		for (school in education.schools) {
			if(education.schools.hasOwnProperty(school)) {
				$("#education").append(HTMLschoolStart);
				var formattedName = HTMLschoolName.replace("#", education.schools[school].url).replace("%data%", education.schools[school].name);
				var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
				var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
				var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

				$(".education-entry:last").append(formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor);
			}
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for (course in education.onlineCourses) {
				$("#education").append(HTMLschoolStart);
				if(education.onlineCourses.hasOwnProperty(course)) {
					var formattedTitle = HTMLonlineTitle.replace("#", education.onlineCourses[course].url).replace("%data%", education.onlineCourses[course].title);
					var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
					var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
					var formattedUrl = HTMLonlineURL.replace("#", education.onlineCourses[course].url).replace("%data%", education.onlineCourses[course].url);

					$(".education-entry:last").append(formattedTitle + formattedSchool + formattedDates + formattedUrl);
				}
			}
		}
	}
};

var work = {
	"jobs": [
		{
			"employer": "Plaid Tie LLC",
			"title": "Partner and Senior Web Developer",
			"url": "http://plaidtie.net",
			"location": "Salt Lake City, Utah",
			"dates": "2012 - Present",
			"description": "Freelance development company that was started with some friends to give us an environment where we could experiment with new technologies and has the added bonus of making us extra money."
		},
		{
			"employer": "3form",
			"title": "Web Developer & Server Admin",
			"url": "http://www.3-form.com",
			"location": "Salt Lake City, UT",
			"dates": "2012 - Present",
			"description": "Full-Stack developer working with Yii, Bootstrap, BackboneJS and more."
		},
		{
			"employer": "Sorenson Communications",
			"title": "Software Test Engineer",
			"url": "http://www.sorenson.com",
			"location": "Salt Lake City, UT",
			"dates": "2008 - 2012",
			"description": "Test the quality of the software provided using automation and test sessions."
		}
	],
	"display": function() {
		for (job in work.jobs) {
			if(work.jobs.hasOwnProperty(job)) {
				$("#workExperience").append(HTMLworkStart);
				var formattedEmployer = HTMLworkEmployer.replace("#", work.jobs[job].url).replace("%data%", work.jobs[job].employer);
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
			"title": "Udacity Front End Developer Project 1 - Pixel Perfect Mock Up",
			"url": "http://sumnercreations.github.io/udacity-fed-project_1/",
			"dates": "2015",
			"description": "I was required to create a page that was pixel perfect to the mock up that was given.",
			"images": [
				"images/mug.png",
			]
		},
		{
			"title": "Coin Flip - Web OS",
			"url": "https://github.com/sumnercreations/Coin-Flip-WebOS",
			"dates": "2011",
			"description": "A very simple coin flip application built for Palm's Web OS.",
			"images": [
				"images/heads.png",
				"images/tails.png",
			]
		}
	],
	"display": function() {
		for (project in projects.projects) {
			if(projects.projects.hasOwnProperty(project)) {
				$("#projects").append(HTMLprojectStart);
				var formattedTitle = HTMLprojectTitle.replace("#", projects.projects[project].url).replace("%data%", projects.projects[project].title);
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
};

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