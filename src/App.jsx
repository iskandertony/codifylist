import { Routes, Route, Navigate } from 'react-router-dom'

import './App.scss'
import Home from './Pages/Home'
import Form from './Pages/Form/form'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Form" element={<Form />} />
            </Routes>
        </div>
    )
}

export default App
