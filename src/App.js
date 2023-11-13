import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Specialities from "./Pages/Specialities/Specialities";
import About from "./Pages/About/About";
import Orthopaedic from "./Pages/Orthopaedics/Orthopaedic";
import Opthalmology from "./Pages/Opthalmology/Opthalmology";
import Spine from "./Pages/Spine/Spine";
import Insurance from "./Pages/Insurance/Insurance";
import Appointment from "./Pages/Appointment/Appointment";
import Loading from "./Pages/Loading/Loading";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Sri Chaitanya Hospitals</title>
        <link rel="canonical" href="https://visheshcountrycache.tech/" />
        <meta
          name="description"
          content="Get the best Orthopeadician for your health with Sri chaitanya hospitals."
        />
        <meta
          name="keywords"
          content="visheshcountrycache,ortho hospital, knee fracture, chaitanya hospital,best Ortho hospital in tanuku,bones,krishnareddy hospital"
        />
        <meta name="robots" content="index, follow" />
        <html lang="en" />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route exact="true" path="/" Component={Loading} />
          <Route path="/home" Component={Home} />
          <Route path="/About" Component={About} />
          <Route path="/Specialities" Component={Specialities} />
          <Route path="/orthopaedics" Component={Orthopaedic} />
          <Route path="/opthalmology" Component={Opthalmology} />
          <Route path="/spine" Component={Spine} />
          <Route path="/insurance" Component={Insurance} />
          <Route path="/book_an_appointment" Component={Appointment} />
          <Route path="*" Component={PageNotFound} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
