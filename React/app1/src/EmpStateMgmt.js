
import {useState} from 'react';
function Emp2(props)
{
 
   const  [empid,setEmpid] = useState(props.id);
   const  [empname,setEmpname] = useState(props.name);
  const [empsal,setEmpsal] = useState(props.sal);

   

  function showEmp()
    {
     
       // e.empname = 'Nisha'; --don;t modify like this
       setEmpname('Nisha');
     }
  function greet(name)
  {
    alert('hi '+name);
  }


    return(
   <>
     <div>
        <p>{empid}</p>
        <p>{empname}</p>
        <p>{empsal}</p>
    </div>
   {/* callback function should not be invoked.don't give round brackets around 
       showEmp function */}
    <button onClick={showEmp}>Show Emp</button> 

    {/*whn u have to pass args to callback function, use arrow function as below */}
    <button onClick={()=>{greet(empname)}}>Greet Emp</button>
    </>
    );

}
export default Emp2;