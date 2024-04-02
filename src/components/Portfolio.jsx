import { Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProjectData = [
    {
        id: "Cocktail-Compass",
        title: "Cocktail Compass",
        description: "Hmtl, CSS, and two APIs are used to create a website that allows you to search for cocktails by name or ingredient. This project is an exercise in using APIs and dynamically creating elements on our webpage using JavaScript.",
        picture: `/public/images/cocktail-compass.png`,
        githubUrl: "https://github.com/sfmacdonald/Cocktail-Compass.git",
        liveUrl: " https://sfmacdonald.github.io/Cocktail-Compass/",
    },
    {
        id: "Password-Generator",
        title: "Password Generator",
        description: "This project allows you to generate a random password based on the criteria you select. This project is an exercise in using JavaScript to create a random password generator.",
        picture: `/public/images/password-generator.png`,
        githubUrl: "https://github.com/Rojas259/Password-Generator.git",
        liveUrl: "https://rojas259.github.io/Password-Generator/",
    },
    {
        id: "Note-Taker",
        title: "Note Taker",
        description: "This project allows you to write, save, and delete notes.",
        picture: `/public/assets/note-taker.png`,
        githubUrl: "https://github.com/Rojas259/Note-Taker.git",
        liveUrl: "https://note-taker-8-c2b59462ef5a.herokuapp.com",
    },
    {
        id: "Readme-Generator",
        title: "Readme Generator",
        description: "This project allows you to generate a readme file for your project.",
        picture: `/public/images/readme-generator.png`,
        githubUrl: "https://github.com/Rojas259/Professional-README-Generator.git",
    },
    {
        id: "WorkDay-Schedule",
        title: "Work Day Schedule",
        description: "This project allows you to record your schedule for your work day, it saves the events to your localstorage, so you can leave and come back. This project is an exercise in using the Third Party API DayJS, and implementing jQuery and Bootstrap",
        picture: `/public/images/work-day-schedule.png`,
        githubUrl: "https://github.com/Rojas259/Daily-Work-Schedular.git",
        liveUrl: "https://rojas259.github.io/Daily-Work-Schedular/",
    },
    
]
export default function ProjectCard() {
    return (
        <Container>
            <Grid container spacing={2}>
                {ProjectData.map((project) => (
                    <Grid item xs={12} sm={6} md={4} key={project.id}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={project.picture}
                                alt={project.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {project.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" href={project.githubUrl}>GitHub</Button>
                                <Button size="small" href={project.liveUrl}>Live</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}