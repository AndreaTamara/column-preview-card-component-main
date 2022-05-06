import './components/Card';
import './App.css';
import Card from './components/Card';
import sedanImg from './assets/images/icon-sedans.svg';
import suvImg from './assets/images/icon-suvs.svg';
import luxuryImg from './assets/images/icon-luxury.svg';

function App() {

  const vehicleTypes=[
    {
      image:sedanImg,
      title:"SEDANS",
      text:"Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
    },
     {
       image:suvImg,
       title:"SUVS",
       text:"Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
       },
     {
       image:luxuryImg,
       title:"LUXURY",
       text:"Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
     },  
  ]
  
    
  return (
    <div className="App">

      {vehicleTypes.map((type,index)=>{
        return(
        <Card
        key={type.title}
        imageCard = {type.image}
        titleCard = {type.title}
        textCard = {type.text}
        >
        </Card>
        )
      })}
      
    </div>
  );
}

export default App;
