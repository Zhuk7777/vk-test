import React, { useState } from 'react'
import classes from './VKForm.module.css';

const VKForm = () => {

    const [reservation, setReservation] = useState({
        tower: '',
        floor: '',
        date: '',
        beg_time: '',
        end_time: '',
        comment: '',
    })
    const [error, setError] = useState('')

    const getError = () => {
        if(reservation.tower === '' || reservation.floor === '' || reservation.date === '' || reservation.beg_time === '' || reservation.end_time === '')
            return 'Заполните поля'
        if(reservation.beg_time > reservation.end_time)
            return 'Время указано некорректно'
        return ''     
    }

    const send = () => {
        let error = getError();
        if(error === '')
        {
            console.log(JSON.stringify(reservation))
            setError('')
        }
        else 
            setError(error)
    }

    const clear = () => {
        const emptyReservation = {
            tower: '',
            floor: '',
            date: '',
            beg_time: '',
            end_time: '',
            comment: '',
        }

        setReservation(emptyReservation)
    }


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

        <input className={classes.input} type="date" value={reservation.date} onChange={event => setReservation({...reservation, date: event.target.value})}/>
        <div className={classes.time}>
            <span>Время начала переговоров</span>
            <input className={classes.input} type="time" value={reservation.beg_time} onChange={event => setReservation({...reservation, beg_time: event.target.value})}/>
            <span>Время конца переговоров</span>
            <input className={classes.input} type="time" value={reservation.end_time} onChange={event => setReservation({...reservation, end_time: event.target.value})}/>
        </div>

        <textarea className={classes.comment} rows="5" placeholder='Дополнительная информация' value={reservation.comment} onChange={event => setReservation({...reservation, comment: event.target.value})}></textarea>

        <div className={classes.controlPanel}>
            <button className={classes.btn} onClick={() => send()}>Отправить</button>
            <button className={classes.btn} onClick={() => clear()}>Очистить</button>
        </div>

        <span className={classes.error}>{error}</span>
    </div>
  )
}

export default VKForm