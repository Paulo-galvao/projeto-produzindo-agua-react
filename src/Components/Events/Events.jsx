import events from "./events"
import "./events.style.css"

export default function Events() {
  return (
    <div className="banner-container">
        <h2>Participações em eventos</h2>
            <ul className="events">
                {events.map( event => (
                    <a href={event.link}>
                        <li>
                            <i class='bx bx-chevrons-right'></i>
                            {event.title}
                        </li>
                    </a>  
                ))}
            </ul>
    </div>
  )
}
