import WeatherButton from "./WeatherWidget";

//MonthWidget component
const MonthWidget = (props) => {
  const {weather} = props;
  return (
    <div className="monthWidget">
        <ThreeMonth weather={weather}/>
        
    </div>
  )
}

//Returns weather widget for 60 days
const ThreeMonth = (props) => {
    const {weather} = props;
    const moment = require('moment');
    var month = moment().add(7,'days').format('MMMM');
    const rows = [];
    rows.push(<h1 className="month">{month}</h1>);
    var j =5;
    for(var i = 7; i<=60;i++){
      if (moment().add(i,'days').format('MMMM') !== month){
        month = moment().add(i,'days').format('MMMM');
        rows.push(<div className="nextMonth"><h1 className="month">{month}</h1></div>);
      }
      j=j+ 1;
      rows.push(<WeatherButton weather={weather} key={j} i={j} day={moment().add(i,'days').format('Do')}/>)
    }
    return <div>{rows}</div>;
}


export default MonthWidget