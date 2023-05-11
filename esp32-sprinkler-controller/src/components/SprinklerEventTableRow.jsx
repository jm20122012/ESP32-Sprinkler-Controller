import React from 'react'

export default function SprinklerEventTableRow(props) {
  return (
    <>
    {
        props.events.map((event, index) => {
            return (
                <tr key={index}>
                    <td className="text-center">{event.weekday}</td>
                    <td className="text-center">{event.startHour + ":" + event.startMinute + " " + event.amPm}</td>
                    <td className="text-center">{event.duration}</td>
                    <td className="text-center">{event.status}</td>
                </tr>
            )
        })
    }
    </>
  )
}
