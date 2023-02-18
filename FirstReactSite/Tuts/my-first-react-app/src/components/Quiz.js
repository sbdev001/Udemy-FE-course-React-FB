import React from "react";		
import { useState } from "react";
import Question from './QuestionGeneric.js'		

import { PropTypes } from 'prop-types';

export default function Quiz(props) {
    const [totalQuestions, setTotalQuestions] = useState(props.questions.length)
    const [currQuestId, setCurrentQuestionId] = useState(0)
    const [score, setScore] = useState(0)
    
    return (
        <div>
            {props.questions.map((question, index) => (
                console.log("Index: ", index), console.log("Question ID:", currQuestId),
                (<React.Fragment key={index}>
                    <div>
                        {(currQuestId==index) && 
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
            <p>Score: {score}/{props.questions.length}</p>
        </div>
    )
}

