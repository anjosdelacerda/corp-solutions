import { Box, Button } from '@mui/material';
import { Link } from "react-router-dom";
import logoCorpSolutions from '../../assets/logos/corp-solutions.png';
import FieldText from '../../components/input/fieldText';
import JobCard from '../../components/jobCard/jobCard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Footer from '../../layout/footer/footer';

const Jobs = () => {
    const handleSearch = () => {
        console.log('Pesquisa realizada');
    };

    return (
        <>
        <Box sx={{
            margin: "20px",
            maxWidth: "1920px",
        }}>
            <Box
                display="flex"
                flexWrap="wrap"
                alignItems="center"
                justifyContent="space-between"
                margin="20px"
                marginLeft="10px"
            >
                <Box>
                    <Link to="/">
                        <img src={logoCorpSolutions} alt="Logo da Corp Solutions" height={61} />
                    </Link>
                </Box>
                <Box display="flex" alignItems="center">
                    <FieldText label="Pesquisar..." style={{ width: '400px' }}/>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSearch}
                        style={{ marginLeft: 20 }}
                    >
                        Buscar
                    </Button>
                </Box>
                <Box>
                    <Link to='/login' >
                        <AccountCircleIcon sx={{ mr: 1, fontSize: "40px", color: "#00000040"}} />
                    </Link>
                </Box>
            </Box>
            <Box 
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                margin="20px"
                marginLeft="30px"
            >
                <h1>Vagas</h1>
            </Box>
            <Box 
                sx={{  
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    //width: "100%",//
                    marginLeft:"30px",
                    gap: "60px"
                }}
            >
                <JobCard
                    jobTitle="Desenvolvedor Web"
                    location="São Paulo, SP"
                    totalJobs= "2 vagas"
                    salary="R$ 1.600"
                    accessibily= "PCD"
                />
                <JobCard
                    jobTitle="Designer Gráfico"
                    location="Rio de Janeiro, RJ"
                    totalJobs= "2 vagas"
                    salary="R$ 1.600"
                    accessibily= "PCD"
                />
                <JobCard
                    jobTitle="Designer Gráfico"
                    location="Rio de Janeiro, RJ"
                    totalJobs= "2 vagas"
                    salary="R$ 1.600"
                    accessibily= "PCD"
                />
                <JobCard
                    jobTitle="Desenvolvedor Web"
                    location="São Paulo, SP"
                    totalJobs= "2 vagas"
                    salary="R$ 1.600"
                    accessibily= "PCD"
                />
                <JobCard
                    jobTitle="Designer Gráfico"
                    location="Rio de Janeiro, RJ"
                    totalJobs= "2 vagas"
                    salary="R$ 1.600"
                    accessibily= "PCD"
                />
                <JobCard
                    jobTitle="Desenvolvedor Web"
                    location="São Paulo, SP"
                    totalJobs= "2 vagas"
                    salary="R$ 1.600"
                    accessibily= "PCD"
                />
            
            </Box>
        </Box>
        <Footer />
        </>
    );
};

export default Jobs;
