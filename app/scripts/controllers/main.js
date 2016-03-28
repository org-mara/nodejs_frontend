'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MainCtrl', ['$scope', '$mdDialog', '$mdSidenav', function ($scope, $mdDialog, $mdSidenav) {


// **************** SIDENAV **************** //
    $scope.close = function () {
      $mdSidenav('left').close();
    };

    $scope.toggleSidenav = function () {
      $mdSidenav('left').toggle();
    };


// **************** DIALOG **************** //
    var dialogController = function($scope, $mdDialog){

      $scope.indice = null;

      $scope.cancel = function() {
        $mdDialog.cancel();
        $scope.indice = null;
      };

      $scope.selected = function (index) {
          $scope.indice = index;
      };

      $scope.createDoc = function() {
        $mdDialog.hide($scope.tods.unc[$scope.indice])
      };

      $scope.tods = {
        "unc": [
          {
            "name" : "Acta",
            "icon" : "images/nota.svg",
            "idnetifier" : "ACTA"
          },
          {
            "name" : "Anexo",
            "icon" : "images/nota.svg",
            "idnetifier" : "ANEX"
          },
          {
            "name" : "Cédula de notificación",
            "icon" : "images/nota.svg",
            "idnetifier" : "CEDU"
          },
          {
            "name" : "Comunicación",
            "icon" : "images/nota.svg",
            "idnetifier" : "COMU"
          },
          {
            "name" : "Conclusión sumarial",
            "icon" : "images/nota.svg",
            "idnetifier" : "CONCL"
          },
          {
            "name" : "Dictamen",
            "icon" : "images/nota.svg",
            "idnetifier" : "DICT"
          },
          {
            "name" : "Disposición",
            "icon" : "images/nota.svg",
            "idnetifier" : "DISP"
          },
          {
            "name" : "Expediente",
            "icon" : "images/nota.svg",
            "idnetifier" : "EXP"
          },
          {
            "name" : "Informe",
            "icon" : "images/nota.svg",
            "idnetifier" : "INFO"
          },
          {
            "name" : "Memorando",
            "icon" : "images/nota.svg",
            "idnetifier" : "MEMO"
          },
          {
            "name" : "Nota",
            "icon" : "images/nota.svg",
            "idnetifier" : "NOTA"
          },
          {
            "name" : "Oficio",
            "icon" : "images/nota.svg",
            "idnetifier" : "OFIC"
          },
          {
            "name" : "Ordenanza",
            "icon" : "images/nota.svg",
            "idnetifier" : "ORDE"
          },
          {
            "name" : "Providencia",
            "icon" : "images/nota.svg",
            "idnetifier" : "PROV"
          },
          {
            "name" : "Resolución",
            "icon" : "images/nota.svg",
            "idnetifier" : "RESO"
          }
        ]
      }
    };

    $scope.showAdvanced = function(ev) {
        $mdDialog.show({
          controller: dialogController,
          templateUrl: '/views/newtod.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: true
        })
        .then(function(answer) {
           console.log(answer);  //TOD que he seleccionado para crear
         });
      };

    $scope.documents = {
      "tod": [
        {
          "name" : "Acta",
          "identifier" : "ACTA"
        },
        {
          "name" : "Anexo",
          "identifier" : "ANEX"
        },
        {
          "name" : "Dictamen",
          "identifier" : "DICT"
        },
        {
          "name" : "Expediente",
          "identifier" : "EXP"
        },
        {
          "name" : "Nota",
          "identifier" : "NOTA"
        },
        {
          "name" : "Ordenanza",
          "identifier" : "ORDE"
        },
        {
          "name" : "Providencia",
          "identifier" : "PROV"
        },
        {
          "name" : "Anexo2",
          "identifier" : "ANEX2"
        },
        {
          "name" : "Dictamen2",
          "identifier" : "DICT2"
        },
        {
          "name" : "Expediente2",
          "identifier" : "EXP2"
        },
        {
          "name" : "Nota2",
          "identifier" : "NOTA2"
        },
        {
          "name" : "Ordenanza2",
          "identifier" : "ORDE2"
        },
        {
          "name" : "Providencia2",
          "identifier" : "PROV2"
        },
        {
          "name" : "Resolución",
          "identifier" : "RESO"
        }
      ]
    };



  }])


  // Directiva para dar funcionamiento al Menu izquierdo
  .directive('onFinishRender', function ($timeout) {
    return {
      restrict: 'A',
      link: function (scope, element, attr) {
        if (scope.$last === true) {
          $timeout(function () {

            // Enables expand functionality in subtrees.
            var activateLists = function() {
              return $('.minimized li a').on('click', function() {
                var children, obj, toggle;
                obj = $(this);
                if (obj.attr('href') === '#') {
                  children = obj.parent().children('ul');
                  toggle = obj.find('.toggle');
                  if (children.hasClass('opened')) {
                    children.removeClass('opened');
                    toggle.removeClass(toggle.attr('data-altclass'));
                    toggle.addClass(toggle.attr('data-class'));
                    children.slideUp('fast');
                  } else {
                    children.addClass('opened');
                    toggle.removeClass(toggle.attr('data-class'));
                    toggle.addClass(toggle.attr('data-altclass'));
                    children.slideDown('fast');
                  }
                  return false;
                }
              })
            };
            activateLists();

          });
        }
      }
    }
  });

  // **************** PAISES TEST DE MENU  **************** //
// .factory('dataFactory', ['$http',function($http){
//
//         var urlGeoObjectWS= 'https://geo-object-ws.unc.edu.ar/';
//          var dataFactory = {};
//
//         dataFactory.getContinents=function(){
//          return $http.get(urlGeoObjectWS + 'continents');
//        };
//
//        dataFactory.getCountries=function(callback){
//          var result = $http.get(urlGeoObjectWS + 'countries');
//          if(callback) {
//            result.then(function(response){
//              callback(response.data);
//            });
//          } else {
//            return result;
//          }
//        };
//
//        dataFactory.getCountriesFromContinent=function(continentCode){
//          return $http.get(urlGeoObjectWS + 'continents/' + continentCode + '/countries');
//        };
//
//        dataFactory.getCountry=function(searchFilters){
//            searchFilters=searchFilters||{}; //Null parameter case
//            return $http.get(urlGeoObjectWS + 'countries');
//        };
//
//        dataFactory.getProvincesFromCountry=function(callback, countryCode){
//          return $http.get(urlGeoObjectWS + 'countries/' + countryCode + '/provinces')
//            .success(function(data){
//              callback(data);
//            })
//            .error(function(error){
//              callback([]);
//            });
//        };
//
//        dataFactory.getProvinceByCode = function(callback, provinceCode){
//          return $http.get(urlGeoObjectWS + 'provinces/' + provinceCode)
//            .success(function (province) {
//              callback(province['org.geoobject.model.Province']);
//            })
//            .error(function (error) {
//              console.error(error);
//            });
//        };
//
//        return dataFactory;
//   }]);
