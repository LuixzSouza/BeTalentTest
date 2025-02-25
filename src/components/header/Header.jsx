// Components
import { ContainerGrid } from "../Container/ContainerGrid";

export function Header() {
    return(
        <header className='py-4 shadow-shadow_2 mb-8 bg-white' >
            <ContainerGrid>
                <img src={"https://betalentluixz.netlify.app/assets/logo.svg"} alt="Logo"/>
            </ContainerGrid>
        </header>
    )
}
