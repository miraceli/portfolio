import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"
import GradeIcon from '@mui/icons-material/Grade';
import SchoolIcon from '@mui/icons-material/School';

const AboutSection: React.FC = () => {

    const StyledCard = styled(Card)(({ }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        boxShadow: "none",
        border: "none",
    }));

    return (
        <>
            <Container maxWidth="lg">
                <Box id="about" pt={5} mb={3}>
                    <Typography variant="h4" textAlign="center" >About me</Typography>
                </Box>
                <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                    <Grid item xs={9} md={2.5}>
                        <StyledCard variant="outlined">
                            <GradeIcon />
                            <Typography textAlign="center" fontWeight={600}>Experience</Typography>
                            <Typography textAlign="center">6+ years</Typography>
                            <Typography textAlign="center">End-to-End Data Solutions</Typography>
                        </StyledCard>
                    </Grid>
                    <Grid item xs={9} md={2.5}>
                        <StyledCard variant="outlined">
                            <SchoolIcon />
                            <Typography textAlign="center" fontWeight={600}>Education</Typography>
                            <Typography textAlign="center">Master's Degree (in progress)</Typography>
                            <Typography textAlign="center">Applied Computing</Typography>
                        </StyledCard>

                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography>
                        I am a data professional with over six years of experience building end-to-end solutions, spanning engineering, data science, and machine learning. I have worked on data projects across various sectors, from BI and complex integrations to developing predictive models and scalable pipelines.

                        Currently, I am focused on time series forecasting and data imputation techniques in my Master's in Applied Computing, combining academic research with practical experience in data engineering and AI. Throughout my career, I have worked with Python, SQL, NoSQL, MLflow, Airflow, DBT, Docker, and other tools that strengthen robust and efficient solutions.

                        My goal is to create intelligent solutions that bridge engineering and data science, turning information into real impact.
                    </Typography>
                </Box>

            </Container>
        </>
    )
}

export default AboutSection
