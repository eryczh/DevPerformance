import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Header from './components/Header';
import Login from './pages/Login';
import Performance from './components/Performance';


function RouterApp() {
    return (
    <BrowserRouter>
    <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/sobre" element={<Sobre />} />
            

        </Routes>
    </BrowserRouter>
    )
}
export default RouterApp;