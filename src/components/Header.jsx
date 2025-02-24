import logo from '../assets/logo.svg'; // Certifique-se de que o caminho da imagem está correto
import { ContainerGrid } from "./ContainerGrid";

export function Header() {
    return(
        <header className='py-4 shadow-shadow_2 mb-8' >
            <ContainerGrid>
                <img src={logo} alt="Logo"/>
            </ContainerGrid>
        </header>
    )
}
