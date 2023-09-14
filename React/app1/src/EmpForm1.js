/*
demo:form handling using separate state hooks for each emp property
*/
import {useState} from 'react';
function EmpForm1(props)
{
 
   const  [empId,setEmpId] = useState(props.id);
   const  [empName,setEmpName] = useState(props.name);
   const  [empSal,setEmpSal] = useState(props.sal);

   
    function submitHandler(e)
    {
        e.preventDefault();
        console.log(empId+','+empName+','+empSal);
    }
   

    return(
   <>
   <form onSubmit={(e)=>{submitHandler(e)}}>
   <label>
      Empid:    <br/>
      <input type='text'
             name='empid'
             placeholder='empid'
             value={empId}
             onChange={(e)=>{setEmpId(e.target.value)}}
         />
   </label> <br/>
   <label>
      EmpName:    <br/>
      <input type='text'
             name='empname'
             value={empName}
             onChange={(e)=>{setEmpName(e.target.value)}}
        
      />
   </label> <br/>
   <label>
      EmpSal:    <br/>
      <input type='text'
             name='empsal'
             value={empSal}
             onChange={(e)=>{setEmpSal(e.target.value)}}
      />
   </label> <br/>
   <input type='submit' value='Add Emp' />
   </form>
    <hr/>
     <div>
        <p>{empId}</p>
        <p>{empName}</p>
        <p>{empSal}</p>
    </div>
    </>
    );

}
export default EmpForm1;