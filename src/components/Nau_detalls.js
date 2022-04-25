import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { NauDetallsEstils, ImgEstils,ListaDetallesEstils,NomEstil, DetallsEstils} from '../Styled';
import naveImg from "../img/naveImg.jpg"
import Header from "./Header";

const Nau_detalls = () => {
    const [nau, setNau] = useState({})
    const { id } = useParams();


useEffect(() => {
    fetch(`https://swapi.dev/api/starships/${id}/`) 
    .then(res => res.json()) 
    .then((nau) => setNau(nau)); 
  }, [id]);


  const fotoNaveDetallada= `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
    
    return(
        <div>
            <Header/>
            <NauDetallsEstils>
            <ImgEstils src={(fotoNaveDetallada || naveImg )} alt="La imagen no existe"/>
            <NomEstil>{nau.name}</NomEstil>
            <ListaDetallesEstils>
                <DetallsEstils>Model: {nau.model}</DetallsEstils>
                <DetallsEstils>Cost: {nau.cost_in_credits}</DetallsEstils>
                <DetallsEstils>Capacity: {nau.cargo_capacity}</DetallsEstils>
                <DetallsEstils>Length: {nau.length}</DetallsEstils>
                <DetallsEstils>Max Speed: {nau.max_atmosphering_speed}</DetallsEstils>
                <DetallsEstils>Crew: {nau.crew}</DetallsEstils>
                <DetallsEstils>Consumables: {nau.consumables}</DetallsEstils>
                <DetallsEstils>Manufacturer: {nau.manufacturer}</DetallsEstils>


            </ListaDetallesEstils>
            </NauDetallsEstils>
        </div>
    )

}

export default Nau_detalls 