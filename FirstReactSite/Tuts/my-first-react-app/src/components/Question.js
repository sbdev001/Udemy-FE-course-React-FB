import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { MathJax, MathJaxContext } from "better-react-mathjax"
import { render } from '@testing-library/react';

//https://mui.com/material-ui/react-radio-button/

export default function Question() {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === 'best') {
      setHelperText('You got it!');
      setError(false);
    } else if (value === 'worst') {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };

  // Good discussion on ReactNode https://stackoverflow.com/questions/58123398/when-to-use-jsx-element-vs-reactnode-vs-reactelement
  
  const option1 = (
        <div>
        <MathJaxContext>
        <MathJax>{"\\(\\log_{5}{\\frac{4}{3}}\\)"}</MathJax>
        </MathJaxContext>
        </div>
)

    const option2 = (
        <div>
        <MathJaxContext>
        <MathJax>{"\\(\\log_{5}{12x^2}\\)"}</MathJax>
        </MathJaxContext>
        </div>
    )

    const LogarithmicExpression = (
          <div>
            <p>
              <math xmlns="http://www.w3.org/1998/Math/MathML">
                <mrow>
                  <mo>log</mo>
                  <mfenced>
                    <mrow>
                      <mn>2</mn>
                      <mi>x</mi>
                    </mrow>
                  </mfenced>
                  <mo>+</mo>
                  <mo>log</mo>
                  <mfenced>
                    <mrow>
                      <mn>3</mn>
                      <msup>
                        <mi>x</mi>
                        <mn>2</mn>
                      </msup>
                    </mrow>
                  </mfenced>
                </mrow>
              </math>
            </p>
          </div>
    );
            
      
      
      
  


  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
        <FormLabel id="demo-error-radios"></FormLabel>
        <MathJaxContext>
              <h2>Simplify the expression </h2>
              <MathJax>{"\\(\\log_{5}{4x} - \\log_{5}{3x}\\)"}</MathJax>
        </MathJaxContext>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="best" control={<Radio />} label={option1} />
          <FormControlLabel value="worst" control={<Radio />} label={LogarithmicExpression} />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Check Answer
        </Button>
      </FormControl>
    </form>
  );
}