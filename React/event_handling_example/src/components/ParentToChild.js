

const Employee = () => {

    return(
        <>
        <EmployeeDetails empName='John' />
        </>
    );

}

const EmployeeDetails = (props) => {

    return(
        <div>
            <h1>Welcome, {props.empName}!</h1>
        </div>

    );

}

export default Employee;