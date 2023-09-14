import './App.css';
import Car from './Car_ClassComponent';
import Car1 from './Car_ClassComponent_Lifecycle';
import Foo from './ClassComponentNeedsArrowFunc';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <Car model='Ecosport' />
       <hr/>   
       <Car1 model='Ecosport' />  */}
       <hr/>
       <Foo/>  {/* explains need of arrow-func in class component */}
      </header>
    </div>
  );
}

export default App;
