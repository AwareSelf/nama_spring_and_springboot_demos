
import './Emparr.css';
function Emparr()
{
   let emparr = [{empid:1,empname:'ram',empsal:2000},
                 {empid:2,empname:'shyam',empsal:3000}];

        

    return(
     <>
      <ul>
        {emparr.map(
            e=><li key={e.empid}>{e.empid}:{e.empname},{e.empsal}</li>
        )}

      </ul>
   <hr/>
   <table className="center">
    <thead>
        <tr>
            <th>empid</th>
            <th>empname</th>
            <th>empsal</th>
        </tr>
    </thead>
     <tbody>
      
       {emparr.map(
           e=><tr key={e.empid}><td>{e.empid}</td>
                  <td>{e.empname}</td>
                  <td>{e.empsal}</td></tr>
       )}

     </tbody>
     </table>
    
    </>


    );
}

export default Emparr;