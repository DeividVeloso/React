//Importando modulo do webpack
const webpack = require('webpack')

//Aqui dentro colocamos nossas configurações
module.exports = {
    //Arquivo de entrada
    entry: './ex/index.js',
    //Arquivo de saida onde vai estar meu .JS que vai para produção.
    output: {
        path: _dirname + '/public',
        filename: './bundle.js'
    },
    //Configurando o Servidor Web para rodar a aplicação
    devServer:{
        port:8080,
        //Indica onde estão os arquivos que quero rodar no browser
        contentBase: './public'
    }
}

