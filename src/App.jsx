import React from "react";
import Header from "./Pages/Header.jsx";
import Body from "./Pages/body.jsx";
import Secondsection from "./Pages/Secondsection.jsx";
import WhyChoose from "./Pages/WhyChoose.jsx"
import Skills from "./Pages/Skils.jsx";
import Scroll from "./Pages/Scrolling.jsx"
import Experience from "./Pages/Experience.jsx"
import Contact from "./Pages/contact.jsx"
import Footer from "./Pages/Footer.jsx"

function App() {

  return (
    <div>
      <Header />
      <Body />
      <Secondsection />
      <WhyChoose />
      <Skills />
      <Scroll />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
