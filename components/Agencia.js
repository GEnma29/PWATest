import React, { useState, useEffect, createContext, useContext } from "react";

const AgenciaContext = createContext(); // create context

function AgenciaProvider(props) {
  const { value, children } = props;

  return (
    <AgenciaContext.Provider value={value}>{children}</AgenciaContext.Provider>
  );
}
 const Camioneta = ({ modelo, marca, nombreDeAgencia }) => {
  return (
    <ul>
      <li>
        <p>Camioneta</p>
        <ul>
          <li>{`camioneta modelo: ${modelo}`}</li>
          <li>{`camioneta marca: ${marca}`}</li>
          <li>{`Nombre de la agencia: ${nombreDeAgencia}`}</li>
        </ul>
      </li>
    </ul>
  );
};
export const Page=(props)=>{
  const { modelo, marca, nombreDeAgencia } = props;
  console.log(props)
  return (
    <AgenciaProvider value={props}>
      <Camioneta
        modelo={modelo}
        marca={marca}
        nombreDeAgencia={nombreDeAgencia}
      />
    </AgenciaProvider>
  );

}
const Agencia = (props) => {
  const { modelo, marca, nombreDeAgencia } = props;

  const [stateCamioneta, setStateCamioneta] = useState({
    modelo,
    marca,
    nombreDeAgencia,
  });

  useEffect(() => {
    if (
      stateCamioneta.modelo == undefined &&
      stateCamioneta.marca == undefined &&
      stateCamioneta.nombreDeAgencia == undefined
    ) {
      alert("no ha definido los parametros de la camioneta");
    }
  }, [stateCamioneta]); //
  return (
    <AgenciaProvider value={props}>
      <Camioneta
        modelo={modelo}
        marca={marca}
        nombreDeAgencia={nombreDeAgencia}
      />
    </AgenciaProvider>
  );
};

export default Agencia;
