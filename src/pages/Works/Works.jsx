import Header from "../../Components/Header/Header"
import Events from "../../Components/Events/Events.jsx"
import WorksCard from "../../Components/WorksCard/WorksCard.jsx"
import Footer from "../../Components/Footer/Footer"
import works from "../../Components/WorksCard/works.js"
import Primer from "../../Components/Primer/Primer.jsx"


export default function Works() {
    
    
  return (
    <div>
        <Header />
        <WorksCard works={works} />
        <Events />
        <Primer />
        <Footer />
    </div>
  )
}
