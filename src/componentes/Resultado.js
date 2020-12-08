import React from 'react';

const Resultado = ({ cantidad, plazo, total }) => (
    <div className="u-full-width resultado">
        <h2>Resumen</h2>
        <p>La cantidad solicitada es de: ${cantidad}</p>
        <p>A pagar en: {plazo} meses</p>
        <p>En pagos mensuales de: ${(total/plazo).toFixed(2)}</p>
        <p>Su total a pagar es de: ${(total).toFixed(2)} meses</p>
    </div>
);

export default Resultado;