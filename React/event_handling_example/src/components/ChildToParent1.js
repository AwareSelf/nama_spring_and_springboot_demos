import { useState } from "react";

/*
 Passing data from Child to Parent Component:
As React supports unidirectional data flow, we cannot pass any data directly 
from the child to the parent component. 
To achieve this, we have to use a slightly different approach here. 
First, we have to pass a method of parent component to child component as props. 
In the give example, <Employee> Component passes onChangeName method to the <EmployeeDetails> 
Component.
Here, the Child component<EmployeeDetails> can trigger a function on button 
click which is a functional props received from the parent component. 
The essence of the functional prop is that when the button is clicked, 
the function(onChangeName) passed in by the Employee component is executed. 
Thus, child-to-parent communication is achieved.

*/
const Employee2 = () => {
   const [empName,setEmpName] = useState('john')
    return(
        <>
        <h3>Emp Name is {empName}</h3>
        <EmployeeDetails2 empName={empName} onChangeName={(n)=>{setEmpName(n)}} />
        </>
    );

}

const EmployeeDetails2 = (props) => {

   const [ename,setEname] = useState(props.empName);
    return(
        <div>
            <input type='text' 
                   value={ename} 
                   onChange={e=>{ setEname(e.target.value); }}/>

            <button onClick={()=>{props.onChangeName(ename)}}>change Name</button>
        </div>

    );

}

export default Employee2;