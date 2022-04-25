import { Link } from 'react-router-dom';
import { HeaderEstils,TopEstils, NavEstils, TituloEstils, EnlacesEstils, ButtonRegistreEstils } from '../Styled';

const Header = () => {
   const nickname= JSON.parse(localStorage.getItem("nickname"));

    return(
        <HeaderEstils>
            <TopEstils>
                <TituloEstils>
                    <h2>STAR WARS</h2>
                    
                </TituloEstils>
            
                <div>
                   {nickname 
                                ?
                                <h2>Usuario: {nickname}</h2>
                                :
                                <div>
                                    <ButtonRegistreEstils>Login</ButtonRegistreEstils>
                                            
                                    <Link to="/registre">
                                    <ButtonRegistreEstils>Register</ButtonRegistreEstils>
                                    </Link> 
                                </div>
                    }
                </div>
            </TopEstils>
            <NavEstils>
                <EnlacesEstils to="/">Home</EnlacesEstils>
                <EnlacesEstils to="/llista_naus">Starships</EnlacesEstils>
            </NavEstils>
        </HeaderEstils>
    )
}
export default Header