/*
Just like HTML DOM events, React can perform actions based on user events.

React has the same events as HTML: click, change, mouseover etc.

Adding Events
React events are written in camelCase syntax:

onClick instead of onclick.

React event handlers are written inside curly braces:

onClick={shoot}  instead of onClick="shoot()".
React:
<button onClick={shoot}>Take the Shot!</button>
HTML:
<button onclick="shoot()">Take the Shot!</button>

Passing Arguments
To pass an argument to an event handler, use an arrow function.

React Event Object
Event handlers have access to the React event that triggered the function.

In our example the event is the "click" event.
*/

function Football() {

   const shoot1 = () => { alert('Great Shot!');}
    const shoot2 = (a) => { 
                             alert(a);
                          } 

    const shoot3 = (a, b) => {
        alert('arg1 is:'+a+', event type is:'+b.type);
        /*
        'b' represents the React event that triggered the function,
        in this case the 'click' event
        */
      }
  
    return (
     <>
        <button onClick={shoot1}>Take the shot!</button> <br/>
      
        {/*To pass an argument to an event handler, use an arrow function. */ }
        <button onClick={() => shoot2("Goal!")}>Take the shot!</button> <br/>
      
        {/* Event handlers have access to the React event that triggered the function. */}
        <button onClick={(event) => shoot3("Goal!", event)}>Take the shot!</button> <br/>
      </>
    );
  }
  export default Football;