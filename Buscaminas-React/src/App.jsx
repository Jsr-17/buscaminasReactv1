import { useState } from "react";
import "./App.css";
import { CeldaComponent } from "./components/ButtonComponent/CeldaComponent";

function App() {
  const creaTablero = (minas) => {
    const tablero = Array(64).fill(0);
    const totalMinas = 10;
    let totalMinasInsertadas = 0;

    while (totalMinas > totalMinasInsertadas) {
      const numeroAleatorio = Math.floor(Math.random() * 64);
      if (tablero[numeroAleatorio] == "*") {
        continue;
      }
      tablero[numeroAleatorio] = "*";
      totalMinasInsertadas++;
    }
    tablero.filter((el, index, arr) => {
      if (el == "*") {
        let izq = index - 1 >= 0 && index % 8 !== 0 ? index - 1 : index;
        let der =
          index + 1 < arr.length && (index + 1) % 8 !== 0 ? index + 1 : index;
        let abj = index + 8 < arr.length ? index + 8 : index;
        let arrib = index - 8 >= 0 ? index - 8 : index;
        let derechaAbajo = der + 8 < arr.length ? der + 8 : der;
        let derechaArriba = der - 8 >= 0 ? der - 8 : der;
        let izquierdaAbajo = izq + 8 < arr.length ? izq + 8 : izq;
        let izquierdaArriba = izq - 8 >= 0 ? izq - 8 : izq;
        if (arr[izq] !== "*") {
          arr[izq]++;
        }
        if (arr[der] !== "*") {
          arr[der]++;
        }

        if (arr[abj] !== "*") {
          arr[abj]++;
        }

        if (arr[arrib] !== "*") {
          arr[arrib]++;
        }

        if (arr[derechaAbajo] !== "*") {
          arr[derechaAbajo]++;
        }

        if (arr[derechaArriba] !== "*") {
          arr[derechaArriba]++;
        }

        if (arr[izquierdaArriba] !== "*") {
          arr[izquierdaArriba]++;
        }

        if (arr[izquierdaAbajo] !== "*") {
          arr[izquierdaAbajo]++;
        }
      }
    });
    console.log(tablero);

    return tablero;
  };

  const tableroNuevo = creaTablero();

  const [mapaValores, setMapaValores] = useState(tableroNuevo);
  let array = [];

  for (let i = 0; i < 64; i++) {
    array = [i, ...array];
  }

  const celda = mapaValores.map((el, index) => (
    <div key={index} className="col-auto p-0">
      <CeldaComponent
        valor={el}
        onCeldaClick={() => mostrarValor(index)}
      ></CeldaComponent>
    </div>
  ));

  const btnComenzar = () => {
    setMapaValores(Array(64).fill(" "));
  };

  const mostrarValor = (index) => {
    const copiaValores = mapaValores.slice();
    copiaValores[index] = array[index];
    setMapaValores(copiaValores);
  };

  return (
    <>
      <div className="container text-center" style={{ width: 492 }}>
        <div className="grid bg-body-secondary py-2 px-4 borderOutSide m-0">
          <div className="row bg-body-secondary borderInside ">
            <div className="d-flex flex-wrap justify-content-around">
              <div className="lcdText text-danger pe-2 m-2 borderInsideS">
                10
              </div>
              <div className="align-self-center m-2 borderInsideS">
                <img
                  src="./src/assets/images/acierto.png"
                  style={{ width: 50 }}
                />
              </div>
              <div
                className="lcdText text-danger pe-2 m-2 borderInsideS"
                style={{ width: 54 }}
              >
                00
              </div>
            </div>
          </div>
          <div className="row borderInside bg-body-secondary text-center justify-content-center">
            <div className="col my-1 p-0">
              <div className="d-flex flex-wrap justify-content-center">
                {celda}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="btn btn-outline-secondary mt-2" onClick={btnComenzar}>
            Pulsame
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
