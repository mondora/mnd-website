angular.module("mnd-web.components")

.directive("mndCoin", function () {
	return {
		restrict: "EA",
		templateUrl: "components/coin/coin.html",
		scope: {
			coin: "=",
			day: "=?",
			frozen: "=?"
		},
		controller: ["$scope", function ($scope) {

			//////////////
			// Projects //
			//////////////

			Ceres.subscribe("allProjects");
			var Projects = Ceres.getCollection("projects");
			var projectsRQ = Projects.reactiveQuery({});
			projectsRQ.on("change", function () {
				$scope.$root.safeApply(function () {
					$scope.projects = projectsRQ.result;
				});
			});
			$scope.projects = projectsRQ.result;

		}]
	};
});
