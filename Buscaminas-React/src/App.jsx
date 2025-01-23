import { useState } from "react";
import "./App.css";
import { CeldaComponent } from "./components/ButtonComponent/CeldaComponent";

function App() {
  const [mapaValores, setMapaValores] = useState(Array(64).fill(" "));
  let array = [];

  for (let i = 0; i < 64; i++) {
    array = [i, ...array];
  }
  const celda = mapaValores.map((el, index) => (
    <div key={index} className="col-auto p-0">
      <CeldaComponent valor={el}></CeldaComponent>
    </div>
  ));

  const btnComenzar = () => {
    let array = [];

    for (let i = 0; i < 64; i++) {
      array = [i, ...array];
    }
    setMapaValores(array);
  };
  const mostrarValor = (index) => {};

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
