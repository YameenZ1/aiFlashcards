import Image from "next/image";
import getStripe from "@/utils/get_stripe";
import { Container, AppBar, Button, Box, Toolbar, Typography, Grid } from "@mui/material";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppPageRouteModule } from "next/dist/server/future/route-modules/app-page/module.compiled";
import Head from "next/head"; // Correct import for Head

export default function Home() {
  return(
    <Container maxWidth="100vw">
      <Head>
        <title>Flashcard SaaS</title>
        <meta name="description" content="Create flashcard from your text" />
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{flexgrow: 1}}>
            Flashcard Saas
            </Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in">Login</Button>
            <Button color="inherit" href="/sign-up">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          textAlign: 'center',
          my: 4,
        }}
      >
        <Typography variant="h2">Welcome to Flashcard SaaS</Typography>
        <Typography variant="h5">
          {' '}
          The easiest way to make flashcards from your text
        </Typography>
        <Button variant="contained" color="primary" sx={{mt: 2}}>
          Get Started
        </Button>
      </Box>
      <Box sx={{my: 6}}>
        <Typography variant="h4" components="h2">
          Features
        </Typography>
        <Grid contained spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Easy Text Input</Typography>
            <Typography>
              {' '}
              Simply input your text and let our software do the rest.
              Creating flashcards has never been easier.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Smart Flashcards</Typography>
            <Typography>
              {' '}
              Flashcards generated using the most advanced state of the art
              large-language models.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
          <Typography variant="h6">Accessible Anywhere</Typography>
            <Typography>
              {' '}
              Our flashcards are available to acsess on both PC and mobile.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{my: 6, textAlign: 'center'}}>
        <Typography variant="h4">Pricing</Typography>
        <Grid contained spacing={4}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 3,
                border: '2px solid',
                borderColor: 'grey.300',
                borderRadius: 2, 
              }}
            >
            <Typography variant="h6">Basic</Typography>
            <Typography variant="h6">$5 / month</Typography>
            <Typography>
              {' '}
              Acsess to basic flashcard features and limited storage
            </Typography>
            <Button variant="contained" color="primary" sx={{mt: 2}}>
              CHOOSE BASIC
            </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 3,
                border: '2px solid',
                borderColor: 'grey.300',
                borderRadius: 2, 
              }}
            >
            <Typography variant="h6">Pro</Typography>
            <Typography variant="h6">$10 / month</Typography>
            <Typography>
              {' '}
              Acsess to basic flashcard features and limited storage
            </Typography>
            <Button variant="contained" color="primary" sx={{mt: 2}}>
              CHOOSE PRO
            </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      </Container>
    )
}
