/*
How to fetch data from APIs using Asynchronous await in ReactJS ?
API: APIs are basically a type of application that stored data in 
the format of JSON (JavaScript Object Notation) and XML (Extensible Markup Language). 
It makes it possible for any device to talk to each other.

Asynchronous Await: Async ensures that the function returns a promise 
and wraps non-promises in it. There is another word Await, that works only
 inside the async function.
*/
import axios from 'axios';
import './HttpEmp.css';
import {useEffect,useState} from 'react';


 function GetAllEmps()
{
    
   
    const [empId,setEmpId] = useState('');
    const[empName,setEmpName] = useState('');
    const [empSalary,setEmpSalary] = useState('');

    const [emps,setEmps] = useState(null);
 
    const url = 'http://localhost:8085/';

    const getAllEmps = () => {

        axios.get(url+'emps')
        .then((response)=>{

              const allemps = response.data;
              console.log(allemps);
              setEmps(allemps);
          
            }
        )
        .catch((error)=>{

            console.log(error);

        });
    }
   
   const deleteEmp = () => {

      console.log('call axios.delete here');
   }

   const updateEmp = () => {

      console.log('call axios.put here')
    }

     useEffect(() => {
        getAllEmps();
    }, []);

   
    return(
       
         <div>
            <h1>Emp Details!</h1>
            <table id="emp">
              <thead>
                {/* display emp table header if list of emps is not null */}
              </thead>
              <tbody>
                   {/* display list of emps in  table rows (using map function) if emps not null */}
              </tbody> 
            </table>
          </div>
        
      );
   

}

export default GetAllEmps;

//https://dev.to/abdulbasit313/learn-how-to-create-react-js-table-with-hooks-that-has-delete-functionality-too-2jjb