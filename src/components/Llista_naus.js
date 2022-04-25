import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";
import { LlistaEstils,LinksEstils, BoxLinksEstils,CentradoEstilo, BotoViewEstils} from '../Styled';


const Llista_naus = () => {
    const [llista_naus, setLlista_Naus] = useState([])
    const [pagina, setPagina]= useState(1)
    
    
    let llistat;
    
    useEffect(() => {
        axios
          .get(`https://swapi.dev/api/starships/?page=${pagina}`)
          .then((res) => {
            console.log("res.data.results",res.data.results);
            setLlista_Naus([...llista_naus, ...res.data.results]);

          })
      }, [ pagina]);

       llistat = llista_naus.map((el, id) => 
       
      <BoxLinksEstils  key={id} el={el}>
          <LinksEstils
            to={`/nau_detalls/${el.url.split('/').slice(-2, -1).toString()}/`} 
            key={id} 
            >

            <h2>{el.name}</h2>
            <p>{el.model}</p>
          </LinksEstils>
      </BoxLinksEstils>
       )

      return(
          <LlistaEstils>
              <Header/>
              {llistat}     
           <CentradoEstilo>
                <BotoViewEstils
                  onClick={()=> setPagina(pagina + 1)}
                >VIEW MORE
                </BotoViewEstils>
            </CentradoEstilo>
          </LlistaEstils>
      )
}

export default Llista_naus