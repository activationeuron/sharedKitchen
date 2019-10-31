import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import Switch from '@material-ui/core/Switch';
export default function Book(props) {
const [selectedDate, setSelectedDate] = React.useState({
  start:new Date(),
  end:new Date(),
  sunf:new Date(),sunt:new Date(),
  monf:new Date(),mont:new Date(),
  tuef:new Date(),tuet:new Date(),
  wedf:new Date(),wedt:new Date(),
  thuf:new Date(),thut:new Date(),
  frif:new Date(),frit:new Date(),
  satf:new Date(),satt:new Date(),
});
const handleDateChange=name=>date=> {
  setSelectedDate({ ...selectedDate, [name]:date});
}
const [state, setState] = React.useState({
  checkedA: true,
  checkedB: true,
  checkedC: true,
  checkedD: true,
  checkedE: true,
  checkedF: true,
  checkedG: true,
});
const [states, setStates] = React.useState({
  price:props.initialdata.price,
  terms:props.initialdata.terms,
});
const handleChanges = name => event => {
  setStates({ ...states, [name]: event.target.value });
};
const handleChange = name => event => {
  setState({ ...state, [name]: event.target.checked });
};
const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    margin:'5vh'
  },
  rootl: {
    width: '90%',
    marginLeft:'25vh'
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  icon: {
    color: "#29B470 !important"
  },
}));

function getSteps() {
  return ['Calender','Timings','Pricing','Terms And Conditions'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <div>
        <h2 align="center">Calender</h2>
        <h6 align="center">*Description: Check all the items in your Kitchen</h6>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="none"
          id="date-picker-inline"
          label="From"
          value={selectedDate.start}
          onChange={handleDateChange('start')}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="none"
          id="date-picker-inline"
          label="To"
          value={selectedDate.end}
          onChange={handleDateChange('end')}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider></div>;
    case 1:
      return <div className={classes.rootl}>
      <h2 align="center">Timings</h2>
      <h6 align="center">*Description: Check all the items in your Kitchen</h6>
      <b>Hours</b><br/>
      <div className="col-sm-10">
      
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
     
      <b>Sunday</b>
      <Switch
        checked={state.checkedA}
        onChange={handleChange('checkedA')}
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />{!state.checkedA?'Closed':
      <div>
      <KeyboardTimePicker
          margin="none"
          id="time-picker"
          label="From"
          value={selectedDate.sunf}
          onChange={handleDateChange('sunf')}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        <KeyboardTimePicker
          margin="none"
          id="time-picker"
          label="To"
          value={selectedDate.sunt}
          onChange={handleDateChange('sunt')}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        /></div>}<br/>
        <b>Monday</b>
      <Switch
        checked={state.checkedB}
        onChange={handleChange('checkedB')}
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />{!state.checkedB?'Closed':
      <div>
      
      <KeyboardTimePicker
          margin="none"
          id="time-picker"
          label="From"
          value={selectedDate.monf}
          onChange={handleDateChange('monf')}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        <KeyboardTimePicker
          margin="none"
          id="time-picker"
          label="To"
          value={selectedDate.mont}
          onChange={handleDateChange('mont')}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        /></div>}<br/>
        <b>Tuesday</b>
      <Switch
        checked={state.checkedC}
        onChange={handleChange('checkedC')}
        value="checkedA"
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />{!state.checkedC?'Closed':
      <div>
      <KeyboardTimePicker
          margin="none"
          id="time-picker"
          label="From"
          value={selectedDate.tuef}
          onChange={handleDateChange('tuef')}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        <KeyboardTimePicker
          margin="none"
          id="time-picker"
          label="Time picker"
          value={selectedDate.tuet}
          onChange={handleDateChange('tuet')}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        /></div>}<br/>
        <b>Wednesday</b>
      <Switch
        checked={state.checkedD}
        onChange={handleChange('checkedD')}
        value="checkedA"
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />{!state.checkedD?'Closed':
      <div><KeyboardTimePicker
          margin="none"
          id="time-picker"
          label="From"
          value={selectedDate.wedf}
          onChange={handleDateChange('wedf')}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        <KeyboardTimePicker
          margin="none"
          id="time-picker"
          label="To"
          value={selectedDate.wedt}
          onChange={handleDateChange('wedt')}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        /></div>}<br/>
        <b>Thursday</b>
      <Switch
        checked={state.checkedE}
        onChange={handleChange('checkedE')}
        value="checkedA"
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />{!state.checkedE?'Closed':
      <div><KeyboardTimePicker
          margin="none"
          id="time-picker"
          label="From"
          value={selectedDate.thuf}
          onChange={handleDateChange('thuf')}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        <KeyboardTimePicker
          margin="none"
          id="time-picker"
          label="To"
          value={selectedDate.thut}
          onChange={handleDateChange('thut')}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        /></div>}<br/>
        <b>Friday</b>
      <Switch
        checked={state.checkedF}
        onChange={handleChange('checkedF')}
        value="checkedA"
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />{!state.checkedF?'Closed':
      <div><KeyboardTimePicker
          margin="none"
          id="time-picker"
          label="From"
          value={selectedDate.frif}
          onChange={handleDateChange('frif')}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        <KeyboardTimePicker
          margin="none"
          id="time-picker"
          label="To"
          value={selectedDate.frit}
          onChange={handleDateChange('frit')}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        /></div>}
        <br/>
        <b>Saturday</b>
      <Switch
        checked={state.checkedG}
        onChange={handleChange('checkedG')}
        value="checkedA"
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />{!state.checkedG?'Closed':
      <div><KeyboardTimePicker
          margin="none"
          id="time-picker"
          label="From"
          value={selectedDate.satf}
          onChange={handleDateChange('satf')}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        <KeyboardTimePicker
          margin="none"
          id="time-picker"
          label="To"
          value={selectedDate.satt}
          onChange={handleDateChange('satt')}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        /></div>}
    </MuiPickersUtilsProvider>
    </div>
      </div>;
    case 2:
      return <div align="center"><TextField required
      id="standard-name"
      label="Price Per Hour"
      className={classes.textField}
      value={states.price}
      onChange={handleChanges('price')}
      margin="dense"
    /></div>;
    case 3:
      return <div> 
        <h3 align="center">Terms of Usage What All Things A Guest Can Use</h3>
      <h6 align="center">*Description: Fill in the Basic Details</h6>
      <p></p>
      <TextField required
      id="standard-name"
      label="Type Terms Of Usage"
      fullWidth
      className={classes.textField}
      value={states.terms}
      onChange={handleChanges('terms')}
      margin="none"
    /></div>;
  }
}


  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }
  function handleSubmit() {
    var timings={};
    if(state.checkedA===true)
    timings={...timings,sunf:selectedDate.sunf.toString().substring(16,24),sunt:selectedDate.sunt.toString().substring(16,24)}
    if(state.checkedB===true)
    timings={...timings,monf:selectedDate.monf.toString().substring(16,24),mont:selectedDate.mont.toString().substring(16,24)}
    if(state.checkedC===true)
    timings={...timings,tuef:selectedDate.tuef.toString().substring(16,24),tuet:selectedDate.tuet.toString().substring(16,24)}
    if(state.checkedD===true)
    timings={...timings,wedf:selectedDate.wedf.toString().substring(16,24),wedt:selectedDate.wedt.toString().substring(16,24)}
    if(state.checkedE===true)
    timings={...timings,thuf:selectedDate.thuf.toString().substring(16,24),thut:selectedDate.thut.toString().substring(16,24)}
    if(state.checkedF===true)
    timings={...timings,frif:selectedDate.frif.toString().substring(16,24),frit:selectedDate.frit.toString().substring(16,24)}
    if(state.checkedG===true)
    timings={...timings,satf:selectedDate.satf.toString().substring(16,24),satt:selectedDate.satt.toString().substring(16,24)}
    var myJSON = JSON.stringify(timings);
    props.onSecond({start:selectedDate.start.toString().substring(4,15),end:selectedDate.end.toString().substring(4,15),timings:myJSON,price:states.price,terms:states.terms});
  props.handleNext();
  }
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel StepIconProps={{
        classes: {
            active: classes.icon,
            completed: classes.icon,
        }
    }}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleSubmit}>Next Step</Button>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
            {activeStep === 0 ?<Button
                onClick={props.handleBack}
                className={classes.backButton}
              >
                Previous Step
              </Button>:
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>}
              <Button variant="contained" style={{ background: '#29B470',color:'white' }} onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
