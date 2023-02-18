import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { MathJax, MathJaxContext } from "better-react-mathjax"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { render } from '@testing-library/react';

//https://mui.com/material-ui/react-radio-button/

// Takes one question and returns the 

export default function QuestionGeneric(props) {
  const [selected, setSelected] = React.useState(-1);
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');

  const handleRadioChange = (event) => {
    setSelected(event.target.value);
    console.log(selected)
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected:", selected)
    console.log("Correct Answer:", props.question.correctAnswer)
    if (selected == props.question.correctAnswer) {
      setHelperText('You got it!');
      props.updateScore(props.score + 1)
      setError(false);
    } else if (selected >= 0) {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
    props.updateQID(props.qid + 1);
  };

  // Good discussion on ReactNode https://stackoverflow.com/questions/58123398/when-to-use-jsx-element-vs-reactnode-vs-reactelement
  
  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
        <FormLabel id="demo-error-radios"></FormLabel>
        <MathJaxContext>
            <MathJax>
                <h2>{props.question.id}.  
                    {props.question.title}
                </h2>
            </MathJax>
        </MathJaxContext>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={selected}
          onChange={handleRadioChange}
        >
        {props.question.answers.map((option, option_id) => (
            (<React.Fragment key={option_id}>
                <Box textAlign='left' ml={10}>
                <MathJaxContext align="right">
                <MathJax>
                    <FormControlLabel value={option_id} control={<Radio />} 
                    label={option}
                    />
                </MathJax>
                </MathJaxContext>
                </Box>
            </React.Fragment>
            )
        ))}
        <Box textAlign='center'>
            <FormHelperText>{helperText}</FormHelperText>
            <Button sx={{ mt: 1, ml: 0 }} type="submit" variant="outlined">
                Check Answer
            </Button>
        </Box>
        </RadioGroup>
      </FormControl>
    </form>
  );
}

//<button onClick= {() => handleClick(question.id)}>Delete Event</button>  
/*    
            <FormControlLabel value={0} control={<Radio />} label={props.question.answers[0]} />
            <FormControlLabel value={1} control={<Radio />} label={props.question.answers[1]} />

 */