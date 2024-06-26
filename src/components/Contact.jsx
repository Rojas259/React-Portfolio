import { useState } from 'react';
import { TextField, Container } from "@mui/material"

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Paper } from "@mui/material";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import SendIcon from '@mui/icons-material/Send';
import { createTheme, ThemeProvider } from '@mui/material';


// This sets the current state of all the forms and the possible errors. 
export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    // This check to see if there is a valid name and email, and sets the name error to true if they are empty or do not match the regEx for validating an email. 
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate name and email
        if (!name) {
            setNameError(true);
        } else {
            setNameError(false);
        }

        if (!validateEmail(email)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }

        // Proceed with form submission if all fields are valid
        if (name && validateEmail(email)) {
            console.log('Form submitted!');
            // Reset form fields
            setName('');
            setEmail('');
            setMessage('');
        }
    };
// Reg ex to validate the email
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div>
            <Paper>
                <Container sx={{ p: 2 }}>

                    <div>
                        <Typography variant="h3" >Contact Me</Typography>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid xs={12} sm={5}>
                            <TextField
                                required
                                id="name outlined-basic"
                                label="Name"
                                variant="outlined"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                error={nameError}
                                // if the nameError is true, it displays, if not ''
                                helperText={nameError ? 'Name is required' : ''}
                            />
                        </Grid>
                        <Grid xs={12} sm={6}>
                            <TextField
                                required
                                id="mail outlined-basic"
                                label="e-mail"
                                variant="outlined"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={emailError}
                                helperText={emailError ? 'Provide a valid e-mail' : ''}
                            />
                            
                        </Grid>
                    </Grid>
                    <Grid>
                        <TextField
                            fullWidth
                            label="Message"
                            id="message outlined-multiline-flexible "
                            multiline
                            maxRows={4}
                            margin="normal"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </Grid>
                    <Grid sx={{ py: 2 }}>

                        <Button type="submit" variant="contained" endIcon={<SendIcon />} sx={{ color: "primary" }}>
                            Send
                        </Button>
                    </Grid>
                    </form>
                </Container>
            </Paper>
        </div>
    )
}
createTheme({
    palette: {
        primary: {
            main: '#f44336',
        },
        secondary: {
            main: '#3f51b5',
        },
    },
});

ThemeProvider({ theme: createTheme() });