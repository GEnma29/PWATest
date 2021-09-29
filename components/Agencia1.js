import React, { useState, useEffect  } from "react";


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
}
const Agencia = (props) => {
  const { modelo, marca, nombreDeAgencia } = props;

  const [stateCamioneta, setStateCamioneta] = useState({
    modelo,
    marca,
    nombreDeAgencia,
  });
  const Camioneta = () => {
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
  }

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
    <div>
      <Camioneta
        modelo={modelo}
        marca={marca}
        nombreDeAgencia={nombreDeAgencia}
      />
    </div>
  );
};

export default Agencia;
