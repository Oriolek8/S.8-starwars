import { Link } from 'react-router-dom';
import { HomeEstils} from '../Styled';

import Header from './Header';


const Home = () => {

    return(
        <HomeEstils>
        <Header/>
        <Link to="/llista_naus">
        <button>Bienvenido</button>
        </Link>

        </HomeEstils>
        


    )
}
export default Home