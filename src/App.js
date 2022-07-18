import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from './container/SignIn/SignIn';
import HomePageContent from './components/HomePageContent/HomePageContent';
import CardContentPage from './components/CardContentPage/CardContentPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path="/" element={<HomePageContent />} />
             <Route path="/sign-in" element={<SignIn/>} /> 
             <Route path="/electronics" element={<CardContentPage el={true}/>}/>
             <Route path="/jewelery" element={<CardContentPage jl ={true}/>}/>
             <Route path="/men's%20clothing" element={<CardContentPage mc={true}/>}/>
             <Route path="/women's%20clothing" element={<CardContentPage/>}/> 
          </Routes>
          

        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
