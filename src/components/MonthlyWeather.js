import MonthWidget from "./MonthWidget";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css'

//MonthlyWeather component
const MonthlyWeather = (props) => {
  const {weather} = props;
  return (
    <div>
        <SimpleBar style={{ height: '680px',marginTop:"120px"}}>
        {
          <div>
          <MonthWidget weather={weather}/>
          </div>
        }
        </SimpleBar>
    </div>
  )
}


export default MonthlyWeather