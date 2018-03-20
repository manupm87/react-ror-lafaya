import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import InfiniteCalendar from 'react-infinite-calendar'

export default class CLF_Availability extends React.Component {

  locale = {
  blank: 'Aucune date sélectionnée',
  headerFormat: 'dddd, D MMM',
  locale: require('date-fns/locale/es'), // You need to pass in the date-fns locale for the language you want (unless it's EN)
  todayLabel: {
    long: "Hoy",
    short: 'Hoy',
  },
  weekdays: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sab'],
  weekStartsOn: 1, // Start the week on Monday
};

  render() {
    let today = new Date();
    // var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    return (
      <div className="d-flex flex-column">

      <InfiniteCalendar locale={this.locale} min={new Date(2016, 0, 1)} max={new Date(2022, 11, 31)}
      minDate={today}/>

      </div>
    );
  }
}
