import "./footer.style.css"

export default function Footer() {

	const year = new Date().getFullYear();	

    return (
        <footer>
			<div className="footer-column">
				<ul>
					<li>Universidade Estadual de Ponta Grossa
					</li>
					<li>Av. Gal. Carlos Cavalcanti, 4748
					</li>
					<li>Uvaranas, Ponta Grossa - CEP 84030-900
					</li>
					<li>Laboratório de Geografia Física
					</li>
				</ul>
				<ul>
					<li>Bloco L, 2° andar, sala 122 A
					</li>
					<li>GPS: 25°5'23"S 50°6'23"W
					</li>
					<li>Email: lablagef.uepg@gmail.com
					</li>
					<li>Coordenação: Prof. Dra. Maria Ligia Cassol Pinto
					</li>
				</ul>
			</div>
			<p> <span>{year}</span> Projeto Produzindo Água</p>
		</footer>
    )
}
