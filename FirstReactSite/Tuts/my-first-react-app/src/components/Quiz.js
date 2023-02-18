import React from "react";		
import { useState } from "react";
import Question from './QuestionGeneric.js'	
import Typography from '@mui/material/Typography'
import Card from '@mui/joy/Card'
import Sheet from '@mui/joy/Sheet'
import Stack from '@mui/joy/Stack'


import { PropTypes } from 'prop-types';
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

export default function Quiz(props) {
    const [totalQuestions, setTotalQuestions] = useState(props.questions.length)
    const [currQuestId, setCurrentQuestionId] = useState(0)
    const [score, setScore] = useState(0)
    
    return (
        <div>
            {props.questions.map((question, index) => (
                console.log("Index: ", index), console.log("Question ID:", currQuestId),
                ((currQuestId==index) && 
                <React.Fragment key={index}>
                    <div>
                        {
                        <Question question={question} 
                        qid={currQuestId} 
                        updateQID={setCurrentQuestionId}
                        score={score}
                        updateScore={setScore} >
                        </Question>
                        }
                    </div>
                </React.Fragment>)
            ))}
            <Stack spacing={2}>
                <p align='center'></p>
                <p align='center'></p>
                <p align='center'></p>
                <p align='center'>Your score: {score}/{props.questions.length}</p>
            </Stack>
        </div>
    )
}

