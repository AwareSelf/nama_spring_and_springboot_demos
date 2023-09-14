/*

This example is coded to demo the need of arrow function in class component.
Note: 'this' is defined and points to component instance in arrow function
whereas its undefined in normal function (written inside class compoent)

for functional components, you don't need to use this reference to access state
due to useState hook's setxxx method.
*/

import React from 'react';
class Foo extends React.Component{
    constructor()
    {
        super();
        this.state={name:'Foo'};
    }
     
    handleClick() {
       //in non-arrow-function 'this' inside class-compoent is undefined
       //so had to use arrow-function when using class-component

        console.log(this); //undefined
        console.log(this.state.name); //cannot read properties of undefined
      }

    handleClick1 = () => {
    //inside class component, 'this' refers to component instance 
    //in arrow function
        console.log(this); 
        console.log(this.state.name); //so state of Foo component is accessible
     }
  
   
    render(){
      return (
        <>
        <h5 style={{textAlign: "left"}}>
        In non-arrow-function 'this' inside class-compoent is undefined <br/>
        so had to use arrow-function when using class-component.
        </h5>
        <button type="button" onClick={this.handleClick}>
          Click Me
        </button>
        <button type="button" onClick={this.handleClick1}>
          Click Me1
        </button>
        </>
      );
    }
  } 
export default Foo;  