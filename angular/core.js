app.controller('ideal_remit_control',function($scope,$http,$interval){
  getCountries();
  $interval(function(){
   getCountries();
  },300);
  function getCountries(){
  $http.get('http://localhost:8888/GetCountries').success(function(data){    
    $scope.countries=data;
  });
  };
});
