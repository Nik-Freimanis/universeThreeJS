import { BrowserRouter } from "react-router-dom";

import { Achievements, Roadmap, Goals, Navbar, Teams, StarsCanvas } from "./components";
import {Welcome} from "./components/Welcome.jsx";
import {Copyright} from "./components/Copyright.jsx";
import React from "react";
import {LoginText} from "./components/Login.jsx";

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
          <LoginText />
          <Copyright/>
        {/*<Teams />*/}
        {/*<Goals />*/}
      </div>
    </BrowserRouter>
  );
}

export default App;
