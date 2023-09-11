import { useState } from "react";
function MyFormDropdown() {
    const [myCar, setMyCar] = useState("Volvo");
  
    const handleChange = (event) => {
      setMyCar(event.target.value)
    }

    const handleSubmit = (event) => {
        alert(`you selected car option as ${myCar}`);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <select value={myCar} onChange={handleChange}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select> &nbsp;
        <input type="submit" />
      </form>
    )
  }
  export default MyFormDropdown;