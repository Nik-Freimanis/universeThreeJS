import { BrowserRouter } from "react-router-dom";

import { Achievements, Roadmap, Goals, Navbar, Teams, StarsCanvas } from "./components";
import {Welcome} from "./components/Welcome.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          {/*<Navbar />*/}
            <Welcome/>
          <StarsCanvas />
        </div>
        {/*<Achievements />*/}
        <Roadmap />
        {/*<Teams />*/}
        {/*<Goals />*/}
      </div>
    </BrowserRouter>
  );
}

export default App;
