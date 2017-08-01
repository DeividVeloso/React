import React, { Component } from 'react';

export default class ClassComponent extends Component {
    render(){
        return ( 
            // O this.props estou recebendo como herança da classe Componet
            //(props) é o nome padrão que vem da classe 
            <h1>{this.props.value}</h1>
        )
    }
}