import { useState } from "react";

function MyForm(props)
{
    const [empId,setEmpId] = useState(1);
    const [empName,setEmpName] = useState("Namrata");
    const [empSalary,setEmpSalary] = useState(20000);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The empid is ${empId},
                empname is ${empName},
                empsalary is ${empSalary}`);
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>
            Emp Id :    <br/>
            <input type='number'  
                   value={empId}
                   onChange={e=>{ setEmpId(e.target.value); }}
            />
            </label> <br/>
          
            <label>
            Emp Name :    <br/>
            <input type='text'  
                   value={empName}
                   onChange={e=>{ setEmpName(e.target.value); }}
            />
            </label> <br/>
            <label>
            Emp Salary :    <br/>
            <input type='number'  
                   value={empSalary}
                   onChange={e=>{ setEmpSalary(e.target.value); }}
            />
            </label> <br/><br/>
            <input type='submit' />
        </form>
    );

  
}
export default MyForm;