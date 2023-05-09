import React, { useState } from 'react'
import classes from './VKForm.module.css';

const VKForm = () => {

    const [reservation, setReservation] = useState({
        tower: '',
        floor: '',
        date: '',
        comment: '',
    })


  return (
    <div className={classes.form}>

        <select className={classes.select} value={reservation.tower} onChange={event => setReservation({...reservation, tower: event.target.value})}>
            <option disabled value=''>Башня</option>
            <option value='A'>A</option>
            <option value='B'>B</option>
        </select>

        <select className={classes.select} value={reservation.floor} onChange={event => setReservation({...reservation, floor: event.target.value})}>
            <option disabled value=''>Этаж</option>
            {
                Array(25).fill().map((_, idx) => 3 + idx).map((floor, index) =>
                    <option key={index} value={floor}>{floor}</option>
                )
            }
        </select>

        <input className={classes.input} type="date"/>
        <div className={classes.time}>
            <span>Время начала переговоров</span>
            <input className={classes.input} type="time"/>
            <span>Время конца переговоров</span>
            <input className={classes.input} type="time"/>
        </div>

        <textarea className={classes.comment} rows="5" placeholder='Дополнительная информация'></textarea>

        <div className={classes.controlPanel}>
            <button className={classes.btn}>Отправить</button>
            <button className={classes.btn}>Очистить</button>
        </div>

    </div>
  )
}

export default VKForm