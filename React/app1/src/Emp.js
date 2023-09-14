
//example1
function Emp(props)
{
  //giving values inside the component
    let e = {empid:1,
             empname:'namrata',
             empsal:1000};



    return(

     <div>
        <p>{e.empid}</p>
        <p>{e.empname}</p>
        <p>{e.empsal}</p>
    </div>
    );

}
export default Emp;