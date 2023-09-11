
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
import { useState,useEffect } from "react";
function Header1(props)  {

   const [favoritecolor,setFavoritecolor] = useState("red");
  

  //   setFavoritecolor(props.favcolor);

   const changeColor = () => {
        console.log('change color called');
        setFavoritecolor("blue");
      }
   
      useEffect( ()=>{
        console.log(`useEffect hook called,
        as component rendered first time : ${favoritecolor}`);
        setFavoritecolor(props.favcol);
   
        setTimeout(() => {
             console.log('changing state from timeout callback:');
           setFavoritecolor("yellow");
         }, 6000)  
       },[]); 
  
    
      return (
        <div>
             <h1>My Favorite Color is {favoritecolor}</h1>
             <div id="mydiv"></div>
             <button type="button" onClick={changeColor}>Change color</button>
        </div>
      );
    

  }
  export default Header1;
  //https://www.datainfinities.com/20/too-many-re-renders-react-limits-the-number-of-renders-to-prevent-an-infinite-loop#:~:text=Conclusion-,The%20React%20error%20%22Too%20many%20re%2Drenders.,put%20state%20changes%20inside%20it.