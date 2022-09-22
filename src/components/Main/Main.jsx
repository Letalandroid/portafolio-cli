import Portada from "./components/portada/portada";
import Descripcion from "./components/descripcion/descripcion";
import Tecnologias from "./components/tecnologias/tecnologias";
import Proyectos from "./components/proyectos/Proyectos";

export default function Main() {
  return (
    <main>
      <Portada />
      <Descripcion />
      <Tecnologias />
      <Proyectos />
    </main>
  );
}
