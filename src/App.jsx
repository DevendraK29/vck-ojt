import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import CoursesPage from "./pages/CoursesPage"
import ContactPage from "./pages/ContactPage"
import AdmissionPage from "./pages/AdmissionPage"
import devendraPage from "./pages/devendra";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "../src/App.css"
import { useState } from "react";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";
// import Footer from "./components/Footer/Footer";
// import Header from "./components/Header/Header";
const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
    return(
        <>
        <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Devendra Rajesh Kamble"
          studentPhotoUrl="/Images/Devendra.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
          <Router>
            <div className="main-layout">
              <Header />
              <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage/>}/>
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/courses" element={<CoursesPage/>}/>
              <Route path="/contact" element={<ContactPage/>}/>
              <Route path="/admission" element={<AdmissionPage/>}/>
              <Route path="/devendra" element={<devendraPage />}/>
            </Routes>
            <ChatbotComponent />
            </div>
            <Footer />
            </div>
          </Router>              
        </>
    );
}

export default App;