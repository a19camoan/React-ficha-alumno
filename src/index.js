import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import FichaAlumno from "./FichaAlumno";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <FichaAlumno
            nombre="Andrés"
            direccion="C/ La calle"
            localidad="Córdoba"
            cp="14010"
        >
        </FichaAlumno>
    </StrictMode>
);
