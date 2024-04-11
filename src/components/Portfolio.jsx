import React from 'react';
import { Container, Paper, Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';


const ProjectData = [
    {
        id: "Cocktail-Compass",
        title: "Cocktail Compass",
        description: "Hmtl, CSS, and two APIs are used to create a website that allows you to search for cocktails by name or ingredient. This project is an exercise in using APIs and dynamically creating elements on our webpage using JavaScript.",
        picture: `/projects/WelcomeToTheCoctailCampass.png`,
        githubUrl: "github.com/sfmacdonald/Cocktail-Compass.git",
        liveUrl: "sfmacdonald.github.io/Cocktail-Compass/",
    },
    {
        id: "Password-Generator",
        title: "Password Generator",
        description: "This project allows you to generate a random password based on the criteria you select. This project is an exercise in using JavaScript to create a random password generator.",
        picture: `/projects/Password-Generator.png`,
        githubUrl: "github.com/Rojas259/Password-Generator.git",
        liveUrl: "rojas259.github.io/Password-Generator/",
    },
    {
        id: "Note-Taker",
        title: "Note Taker",
        description: "This project allows you to write, save, and delete notes.",
        picture: `/projects/Note-Taker.png`,
        githubUrl: "github.com/Rojas259/Note-Taker.git",
        liveUrl: "note-taker-8-c2b59462ef5a.herokuapp.com",
    },
    {
        id: "Readme-Generator",
        title: "Readme Generator",
        description: "This project allows you to generate a readme file for your project.",
        picture: `/projects/README-Generator.png`,
        githubUrl: "github.com/Rojas259/Professional-README-Generator.git",
    },
    {
        id: "WorkDay-Schedule",
        title: "Work Day Schedule",
        description: "This project allows you to record your schedule for your work day, it saves the events to your localstorage, so you can leave and come back. This project is an exercise in using the Third Party API DayJS, and implementing jQuery and Bootstrap",
        picture: `/projects/WorkDaySchedule.png`,
        githubUrl: "github.com/Rojas259/Daily-Work-Schedular.git",
        liveUrl: "rojas259.github.io/Daily-Work-Schedular/",
    },
    
];

export default function ProjectCard() {
    return (
        <Paper>
            <Box sx={{ p: 2 }}>
                <Typography variant="h3">Portfolio</Typography>
                <Container maxWidth="md">
                    <Grid container rowSpacing={1} columnSpacing={2}>
                        {ProjectData.map((project) => (
                            <Grid key={project.id} xs={12} md={6}>

                                <Card sx={{ maxWidth: 345 }}>
                                    {/* Future functionality for adding a link to a project page with more details */}

                                    {/* <CardActionArea>
                                    <Link to={`/portfolio/${project.id}`} style={{ textDecoration: 'none' }}> */}
                                    <CardMedia
                                        sx={{ height: 140 }}
                                        image={project.picture}
                                        title={project.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {project.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {project.description}
                                        </Typography>
                                    </CardContent>
                                    {/* </Link> */}
                                    {/* </CardActionArea> */}
                                    <CardActions>
                                        <Button size="small" href={`https://${project.githubUrl}`} target="_blank">GitHub</Button>
                                        <Button size="small" href={`https://${project.liveUrl}`} target="_blank">Live Application</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </Paper>
    );
}