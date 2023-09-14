
import {useState} from 'react';
function EmpForm(props)
{
 
   const  [emp,setEmp] = useState({
                                    empId:props.id,
                                    empName:props.name,
                                    empSal:props.sal
                                    });

    function changeEmpId(e)
    {
        let id = e.target.value;
        console.log(id);
        let e1 = {...emp,empId:id} ;
        setEmp(e1);
        console.log(e);
    }

    function submitHandler(e)
    {
        e.preventDefault();
        console.log(emp);
    }
   

    return(
   <>
   <form onSubmit={(e)=>{submitHandler(e)}}>
   <label>
      Empid:    <br/>
      <input type='text'
             name='empid'
             value={emp.empId}
       //    onChange={(e)=>{changeEmpId(e)}} 
             onChange={(e)=>{setEmp({...emp,empId:e.target.value})}}
      />
   </label> <br/>
   <label>
      EmpName:    <br/>
      <input type='text'
             name='empname'
             value={emp.empName}
             onChange={(e)=>{setEmp({...emp,empName:e.target.value})}}
      />
   </label> <br/>
   <label>
      EmpSal:    <br/>
      <input type='text'
             name='empsal'
             value={emp.empSal}
             onChange={(e)=>{setEmp({...emp,empSal:e.target.value})}}
      />
   </label> <br/>
   <input type='submit' value='Submit' />
   </form>
    <hr/>
     <div>
        <p>{emp.empId}</p>
        <p>{emp.empName}</p>
        <p>{emp.empSal}</p>
    </div>
    </>
    );

}
export default EmpForm;