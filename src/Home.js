import React, {useState, useEffect} from 'react'
import {Navigate} from 'react-router-dom'
import { Card, Button } from "react-bootstrap";
import './home.css'

const Home = () => {

    const [plantData, setPlantData] = useState([])

    const handleDelete = (id) => {
          fetch(`http://localhost:4000/plants/${id}`, {
            method: "DELETE",
          }).then((data) => makeApiCall());
        };

    useEffect(() => {
        makeApiCall()
    }, [])

    const makeApiCall = () => {
        fetch("http://localhost:4000/plants")
          .then((res) => res.json())
          .then((data) => setPlantData(data.plants));
    }


    const plants = plantData.map((plant) => {
        return (
          <div>
            <Card className="plantcards" style={{ width: "18rem" }}>
              <Card.Img
                className="plantimg"
                variant="top"
                src={plant.imageUrl}
              />
              <Card.Body>
                <Card.Title>
                  <h3>{plant.plantName}</h3>
                </Card.Title>
                <Card.Text>
                  {plant.plantType} <br />
                  Needs Water: {plant.needsWater.toString()}
                </Card.Text>
                <Button onClick={() => handleDelete(plant._id)}>This plant has died</Button>
              </Card.Body>
            </Card>
          </div>
        );
    })
  return (
      <div className='plants'>
          {plants}
      </div>
  )
};

export default Home;
