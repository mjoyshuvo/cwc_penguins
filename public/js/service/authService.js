var access = angular.module('authService', []);

access.factory('SignIn', ['$http','$rootScope',function ($http,$rootScope) {
  return {
    auth: function(credentials){
      var authUser = $http({
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        url: 'public/oauth/token',
        transformRequest: function(obj) {
          var str = [];
          for(var p in obj)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            return str.join("&");
          },
          data: {username: credentials['username'], password: credentials['password']}
      });

      return authUser;
    }
  };
}]);


access.factory('Verifier', ['$http', '$rootScope', function($http, $rootScope){
  return {
      tokenVerify: function(access_token){
        var userData = $http({
          method:'GET',
          url:'public/api/verify',
          headers: {'Authorization': 'Bearer '+access_token}
        });

        return userData;
      }
  }

}]);

access.factory('SignUp', ['$http','$rootScope', function ($http, $rootScope) {
  return {
    registerUser: function(registerData){
      var confirmation = $http({
        method:'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        url:'public/signup',
        transformRequest: function(obj) {
          var str = [];
          for(var p in obj)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            return str.join("&");
          },
         data: {username: registerData['username'], email:registerData['email'],password: registerData['password']}
      });
      return confirmation;
    }
  };
}]);