import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './Pages/homepage'
import DatasetPage from './Pages/datasetPage.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/dataset" element={<DatasetPage />} />

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
