import { useState, useEffect } from "react"; // Importa useEffect
import "./App.css";
import { CeldaComponent } from "./components/ButtonComponent/CeldaComponent";

function App() {
  const compruebaMina = (index, px, py, tablero) => {
    if (index === "*") {
      //console.log(px, py, tablero);
    }
  };

  const creaTablero = (minas = 10) => {
    const tablero = [];

    for (let i = 0; i < 8; i++) {
      tablero[i] = Array(8).fill(0);
    }

    let totalMinasInsertadas = 0;

    while (minas > totalMinasInsertadas) {
      const posicionXaleatoria = Math.floor(Math.random() * 8);
      const posicionYaleatoria = Math.floor(Math.random() * 8);
      if (tablero[posicionXaleatoria][posicionYaleatoria] === "*") {
        continue;
      }
      tablero[posicionXaleatoria][posicionYaleatoria] = "*";
      totalMinasInsertadas++;
    }

    for (let index = 0; index < tablero.length; index++) {
      for (let index2 = 0; index2 < tablero.length; index2++) {
        compruebaMina(tablero[index][index2], index, index2, tablero);
      }
    }

    return tablero;
  };

  const [mapaValores, setMapaValores] = useState(creaTablero());

  useEffect(() => {
    console.log("Tablero en el estado:", mapaValores);
  }, [mapaValores]);

  const celda = mapaValores.map((el, rowIndex) =>
    el.map((elemnt, colIndex) => {
      return (
        <div key={`${rowIndex}-${colIndex}`} className="col-auto p-0">
          <CeldaComponent
            valor={elemnt}
            onCeldaClick={() => mostrarValor(rowIndex, colIndex)}
          ></CeldaComponent>
        </div>
      );
    })
  );

  const btnComenzar = () => {
    setMapaValores(creaTablero());
  };

  const mostrarValor = (rowIndex, colIndex) => {
    const copiaValores = mapaValores.map((row) => [...row]);
    copiaValores[rowIndex][colIndex] = mapaValores[rowIndex][colIndex];
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
