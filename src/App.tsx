import Map from "./Map";
import SideBar from "./SideBar";
import { useState } from "react";

function App() {
  const [coordinatesList, setCoordinatesList] = useState<number[][]>([]);

  return (
    <>
      <main className="grid-cols-12 md:grid h-fit">
        <section className="col-span-8 h-[50vh] md:h-screen">
          <Map
            onLocationClick={locationClickHandler}
          />
        </section>
        <SideBar coordinateList={coordinatesList} className="h-screen col-span-4" />
      </main>
    </>
  );

  function locationClickHandler(lat, lon) {
    setCoordinatesList(prevState => {
      return [...prevState, [lat, lon]]
    })
  }
}

export default App;
