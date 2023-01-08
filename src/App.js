import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AnalysisPage from './pages/AnalysisPage';
import FilesPage from './pages/FilesPage';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='home-page' element={<HomePage/>}/>
        <Route path='analysis-page' element={<AnalysisPage/>}/>
        <Route path='files-page' element={<FilesPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
