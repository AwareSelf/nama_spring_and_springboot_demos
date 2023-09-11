import logo from './logo.svg';
import './App.css';
import MyForm from './components/MyForm';
import MyForm1 from './components/MyForm1';
import Football from './components/ReactEvent';
import FavoriteColor from './components/StatefulComponent';
import Employee from './components/ParentToChild';
import Employee1 from './components/ChildToParent';
import Employee2 from './components/ChildToParent1';

function App() {
  return (
    <div className="App">
     <Football/> {/* React events */}
     <hr/>
     <FavoriteColor/>  {/* stateful component */}
     <hr/>
     <Employee/> {/* passing data from parent to child component */}
     <hr/>
     <Employee1/> {/* passing data from child to parent component - version1 */}
     <hr/>
     <Employee2/> {/* passing data from child to parent component - version2 */}
     <hr/>
     <MyForm/> 
     <hr/>
     <MyForm1/>
    </div>
  );
}

export default App;
