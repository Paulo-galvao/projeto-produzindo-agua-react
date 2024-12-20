import TeamBanner from "../../Components/TeamBanner/TeamBanner"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import Events from "../../Components/Events/Events.jsx"
import Primer from "../../Components/Primer/Primer.jsx"

export default function Team() {
  return (
    <div>
        <Header />
        <TeamBanner />
        <Events />
        <Primer />
        <Footer />
    </div>
  )
}
