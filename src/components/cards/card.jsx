import "./card.css";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
AOS.init();
export default function Card(props) {
  const todayDate = new Date();
  const currnetYear = todayDate.getFullYear();
  const currentMonth = todayDate.getMonth() + 1;
  const currentDate = todayDate.getDate();
  // if(currentMonth==props.item.dob.month && currentDate == props.item.dob.date){
  //     console.log("Birthday");
  //     }
  //     else{
  //         console.log("No Birthday");
  //     }

  let age = currnetYear - props.item.dob.year;

  let month = "";
  let day = "";

  if (currentMonth >= props.item.dob.month) {
    month = currentMonth - props.item.dob.month;
  } else {
    age--;
    month = 12 + currentMonth - props.item.dob.month;
  }
  if (currentDate >= props.item.dob.date) {
    day = currentDate - props.item.dob.date;
  } else {
    month--;
    day = 31 + currentDate - props.item.dob.date;
  }

  let daysOnEarth = age*365 + month*31 + day

  return (
    <div
      data-aos="zoom-in"
      className={
        currentMonth == props.item.dob.month &&
        currentDate == props.item.dob.date
          ? "card hbd"
          : "card"
      }
    >
      <img
        loading="lazy"
        alt={props.item.name}
        src={
          props.item.image
            ? `../src/assets/${props.item.image}`
            : props.item.imageurl
        }
      />

      <div className="card-detail">
        <p className="name">{props.item.name}</p>
        <p className="favfood">{props.item.favfood}</p>
        <p className="interest">{props.item.interest}</p>
        <p className="age">
          {age} Years{" "}
          {currentMonth == props.item.dob.month &&
          currentDate == props.item.dob.date
            ? "🎂"
            : ""}
        </p>
        <div className="month-day">
          <span>
            {month > 1
              ? `${month} Months `
              : month == 1
              ? `${month} Month `
              : ``}
          </span>
          <span>{day > 1 ? `${day} Days` : day == 1 ? `${day} Day` : ``}</span>
          <p>{daysOnEarth} days on 🌍</p>
          <span className="bdaymsg">
            {currentMonth == props.item.dob.month &&
            currentDate == props.item.dob.date
              ? "Happy Bithday To You💖"
              : ""}
          </span>
        </div>
      </div>
    </div>
  );
}
