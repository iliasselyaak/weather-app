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

//Suggestion components
const Suggestion = (props) => {
  const {weather} = props;
  const moment = require('moment');
  const day = moment().format('Do [of] MMMM YYYY');
  const Description = `${weather?.list[0]?.weather[0]?.main}`
  return (
    <div>
      <Menu/>
      <Heading day={day}/>
      <rect className="suggestionRect"/>
      <Icon description = {Description} />
      <Temperature weather={weather}/>
      <Good description={Description}/>
      <Normal description={Description}/>
      <Bad description={Description}/>
      
    </div>
  )
}

//Weather icons
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

//Heading with logo, title and date
const Heading = ({day}) => {
  return(
  <>
  <img src={logo} height="38" width="36" className="logo-hourly"/>
  <h1 className='hourly-titleD'> Suggestion of the Day</h1>
  <h3 className='hourly-date'>{day}</h3>
  </>
  )
}

//Temperature with description
const Temperature = ({weather}) => {
  return(
    <div className="descTemperature">
      <h3>{`${Math.floor(weather?.list[0]?.main?.temp_max - 273)}°C`}</h3>
      <h3>{`${weather?.list[0]?.weather[0]?.description}`}</h3>
    </div>
  )
}

//Return good crops to plant depending on the weather
const Good = ({description}) =>{
  var goodCrops = "";
  if (description === "Thunderstorm"){
    goodCrops=" Cucumber, Chinese Cabbage.";
  }
  else if (description === "Drizzle" || description === "Rain"){
    goodCrops="Bamboo shoots, Chaya, Cucumber, Chinese Cabbage, Eggplant.";
  } 
  else if (description === "Snow"){
    goodCrops="Parsnips, Brussels, Turnips.";
  }
  else if (description === "Mist" || description === "Smoke" || description === "Dust" || description === "Fog" || description === "Ash" || description === "Squall" || description === "Tornado"){
    goodCrops="Green Peas, Broad Beans, Spinach, Radish.";
  } 
  else if (description === "Clear"){
    goodCrops="Potatoes, Tomatoes, Beans, Cauliflower,Cabbage, Pumpkin, Lettuce.";
  }
  else if (description === "Clouds"){
    goodCrops="Tomatoes, Carrots, Potatoes, Onions, Radish.";
  }
  else{
    goodCrops="Unknown.";
  }
  return(
  <div className="good">
    <img src={good} height="50" width="50"/>
    <h2>Good condition for</h2>
    <h3>{goodCrops}</h3>

  </div>
  )
}

//Return normal crops to plant depending on the weather
const Normal = ({description}) =>{
  var normalCrops = "";
  if (description === "Thunderstorm"){
    normalCrops="Eggplant";
  }
  else if (description === "Drizzle" || description === "Rain"){
    normalCrops="Cowpea, Leaf Pepper, Long Bean, Spinach, Sweet Potatoe.";
  } 
  else if (description === "Snow"){
    normalCrops="Onions, Carrots.";
  }
  else if (description === "Mist" || description === "Smoke" || description === "Dust" || description === "Fog" || description === "Ash" || description === "Squall" || description === "Tornado"){
    normalCrops="Turnip, Onions, Garlic.";
  } 
  else if (description === "Clear"){
    normalCrops="Rice, Wheat, Millet, Oats, Corn, Soy Bean, Mushrooms, Kale.";
  }
  else if (description === "Clouds"){
    normalCrops="Watermelon, Pumpkin, Squash.";
  }
  else{
    normalCrops="Unknown.";
  }
  return(
    <div className="normal">
      <img src={normal} height="40" width="40"/>
      <h2>Normal condition for</h2>
      <h3>{normalCrops}</h3>
    </div>
  )
}

//Return bad crops to plant depending on the weather
const Bad = ({description}) =>{
  var badCrops = "";
  if (description === "Thunderstorm"){
    badCrops="Bananas, Lettuce, Tomatoes, Apples.";
  }
  else if (description === "Drizzle" || description === "Rain"){
    badCrops="Lettuce, Tomatoes, Carrot, Onions.";
  } 
  else if (description === "Snow"){
    badCrops="Oranges, Apples, Pumpkin, Tomatoes.";
  }
  else if (description === "Mist" || description === "Smoke" || description === "Dust" || description === "Fog" || description === "Ash" || description === "Squall" || description === "Tornado"){
    badCrops="Tomatoes, Cauliflower, Cabbage.";
  } 
  else if (description === "Clear"){
    badCrops="Tea, Coffee, Cilantro.";
  }
  else if (description === "Clouds"){
    badCrops="Sunflowers, Peaches, Bananas, Apples.";
  }
  else{
    badCrops="Unknown.";
  }
  return(
    <div className="bad">
      <img src={bad} height="50" width="50"/>
      <h2>Bad condition for</h2>
      <h3>{badCrops}</h3>
    </div>
  )
}



export default Suggestion