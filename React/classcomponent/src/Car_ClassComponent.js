/*
Before React 16.8, Class components were the only way to track state and 
lifecycle on a React component. Function components were considered "state-less".

With the addition of Hooks, Function components are now almost equivalent 
to Class components. The differences are so minor that you will probably never 
need to use a Class component in React.

Even though Function components are preferred, there are no current plans 
on removing Class components from React.
*/
import React from 'react';
class Car extends React.Component {

   //constructor to set initial state using props, if props are set
    constructor(props) {
      super(props); //pass props to base React.component class
      
      //similar to useState hook in functional component
      //need to use this.state as inside class (component)
      this.state = {
        brand: "Ford",
        model:props.model,
        color: "red",
        year: 1964
      };
    }

    //call back function 
    changeColor = (mycolor) => {
       console.log('color to set is '+mycolor);
      //to modify state: instead of setxxx method of useState hook
      this.setState({color: mycolor});
    }

    //write return() function call inside render function
    //The render() method is of course called when a component gets updated,
    // it has to re-render the HTML to the DOM, with the new changes.
    render() {
      return (
        <div>
          
          <h1>My {this.state.brand}</h1>
          <p>
           It is a {this.state.color} {this.state.model} from {this.state.year}.
          </p>

          <button
            type="button"
            onClick={()=>this.changeColor("blue")} //use this 
          >Change color</button>
        </div>
      );
    }
  }
  
  export default Car;