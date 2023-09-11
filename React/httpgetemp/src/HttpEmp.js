/*
How to fetch data from APIs using Asynchronous await in ReactJS ?
API: APIs are basically a type of application that stored data in 
the format of JSON (JavaScript Object Notation) and XML (Extensible Markup Language). 
It makes it possible for any device to talk to each other.

Asynchronous Await: Async ensures that the function returns a promise 
and wraps non-promises in it. There is another word Await, that works only
 inside the async function.
*/
import axios from 'axios';
import './HttpEmp.css';
import {useEffect,useState} from 'react';


 function Axioshttp()
{
    
   
    const [empId,setEmpId] = useState('');
    const[empName,setEmpName] = useState('');
    const [empSalary,setEmpSalary] = useState('');

    const [emps,setEmps] = useState(null);
 
    const url = 'http://localhost:8085/';

    const getAllEmps = () => {

        axios.get(url+'emps')
        .then((response)=>{

              const allemps = response.data;
              console.log(allemps);
              setEmps(allemps);
          
            }
        )
        .catch((error)=>{

            console.log(error);

        });
    }

    const deleteEmp = (id) => {

        console.log('deleteEmp called with id:'+id);
        axios.delete(url+'emp/'+id)
        .then((response)=>{

              const isdeleted = response.data;
              console.log(isdeleted);

              setEmps((current) =>
              current.filter((emp) => emp.empId !== id)
            );
                       
            }
        )
        .catch((error)=>{

            console.log(error);

        });
    }

    const updateEmp = (e) => {

      console.log('update emp with id:'+e.empId);
      setEmpId(e.empId);
      setEmpName(e.empName);
      setEmpSalary(e.empSalary);
           
  }

    const handleSubmit =  (event)=>{

        event.preventDefault();
        addPut(empId,empName,empSalary);
               
    }

    const addPost = async (empId,empName,empSalary)=>{

       let response = await axios.post(url+'emp',{
        empId:empId,
        empName:empName,
        empSalary:empSalary
       });

       if(response.status==201)
       {
        setEmps([response.data,...emps]); 
        setEmpId('');
        setEmpName('');
        setEmpSalary('');
       }
       else
       {
        console.log('post emp failed: response status:'+response.status+':'+response.statusText);
       }
    }

    const addPut = (empId,empName,empSalary)=>{

      axios.put(url+'emp',{
       empId:empId,
       empName:empName,
       empSalary:empSalary
      })
      .then((response)=>{

        if(response.status==200)
        {
           // getAllEmps();  //--no need to retrive all emps from backend again, instead update emp in emp-list locally
           const updatedemps = emps.map(e => {
            //iterate all emps and check
            //if empId equals 2, update all properties of that emp
            if (e.empId === empId) {
              return {...e, empId: empId,empName: empName,empSalary:empSalary};
            }
            // otherwise return the emp as is
            return e;
          });
      
          setEmps(updatedemps);
          setEmpId('');
          setEmpName('');
          setEmpSalary('');
        }
        else if(response.status==201)
        {
          //put request resulted in adding new emp as emp with that empId was not present
          setEmps([response.data,...emps]); 
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

   
    return(
        <div>
          <div className='posts-container'>
            <p>Note : If EmpId is updated, it will add a new Employee </p>
            <form onSubmit={handleSubmit}>
                <label>
                 Emp Id:   <br></br>
                <input type='text' className='form-control' value={empId} 
                onChange={(event)=>setEmpId(event.target.value)}/>
                </label> <br/>
                <label>
                 Emp Name:   <br></br>
                <input type='text' className='form-control' value={empName} 
                onChange={(event)=>setEmpName(event.target.value)}/>
                </label> <br/>
                <label>
                 Emp Salary:   <br></br>
                <input type='text' className='form-control' value={empSalary} 
                onChange={(event)=>setEmpSalary(event.target.value)}/>
                </label> <br/><br/>
                <input type='submit'/>
             </form>
           </div>
         <hr/>  
           <div>
             {/*  <button onClick={ getAllEmps }>Get Emps</button>  */}
             <h1>Emp Details!</h1>
               <table id="emp">
               <thead>
                  { emps!=null &&
                   <tr>
                     <th>Id</th> 
                     <th>Name</th>
                     <th>Salary</th>
                     <th>Delete</th>
                     <th>Update</th>
                    </tr>
                  }
               </thead>
               <tbody>
                 { emps!=null &&
                   emps.map(e =>
                    <tr key={e.empId}>
                      <td>{e.empId}</td> 
                      <td>{e.empName}</td>
                      <td>{e.empSalary}</td>
                      <td>
                        <button onClick={() =>deleteEmp(e.empId)}>Delete</button>
                      </td>
                      <td>
                        <button onClick={() =>updateEmp(e)}>Update</button>
                      </td>
                    </tr>)
                  }
                 </tbody> 
              </table>
            </div>
        </div>
      );
   

}

export default Axioshttp;

//https://dev.to/abdulbasit313/learn-how-to-create-react-js-table-with-hooks-that-has-delete-functionality-too-2jjb