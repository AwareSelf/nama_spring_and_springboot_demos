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
const Employee1 = () => {
   const [empName,setEmpName] = useState('john')
    return(
        <>
        <EmployeeDetails1 empName={empName} onChangeName={(n)=>{setEmpName(n)}} />
        </>
    );

}

const EmployeeDetails1 = (props) => {

    return(
        <div>
            <h1>My name is {props.empName}!</h1>
            <button onClick={()=>{props.onChangeName('Rob')}}>change Name</button>
        </div>

    );

}

export default Employee1;