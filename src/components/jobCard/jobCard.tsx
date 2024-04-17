import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import StarIcon from "@mui/icons-material/Star";
import AccessibleIcon from "@mui/icons-material/Accessible";

interface JobCardProps {
  jobTitle: string;
  location: string;
  totalJobs: string;
  salary: string;
  accessibily: string;
}

const JobCard: React.FC<JobCardProps> = ({
  jobTitle,
  location,
  totalJobs,
  salary,
  accessibily,
}) => {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "580px",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "30px",
        }}
      >
        <Typography variant="h5">{jobTitle}</Typography>
        <Box
          sx={{
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              color: "text.secondary",
            }}
          >
            <LocationOnIcon sx={{ mr: 1, color: "#00000040;" }} />
            {location}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              color: "text.secondary",
            }}
          >
            <WorkIcon sx={{ mr: 1, color: "#00000040;" }} />
            {totalJobs}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              color: "text.secondary",
            }}
          >
            <StarIcon sx={{ mr: 1, color: "#00000040;" }} />
            {salary}
          </Typography>
          {accessibily.length > 0 ? (
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                color: "text.secondary",
              }}
            >
              <AccessibleIcon sx={{ mr: 1, color: "#00000040;" }} />
              {accessibily}
            </Typography>
          ) : (
            <></>
          )}
        </Box>
        <Box
          sx={{
            marginTop: "10px",
            display: "flex",
            gap: "30px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#DAEDFF",
              color: "#1976D2",
              width: "90px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "4px",
              marginTop: "10px",
            }}
          >
            <Typography sx={{ mt: 0.5 }} variant="body2">
              Estágio
            </Typography>
          </Box>
          <Box
            sx={{
              font: "Roboto",
              backgroundColor: "#DAEDFF",
              color: "#1976D2",
              width: "90px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "4px",
              marginTop: "10px",
            }}
          >
            <Typography sx={{ mt: 0.5 }} variant="body2">
              Presencial
            </Typography>
          </Box>
          <Box
            sx={{
              font: "Roboto",
              backgroundColor: "#DAEDFF",
              color: "#1976D2",
              width: "90px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "4px",
              marginTop: "10px",
              padding: "5px",
            }}
          >
            <Typography sx={{ mt: 0.5 }} variant="body2">
              Tecnologia
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "20px",
          }}
        >
          <Typography>
            COMO SERÁ SEU DIA A DIA: Analisar e ajudar a implementar novas
            funcionalidades e melhorias aos projetos em andamento...
          </Typography>
        </Box>
        <Box sx={{ marginTop: 2 }}>
          <Button variant="contained" color="primary" fullWidth>
            Ver Vaga
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default JobCard;
