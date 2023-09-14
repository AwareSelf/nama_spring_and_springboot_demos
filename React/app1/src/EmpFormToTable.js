import {useState} from 'react';
function EmpFormToTable()
{
  //step1:add emparr to state
  let arr = [{empid:1,empname:'ram',empsal:2000},
                {empid:2,empname:'shyam',empsal:3000}];

  const [emparr,setEmparr]=useState(arr);

  const [emp,setEmp]=useState({empid:3,empname:'Rita',empsal:2000});


   const deleteEmp = (id)=>{
    console.log('delete emp with id:'+id);

    let emparr1 = [...emparr]; //create a copy of array
    emparr1 = emparr1.filter(e=>e.empid!=id);
    setEmparr(emparr1);



   }

   const updateEmp = (e)=>{
    console.log('update emp with id:'+e.empid);
    setEmp(e);

  
   }

  //step 3:code submit handler,add or update emp to emparray
 // function submitHandler(e)
  const submitHandler = (e)=>{
            e.preventDefault();
            //submitted emp
            console.log(emp);
            
            //set flag to true if match found 
            let flag=false;     

     //update the emp if present in the list
     const newemparr = emparr.map(curremp => {
            if (curremp.empid == emp.empid) {
                console.log('emp match found:update emp');
                flag =  true;
                //emp already present so update curremp 
                return {...curremp, empname:emp.empname,
                                     empsal:emp.empsal};
             }
             else 
             {  // curre emp not matched return as is
               console.log('otherwise return current emp as is'); 
              return curremp;
             }
           });
           if(flag==true)
           {  
              //emp was present in list and was updated
              setEmparr(newemparr);
           }
           else
           {   //emp was not present in list so adding
               // submitted emp to original list/emparray
                setEmparr([...emparr,emp]);
           }               
        
           //empty the emp behind the form
          setEmp({...emp,empid:'',empname:'',empsal:''});              
     }

  return(<>

  
   {/* step 2:create emp form to add emp */}
   
   <form onSubmit={(e)=>{submitHandler(e)}}>
   <label>
      Empid:    <br/>
      <input type='text'
             name='empid'
             placeholder='empid'
             value={emp.empid}
             onChange={(e)=>{setEmp({...emp,empid:e.target.value})}}
           
         />
   </label> <br/>
   <label>
      EmpName:    <br/>
      <input type='text'
             name='empname'
             placeholder='empname'
             value={emp.empname}
             onChange={(e)=>{setEmp({...emp,empname:e.target.value})}}
        
      />
   </label> <br/>
   <label>
      EmpSal:    <br/>
      <input type='text'
             name='empsal'
             placeholder='empsal'
             value={emp.empsal}
             onChange={(e)=>{setEmp({...emp,empsal:e.target.value})}}
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
           e=><tr key={e.empid}>
                  <td>{e.empid}</td>
                  <td>{e.empname}</td>
                  <td>{e.empsal}</td>
                  <td><button onClick={()=>{deleteEmp(e.empid)}}>
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
export default EmpFormToTable;
