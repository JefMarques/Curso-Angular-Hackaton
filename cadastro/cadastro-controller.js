angular.module('app').controller('CadastroController', CadastroController);
CadastroController.$inject = ['$location', 'CursoService', '$routeParams'];

    function CadastroController($location, CursoService, $routeParams){
        vm = this;
        vm.texto = 'Cadastro'
        vm.cliente = {}
        vm.idCli = undefined
        vm.textBotao = 'Cadastrar'


        if($routeParams.idCli){
            vm.idCli = $routeParams.idCli
            buscarID(vm.idCli)
            vm.textBotao = 'Editar'
        }

        vm.navegar = function(){
            $location.path('/')
    }

        vm.cadastrar = function(){
            if (vm.textBotao == 'Cadastrar') {
                CursoService.exec_POST(vm.cliente).then(function(resposta){
                    if(resposta){
                        vm.clientes = resposta
                    }
                })
            }else if(vm.textBotao == 'Editar'){
                CursoService.exec_PUT(vm.cliente).then(function(resposta){
                    if(resposta){
                        vm.clientes = resposta
                    }
                })
            }

            vm.navegar('/')
        }

        function buscarID(id){
            CursoService.exec_GET_ID(id).then(function(resposta){
                if(resposta){
                    vm.cliente = resposta
                }
            })
        }
        
        vm.limpar = function(){
            vm.cliente = {}
        }
}