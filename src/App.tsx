

import PortfolioHome from './components/PortfolioHome';
import TopBar from './components/TopBar';
import PdfQA from './components/PdfQA';
import DummyProject from './components/DummyProject';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ...existing code...

const App = () => (
    <BrowserRouter>
        <TopBar />
        <Routes>
            <Route path="/" element={<PortfolioHome />} />
            <Route path="/pdf-rag" element={<PdfQA />} />
            <Route path="/dummy" element={<DummyProject />} />
        </Routes>
    </BrowserRouter>
);

export default App;