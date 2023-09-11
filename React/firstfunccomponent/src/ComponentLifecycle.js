
/*
Lifecycle of Components
https://www.w3schools.com/react/react_lifecycle.asp

Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

The three phases are: Mounting, Updating, and Unmounting.
A component's lifecycle has three main phases: the Mounting Phase, the Updating Phase, 
and the Unmounting Phase.

The Mounting Phase begins when a component is first created and inserted into the DOM. 
The Updating Phase occurs when a component's state or props change. 
And the Unmounting Phase occurs when a component is removed from the DOM.

https://retool.com/blog/the-react-lifecycle-methods-and-hooks-explained/#:~:text=The%20two%20most%20commonly%20used,componentDidMount%20%2C%20componentDidUpdate%20%2C%20and%20componentWillUnmount%20.
*/

/*
Mounting
Mounting means putting elements into the DOM.

React has four built-in methods that gets called, in this order, when mounting a component:

1) constructor()
2) getDerivedStateFromProps()
3) render()
4) componentDidMount()

The render() method is required and will always be called, the others are optional and will 
be called if you define them.
*/

import React from 'react';
class Header extends React.Component {

    /*
    The constructor method is called, by React, every time you make a component
    and it is natural place to setup the initial state
    */
    constructor(props) {
      super(props);
      console.log('constructor called');
      this.state = {favoritecolor: "red"};
    }

    /*
     The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM.
     This is the natural place to set the state object based on the initial props.
    */
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps called');
        return {favoritecolor: props.favcol };
      }

      changeColor = () => {
        this.setState({favoritecolor: "blue"});
      }
   
  
    //The render() method is required, and is the method that actually outputs the HTML to the DOM.
    render() {
        console.log('render called');
      return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="mydiv"></div>
        <button type="button" onClick={this.changeColor}>Change color</button>
        </div>
      );
    }

    /*
    The componentDidMount() method is called after the component is rendered.
    This is where you run statements that requires that the component is already placed in the DOM.
    */
    componentDidMount() {
       console.log('component did mount called');
        setTimeout(() => {
          this.setState({favoritecolor: "yellow"})
        }, 1000);
      }

    componentDidUpdate() {
        console.log('componentDidUpdate called..');
        document.getElementById("mydiv").innerHTML =
        "The updated favorite is " + this.state.favoritecolor;
      }
  }
  export default Header;