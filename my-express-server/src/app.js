import './app.css'
import Homepage from "./components/homepage/homepage"
import Login from './components/login/login';
import Register from './components/register/register';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App(){
    return(
        // <div className='App'>
        //     <Router>
        //         <Routes>
        //            <Route exact="/"><Homepage /></Route> 
        //            <Route path="/login"><Login /></Route> 
        //            <Route path="/register"><Register /></Route> 
        //         </Routes>
        //     </Router>
        // </div>
        <div>
            <login/>
        </div>
    );
}

export default App;