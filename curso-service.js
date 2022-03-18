angular.module('app').factory("CursoService", CursoService);
CursoService.$inject = ["$http"]
function CursoService($http){

    const REST = 'http://localhost:3000/clientes'

    var service = {
        exec_GET: function(){
            return $http.get(REST).then(tratarResposta,tratarError);
        },
        exec_GET_ID: function(id){
            return $http.get(REST + '/' + id).then(tratarResposta,tratarError);
        },
        exec_DEL: function(id){
            return $http.delete(REST + '/' + id).then(tratarResposta,tratarError);
        },
        exec_POST: function(cliente){
            return $http.post(REST, cliente).then(tratarResposta,tratarError);
        },
        exec_PUT: function(cliente){
            return $http.put(REST + '/' + cliente.id, cliente).then(tratarResposta,tratarError);
        }
    }
    function tratarResposta(response){
        return response.data;
    }

    function tratarError(error){
        return error.data;
    }

    return service;
}
