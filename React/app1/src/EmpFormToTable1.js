import {useState,useEffect} from 'react';
import axios from 'axios';
function EmpFormToTable1()
{
  

  const [emparr,setEmparr]=useState([]);

  const [emp,setEmp]=useState({empId:3,empName:'Rita',empSalary:2000});


  const url = 'http://localhost:8085/';

  const getAllEmps = () => {

      axios.get(url+'emps')
      .then((response)=>{

            const allemps = response.data;
            console.log(allemps);
            setEmparr(allemps);
        
          }
      )
      .catch((error)=>{

          console.log(error);

      });
  }


   const deleteEmp = (id)=>{
    console.log('deleteEmp called with id:'+id);
        axios.delete(url+'emp/'+id)
        .then((response)=>{

              const isdeleted = response.data;
              console.log(isdeleted);
              setEmparr((current) =>
              current.filter((emp) => emp.empId !== id));
        })
        .catch((error)=>{

            console.log(error);

        });
   }

   const updateEmp = (e)=>{
    console.log('update emp with id:'+e.empId);
    setEmp(e);
   }

  //step 3:code submit handler,add or update emp to emparray
 // function submitHandler(e)
  const submitHandler = (event)=>{
            event.preventDefault();
            //submitted emp
            console.log(emp);
            addPut(emp);
          }

  const addPut = (emp)=>{
    axios.put(url+'emp',{
        empId:emp.empId,
        empName:emp.empName,
        empSalary:emp.empSalary
       })
       .then((response)=>{
 
         if(response.status==200)
         {
      //update the emp that is present in the list
     const newemparr = emparr.map(curremp => {
            if (curremp.empId == emp.empId) {
                console.log('emp match found:update emp');
                //emp already present so update curremp 
                return {...curremp, empName:emp.empName,
                                     empSalary:emp.empSalary};
             }
             else 
             {  // curre emp not matched return as is
               console.log('otherwise return current emp as is'); 
              return curremp;
             }
           });
           setEmparr(newemparr);
         //empty the emp behind the form
          setEmp({...emp,empId:'',empName:'',empSalary:''});  
        }
        else if(response.status==201)
           {
            //new emp created so add to array  
            setEmparr([...emparr,emp]);
             //empty the emp behind the form
          setEmp({...emp,empId:'',empName:'',empSalary:''});  
 
           } 
        else
           {
            console.log('update(put) emp failed: response status:'+response.status+':'+response.statusText);
           }
   
         })
         .catch((error)=>{ console.log(error)})              
                           
     }

     useEffect(() => {
          getAllEmps();
        }, []);

  return(<>

  
   {/* step 2:create emp form to add emp */}
   
   <form onSubmit={(e)=>{submitHandler(e)}}>
   <label>
      Empid:    <br/>
      <input type='text'
             name='empid'
             placeholder='empid'
             value={emp.empId}
             onChange={(e)=>{setEmp({...emp,empId:e.target.value})}}
           
         />
   </label> <br/>
   <label>
      EmpName:    <br/>
      <input type='text'
             name='empname'
             placeholder='empname'
             value={emp.empName}
             onChange={(e)=>{setEmp({...emp,empName:e.target.value})}}
        
      />
   </label> <br/>
   <label>
      EmpSal:    <br/>
      <input type='text'
             name='empsal'
             placeholder='empsal'
             value={emp.empSalary}
             onChange={(e)=>{setEmp({...emp,empSalary:e.target.value})}}
      />
   </label> <br/>
   <input type='submit' value='Add Emp' />
   </form>
   <hr/>
  
    {/* step 4:show emp array in the html table */}
    <table>
    <thead>
     <tr>
       <th>empid</th>
       <th>empname</th>
       <th>empsal</th>
       <th>delete emp</th>
       <th>update emp</th>
     </tr>
    </thead>
    <tbody>
      
       {emparr.map(
           e=><tr key={e.empId}>
                  <td>{e.empId}</td>
                  <td>{e.empName}</td>
                  <td>{e.empSalary}</td>
                  <td><button onClick={()=>{deleteEmp(e.empId)}}>
                              Delete
                      </button>
                  </td>
                  <td><button onClick={()=>{updateEmp(e)}} >
                        Update
                      </button>
                  </td>
               </tr>
       )}
    </tbody>
   </table>
  
  </>);
}
export default EmpFormToTable1;
