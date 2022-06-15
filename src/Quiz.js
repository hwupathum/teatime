import React from "react";
import { Grid, Button, Typography } from "@mui/material";
import Countdown from 'react-countdown';

const answers = {
    "Singers": ["/singers/adamlevine.webp", "/singers/taylorwsift.webp"],
    "Scientists": [],
    "Actors": [],
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
    "Politicians": [],
    "Animals": ["/animals/hyena.jpeg", "/animals/owl.jpeg", "/animals/redpanda.webp", "/animals/sloth.jpeg", "/animals/racoon.jpeg", "/animals/cheetah.jpeg", "/animals/gorilla.jpeg", "/animals/guineapig.jpeg",]
}

const cropped = {
    "Singers": ["/singers/cropped/adamlevine.png"],
    "Scientists": [],
    "Actors": [],
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
    "Politicians": [],
    "Animals": ["/animals/cropped/hyena.png", "/animals/cropped/owl.png", "/animals/cropped/redpanda.png", "/animals/cropped/sloth.png", "/animals/cropped/racoon.png", "/animals/cropped/cheetah.png", "/animals/cropped/gorilla.png", "/animals/cropped/guineapig.png",]
}

const answersText = {
    "Singers": ["Adam Levine", "Taylow Swift"],
    "Scientists": [],
    "Actors": [],
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
    "Politicians": [],
    "Animals": ["Hyena", "Owl", "Red Panda", "Sloth", "Racoon", "Cheetah", "Gorilla", "Guinea Pig"]
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