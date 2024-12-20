import activities from "./activities.js"
import "./work.style.css"

export default function WorkDashboard() {

    const activities2021 = activities.filter( a => a.year === 2021);
    console.log(activities2021);
    

  return (
    <div className="work-dashboard">
        {/* <aside className="work-menu">
            <ul>
                <li>2021</li>
                <li>
                    <ul>
                        {activities2021.map( act => (
                            <li key={act.month}> {act.month} </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </aside> */}
        <div className="activities">
            {activities.map( act => (
                <div key={act.month}>
                    <h3> {act.year} </h3>
                    <ul>
                        <li>{act.month}</li>
                        {act.descript.map( desc => (
                            <li key={desc}> {desc} </li>
                        ))}
                    </ul>

                </div>
            ))}
            <h3></h3>
            <ul></ul>
        </div>
    </div>
  )
}
