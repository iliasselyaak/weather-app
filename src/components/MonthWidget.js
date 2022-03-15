import WidgetButton from "./WeatherWidget";

const MonthWidget = () => {
  const month = "January";
  return (
    <div className="monthWidget">
        <Month month={month} />
        <WidgetButton/>
        <WidgetButton/>
        <WidgetButton/>
        <WidgetButton/>

    </div>
  )
}

const Month = ({month}) => {
    return (
        <><h1 className="month">{month}</h1></>
   )
}

export default MonthWidget