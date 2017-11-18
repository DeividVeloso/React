import React, { Component } from "react";

export default class Grid extends Component {
  //Recebe os numeros referente ao bootstrap
  //col-md-2 6 9 12
  toCssClasses(numbers) {
    const cols = numbers ? numbers.split(" ") : [];
    let classes = "";

    if (cols[0]) classes += `col-xs-${cols[0]}`; //2
    if (cols[1]) classes += ` col-sm-${cols[1]}`; //6
    if (cols[2]) classes += ` col-md-${cols[2]}`; //9
    if (cols[3]) classes += ` col-lg-${cols[3]}`; //12

    //Retorna minha string de classes para colocar no componente.
    return classes;
  }

  render() {
    //pega a propriedade passada no GRID e recuperar as classes para decorar o componente filho
    const gridClasses = this.toCssClasses(this.props.cols || "12");
    return (
        <div className={gridClasses}>
            {this.props.children}
        </div>
    )
  }
}
