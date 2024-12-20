import "./primer.style.css";

export default function Primer() {
  return (
    <div className="primer-card">
        <h2>Acesse nossa cartilha digital!</h2>
        <a href="/home/cartilha.pdf">
            <img style={{maxWidth: 200}} src="/home/ebook.png" alt="" />
        </a>
    </div>
  )
}
