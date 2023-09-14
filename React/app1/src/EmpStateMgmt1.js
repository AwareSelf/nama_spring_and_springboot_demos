
import {useState} from 'react';
function Emp3(props)
{
 
   const  [emp,setEmp] = useState({
                                    empId:props.id,
                                    empName:props.name,
                                    empSal:props.sal
                                    });


   

  function showEmp()
    {
    // e.empname = 'Nisha'; --don;t modify like this
     let e1 = {...emp,empName:'Nisha'} ;
     setEmp(e1);
     }
  function greet(name)
  {
    alert('hi '+name);
  }


    return(
   <>
     <div>
        <p>{emp.empId}</p>
        <p>{emp.empName}</p>
        <p>{emp.empSal}</p>
    </div>
   {/* callback function should not be invoked.don't give round brackets around 
       showEmp function */}
    <button onClick={showEmp}>Show Emp</button> 

    {/*whn u have to pass args to callback function, use arrow function as below */}
    <button onClick={()=>{greet(emp.empName)}}>Greet Emp</button>
    </>
    );

}
export default Emp3;