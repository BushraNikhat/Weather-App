import React, { useState} from "react";

import TempCard from "./Components/TempCard";

const App = () => {

// defining a state to store current time ,date and month.
  const [now,setNow]=useState({
    minute:"",
    hour:"",
    date:"",
    month:"",
    period:"",
    dayToday:""
    }
)

// the updateDate function will be called in an interval of 1 second .It is defined to get the current date ,time and month.
  const updateDate=()=>{
          const date=new Date();
          const days=["SUN","MON","TUE","WED","THU","FRI","SAT"]
                let day= days[date.getDay()]

                const months=["JAN","FEB","MAR","APR","MAY","JUNE","JULY","AUG","SEP","OCT","NOV","DEC"]
                let mon=months[date.getMonth()]

                let dateToday=date.getDate()

                let hours=date.getHours()
                let periodNow="AM"
                if(hours>11){
                    periodNow="PM"
                }

                if(hours>12){
                    hours=hours-12

                }

                let min=date.getMinutes()
                if(min<10){
                    min="0"+min
                }

          setNow((prevVal)=>{
              prevVal.minute=min
              prevVal.hour=hours
              prevVal.date=dateToday
              prevVal.month=mon
              prevVal.dayToday=day
              prevVal.period=periodNow

              return{
                  minute:prevVal.minute,
                  hour:prevVal.hour,
                  date:prevVal.date,
                  month: prevVal.month,
                  dayToday:prevVal.dayToday,
                  period:prevVal.period
              }
            })

      }

      setInterval(updateDate, 1000);



 return (
    <>
     <TempCard  now={now}
             
             
          />         
    </>
  );
};
export default App;
