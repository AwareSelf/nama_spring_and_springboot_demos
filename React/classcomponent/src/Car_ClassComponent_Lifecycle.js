/*
Lifecycle of Components
Each component in React has a lifecycle which you can monitor and 
manipulate during its three main phases.

The three phases are: Mounting, Updating, and Unmounting.
Phase 1: Mounting
Mounting means putting elements into the DOM.
React has four built-in methods that gets called, in this order, 
when mounting a component:
1) constructor()
2) getDerivedStateFromProps() -- very rarely overriden
3) render() -- always required and called in class component
4) componentDidMount()
The render() method is required and will always be called, 
the others are optional and will be called if you define them.

Phase 2:Updating
The next phase in the lifecycle is when a component is updated.
A component is updated whenever there is a change in the component's 
state or props.

React has five built-in methods that gets called 
(Refer for all method names:https://www.w3schools.com/react/react_class.asp), 
out of which render() is mandatory to use and will aslways be called, others 
are optional.
The most common method that's overriden is 
componentDidUpdate

Phase 3:
Unmounting:The next phase in the lifecycle is when a component is removed 
from the DOM, or unmounting as React likes to call it.
React has only one built-in method that gets called when a component 
is unmounted:
componentWillUnmount()
*/
import React from 'react';
class Car1 extends React.Component {

   //constructor to set initial state using props, if props are set
    constructor(props) {
      super(props); //pass props to base React.component class
      console.log('car constructor called');
      
      //similar to useState hook in functional component
      //need to use this.state as inside class (component)
      this.state = {
        brand: "Ford",
        model:props.model,
        color: "red",
        year: 1964,
        carengine:true
      };
    }

    //call back function 
    changeColor = (mycolor) => {
      console.log('color to set is '+mycolor);
      //to modify state: instead of setxxx method of useState hook
      this.setState({color: mycolor});
    }
    
    //this will unmount carengine child component from car 
    removeCarengine = () => {
      this.setState({carengine: false});
    }

    componentDidMount()
    {
        console.log('car component did mount..');
    }

    componentDidUpdate()
    {
        console.log('car component did update...');
    }
  
    //write return() function call inside render function
    render() {

      let engine;
      if (this.state.carengine) {
              engine = <CarEngine />;
         };

      return (
        <>
         <div>
          {engine}
          <button type="button" onClick={this.removeCarengine}>Remove car-engine</button>
         </div>
         <hr/>
         <div>
            <h1>My {this.state.brand}</h1>
            <p>It is a {this.state.color} {this.state.model} <br/>
                from {this.state.year}.
            </p>
            <button type="button" 
                    onClick={()=>this.changeColor("blue")} //use this 
             >Change color</button>
          </div>
        </>
      );
    }
  }
  
  export default Car1;

  class CarEngine extends React.Component {

    componentDidMount() {
        console.log('carengine component did mount..');
    }

    componentDidUpdate() {
      console.log('carengine component did update...');
    }

    componentWillUnmount() {
       console.log('carengine is about to be unmounted.');
    }
    render() {
      return (
        <h3>car engine is working!</h3>
      );
    }
  }