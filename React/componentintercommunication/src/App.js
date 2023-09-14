import './App.css';
import {useState} from 'react';
import AddEmp from './AddEmp';






function App() {
  const arr =[
    {empId:1,empName:'Ram',empSalary:2000},
    {empId:2,empName:'Shyam',empSalary:5000}    
   ];

     const [emparr,setEmparr] = useState(arr);
   

    const addEmp = (emp) =>
    {
        console.log('add emp called'+emp.empId);
         
        setEmparr([...emparr,emp]);
     
     }
      
    let init_id = 3;
    let init_name='Shital';
    let init_sal = 7000;
    return (
      <>
      <AddEmp empadd={(emp)=>addEmp(emp)}
              eid={init_id}   
              ename={init_name}  
              esal={init_sal}            
              />
      <hr/>
      <ul>
      {emparr.map(e=><li key={e.empId}> 
                          {e.empId},{e.empName},{e.empSalary}
                     </li>
                 )
      }
      </ul>
      </>
  );

}




export default App;
