import logo from './logo.svg';
import './App.css';
import Emp from './Emp';
import Emp1 from './Emp1';
import Emparr from './Emparr';
import Emp2 from './EmpStateMgmt';
import Emp3 from './EmpStateMgmt1';
import EmpForm from './EmpForm';
import EmpForm1 from './EmpForm1';
import EmpFormToTable from './EmpFormToTable';
import EmpFormToTable1 from './EmpFormToTable1';
import InlineStyle from './InlineStyle';


function App() {

  let a = 4;
  let ex = {empid:2,empname:'Mita',empsal:2000};
 
  return (
    <div className="App">
    {/*
        <p>value of {a} </p>
        <Emp1 id={ex.empid} name='Sita' salary={ex.empsal}/>
        <hr/>
        <Emp/>
        <hr/>
        <Emparr/>
        <hr/>
        <Emp2 id={ex.empid} name='Sita' sal={ex.empsal} />
         <hr/> 
        <Emp3 id={ex.empid} name='Sita' sal={ex.empsal} />
        <hr/>
        <EmpForm id={ex.empid} name='Sita' sal={ex.empsal} />
        <hr/>
        <EmpForm1 id={ex.empid} name='Sita' sal={ex.empsal} /> 
       <hr/>
       <EmpFormToTable1/>  */}
       <hr/>
       <InlineStyle/>
    
      
    </div>
  );
}


export default App;
