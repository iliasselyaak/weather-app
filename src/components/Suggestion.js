import logo from "../logo.png";
import Menu from "./Menu";
import Sunny from "./../Images/SunnyWidget.PNG";
import Snowy from "./../Images/SnowyWidget.PNG";
import Rainy from "./../Images/RainyWidget.PNG";
import Cloudy from "./../Images/CloudyWidget.PNG";
import ThunderStorm from "./../Images/ThunderstormWidget.PNG";
import Mist from "./../Images/MistWidget.png";
import good from "./../Images/good.png";
import normal from "./../Images/normal.png";
import bad from "./../Images/bad.png";


const Suggestion = () => {
  const day="19th of February 2022"
  const Description = "Clouds"
  return (
    <div>
      <Menu/>
      <Heading day={day}/>
      <rect className="suggestionRect"/>
      <Icon description = {Description} />
      <Temperature />
      <Good/>
      <Normal/>
      <Bad/>
      
    </div>
  )
}

const Icon = ({description}) => {
  if (description === "Thunderstorm"){
    return (<img src={ThunderStorm} height = "21" width = "21" className = "DescImageWidget"/>)   
  }
  else if (description === "Drizzle" || description === "Rain"){
      return (<img src={Rainy} height = "21" width = "21" className = "DescImageWidget"/>)
  } 
  else if (description === "Snow"){
      return (<img src={Snowy} height = "21" width = "21" className = "DescImageWidget"/>)
  }
  else if (description === "Mist" || description === "Smoke" || description === "Dust" || description === "Fog" || description === "Ash" || description === "Squall" || description === "Tornado"){
      return (<img src={Mist} height = "21" width = "21" className = "DescImageWidget"/>)
  } 
  else if (description === "Clear"){
      return (<img src={Sunny} height = "21" width = "21" className = "DescImageWidget"/>)
  }
  else if (description === "Clouds"){
      return (<img src={Cloudy} height = "21" width = "21" className = "DescImageWidget"/>)
  }
  else{
      return (<></>)
  }
}

const Heading = ({day}) => {
  return(
  <>
  <img src={logo} height="38" width="36" className="logo-hourly"/>
  <h1 className='hourly-titleD'> Suggestion of the Day</h1>
  <h3 className='hourly-date'>{day}</h3>
  </>
  )
}
const Temperature = () => {
  return(
    <div className="descTemperature">
      <h3>13°C</h3>
      <h3>Clear</h3>
    </div>
  )
}

const Good = () =>{
  return(
  <div className="good">
    <img src={good} height="50" width="50"/>
    <h2>Good condition for</h2>
    <h3>...</h3>

  </div>
  )
}

const Normal = () =>{
  return(
    <div className="normal">
      <img src={normal} height="40" width="40"/>
      <h2>Normal condition for</h2>
      <h3>...</h3>
    </div>
  )
}

const Bad = () =>{
  return(
    <div className="bad">
      <img src={bad} height="50" width="50"/>
      <h2>Bad condition for</h2>
      <h3>...</h3>
    </div>
  )
}



export default Suggestion