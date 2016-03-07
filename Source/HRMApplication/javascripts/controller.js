// create the controller and inject Angular's $scope

HRMSApp.controller('mainController', function ($scope) {

    $scope.message = 'Everyone come and see how good I look!';
});

HRMSApp.controller('aboutController', function ($scope) {

    $scope.message = 'What about page!';
});

HRMSApp.controller('contactController', function ($scope) {

    $scope.message = 'Contact Us!';
});