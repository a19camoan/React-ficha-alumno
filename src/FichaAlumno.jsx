import './css/FichaAlumno.css';
import imagen from './img/imagen.png';

export default function FichaAlumno({ nombre, direccion, localidad, cp }) {
    return (
        <div className="FichaAlumno">
            <img src={imagen} alt="Imagen del alumno" />
            <div className="texto">
                <div className="titulo">
                    <p><strong>Nombre:</strong></p>
                    <p><strong>Dirección:</strong></p>
                    <p><strong>Localidad:</strong></p>
                    <p><strong>Código Postal:</strong></p>
                </div>
                <div className="datos">
                    <p>{nombre}</p>
                    <p>{direccion}</p>
                    <p>{localidad}</p>
                    <p>{cp}</p>
                </div>
            </div>
        </div>
    );
}
