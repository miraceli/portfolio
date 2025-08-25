import { Box, Container, Typography, styled } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import CV from "../../../../assets/pdfs/Miraceli_Bonjardim_CV.pdf";

const HeroSection: React.FC = () => {
    const StyledImg = styled("img")(({ theme }) => ({
        width: "180px",
        borderRadius: "50%",
        border: `2px solid ${theme.palette.primary.contrastText}`,
    }));

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        textAlign: "center",
        padding: "100px 20px 60px 20px",
    }));

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = CV;
        link.download = "Miraceli_Bonjardim_CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleEmail = () => {
        const emailAddress = "miraceli@live.com";
        const subject = "Contato via Portfolio";
        const body = "Olá, Miraceli! Vi seu portfólio e gostaria de conversar.";
        window.open(
            `mailto:${emailAddress}?subject=${encodeURIComponent(
                subject
            )}&body=${encodeURIComponent(body)}`
        );
    };

    return (
        <StyledHero>
            <Container maxWidth="md">
                <Box mb={3}>
                    <StyledImg src={Avatar} alt="Miraceli Bonjardim" />
                </Box>
                <Typography
                    variant="h3"
                    color="primary.contrastText"
                    fontWeight={600}
                    mb={1}
                >
                    Miraceli Bonjardim
                </Typography>
                <Typography variant="h5" color="primary.contrastText" mb={1}>
                    Data Analytics | Machine Learning | AI Engineering
                </Typography>

                {/* Skills como texto menor */}
                <Typography
                    variant="subtitle1"
                    color="primary.contrastText"
                    mb={3}
                    sx={{ opacity: 0.8 }}
                >
                    Python • TensorFlow • Scikit-learn • SQL • Docker • MLflow • Data Visualization
                </Typography>

                {/* Botões */}
                <Box display="flex" justifyContent="center" gap={2}>
                    <StyledButton onClick={handleDownload}>
                        <DownloadIcon /> <Typography>Download CV</Typography>
                    </StyledButton>
                    <StyledButton onClick={handleEmail}>
                        <EmailIcon /> <Typography>Contact me</Typography>
                    </StyledButton>
                </Box>
            </Container>
        </StyledHero>
    );
};

export default HeroSection;
