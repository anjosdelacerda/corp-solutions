import { useEffect, useState } from "react";
import Footer from "../../layout/footer/footer";
import CakeIcon from '@mui/icons-material/Cake';
import PlaceIcon from '@mui/icons-material/Place';
import AccessibleIcon from '@mui/icons-material/Accessible'; import WcIcon from '@mui/icons-material/Wc';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PeopleIcon from '@mui/icons-material/People';
import { styled } from '@mui/system';
import { Box, Stack, Button } from "@mui/material";
import logoCorpSolutions from "../../assets/logos/corp-solutions.png";
import TextField from '@mui/material/TextField';


import './TalentPool.css'

const Info = styled('p')({
    display: 'flex',
    alignItems: 'center',
    color: 'gray',
    textTransform: 'capitalize',
    '& svg': {
        marginRight: '5px',
    },
});

const CardContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    height: '330px',
    width: '604px',
    border: '1px solid #ccc',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.247)',
    borderRadius: '5px',
    '@media (max-width:600px)': {
        height: '100%',
    },

});

const BotaoCard = styled(Button)({
    marginTop: 'auto',
    width: '100%',
    backgroundColor: 'rgb(25, 118, 210)',
});

const Botao = styled(Button)({
    display: 'block',
    margin: 'auto',
    marginTop: '50px',
    padding: '10px 20px',
    borderColor: 'rgba(33, 150, 243, 0.5)',
    color: 'rgba(33, 150, 243, 1)',

});

const NavBanco = () => {
    return (
        <Box
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent={"space-between"}
            maxWidth={"1280px"}
            paddingTop={"20px"}
            margin={"auto"}
            className="nav-bar"
            zIndex={1}
        >
            <img src={logoCorpSolutions} alt="Logo da Corp Solutions" height={61} />

            <Stack
                direction="row"
                alignItems={"center"}
                justifyContent={"center"}
                flexWrap={"wrap"}
                spacing={0}
                sx={{
                    '@media (max-width:800px)': {
                        marginTop: '20px',
                    },
                }}
            >
                <TextField id="outlined-basic" label="Pesquisar Candidato" variant="outlined" size="small" />
                <Button variant="contained" sx={{ height: '39px' }}>Pesquisar</Button>
            </Stack>
        </Box>
    );
};





type Dado = {
    nome: string;
    idade: number;
    cidade: string;
    deficiencia: string;
    genero: string;
    orientacao: string;
    etnia: string;
    descricao: string;
}

const TalentPool = () => {
    const [dados, setDados] = useState<Dado[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/dados')
            .then(response => response.json())
            .then(data => setDados(data));
    }, []);
    return (
        <div>
            <NavBanco></NavBanco>


            <div>
                <div className="container">
                    <div className="talent-pool">
                        <h1>Banco de Talentos</h1>
                        <p className="p">Conheça alguns dos talentos que estão disponíveis para o mercado de trabalho</p>
                    </div>
                    {dados.map((dado, index) => {
                        const limiteCaracteres = dado.deficiencia ? 150 : 250;

                        return (
                            <CardContainer key={index} className="card">
                                <h2>{dado.nome}</h2>
                                <div className="informacoes">
                                    <Info><CakeIcon /> {dado.idade} anos</Info>
                                    <Info><PlaceIcon /> {dado.cidade}</Info>
                                    {dado.deficiencia ? <Info><AccessibleIcon /> {dado.deficiencia}</Info> : null}  {/*se não tiver deficiência, não exibe*/}
                                    <Info><WcIcon /> {dado.genero}</Info>
                                    <Info><FavoriteIcon /> {dado.orientacao}</Info>
                                    <Info><PeopleIcon /> {dado.etnia}</Info>
                                </div>
                                <p>
                                    {dado.descricao.length > limiteCaracteres
                                        ? `${dado.descricao.substring(0, limiteCaracteres).replace(/\W$/, '')}...`
                                        : dado.descricao
                                    }
                                </p>
                                <BotaoCard variant="contained">Ver Perfil</BotaoCard>
                            </CardContainer>
                        )
                    })}
                </div>
                <div>
                    <Botao variant="outlined">Ver Mais</Botao>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default TalentPool
