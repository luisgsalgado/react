import React from "react"
import "./TarjetaFruta.css"

class TarjetaFruta extends React.Component{
    state={
        cantidad:0
    }
      
    agregar=()=>{
      this.setState({cantidad: this.state.cantidad +1})
    }
  
    quitar=()=>{
      this.setState({cantidad: this.state.cantidad - 1})
    }
  
    reset=()=>{
      this.setState({cantidad:0})
    }
  
    render(){

      const hasItems = this.state.cantidad>0
      const clases = `TarjetaFruta ${hasItems ? 'TarjetaFrutaActiva' : ''}` 
      return(
      <div className={clases}>
      <h3>{this.props.name}</h3>      
      <hr/> 
      <p>${this.props.price}</p>
      <div>cantidad:{this.state.cantidad}</div>
      
      <button onClick={this.agregar}>+</button>
      <button onClick={this.reset}>Reset</button>
      <button onClick={this.quitar}>-</button>
      <p>Total:${this.props.price * this.state.cantidad}</p>
    </div>)
    }
  }

  export default TarjetaFruta
  