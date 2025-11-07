import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatBot from "./components/chatbot/ChatBot.js";
// import "./index.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import HomePage from "./landing_page/Home/HomePage.js";
import AboutPage from "./landing_page/About/AboutPage.js";
// import OperationPage from "./landing_page/Operations/OperationPage.js";
import NotFound from "./landing_page/NotFound/notFound.js";
import ContactPage from "./landing_page/Contact/ContactPage.js";
import { OperationsPanel } from "./landing_page/Operations/OperationsPanel.js";
import QuizPage from "./landing_page/Quiz/QuizPage.js";
import Topic from "./landing_page/Notes/Topic.js";
import GraphPage from "./landing_page/Graph/GraphPage.js";
import Authentication from "./landing_page/authentication.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import ThreePhasePowerPage from "./landing_page/Operations/threePhasePowerPage.js";
import { MotorsNotesPage } from "./landing_page/Notes/MotorsNotesPage.js";
import { TransformersNotesPage } from "./landing_page/Notes/TransformersNotesPage.js";
import { ACCircuitsNotesPage } from "./landing_page/Notes/ACCircuitsNotesPage.js";
import { DCCircuitsNotesPage } from "./landing_page/Notes/DCCircuitsNotesPage.js";
import { ThreePhaseNotesPage } from "./landing_page/Notes/ThreePhaseNotesPage.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/graph" element={<GraphPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/operations/*" element={<OperationsPanel />} />
        <Route exact path="/notes" element={<Topic />} />
        <Route path="/*" element={< NotFound />} />
        <Route path="/auth" element={< Authentication />} />
         <Route path="/n/dc-circuits" element={<DCCircuitsNotesPage/>} />
        <Route path="/n/ac-circuits" element={<ACCircuitsNotesPage/>} />
        <Route path="/n/transformers" element={<TransformersNotesPage />} />
        <Route path="/n/motors" element={<MotorsNotesPage />} />
        <Route path="/n/three-phase" element={<ThreePhaseNotesPage />} />
      </Routes>
      </AuthProvider>
    </BrowserRouter>
    {/* <ChatBot/> */}
    <Footer />
  </React.StrictMode>
);
