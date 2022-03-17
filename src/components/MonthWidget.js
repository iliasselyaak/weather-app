import WidgetButton from "./WeatherWidget";

const MonthWidget = () => {
  return (
    <div className="monthWidget">
        <ThreeMonth />
        
    </div>
  )
}

const ThreeMonth = () => {
    const moment = require('moment');
    var month = moment().add(7,'days').format('MMMM');
    const rows = [];
    rows.push(<h1 className="month">{month}</h1>);
    for(var i = 7; i<=30;i++){
      if (moment().add(i,'days').format('MMMM') !== month){
        month = moment().add(i,'days').format('MMMM');
        rows.push(<div className="nextMonth"><h1 className="month">{month}</h1></div>);
      }
      rows.push(<WidgetButton day={moment().add(i,'days').format('Do')}/>)
    }
    return <div>{rows}</div>;
}

{/*}<><h1 className="month">{month}</h1>
        <WidgetButton/>
        </>{*/}

export default MonthWidget