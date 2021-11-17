import React, {useState, useEffect} from 'react'
import { Card, Button } from "react-bootstrap";
import './home.css'

const Home = () => {

    const [plantData, setPlantData] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/plants")
          .then((res) => res.json())
          .then((data) => setPlantData(data.plants));
    }, [])

    const handleDelete = () => {
        console.log('bye')
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
                  <h4>{plant.plantType}</h4>
                  <p>Needs Water: {plant.needsWater.toString()}</p>
                </Card.Text>
                <Button onClick={handleDelete}>This plant has died</Button>
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
