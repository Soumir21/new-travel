import "./App.css"
import { StrictMode } from 'react';
import {Navbar} from "./Component/Navbar/Navbar"
import {Home} from "./Component/Home/Home"
import { Main } from "./Component/Main/Main";
import {Footer} from "./Component/Footer/Footer"
const App=()=>{
    return <>
    <StrictMode>
        <Navbar />
        <Home />
        <Main  />
        <Footer />
    </StrictMode>
       
    </>
}

export default App;