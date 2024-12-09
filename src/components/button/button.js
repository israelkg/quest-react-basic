
import React from 'react'
import './button.css'

const sayHello = () => {
    alert(`A label desse botão é ${Button.deafultProps.label}`)
  }
  class Button extends React.Component {
    render() {
      return <button className='btn' onClick={sayHello}>mostrar Label</button>
    }
  }
  
  Button.deafultProps = {         //propDeafult
    label: 'Não baixe valorant'
  }

export default Button