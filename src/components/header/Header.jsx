// Image
import logo from '../../../public/assets/logo.svg'; 

// Components
import { ContainerGrid } from "../Container/ContainerGrid";

export function Header() {
    return(
        <header className='py-4 shadow-shadow_2 mb-8 bg-white' >
            <ContainerGrid>
                <img src={logo} alt="Logo"/>
            </ContainerGrid>
        </header>
    )
}
