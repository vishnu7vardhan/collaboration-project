'use strict';
var letzChaat=angular.module("Collaboration",["ngRoute"]);
letzChaat.config(function($routeProvider) {
	$routeProvider
	.when("/",
	{
		templateUrl:"main.html",
		controller:'mainController'
	})
	.when("/main",
	{
		templateUrl:"main.html",
		controller:'mainController'
	})
	.when("/login",
	{
		templateUrl:"login.html",
		controller:'loginController'
	})
	.when("/register",
	{
		templateUrl:"register.html",
		controller:'registerController'
	})
	.when("/about",
	{
		templateUrl:"about.html",
		controller:'aboutController'
	})
	.when("/404",
	{
		templateUrl:"404.html",
		
	})
	.when("/portfolio",
	{
		templateUrl:"portfolio.html",
		
	})
	.when("/pricing",
	{
		templateUrl:"pricing.html",
		
	})
	.when("/shortcodes",
	{
		templateUrl:"shortcodes.html",
		
	})
	.when("/portfolio",
	{
		templateUrl:"portfolio.html",
		
	})
	
	.when("/friends",
	{
		templateUrl:"friend.html",
		controller:'friendController'
	})
	.when("/myFriends",
	{
		templateUrl:"MyFriends.html",
		controller:'MyFriendsController'
	})
	.when("/friendsRequests",
	{
		templateUrl:"friendRequest.html",
		controller:'friendRequestController'
	})
	
	.when("/event",
	{
		templateUrl:"event.html",
		controller:'eventController'
	})
	.when("/adminEvent",
	{
		templateUrl:"adminEvent.html",
		controller:'adminEventController'
	})
	.when("/blog",
	{
		templateUrl:"blog.html",
		controller:'blogController'
	})
	.when("/blog-item",
	{
		templateUrl:"blog-item.html",
		controller:'blogController'
	})
	.when("/contact",
	{
		templateUrl:"contact.html",
		
	})
	.when("/services",
	{
		templateUrl:"services.html",
		controller:'servicesController'
	}).
	when("/logout",
			{
				templateUrl:"logout.html",
				controller:'logoutController'
			})
	.when("/userHome",
	{
		templateUrl:"userHome.html",
		controller:'userHomeController'
	})
	.when("/jobs",
	{
		templateUrl:"jobs.html",
		controller:'jobsController'
	})
	.when("/admin",
	{
		templateUrl:"admin.html",
		controller:'adminController'
	})
	.when("/adminBlog",
	{
		templateUrl:"adminBlog.html",
		controller:'adminBlogController'
	})
	.when("/adminJobs",
	{
		templateUrl:"adminJobs.html",
		controller:'adminjobsController'
	})
	
		.when("/adminForum",
	{
		templateUrl:"adminForum.html",
		controller:'adminForumController'
	})

	.when("/forum",
	{
		templateUrl:"forum.html",
		controller:'forumController'
	})
	.when("/chat",
			{
				templateUrl:"chat.html",
				controller:'ChatCtrl'
			})

});
letzChaat.controller('mainController',function($scope)		
		{
			$scope.message="you are in main page";
			$scope.isBlog=true;	
		}
		);
letzChaat.controller('logoutController',function($scope,$rootScope,$http)		
		{
	
			console.log("logout controller called");
	
			
			$rootScope.login=true;
			$rootScope.register=true;
			$rootScope.services=true;
			$rootScope.about=true;
			$rootScope.home=true;
			$rootScope.blog=false;
			$rootScope.forum=false;
			$rootScope.event=false;
			$rootScope.jobs=false;
			$rootScope.logout=false;
			$rootScope.chat=false;
			$rootScope.adminBlog=false;
			$rootScope.adminEvent=false;
			$rootScope.adminJobs=false;
			$rootScope.adminForum=false;

			$rootScope.users=false;
			
			
				
				$http.get('http://localhost:8085/Collaboration/logout');
				$scope.message="You are successfully logged out...........";
				
			
			
			
			
		}
		);
letzChaat.controller('loginController',['$scope','$http','$location','$rootScope',function($scope,$http,$location,$rootScope)		
		{
             console.log(" login controller");
			 $scope.login=function()
			 {
				  var loginData={
						  username:$scope.username,	
							password:$scope.password,  
				  }
 $http.post('http://localhost:8085/Collaboration/authenticate',loginData).then(function (response) {
	 console.log("result   data:"+response.data);
	 var r=response.data.toString();
	 console.log("response:"+r);
     
		if(r==1)
			{
			$rootScope.blog=true;
			$rootScope.forum=true;
			$rootScope.jobs=true;
			$rootScope.login=false;
			$rootScope.register=false;
			$rootScope.services=false;
			$rootScope.about=false;
			$rootScope.home=false;
			$rootScope.logout=true;
			$rootScope.chat=true;
			console.log('logout:'+$rootScope.logout);
			console.log("wat is this ya:"+response.data);
			$scope.message="Welcome user";
			$location.path('/userHome');
			}
		if(r==0)
			{
			$scope.username="";
			$scope.password="";
			$scope.message="username/password incorrect";
			$location.path('/login');
			}
		if(r==2)
		{
			$rootScope.login=false;
			$rootScope.register=false;
			$rootScope.services=false;
			$rootScope.about=false;
			$rootScope.home=false;
			$rootScope.adminBlog=true;
			$rootScope.users=true;
			$rootScope.registeredUsers=true;
			$rootScope.logout=true;
			$scope.message="Welcome admin";
	$location.path('/admin');
		}
		
 });  
			 }
		}]
		);
letzChaat.controller('registerController',function($scope,$http)		
		{
			$scope.register=function()
			{
				console.log("username:"+$scope.username);
				var userData={
					userFullName:$scope.userFullName,
					username:$scope.username,
					userEmail:$scope.userEmail,
					userPhone:$scope.userPhone,
					password:$scope.password,
					role:$scope.role
				}
				 var res = $http.post('http://localhost:8085/Collaboration/addUser',userData);
			 		res.success(function(data, status, headers, config) {
			 			console.log("status:"+status);
			 			$scope.message="you are successfully registered!!!";
			 			
			 			$scope.userFullName="";
						$scope.username="";
						$scope.userEmail="";
						$scope.userPhone="";
						$scope.password="";
						$scope.role="";
			 			
			 		});
				
			}
		}
		);

/*
letzChaat.controller("adminJobsController",function($scope,$http,$rootScope)
{
	 $rootScope.login=false;
		$rootScope.register=false;
		$rootScope.services=false;
		$rootScope.about=false;
		$rootScope.home=false;
		$rootScope.adminBlog=true;
		$rootScope.users=true;
		$rootScope.registeredUsers=true;
		$rootScope.logout=true;
		$rootScope.adminJobs=true;
		
		
	  console.log("you are in adminjobs");
	  console.log("inside job controller");
	    $http.get("http://localhost:8085/Collaboration/viewAllJobs")
	    .then(function (response) {$scope.jobs = response.data;});
	   
});
*/

letzChaat.controller("adminBlogController",function($scope,$http,$rootScope)	
		{	
	$rootScope.login=false;
	$rootScope.friends=true;
	$rootScope.register=false;
	$rootScope.services=false;
	$rootScope.about=false;
	$rootScope.home=false;
	$rootScope.adminEvent=true;
	$rootScope.users=true;
	$rootScope.registeredUsers=true;
	$rootScope.logout=true;
	$rootScope.adminJobs=true;
	$rootScope.adminForum=true;
	
	$rootScope.adminBlog=true;
	
	
	
	console.log("i am in adminblog controller");
	console.log("after this");
			 $http.get("http://localhost:8085/Collaboration/viewBlogs")
			    .then(function (response) {
			    	
			    	$scope.blogs = response.data;
			    	
			    	console.log("xxxx:"+$scope.blogs[1].blogCreationDate);
			    });
			$scope.newBlog={};
			console.log("In Controller");
			$scope.addBlog=function(newBlog)
			{
				var dataObj = {
						blogId:$scope.blogId,
						title:$scope.title,
						usersID:$scope.usersID,
						/*dateOfCreation:$scope.dateOfCreation,*/
						
						content:$scope.content,
						category:$scope.category
						
		 		};
				console.log("title:"+dataObj.dateOfCreation);
				
				 var res = $http.post('http://localhost:8085/Collaboration/addBlog',dataObj);
				 $http.get("http://localhost:8085/Collaboration/viewBlogs")
			 	    .then(function (response) {$scope.blogs = response.data;});
			 		res.success(function(data, status, headers, config) {
			 			$scope.message = data;
			 			console.log("status:"+status);
			 		});
			 		 
			};
			$scope.editBlog=function(blog)
			{
				console.log("inside editblog");
				console.log("blog:"+blog);
				$scope.blogDataToEdit=blog;
			}
			$scope.saveEdit=function()
			{
				var dataObj = {
						
						blogId:$scope.blogDataToEdit.blogId,
						title:$scope.blogDataToEdit.title,
						usersID:$scope.blogDataToEdit.usersID,
						/*dateOfCreation:$scope.blogDataToEdit.dateOfCreation,*/
						blogCreationDate:$scope.blogCreationDate,
						content:$scope.blogDataToEdit.content,
						category:$scope.blogDataToEdit.category
		 				
		 		};
				
			/*	dataObj=JSON.parse(dataObj);*/
				/*dataObj.dateOfCreation = angular.fromJson(dataObj.dateOfCreation);*/
				
				
				
			/*	dataObj.dateOfCreation = JSON.stringify(dataObj.dateOfCreation);*/
				
				
				
				console.log("date :  "+dataObj.dateOfCreation);
				
				
				
				$http.put('http://localhost:8085/Collaboration/updateBlog', dataObj);
				$http.get("http://localhost:8085/Collaboration/viewBlogs")
		 	    .then(function (response) {$scope.blogs = response.data;});
			}
			$scope.deleteBlog=function(blogDataToEdit)
			{
				console.log("delete blog called");
				title:$scope.blogDataToEdit.title;
				console.log("title:"+blogDataToEdit.title);
				blogId:$scope.blogDataToEdit.blogId;
				console.log("blogId:"+blogDataToEdit.blogId);
				$http['delete']('http://localhost:8085/Collaboration/deleteBlog/'+blogDataToEdit.blogId);
				 $http.get("http://localhost:8085/Collaboration/viewBlogs")
			 	    .then(function (response) {$scope.blogs = response.data;});
			}
			
			$scope.approveBlog=function(i)
			{
				var dataObj = {
						
						blogId:$scope.blogDataToEdit.blogId,
						title:$scope.blogDataToEdit.title,
						usersID:$scope.blogDataToEdit.usersID,
						/*dateOfCreation:$scope.blogDataToEdit.dateOfCreation,*/
						blogCreationDate:$scope.blogDataToEdit.blogCreationDate,
						content:$scope.blogDataToEdit.content,
						category:$scope.blogDataToEdit.category
		 				
		 		};
				$http.put('http://localhost:8085/Collaboration/approveBlog/'+i,dataObj);
				$http.get("http://localhost:8085/Collaboration/viewBlogs")
		 	    .then(function (response) {$scope.blogs = response.data;});
			}
			
		}

		);






letzChaat.controller('aboutController',function($scope)		
		{
			$scope.message="you are in about page";
		}
		);
letzChaat.controller('servicesController',function($scope)		
		{
			$scope.message="you are in services page";
		}
		);

letzChaat.controller("blogController",function($scope,$http,$rootScope)	
		{	
	$rootScope.blog=true;
	$rootScope.friends=true;
	$rootScope.forum=true;
	$rootScope.jobs=true;
	$rootScope.login=false;
	$rootScope.register=false;
	$rootScope.services=false;
	$rootScope.about=false;
	$rootScope.home=false;
	$rootScope.logout=true;
	$rootScope.chat=true;
	$rootScope.event=true;
	
	console.log("i am in blogController");
	console.log("after this");
			 $http.get("http://localhost:8085/Collaboration/viewBlogs")
			    .then(function (response) {
			    	
			    	$scope.blogs = response.data;
			    /*	
			    	console.log("date of blog "+$scope.blogs[2].dateOfCreation);
	*/		    	console.log("data:"+response.data);
			    });
			$scope.newBlog={};
			console.log("In Controller");
			$scope.addBlog=function(newBlog)
			{
				var dataObj = {
						blogId:$scope.blogId,
						title:$scope.title,
						usersID:$scope.usersID,
						/*dateOfCreation:$scope.dateOfCreation,*/
						content:$scope.content,
						category:$scope.category
		 		};
				
				/*dataObj=JSON.parse(dataObj);*/
				
				/*dataObj.dateOfCreation = angular.fromJson(dataObj.dateOfCreation);
				
				console.log("date :  "+dataObj.dateOfCreation);*/
				
				
				
				var res = $http.post('http://localhost:8085/Collaboration/addBlog',dataObj);
				 $http.get("http://localhost:8085/Collaboration/viewBlogs")
			 	    .then(function (response) {$scope.blogs = response.data;});
			 		res.success(function(data, status, headers, config) {
			 			$scope.message = data;
			 			console.log("status:"+status);
			 		});
			 		 
			};
			$scope.newBlogComment={};
			$scope.addBlogComment = function(newBlogComment)
			{
				var dataObj = {
						blogID:$scope.newBlogComment.blogID,
						blogComment:$scope.newBlogComment.blogComment
		 		};
				
				
				console.log("blog Id is "+ dataObj.blogID);
				console.log("blog Comment is "+ dataObj.blogComment);
				
				var res = $http.post('http://localhost:8085/Collaboration/addBlogComment',dataObj);
				$scope.newBlogComment.blogID="";
				$scope.newBlogComment.blogComment="";
					
				 /*$http.get("http://localhost:8085/Collaboration/viewBlogComments")
			 	    .then(function (response) {$scope.blogcomments = response.data;});
			 		res.success(function(data, status, headers, config) {
			 			$scope.message = data;
			 			console.log("status:"+status);
			 		});*/
			 		 
			};
			
			
			
			
			$scope.editBlog=function(blog)
			{
				console.log("inside editblog");
				console.log("blog:"+blog);
				$scope.blogDataToEdit=blog;
			}
			$scope.saveEdit=function()
			{
				var dataObj = {
						
						blogId:$scope.blogDataToEdit.blogId,
						title:$scope.blogDataToEdit.title,
						usersID:$scope.blogDataToEdit.usersID,
						/*dateOfCreation:$scope.blogDataToEdit.dateOfCreation,*/
						blogCreationDate:$scope.blogCreationDate,
						content:$scope.blogDataToEdit.content,
						category:$scope.blogDataToEdit.category
		 				
		 		};
				
				
				
				$http.put('http://localhost:8085/Collaboration/updateBlog', dataObj);
				$http.get("http://localhost:8085/Collaboration/viewBlogs")
		 	    .then(function (response) {$scope.blogs = response.data;});
			}
			$scope.deleteBlog=function(blogDataToEdit)
			{
				console.log("delete user blog called");
				blogId:$scope.blogDataToEdit.blogId;
				console.log("blogId:"+blogDataToEdit.blogId);
				$http['delete']('http://localhost:8085/Collaboration/deleteBlog/'+blogDataToEdit.blogId);
				 $http.get("http://localhost:8085/Collaboration/viewBlogs")
			 	    .then(function (response) {$scope.blogs = response.data;});
			}
			
		}

		);

letzChaat.controller("adminEventController",function($scope,$http,$rootScope,$filter)	
		{	
	$rootScope.login=false;
	$rootScope.friends=true;
	$rootScope.register=false;
	$rootScope.services=false;
	$rootScope.about=false;
	$rootScope.home=false;
	$rootScope.adminEvent=true;
	$rootScope.users=true;
	$rootScope.registeredUsers=true;
	$rootScope.logout=true;
	$rootScope.adminJobs=true;
	$rootScope.adminForum=true;
	
	$rootScope.adminBlog=true;
	
	
	
	console.log("i am in admin event controller");
	console.log("after this");
			 $http.get("http://localhost:8085/Collaboration/viewEvents")
			    .then(function (response) {
			    	
			    	$scope.events = response.data;
			    	/*console.log("Date of event is "+$scope.events[2].eventDate);*/
			    	console.log("data:"+response.data);
			    });
			$scope.newEvent={};
			console.log("In admin  eve  Controller");
			$scope.addEvent=function(newEvent)
			{
				var dataObj = {
						
						eventId:$scope.eventId,
						title:$scope.title,
						description:$scope.description,						
						usersID:$scope.usersID,						
						//eventDate:$scope.eventDate,	
						dateOfEvent:$scope.dateOfEvent,	
						venue:$scope.venue
		 			};
				
				
				dataObj.dateOfEvent = $filter('date')(dataObj.dateOfEvent, "medium");
				//dataObj.dateOfEvent = Date.parse(dataObj.dateOfEvent);
				console.log("date is "+dataObj.dateOfEvent);
				
				
				
				
				
				/*dataObj.dateOfInterview = new Date(dataObj.dateOfInterview).getTime();*/
				/*dataObj.dateOfInterview = $filter('date')(dataObj.dateOfInterview,'medium')*/
				
				
				
				
				
				
				console.log("title:"+dataObj);
				 var res = $http.post('http://localhost:8085/Collaboration/addEvent',dataObj);
				 $http.get("http://localhost:8085/Collaboration/viewEvents")
			 	    .then(function (response) {$scope.events = response.data;});
				 res.success(function(data, status, headers, config) {
			 			$scope.message = data;
			 			console.log("status:"+status);
			 		});
			 		 
			};
			$scope.editEvent=function(event)
			{
				console.log("inside admin editevent");
				console.log("event:"+event);
				$scope.eventDataToEdit=event;
			}
			$scope.saveEdit=function()
			{
				var dataObj = {
						
						eventId:$scope.eventDataToEdit.eventId,
						title:$scope.eventDataToEdit.title,
						description:$scope.eventDataToEdit.description,						
						usersID:$scope.eventDataToEdit.usersID,						
					/*	eventDate:$scope.eventDataToEdit.eventDate,	*/
						dateOfEvent:$scope.eventDataToEdit.dateOfEvent,	
						venue:$scope.eventDataToEdit.venue
		 				
		 		};
				
				dataObj.dateOfEvent = $filter('date')(dataObj.dateOfEvent, "medium");
				//dataObj.eventDate = Date.parse(dataObj.eventDate);
				console.log("date is "+dataObj.dateOfEvent);
				
				
				$http.put('http://localhost:8085/Collaboration/updateEvent', dataObj);
				$http.get("http://localhost:8085/Collaboration/viewEvents")
		 	    .then(function (response) {$scope.events = response.data;});
			}
			$scope.deleteEvent=function(eventDataToEdit)
			{
				console.log("delete event inside admin called");
				title:$scope.eventDataToEdit.title;
				console.log("title:"+eventDataToEdit.title);
				eventId:$scope.eventDataToEdit.eventId;
				console.log("eventId:"+eventDataToEdit.eventId);
				$http['delete']('http://localhost:8085/Collaboration/deleteEvent/'+eventDataToEdit.eventId);
				 $http.get("http://localhost:8085/Collaboration/viewEvents")
			 	    .then(function (response) {$scope.events = response.data;});
			}
			
		}

		);
letzChaat.controller("eventController",function($scope,$http,$rootScope)	
		{	
	$rootScope.blog=true;
	$rootScope.friends=true;
	$rootScope.forum=true;
	$rootScope.jobs=true;
	$rootScope.login=false;
	$rootScope.register=false;
	$rootScope.services=false;
	$rootScope.about=false;
	$rootScope.home=false;
	$rootScope.logout=true;
	$rootScope.chat=true;
	$rootScope.event=true;

	console.log("i am in eventController");
	console.log("after this");
			 $http.get("http://localhost:8085/Collaboration/viewEvents")
			    .then(function (response) {
			    	
			    	$scope.events = response.data;
			    	
			    	console.log("data:"+response.data);
			    });
			$scope.newEvent={};
			console.log("In eventController............");
			$scope.addEvent=function(newEvent)
			{
				var dataObj = {
						eventId:$scope.eventId,
						title:$scope.title,
						description:$scope.description,						
						usersID:$scope.usersID,						
						eventDate:$scope.eventDate,	
						venue:$scope.venue
		 		};
				console.log("title:"+dataObj);
				 var res = $http.post('http://localhost:8085/Collaboration/addEvent',dataObj);
				 $http.get("http://localhost:8085/Collaboration/viewEvents")
			 	    .then(function (response) {$scope.events = response.data;});
			 		res.success(function(data, status, headers, config) {
			 			$scope.message = data;
			 			console.log("status:"+status);
			 		});
			 		 
			};
			$scope.editEvent=function(event)
			{
				console.log("inside editEvent");
				//console.log("event:"+event);
				$scope.eventDataToEdit=event;
			}
			$scope.saveEdit=function()
			{
				var dataObj = {
						eventId:$scope.eventDataToEdit.eventId,
						title:$scope.eventDataToEdit.title,
						description:$scope.eventDataToEdit.description,						
						usersID:$scope.eventDataToEdit.usersID,						
						eventDate:$scope.eventDataToEdit.eventDate,	
						venue:$scope.eventDataToEdit.venue
		 		};
				$http.put('http://localhost:8085/Collaboration/updateEvent', dataObj);
				$http.get("http://localhost:8085/Collaboration/viewEvents")
		 	    .then(function (response) {$scope.events = response.data;});
			}
			$scope.deleteevent=function(eventDataToEdit)
			{
				console.log("delete user event called");
				eventId:$scope.eventDataToEdit.eventId;
				console.log("eventId:"+eventDataToEdit.eventId);
				$http['delete']('http://localhost:8085/Collaboration/deleteEvent/'+eventDataToEdit.eventId);
				 $http.get("http://localhost:8085/Collaboration/viewEvents")
			 	    .then(function (response) {$scope.events = response.data;});
			}
			
		}

		);









letzChaat.controller('aboutController',function($scope)		
		{
			$scope.message="you are in about page";
		}
		);
letzChaat.controller('servicesController',function($scope)		
		{
			$scope.message="you are in services page";
		}
		);


letzChaat.controller('userHomeController',function($scope,$http,$rootScope)		
		{
	$rootScope.blog=true;
	$rootScope.friends=true;
	$rootScope.forum=true;
	$rootScope.jobs=true;
	$rootScope.login=false;
	$rootScope.register=false;
	$rootScope.services=false;
	$rootScope.about=false;
	$rootScope.home=false;
	$rootScope.logout=true;
	$rootScope.chat=true;
	$rootScope.event=true;

			$scope.message="you are in userhome page";
		}
		);




letzChaat.controller('adminController',function($scope,$rootScope)		
		{
	$rootScope.event=false;
			$scope.message="you are in admin controller";
			
			
			console.log("admin Controller  called");
		
			
			$rootScope.adminForum=true;
			$rootScope.adminJobs=true;
			$rootScope.adminEvent=true;
			$rootScope.adminBlog=true;
			$rootScope.friends=true;
		}
		);


letzChaat.controller('jobsController',function($scope,$http,$rootScope)		
		{
	$rootScope.blog=true;
	$rootScope.friends=true;
	$rootScope.forum=true;
	$rootScope.jobs=true;
	$rootScope.login=false;
	$rootScope.register=false;
	$rootScope.services=false;
	$rootScope.about=false;
	$rootScope.home=false;
	$rootScope.logout=true;
	$rootScope.chat=true;
	$rootScope.event=true;

	console.log("inside job controller");
    $http.get("http://localhost:8085/Collaboration/viewAllJobs")
    .then(function (response) {$scope.jobs = response.data;});
    $http.get("http://localhost:8085/Collaboration/jobsApplied")
    .then(function (response) {$scope.jobsApplied = response.data;});
    
    $scope.newJob={};
	
	$scope.addJob=function(newJob)
	{	console.log("In jobController............");
		var dataObj = {
				
				company:$scope.company,
				aboutCompany:$scope.aboutCompany,				
				role:$scope.role,						
				skillsRequired:$scope.skillsRequired,
				eligibilityCriteria:$scope.eligibilityCriteria,
				ctc:$scope.ctc,						
				dateOfInterview:$scope.dateOfInterview,						
				addressOfTheCompany:$scope.addressOfTheCompany,	
				urlOfTheCompany:$scope.urlOfTheCompany
 		};
		console.log("title:"+dataObj);
		 var res = $http.post('http://localhost:8085/Collaboration/addJob',dataObj);
		 $http.get("http://localhost:8085/Collaboration/viewAllJobs")
	 	    .then(function (response) {$scope.jobs = response.data;});
	 		res.success(function(data, status, headers, config) {
	 			$scope.message = data;
	 			console.log("status:"+status);
	 		});
	 		 
	}
	$scope.editJob=function(resource)
	{
		console.log("inside editJob");
		//console.log("job:"+job);
		$scope.jobDataToEdit=resource;
	}
	$scope.saveEdit=function()
	{
		var dataObj = {
				
				jobId:$scope.jobDataToEdit.jobId,
				company:$scope.jobDataToEdit.company,
				aboutCompany:$scope.jobDataToEdit.aboutCompany,						
				role:$scope.jobDataToEdit.role,						
				skillsRequired:$scope.jobDataToEdit.skillsRequired,
				eligibilityCriteria:$scope.jobDataToEdit.eligibilityCriteria,
				ctc:$scope.jobDataToEdit.ctc,						
				dateOfInterview:$scope.jobDataToEdit.dateOfInterview,						
				addressOfTheCompany:$scope.jobDataToEdit.addressOfTheCompany,	
				urlOfTheCompany:$scope.jobDataToEdit.urlOfTheCompany
		
 		};
		$http.put('http://localhost:8085/Collaboration/updateJob', dataObj);
		$http.get("http://localhost:8085/Collaboration/viewAllJobs")
 	    .then(function (response) {$scope.jobs = response.data;});
	}
	$scope.deleteJob=function(jobDataToEdit)
	{
		console.log("delete user job called");
		jobId:$scope.jobDataToEdit.jobId;
		console.log("jobId:"+jobDataToEdit.jobId);
		$http['delete']('http://localhost:8085/Collaboration/deleteJob/'+jobDataToEdit.jobId);
		 $http.get("http://localhost:8085/Collaboration/viewAllJobs")
	 	    .then(function (response) {$scope.jobs = response.data;});
	}
    
    
    $scope.applyJob=function()
    {
    	 console.log("applyJob function called");
    	 var jobData={
           jobId:$scope.jobDataToEdit.jobId,
    	 registrationNumber:$scope.registrationNumber,
    	/* studentId:$scope.studentId,*/
    	 certificateNumber:$scope.certificateNumber	
    	 };
    	 	$http.post('http://localhost:8085/Collaboration/registerJob',jobData).then(function (response) {
		 console.log("result   data:"+response.data);
		 var r=response.data.toString();
		 console.log("response:"+r);
	     
			if(r==1)
				{
				 console.log("job applied successfully");
				/* $scope.apply="true";
				 jobId:$scope.jobDataToEdit.jobId;*/
				 $scope.message="Successfully applied for the job with id "+$scope.jobDataToEdit.jobId;
				}
  		});
   
    }
		}




       
		);


letzChaat.controller('adminjobsController',function($scope,$http,$rootScope)		
		{

	
	$rootScope.login=false;
	$rootScope.friends=true;
	$rootScope.register=false;
	$rootScope.services=false;
	$rootScope.about=false;
	$rootScope.home=false;
	$rootScope.adminEvent=true;
	$rootScope.users=true;
	$rootScope.registeredUsers=true;
	$rootScope.logout=true;
	$rootScope.adminJobs=true;
	$rootScope.adminForum=true;
	
	$rootScope.adminBlog=true;
	
	

	
	
	console.log("inside adminjobsController");
    $http.get("http://localhost:8085/Collaboration/viewAllJobs")
    .then(function (response) {$scope.jobs = response.data;});
    $http.get("http://localhost:8085/Collaboration/jobsApplied")
    .then(function (response) {$scope.jobsApplied = response.data;});
    
    $scope.newJob={};
	
	$scope.addJob=function(newJob)
	{	console.log("In add adminjobsController............");
		var dataObj = {
				
				company:$scope.company,
				aboutCompany:$scope.aboutCompany,				
				role:$scope.role,						
				skillsRequired:$scope.skillsRequired,
				eligibilityCriteria:$scope.eligibilityCriteria,
				ctc:$scope.ctc,						
				dateOfInterview:$scope.dateOfInterview,						
				addressOfTheCompany:$scope.addressOfTheCompany,	
				urlOfTheCompany:$scope.urlOfTheCompany
 		};
		console.log("title:"+dataObj);
		 var res = $http.post('http://localhost:8085/Collaboration/addJob',dataObj);
		 $http.get("http://localhost:8085/Collaboration/viewAllJobs")
	 	    .then(function (response) {$scope.jobs = response.data;});
	 		res.success(function(data, status, headers, config) {
	 			$scope.message = data;
	 			console.log("status:"+status);
	 		});
	 		 
	}
	$scope.editJob=function(resource)
	{
		console.log("inside editJob");
		//console.log("job:"+job);
		$scope.jobDataToEdit=resource;
	}
	$scope.saveEdit=function()
	{
		var dataObj = {
				
				jobId:$scope.jobDataToEdit.jobId,
				company:$scope.jobDataToEdit.company,
				aboutCompany:$scope.jobDataToEdit.aboutCompany,						
				role:$scope.jobDataToEdit.role,						
				skillsRequired:$scope.jobDataToEdit.skillsRequired,
				eligibilityCriteria:$scope.jobDataToEdit.eligibilityCriteria,
				ctc:$scope.jobDataToEdit.ctc,						
				dateOfInterview:$scope.jobDataToEdit.dateOfInterview,						
				addressOfTheCompany:$scope.jobDataToEdit.addressOfTheCompany,	
				urlOfTheCompany:$scope.jobDataToEdit.urlOfTheCompany
		
 		};
		$http.put('http://localhost:8085/Collaboration/updateJob', dataObj);
		$http.get("http://localhost:8085/Collaboration/viewAllJobs")
 	    .then(function (response) {$scope.jobs = response.data;});
	}
	$scope.deleteJob=function(jobDataToEdit)
	{
		console.log("delete user job called");
		jobId:$scope.jobDataToEdit.jobId;
		console.log("jobId:"+jobDataToEdit.jobId);
		$http['delete']('http://localhost:8085/Collaboration/deleteJob/'+jobDataToEdit.jobId);
		 $http.get("http://localhost:8085/Collaboration/viewAllJobs")
	 	    .then(function (response) {$scope.jobs = response.data;});
	}
    
    
    $scope.applyJob=function()
    {
    	 console.log("applyJob function called");
    	 var jobData={
           jobId:$scope.jobDataToEdit.jobId,
    	 registrationNumber:$scope.registrationNumber,
    	/* studentId:$scope.studentId,*/
    	 certificateNumber:$scope.certificateNumber	
    	 };
    	 	$http.post('http://localhost:8085/Collaboration/registerJob',jobData).then(function (response) {
		 console.log("result   data:"+response.data);
		 var r=response.data.toString();
		 console.log("response:"+r);
	     
			if(r==1)
				{
				 console.log("job applied successfully");
				/* $scope.apply="true";
				 jobId:$scope.jobId;*/
				 $scope.message="Successfully applied for the job with id "+$scope.jobId;
				}
  		});
   
    }
		}




       
		);



letzChaat.controller("forumController",function($scope,$http,$rootScope)	
		{	
	$rootScope.blog=true;
	$rootScope.friends=true;
	$rootScope.forum=true;
	$rootScope.jobs=true;
	$rootScope.login=false;
	$rootScope.register=false;
	$rootScope.services=false;
	$rootScope.about=false;
	$rootScope.home=false;
	$rootScope.logout=true;
	$rootScope.chat=true;
	$rootScope.event=true;
	
	console.log("i am in forumController");
	console.log("after this");
			 $http.get("http://localhost:8085/Collaboration/viewForums")
			    .then(function (response) {
			    	
			    	
			    	$scope.forums = response.data;
			    	
			    	console.log("data:"+response.data);
			    });
			$scope.newForum={};
			console.log("In Controller");
			$scope.addForum=function(newForum)
			{
				var dataObj = {
						forumId:$scope.forumId,
						name:$scope.name,
						topic:$scope.topic,
						usersID:$scope.usersID,
						dateOfCreation:$scope.dateOfCreation,
						content:$scope.content
						/*category:$scope.category*/
		 		};
				
				/*dataObj=JSON.parse(dataObj);*/
				
				/*dataObj.dateOfCreation = angular.fromJson(dataObj.dateOfCreation);
				
				console.log("date :  "+dataObj.dateOfCreation);*/
				
				
				
				var res = $http.post('http://localhost:8085/Collaboration/addForum',dataObj);
				 $http.get("http://localhost:8085/Collaboration/viewForums")
			 	    .then(function (response) {$scope.forums = response.data;});
			 		res.success(function(data, status, headers, config) {
			 			$scope.message = data;
			 			console.log("status:"+status);
			 		});
			 		 
			};
			$scope.newBlogComment={};
			$scope.addBlogComment = function(newBlogComment)
			{
				var dataObj = {
						forumID:$scope.newBlogComment.forumID,
						forumComment:$scope.newBlogComment.forumComment
		 		};
				
				
				console.log("forum Id is "+ dataObj.forumID);
				console.log("forum Comment is "+ dataObj.forumComment);
				
				var res = $http.post('http://localhost:8085/Collaboration/addBlogComment',dataObj);
				$scope.newBlogComment.forumID="";
				$scope.newBlogComment.forumComment="";
					
				 /*$http.get("http://localhost:8085/Collaboration/viewBlogComments")
			 	    .then(function (response) {$scope.forumcomments = response.data;});
			 		res.success(function(data, status, headers, config) {
			 			$scope.message = data;
			 			console.log("status:"+status);
			 		});*/
			 		 
			};
			
			
			
			
			$scope.editForum=function(forum)
			{
				console.log("inside editforum");
				console.log("forum:"+forum);
				$scope.forumDataToEdit=forum;
			}
			$scope.saveEdit=function()
			{
				var dataObj = {
						
						forumId:$scope.forumDataToEdit.forumId,
						name:$scope.forumDataToEdit.name,
						topic:$scope.forumDataToEdit.topic,
						usersID:$scope.forumDataToEdit.usersID,
						dateOfCreation:$scope.forumDataToEdit.dateOfCreation,
						/*forumCreationDate:$scope.forumCreationDate,*/
						content:$scope.forumDataToEdit.content/*
						category:$scope.forumDataToEdit.category
		 				*/
		 		};
				
				
				
				$http.put('http://localhost:8085/Collaboration/updateForum', dataObj);
				$http.get("http://localhost:8085/Collaboration/viewForums")
		 	    .then(function (response) {$scope.forums = response.data;});
			}
			$scope.deleteForum=function(forumDataToEdit)
			{
				console.log("delete user forum called");
				forumId:$scope.forumDataToEdit.forumId;
				console.log("forumId:"+forumDataToEdit.forumId);
				$http['delete']('http://localhost:8085/Collaboration/deleteForum/'+forumDataToEdit.forumId);
				 $http.get("http://localhost:8085/Collaboration/viewForums")
			 	    .then(function (response) {$scope.forums = response.data;});
			}
			
		}

		);









letzChaat.controller("adminForumController",function($scope,$http,$rootScope)	
		{	
	
	
	
	$rootScope.login=false;
	$rootScope.friends=true;
	$rootScope.register=false;
	$rootScope.services=false;
	$rootScope.about=false;
	$rootScope.home=false;
	$rootScope.adminEvent=true;
	$rootScope.users=true;
	$rootScope.registeredUsers=true;
	$rootScope.logout=true;
	$rootScope.adminJobs=true;
	$rootScope.adminForum=true;
	
	$rootScope.adminBlog=true;
	
	
	
	console.log("i am in adminforum controller");
	console.log("after this");
			 $http.get("http://localhost:8085/Collaboration/viewForums")
			    .then(function (response) {
			    	
			    	$scope.forums = response.data;
			    	
			    	console.log("data:"+response.data);
			    });
			$scope.newForum={};
			console.log("In Controller");
			$scope.addForum=function(newForum)
			{
				var dataObj = {
						forumId:$scope.forumId,
						name:$scope.name,
						topic:$scope.topic,
						content:$scope.content,
						usersID:$scope.usersID,
						dateOfCreation:$scope.dateOfCreation						
							};
				console.log("title:"+dataObj);
				 var res = $http.post('http://localhost:8085/Collaboration/addForum',dataObj);
				 $http.get("http://localhost:8085/Collaboration/viewForums")
			 	    .then(function (response) {$scope.forums = response.data;});
			 		res.success(function(data, status, headers, config) {
			 			$scope.message = data;
			 			console.log("status:"+status);
			 		});
			 		 
			};
			$scope.editForum=function(forum)
			{
				console.log("inside editforum");
				console.log("forum:"+forum);
				$scope.forumDataToEdit=forum;
			}
			$scope.saveEdit=function()
			{
				var dataObj = {
						forumId:$scope.forumDataToEdit.forumId,
						name:$scope.forumDataToEdit.name,
						topic:$scope.forumDataToEdit.topic,
						content:$scope.forumDataToEdit.content,
						usersID:$scope.forumDataToEdit.usersID,
						dateOfCreation:$scope.forumDataToEdit.dateOfCreation,
								
		 		};
				$http.put('http://localhost:8085/Collaboration/updateForum', dataObj);
				$http.get("http://localhost:8085/Collaboration/viewForums")
		 	    .then(function (response) {$scope.forums = response.data;});
			}
			$scope.deleteForum=function(forumDataToEdit)
			{
				console.log("delete forum called");
				forumId:$scope.forumDataToEdit.forumId;
				console.log("forumId:"+forumDataToEdit.forumId);
				$http['delete']('http://localhost:8085/Collaboration/deleteForum/'+forumDataToEdit.forumId);
/*				$http.DELETE('http://localhost:8085/Collaboration/deleteForum/'+forumDataToEdit.forumId);
*/				 $http.get("http://localhost:8085/Collaboration/viewForums")
			 	    .then(function (response) {$scope.forums = response.data;});
			}
			
		}

		);




letzChaat.controller('contactController',function($scope)		
		{
	$scope.sendmessage=function()
		{
			$scope.message="you message submitted successfully!!!!";
		}
				
		}
		);

letzChaat.controller("friendController",function($scope,$http,$rootScope)
		{
	
	
	
	$rootScope.login=false;
	$rootScope.friends=true;
	$rootScope.register=false;
	$rootScope.services=true;
	$rootScope.about=true;
	$rootScope.home=true;
	
	$rootScope.adminForum=false;
	$rootScope.adminJobs=false;
	$rootScope.adminBlog=false;
	$rootScope.adminEvent=false;
	$rootScope.logout=true;
	
	$rootScope.jobs=true;
	$rootScope.blog=true;
	$rootScope.forum=true;
	$rootScope.event=true;
	
	
	
	
		console.log("inside friend controller");
		
		$http.get("http://localhost:8085/Collaboration/currentUser")
	    .then(function (response) {$scope.currentUser = response.data;});
		
		
		
		$http.get("http://localhost:8085/Collaboration/newFriends")
	    .then(function (response) {$scope.users = response.data;});
		
		
		
		$scope.sendFriendRequest=function(user)
		{
			$scope.message = "Your message submitted successfully";
			
			$http.post('http://localhost:8085/Collaboration/addFriend/'+user.username);
			
			console.log("friend for user id "+ user.username +" request sent");
		}
		
		
		});
letzChaat.controller("friendRequestController",function($scope,$http,$rootScope)
		{
	
	
	$rootScope.friends=true;
	$rootScope.login=false;
	$rootScope.register=false;
	$rootScope.services=true;
	$rootScope.about=true;
	$rootScope.home=true;
	
	$rootScope.adminForum=false;
	$rootScope.adminJobs=false;
	$rootScope.adminBlog=false;
	$rootScope.adminEvent=false;
	$rootScope.logout=true;
	
	$rootScope.jobs=true;
	$rootScope.blog=true;
	$rootScope.forum=true;
	$rootScope.event=true;
	
	
	
	
		console.log("inside friendRequestController");
		
		$http.get("http://localhost:8085/Collaboration/getMyFriendRequests")
	    .then(function (response) {$scope.users = response.data;});
		
		
		
		$scope.acceptRequest=function(user)
		{
			console.log( "Accepted request successfully");
			
			$http.put('http://localhost:8085/Collaboration/acceptFriend/'+user.userID);
			
			console.log("friend for user id "+ user.userID +" accepted");
		}
		
		
		$scope.rejectRequest=function(user)
		{
			console.log( "rejected successfully");
			
			$http.put('http://localhost:8085/Collaboration/rejectFriend/'+user.userID);
			
			console.log("friend for user id "+ user.userID +" rejected");
		}
		
		
		});

letzChaat.controller("MyFriendsController",function($scope,$http,$rootScope)
		{
	
	
	
	$rootScope.login=false;
	$rootScope.friends=true;
	$rootScope.register=false;
	$rootScope.services=true;
	$rootScope.about=true;
	$rootScope.home=true;
	
	$rootScope.adminForum=false;
	$rootScope.adminJobs=false;
	$rootScope.adminBlog=false;
	$rootScope.adminEvent=false;
	$rootScope.logout=true;
	
	$rootScope.jobs=true;
	$rootScope.blog=true;
	$rootScope.forum=true;
	$rootScope.event=true;
	
	
	
	
		console.log("inside MyFriendsController");
		
		$http.get("http://localhost:8085/Collaboration/myFriends")
	    .then(function (response) {$scope.users = response.data;});
		
		
		
		$scope.unfriend=function(user)
		{
			console.log( "unfriend successfully");
			
			$http.put('http://localhost:8085/Collaboration/unFriend/'+user.friendID);
			
			console.log("friend for user id "+ user.friendID +" accepted");
		}
		
	
		
		});



/*

letzChaat.controller("ChatCtrl", function($scope, ChatService) {
		  $scope.messages = [];
		  $scope.message = "";
		  $scope.max = 140;
console.log("inside chat conrll");
		  $scope.addMessage = function() {
		    ChatService.send($scope.message);
		    $scope.message = "";
		  };

		  ChatService.receive().then(null, null, function(message) {
		    $scope.messages.push(message);
		  });
		});



*/