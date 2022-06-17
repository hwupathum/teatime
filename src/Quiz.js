import React from "react";
import { Grid, Button, Typography } from "@mui/material";
import Countdown from 'react-countdown';

const answers = {
    "Singers": [
        "/singers/adamlevine.webp",
        "/singers/taylor-swift.jpeg",
        "/singers/john-legend.jpeg",
        "/singers/elvis-presley.jpeg",
        "/singers/pitbull.jpeg",
        "/singers/ed-sheeran.jpeg",
        "/singers/adele.jpeg",
        "/singers/beyonce.jpg"
    ],
    "Scientists": [
        "scientists/Alan Turing.jpg",
        "scientists/Charles Darwin.jpeg",
        "scientists/Einstein.jpeg",
        "scientists/Hawking.jpg",
        "scientists/Henry Ford.jpg",
        "scientists/Marie Curie.jpg",
        "scientists/Nikola Tesla.jpg",
        "scientists/Thomal Edison.jpeg"
    ],
    "Actors": [
      "/actors/Alexandra Daddario.jpg", 
      "/actors/Anne Hathaway.jpg", 
      "/actors/Blake Lively.jpg",
      "/actors/Daniel Radcliffe.jpg", 
      "/actors/Leonardo DiCaprio.jpg", 
      "/actors/Rachel McAdams.jpg", 
      "/actors/Tom Cruise.jpg",
    "/actors/Will Smith.jpg"
    ],
    "Sportperson": [
        "/sportspeople/Critiano Ronaldo.jpeg",
        "/sportspeople/Usain Bolt.jpeg",
        "/sportspeople/Dan Carter.jpeg",
        "/sportspeople/Kane Williamson.jpeg",
        "/sportspeople/LeBron James.jpeg",
        "/sportspeople/Lewis Hamilton.webp",
        "/sportspeople/Michael Phelps.webp",
        "/sportspeople/Serena Williams.webp",
    ],
    "Politicians": [
        "/politicians/angela-merkel.jpg",
        "/politicians/anura-kumara.jpg",
        "/politicians/gotabaya-rajapaksa.jpg",
        "/politicians/jacinda-ardern.jpeg",
        "/politicians/mahinda-rajapaksa.jpg",
        "/politicians/maithripala-sirisena.jpg",
        "/politicians/vasudeva-nanayakkara.jpg",
        "/politicians/vladimir-putin.jpg",
    ],
    "Animals": ["/animals/hyena.jpeg", "/animals/llama.jpeg", "/animals/redpanda.webp", "/animals/sloth.jpeg", "/animals/jackal.jpeg", "/animals/racoon.jpeg", "/animals/gorilla.jpeg", "/animals/guineapig.jpeg",]
}

const cropped = {
    "Singers": [
        "/singers/cropped/adamlevine.png",
        "/singers/cropped/taylor-swift-cropped.png",
        "/singers/cropped/john-legend-cropped.png",
        "/singers/cropped/elvis-presley-cropped-lanczos3.jpg",
        "/singers/cropped/pitbull-cropped.png",
        "/singers/cropped/ed-sheeran-cropped.png",
        "/singers/cropped/adele-cropped.png",
        "/singers/cropped/beyonce-cropped.png"
    ],
    "Scientists": [
        "scientists/cropped/Alan Turing.jpg",
        "scientists/cropped/Charles Darwin.jpeg",
        "scientists/cropped/Einstein.jpeg",
        "scientists/cropped/Hawking.jpg",
        "scientists/cropped/Henry Ford.jpg",
        "scientists/cropped/Marie Curie.jpg",
        "scientists/cropped/Nikola Tesla.jpg",
        "scientists/cropped/Thomal Edison.jpeg"
    ],
    "Actors": [
      "/actors/cropped/Alexandra Daddario.jpg",
      "/actors/cropped/Anne Hathaway.jpg",
      "/actors/cropped/Blake Lively.jpg",
      "/actors/cropped/Daniel Radcliffe.jpg", 
      "/actors/cropped/Leonardo DiCaprio.jpg", 
      "/actors/cropped/Rachel McAdams.jpg", 
      "/actors/cropped/Tom Cruise.jpg", 
      "/actors/cropped/Will Smith.jpg"
    ],
    "Sportperson": [
        "/sportspeople/cropped/Critiano Ronaldo.jpeg",
        "/sportspeople/cropped/Usain Bolt.jpeg",
        "/sportspeople/cropped/Dan Carter.jpeg",
        "/sportspeople/cropped/Kane Williamson.jpeg",
        "/sportspeople/cropped/LeBron James.jpeg",
        "/sportspeople/cropped/Lewis Hamilton.jpeg",
        "/sportspeople/cropped/Michael Phelps.jpeg",
        "/sportspeople/cropped/Serena Williams.jpeg",
    ],
    "Politicians": [
        "/politicians/cropped/angela-merkel.jpeg",
        "/politicians/cropped/anura-kumara.jpg",
        "/politicians/cropped/gotabaya-rajapaksa.jpeg",
        "/politicians/cropped/jacinda-ardern.jpeg",
        "/politicians/cropped/mahinda-rajapaksa.jpeg",
        "/politicians/cropped/maithripala-sirisena.jpeg",
        "/politicians/cropped/vasudeva-nanayakkara.jpeg",
        "/politicians/cropped/vladimir-putin.jpg",
    ],
    "Animals": ["/animals/cropped/hyena.png", "/animals/cropped/llama.png", "/animals/cropped/redpanda.png", "/animals/cropped/sloth.png", "/animals/cropped/jackal.png", "/animals/cropped/racoon.png", "/animals/cropped/gorilla.png", "/animals/cropped/guineapig.png",]
}

const answersText = {
    "Singers": [
            "Adam Levine",
            "Taylor Swift",
            "John Legend",
            "Elvis Presley",
            "Pitbull",
            "Ed Sheeran",
            "Adele",
            "Beyonce"
    ],
    "Scientists": [
        "Alan Turing",
        "Charles Darwin",
        "Albert Einstein",
        "Stephen Hawking",
        "Henry Ford",
        "Marie Curie",
        "Nikola Tesla",
        "Thomas Alva Edison"
    ],
    "Actors": [
      "Alexandra Daddario", 
      "Anne Hathaway", 
      "Blake Lively", 
      "Daniel Radcliffe", 
      "Leonardo DiCaprio",  
      "Rachel McAdams", 
      "Tom Cruise", 
      "Will Smith"
    ],
    "Sportperson": [
        "Cristiano Ronaldo",
        "Usain Bolt",
        "Dan Carter",
        "Kane Williamson",
        "LeBron James",
        "Lewis Hamilton",
        "Michael Phelps",
        "Serena Williams",
    ],
    "Politicians": [
        "Angela Merkel", 
        "Anura Kumara", 
        "Gotabaya Rajapaksa", 
        "Jacinda Ardern", 
        "Mahinda Rajapaksa",
        "Maithripala Sirisena",
        "Vasudeva Nanayakkara",
        "Vladimir Putin" 
    ],
    "Animals": ["Hyena", "Llama", "Red Panda", "Sloth", "Jackal", "Racoon", "Gorilla", "Guinea Pig"]
}

export default function QuizPage({ category, quizNumber, timer, setSelectedQuiz }) {
    const [showAnswer, setShowAnswer] = React.useState(false);
    const [showQuiz, setShowQuiz] = React.useState(false);
    return (
        <>
            <Grid container justifyContent={"center"}>
                {showQuiz ? (
                    <>
                        <Grid item>
                            <img src={cropped[category][quizNumber]} alt="Question" style={{ maxWidth: 600 }} />
                        </Grid>
                        <Grid item xs={12} style={{ height: 12 }} />
                        <Grid item>
                            <Countdown date={Date.now() + 1000 * timer} />
                        </Grid>
                        <Grid item xs={12} style={{ height: 12 }} />
                        <Grid item>
                            <Button variant="contained" style={{ margin: 12 }} onClick={() => setShowAnswer(true)} >Show Answer</Button>
                            <Button onClick={() => setSelectedQuiz(null)} variant="contained" style={{ margin: 12 }}>Back</Button>
                        </Grid>
                        <Grid item xs={12} style={{ height: 12 }} />
                        {showAnswer && (
                            <Grid item>
                                <Typography variant="h5" textAlign={"center"} style={{ padding: 20 }}>
                                    {answersText[category][quizNumber]}
                                </Typography>
                                <img src={answers[category][quizNumber]} alt="answer" style={{ maxWidth: 600 }} />
                            </Grid>
                        )}
                    </>
                ) : (
                    <Grid item>
                        <Button onClick={() => setShowQuiz(true)} variant="contained" style={{ margin: 12 }}>Start</Button>
                        <Button onClick={() => setSelectedQuiz(null)} variant="contained" style={{ margin: 12 }}>Back</Button>
                    </Grid>
                )}
            </Grid>
        </>
    )
}
