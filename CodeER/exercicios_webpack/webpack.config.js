//Importando modulo do webpack
const webpack = require('webpack')
//Usado para extrair texto e ler os arquivos .CSS
const ExtractTextPlugin = require('extract-text-webpack-plugin')

//Aqui dentro colocamos nossas configurações
module.exports = {
    //Arquivo de entrada
    entry: './ex/index.js',
    //Arquivo de saida onde vai estar meu .JS que vai para produção.
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    //Configurando o Servidor Web para rodar a aplicação
    devServer:{
        port:8080,
        //Indica onde estão os arquivos que quero rodar no browser
        contentBase: './public'
    },
    plugins:[
        new ExtractTextPlugin('app.css')
    ],
    module:{
        loaders:[{
            test: /.js?$/, //Expressão regular que diz para ler todos os meus arquivos javascript
            loader: 'babel-loader', //Biblioteca que vai ler os .Js
            exclude: '/node_modules/', //Não é para ler meus arquivos do node_modules
            query: { //Que tipo de dados eu quero traduzir?
                presets: ['es2015', 'react'],  //R: nesse caso sintaxe do es2015 para VanilaJS
                plugins: ['transform-object-rest-spread']
            }
        }, { //Loader para ler arquivo .css
            test: /.css?$/,
            loader: ExtractTextPlugin.extract("style-loader","css-loader")
        }]
    }
}

