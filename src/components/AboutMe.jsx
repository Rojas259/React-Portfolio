import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

export default function AboutMe() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={12} md={6}>
                    <Paper>
                        <Box sx={{ p: 2 }}>

                            <Typography variant="h3">About Me</Typography>

                            <Typography variant="h6">Hello, I'm Miguel Rojas
                                Welcome to my Web Development Portfolio!!!! I am currently enrolled in the ASU Coding
                                Bootcamp.
                            </Typography><br></br>
                            <Typography>
                                I am experiences training other people in hands on work for factory workplace and managing inventory for
                                product through remote servers to be log in location updates and E-Mail others to order items for the floor.
                                I have also trained others on setting up pumps for pods on the floor as well as any maintenance on them as well. 
                                I was trained in use on the Swing-Reach and Dock Stocker. I also trained other on forklifts as well. I've had also 
                                helped make SOP's(Standard Operating Procedures) to the Filling Department to be able to have on file to in documents 
                                for training and safety updates for processing. I take part in safety meetings to represent my shift and department
                                to raise concerns for things that need to be repaired or look at for safety reasons. I trained in medical aid if someone
                                was injured on the floor.
                            </Typography><br></br>
                            <Typography>
                                Before working at this job I was working on my Associates in Science and continue working on my Biotechnology. 
                                I was working for 40 to 60 hours a week for work and have class in the afternoons. So, I have experience in working long
                                hours and maintain class work at the sametime. I have also have done community service and help in my religion for programs
                                with Junior Youth and youth programs and projects in my free time. I would read mangas and books for genes of science 
                                fiction, Fantasy, and mostly afterlife/purgatory stories. I also would draw things that would pop up in my head at the time.
                                I would play Video games in my free time to relax after a long week of work and school, if was not going out my friends to
                                play basketball or football. I would also go to the gym to work out and stay in shape. I would also go to the beach to relax    
                                
                            </Typography><br></br>
                            <Typography>
                                Before working at this job I was working on my Associates in Science and continue working on my Biotechnology. 
                                I was working for 40 to 60 hours a week for work and have class in the afternoons. So, I have experience in working long
                                hours and maintain class work at the sametime. I have also have done community service and help in my religion for programs
                                with Junior Youth and youth programs and projects in my free time. I would read mangas and books for genes of science 
                                fiction, Fantasy, and mostly afterlife/purgatory stories. I also would draw things that would pop up in my head at the time.
                                I would play Video games in my free time to relax after a long week of work and school, if was not going out my friends to
                                play basketball or football.                                
                            </Typography>
                        
                        </Box>
                    </Paper>
                </Grid>
                <Grid xs={12} md={6}>
                    <Box
                        sx={{
                            width: 400,
                            height: 400,
                            borderRadius: 1,
                            backgroundImage: `url(Homework\React-Portfolio\Public\image\Profile.png)`,
                            backgroundSize: 'cover',
                        }}
                    >

                    </Box>

                </Grid>
            </Grid>
        </Box>
    )
}
