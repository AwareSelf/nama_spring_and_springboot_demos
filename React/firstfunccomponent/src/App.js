import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Welcome1 from './Welcome1';
import Header from './ComponentLifecycle';
import Header1 from './ComponentLifecycle_Hooks';
import Container from './ComponentLifecycle1';

function App() {
  return (
    <div className="App">
      <Welcome/>
      <hr/>
      <Welcome1 name="namrata" />
      <hr/>
      {/*
      <Header favcol="yellow"/>
      <hr/>
      <Container/>
      <hr/>
      */}
      <Header1 favcol="green"/>
    </div>
  );
}

export default App;
