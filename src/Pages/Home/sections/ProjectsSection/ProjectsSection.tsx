import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "Project Exemple",
            subtitle: "Jul 2023 - Dez 2023",
            srcImg: "/src/assets/images/project-trello.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris. Phasellus a ultrices elit. Curabitur ut diam eu orci auctor pretium.",
            technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
            websiteURL: "https://trello.com/",
            codeURL: "https://github.com/",
        },
        {
            title: "Project Exemple",
            subtitle: "Jul 2023 - Dez 2023",
            srcImg: "/src/assets/images/project2-blotting.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris. Phasellus a ultrices elit. Curabitur ut diam eu orci auctor pretium.",
            technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
            websiteURL: "https://trello.com/",
            codeURL: "https://github.com/",
        }
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid item md={6} key={index}>
                            <ProjectCard
                                title={project.title}
                                subtitle={project.subtitle}
                                srcImg={project.srcImg}
                                description={project.description}
                                technologies={project.technologies}
                                websiteURL={project.websiteURL}
                                codeURL={project.codeURL}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection
