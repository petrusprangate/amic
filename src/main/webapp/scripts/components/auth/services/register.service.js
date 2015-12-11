'use strict';

angular.module('amicApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


