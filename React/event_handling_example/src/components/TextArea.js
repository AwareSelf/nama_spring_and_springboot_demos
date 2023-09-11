import { useState } from "react";

function MyTextArea(props) {

    const [textArea,setTextArea] = useState("This is a TextArea");

    const handleChange = (event) => {

        // setTextArea(textArea) //this textArea will not reflect newly edited value
           setTextArea(event.target.value);
    }

    const handleSubmit = (event) => {
        alert(`new textArea value is ${textArea}`);
    }
    return(
        <form onSubmit={handleSubmit}>
            <textarea value={textArea} onChange={handleChange}></textarea>
            <input type="submit" />
        </form>
    );
}

export default MyTextArea;