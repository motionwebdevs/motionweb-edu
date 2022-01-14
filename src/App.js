import React, {lazy} from "react";
import {Route,Routes} from "react-router-dom";
import "./Style/index.scss"
import FrontUx from "./Course-content/Front-end/front-ux";
import FulStack from "./Course-content/Full-stack/ful-stack";
import MotionDesign from "./Course-content/Motion-design/motion-design";
import Android from "./Course-content/Android/android";
import Computer from "./Course-content/Computer-title/computer";
import Design from "./Course-content/UxUi-design/design";
import Business from "./Course-content/Business/business";
import {ContactPage} from "./components/Contact-page/Contact-page";

function App() {
    const Landing = lazy(() => import('./landing'))
    const AboutPage = lazy(() => import('./about-page'))

    return (
          <Routes>
              <Route path="/" exact element={<Landing/>}/>
              <Route path="/about" exact element={<AboutPage/>}/>
              <Route path="/contact-page" exact element={<ContactPage/>}/>
              <Route path="/Front-end/FrontUX/front-ux" exact element={<FrontUx/>}/>
              <Route path="/Front-end/ful-stack" exact element={<FulStack/>}/>
              <Route path="/Front-end/android" exact element={<Android/>}/>
              <Route path="/Front-end/motion-design" exact element={<MotionDesign/>}/>
              <Route path="/Front-end/design" exact element={<Design/>}/>
              <Route path="/Front-end/business" exact element={<Business/>}/>
              <Route path="/Front-end/computer" exact element={<Computer/>}/>
          </Routes>
  );
}

export default App;
