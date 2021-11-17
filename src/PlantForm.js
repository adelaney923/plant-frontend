import React, {useState} from 'react'
import {Navigate} from 'react-router-dom'


const PlantForm = () => {
    const [plant, setPlant] = useState({plantName: '', plantType: '', imageUrl: '', needsWater: ''})
    const [redirect, setRedirect] = useState(false)

    const handleChange = (event) => {
      const value = event.target.value;
      const name = event.target.name;
      const checked = event.target.checked
      //make a copy of current state
      const copy = Object.assign({}, plant);
      //update 1 of that copys prperties
      if (name === 'needsWater') {
          copy[name] = checked
      }
      else {
      copy[name] = value
      }
    //   copy[needsWater] = checked
      //save copy as new state
      setPlant(copy);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(event)
      console.log("submitted");
      fetch("http://localhost:4000/plants", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(plant),
      }).then((data) => setRedirect(true));
    };

     if (redirect) {
        return (<Navigate to='/' />)
    }
    else {

    return (
      <div>
        <h1>Add Your Plant!</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            name="plantName"
            value={plant.plantName}
          />
          <input
            onChange={handleChange}
            type="text"
            name="plantType"
            value={plant.plantType}
          />
          <input
            onChange={handleChange}
            type="text"
            name="imageUrl"
            value={plant.imageUrl}
          />
          <input type="checkbox" name="needsWater" onChange={handleChange}/>
          <button type="submit">Save</button>
        </form>
      </div>
    );
    }
}

export default PlantForm