import styled from 'styled-components';
import { Link } from 'react-router-dom';

/*HEADER*/ 
export const HeaderEstils = styled.div`
    height: 200px;
    background-color: black;
    color: white;
    text-align:center;
`;

export const TopEstils = styled.div`
    display:flex;
    justify-content:center;
`;

export const TituloEstils = styled.div`
   width:80%;
   height:150px;
   font-size:40px; 
`;

export const ButtonRegistreEstils = styled.button`
   width:100px;
   margin-top:15px;
   font-size:20px;
`;

export const NavEstils = styled.div`
   
   height:auto;
   border-top:1px solid grey;
   border-bottom:1px solid grey;
   font-size:25px
   display:flex;
   justify-content: space-evenly;
   align-items: center;
   font-size:25px;
   padding-bottom: 10px;
   
   & a:hover {
    color: grey;
    cursor: pointer;
}
`;

export const EnlacesEstils = styled(Link)`
   color:white;
   
   margin-left:7px;
   font-size: 25px;
   text-decoration:none;
`;

/*LLista Naus*/
export const LlistaEstils = styled.div`
   height: auto;
    background-color: black;
    color: white;
    
`;

export const LinksEstils = styled(Link)`
   color:white;
   background-color: grey;
   text-decoration:none;
   text-align:left;
`;

export const BoxLinksEstils = styled.div`
   width:350px;
   background-color:#332828;
   margin:0 auto;

   & a:hover {
      color: yellow;
      cursor: pointer;
`;

export const BotoViewEstils = styled.button`
   width:100px;
   height:40px;
   background-color: yellow;
   margin-top:30px;
   text-align:center;
   
`;

export const CentradoEstilo = styled.div`
   width:100%;
   height:100px;
   display:flex;
   justify-content:center;
   
`;

/*Nau Detalls */
export const NauDetallsEstils = styled.div`
   width:100%;
   height: 800px;
    background-color: black;
    text-align:center;
   
   
`;

export const ImgEstils = styled.img`
   width:300px;
   height:150px;
   margin-top:3px;
   border:1px solid white;
   border-radius:2px;
   
`;

export const ListaDetallesEstils = styled.div`
   width:100%;
   margin-top:15px;
   display:flex;
   flex-wrap: wrap;

`;
export const NomEstil = styled.h2`
   width:40%;
   height:3px;
   color:white;
   

`;
export const DetallsEstils = styled.p`
   width:40%;
   height:3px;
   color:grey;
   line-height:3px;
`;

/*Home */
export const HomeEstils = styled.div`
   width:100%;
   height:900px;
   background-color: black;

`;
/*Register */
export const RegisterEstils = styled.div`
   width:100%;
   height:900px;
   background-color: black;
   color:white;
   

`;
export const FormEstils = styled.form`
   height:500px;
   display:flex;
   flex-direction: column;
   align-items:center;
   
`;

export const InputEstils = styled.input`
   width:200px;
   margin-bottom:6px;
   
`;

export const TextoEstilo = styled.h2`
color:yellow;
text-align:center;
`;
