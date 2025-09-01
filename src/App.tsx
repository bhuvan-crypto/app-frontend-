import Contact from "./views/Contact";
import Navbar from "./components/Navbar";
import About from "./views/About";
import Home from './views/Home'
import Services from "./views/Services";
import Projects from "./views/Projects";
import LoadingScreen from "./components/LoadingScreen";
import { ThemeProvider } from "./themeProvider";
import * as React from "react";
import PdfQA from "./components/PdfQA";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <ThemeProvider>
      <>
        {!loading ? (
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={
                <>
                  <Home />
                  <About />
                  <Services />
                  <Projects />
                  <Contact />
                </>
              } />
              <Route path="/pdf-qa" element={<PdfQA />} />
            </Routes>
          </Router>
        ) : (
          <LoadingScreen />
        )}
      </>
    </ThemeProvider>
  );
}

export default App;
