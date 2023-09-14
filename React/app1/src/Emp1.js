

function Emp1(props)
{
 //passing values from parent to child via props
 //props means component properties
 //props are readonly 
    let e = {empid:props.id,
             empname:props.name,
             empsal:props.salary};

  function showEmp()
    {
        /*
  Although, e.empname inside emp object is modified, it will show changes in alert
  but not reflect in dom, as React has not re-rendered the dom.
  soln: use useState hook
        */
        e.empname = 'Nisha';
        alert(e.empid+','+e.empname+','+e.empsal);
    }
  function greet(name)
  {
    alert('hi '+name);
  }


    return(
   <>
     <div>
        <p>{e.empid}</p>
        <p>{e.empname}</p>
        <p>{e.empsal}</p>
    </div>
   {/* callback function should not be invoked.don't give round brackets around 
       showEmp function */}
    <button onClick={showEmp}>Show Emp</button> 

    {/*whn u have to pass args to callback function, use arrow function as below */}
    <button onClick={()=>{greet(e.empname)}}>Greet Emp</button>
    </>
    );

}
export default Emp1;