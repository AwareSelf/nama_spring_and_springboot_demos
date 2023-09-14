
import {useState} from 'react';

function AddEmp(props)
{  const[emp,setEmp] =  useState({empId:props.eid,
                                  empName:props.ename,
                                  empSalary:props.esal});

  
   

   const handleSubmit = (event)=>   
    {
        event.preventDefault();
        //call parent event handler configured in props
        props.empadd(emp);
        setEmp({...emp,empId:'',empName:'',empSalary:''});
    }
    return(

        <form onSubmit={handleSubmit}>
            <label>
                empid:
                <input type='text'  
                   value={emp.empId}
                   onChange={e=>{setEmp({...emp,empId:e.target.value}); }}
            />
                            
            </label> <br/>
            <label>
                empname:
                <input type="text" 
                       value={emp.empName} 
            onChange={(e)=>setEmp({...emp,empName:e.target.value})} 
            />
             
            </label> <br/>
            <label>
                empsalary:
                <input type="text" 
                       value={emp.empSalary} 
           onChange={(e)=>setEmp({...emp,empSalary:e.target.value})} 
              />
            </label><br/>
            <input type="submit" />        
        </form>
    );
}

export default AddEmp;