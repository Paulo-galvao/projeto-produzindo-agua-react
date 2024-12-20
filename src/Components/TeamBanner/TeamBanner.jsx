import people from "./people.js"
import "./team.style.css"

export default function TeamBanner() {
  return (
    <>
        <h1 className="team-title">Equipe</h1>
        <div className="team-container">
            {people.map( person => (
                <div className="team-card">
                    <div className="team-img">
                        <img src={person.image} alt={person.name} />

                    </div>
                    <div className="description">
                        <i className="bx bxs-user"></i>
                        <p>{person.name}</p>
                    </div>
                    <div className="description">
                         <i className="bx bxs-graduation"></i>   
                        <p>{person.carrer}</p>
                    </div>
                </div>
            ))}           
        </div>
    </>
  )
}
