import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Testpage from "./pages/testpage";
import ADHDGyan from "./pages/a-d-h-d-gyan";
import LandingPage from "./pages/landing-page";
import MCQ from "./pages/m-c-q";
import TestOption from "./pages/test-option";
import Interview from "./pages/interview";
import Gender from "./pages/gender";
import End from "./pages/end";
import { useEffect } from "react";
import Navbar from "./components/header"
import Pre from "./components/pre-footer"
import Footer from "./components/footer"

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/adhd-gyan":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/mcq":
        title = "";
        metaDescription = "";
        break;
      case "/test-option":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <div>
      <Navbar />
    <Routes>
      <Route path="/pretest" element={<Testpage />} />
      <Route path="/adhd-gyan" element={<ADHDGyan />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/mcq" element={<MCQ />} />
      <Route path="/test-option" element={<TestOption />} />
      <Route path="/interview" element={<Interview />} />
      <Route path="/gender" element={<Gender />} />
      <Route path="/end" element={<End />} />
    </Routes>
    <Pre />
    <Footer />
    </div>
  );
}
export default App;
