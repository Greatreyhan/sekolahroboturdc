import {Switch,BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigation from './Components/Navigation';
import Landing from "./Pages/Landing"
import Learning from "./Pages/Learning"
import Schedule from "./Pages/Schedule"
import Resources from "./Pages/Resources"
import Footer from "./Components/Footer"
import Major from './Pages/Major';

function App() {
  return (
    <div className='bg-gray-50'>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/learning/:major" element={<Major />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
