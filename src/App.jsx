import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./components/daisyNav/DaisyNav";
import NavBar from "./components/navBar/NavBar";
import PricingOption from "./components/pricingOptions/pricingOption";

const pricingPromise = fetch("pricingData.json").then((res) => res.json());

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>

      <main>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg"></span>
          }
        >
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>
      </main>

      <footer></footer>
    </>
  );
}

export default App;
