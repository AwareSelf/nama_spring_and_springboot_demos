import logo from './logo.svg';
import './App.css';

//import GetAllEmps from './getAllEmps';
//import GetAllAddEmps from './getAllAddEmps';
import Axioshttp from './HttpEmp';


function App() {
  return (
    <div className="App">
       {/* <GetAllEmps/>
           <hr/>  
           <GetAllAddEmps/>  */}
        <Axioshttp/> 
    </div>
  );
}

export default App;
