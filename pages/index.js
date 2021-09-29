import React from 'react'
import Agencia from '../components/Agencia'
import Page from '../components/Agencia'
import Camioneta from '../components/Agencia'
const Homepage = () => {
    return (
        <div>
            <h1>Hola</h1>
            <Page modelo={'malibu'} marca={"chevrolet"} nombreDeAgencia={"nombreDeAgencia"} />
        </div>
    )
}

export default Homepage
