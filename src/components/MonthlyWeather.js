import MonthWidget from "./MonthWidget";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css'

const MonthlyWeather = () => {
    const month = "February";
  return (
    <div>
        <SimpleBar style={{ height: '680px',marginTop:"120px"}}>
        {
          <div>
          <MonthWidget/>
          </div>
        }
        </SimpleBar>
    </div>
  )
}


export default MonthlyWeather