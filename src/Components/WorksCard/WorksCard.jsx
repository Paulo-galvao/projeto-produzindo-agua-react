import "./works.style.css"

export default function WorksCard(props) {
    
    return (
        <div className="works-container">
        {props.works.map( work => (
            <div className="works-card">
                <h3>{work.month}</h3>
                <h4>{work.year}</h4>
                <ul>
                    {work.tasks.map( task => (
                        <li>
                            <i class='bx bx-chevrons-right'></i>
                            {task}
                        </li>    
                    ) )}
                </ul>
            </div>
        ))}

        </div>
    )
}
