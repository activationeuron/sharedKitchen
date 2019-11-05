import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ImageUpload from './ImageUpload';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
export default function Addkitchens(props) {
  const [image, setImage] = React.useState({
    threesixty: [],
    kitchen: [],
    oven: [],
    griddle: [],
    deepfryer: [],
    grill: [],
    ranges: [],
    ice: [],
    food: []
  });
  const onDrop = name => pictures => {
    setImage({ ...image, [name]: pictures });
  }
  const [values, setValues] = React.useState({
    name: props.initialdata.name,
    cuisine: props.initialdata.cuisine,
    multiline: 'Controlled',
    city: props.initialdata.city,
    zip: props.initialdata.zip,
    amenities: props.initialdata.amenities,
    description: props.initialdata.description,
    address: props.initialdata.address,
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const cuisines = [
    {
      value: 'chinese',
      label: 'Chinese',
    },
    {
      value: 'italian',
      label: 'Italian',
    },
  ];


  const useStyles = makeStyles(theme => ({
    root: {
      width: '90%',
      margin: '5vh'
    },
    icon: {
      color: "#29B470 !important"
    },
    formControl: {
      marginTop: '3%',
      marginBottom: '3%',
      marginLeft: '15%'
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      marginLeft: '20%',
      marginTop: '5%',
      marginRight: '20%',
      marginBottom: '5%'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    textFieldam: {
      width: '80%',
      marginLeft: '10%',
      marginTop: theme.spacing(7),
      marginBottom: theme.spacing(10),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    densed: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
      marginLeft: theme.spacing(15),
      marginRight: theme.spacing(10),
    },
    menu: {
      width: 200,
    },
  }));

  function getSteps() {
    return ['Basic Details', 'Equipments', 'Amenities', 'Images', 'Description'];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (<div>
          <h6 align="center">*Description: Fill in the Basic Details</h6>
          <p></p>
          <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-3">
              <TextField required
                id="outlined-name"
                label="Place Name"
                fullWidth
                className={classes.textField}
                value={values.name}
                onChange={handleChange('name')}
                margin="normal"
                variant="outlined"

              />
              <TextField required

                id="outlined-select-type"
                select
                fullWidth
                label="Select Type"
                className={classes.textField}
                value={values.cuisine}
                onChange={handleChange('cuisine')}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                helperText="Please select Cuisine Type"
                margin="normal"
                variant="outlined"

              >
                {cuisines.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>

            <div className="col-sm-4">
              <TextField required

                id="address"
                label="Street Address"
                value={values.address}
                onChange={handleChange('address')}
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
              <TextField required

                id="city"
                label="City"
                value={values.city}
                onChange={handleChange('city')}
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
              <TextField required

                id="zip"
                label="Zip Code"
                className={classes.textField}
                value={values.zip}
                onChange={handleChange('zip')}
                margin="normal"
                variant="outlined"
              /><p></p>
            </div>
          </div>
          <Button variant="contained" style={{ background: '#29B470', color: 'white' }} onClick={handleNext} type="submit">Next</Button>
        </div>)
      case 1:
        return (<div><h5 align="center">Checklist Of Items</h5>
          <h6 align="center">*Description: Check all the items in your Kitchen</h6>
          <div className={classes.formControl}>
            <FormControlLabel
              control={
                <Checkbox style={{ color: '#29B470' }} checked={state.checkedA} onChange={handleChanges('checkedA')} value="checkedA" />
              }
              label="Oven"
            />
            <FormControlLabel
              control={
                <Checkbox style={{ color: '#29B470' }} checked={state.checkedB} onChange={handleChanges('checkedB')} value="checkedB" />
              }
              label="Griddle"
            />
            <FormControlLabel
              control={
                <Checkbox style={{ color: '#29B470' }} checked={state.checkedC} onChange={handleChanges('checkedC')} value="checkedB" />
              }
              label="Deep Fryers"
            />
            <FormControlLabel
              control={
                <Checkbox style={{ color: '#29B470' }} checked={state.checkedD} onChange={handleChanges('checkedD')} value="checkedB" />
              }
              label="Grilling Equipments"
            />
            <FormControlLabel
              control={
                <Checkbox style={{ color: '#29B470' }} checked={state.checkedE} onChange={handleChanges('checkedE')} value="checkedB" />
              }
              label="Ranges"
            /><FormControlLabel
              control={
                <Checkbox style={{ color: '#29B470' }} checked={state.checkedF} onChange={handleChanges('checkedF')} value="checkedB" />
              }
              label="Ice Makers"
            />
            <FormControlLabel
              control={
                <Checkbox style={{ color: '#29B470' }} checked={state.checkedG} onChange={handleChanges('checkedG')} value="checkedB" />
              }
              label="Food Processors"
            /></div>
          <Button variant="contained" style={{ background: '#29B470', color: 'white' }} type="submit" onClick={handleNexts}>Next</Button>

        </div>
        )
      case 2:
        return (<div><h5 align="center">Amenities</h5>
          <h6 align="center">*Description: What are the amenities you are provoding to guest</h6>
          <form onSubmit={handleNext}>
            <TextField required value={values.amenities}
              onChange={handleChange('amenities')} className={classes.textFieldam} id="time" type="text" multiline />
            <p></p>
            <Button variant="contained" style={{ background: '#29B470', color: 'white' }} type="submit">Next</Button>
          </form>
        </div>
        )
      case 3:
        return (<div><h5 align="center">Images and 3D Photo</h5>
          <h6 align="center">*Description: Upload High Quality Images of Your Kitchens And Equipmenst</h6>
          <div className="row">

            <ImageUpload handleImage={onDrop('threesixty')} singleImage={true} label="360 Degree Image of Kitchen" />
            <ImageUpload required handleImage={onDrop('kitchen')} singleImage={false} label="Images of Kitchen" />
            {state.checkedA ? (<ImageUpload handleImage={onDrop('oven')} singleImage={true} label="Image of Oven" />) : ''}
            {state.checkedB ? (<ImageUpload handleImage={onDrop('griddle')} singleImage={true} label="Image of Griddle" />) : ''}
            {state.checkedC ? (<ImageUpload handleImage={onDrop('deepfryer')} singleImage={true} label="Image of Deep Fryers" />) : ''}
            {state.checkedD ? (<ImageUpload handleImage={onDrop('grill')} singleImage={true} label="Image of Grilling Equipment" />) : ''}
            {state.checkedE ? (<ImageUpload handleImage={onDrop('ranges')} singleImage={true} label="Image of Ranges" />) : ''}
            {state.checkedF ? (<ImageUpload handleImage={onDrop('ice')} singleImage={true} label="Image of Ice Makers" />) : ''}
            {state.checkedG ? (<ImageUpload handleImage={onDrop('food')} singleImage={true} label="Image of Food Processor" />) : ''}

          </div><Button onClick={()=>{
            if(image.kitchen[0]===undefined)
            alert("You have to upload at least one image of kitchen");
            else
            handleNext();
            }
            } variant="contained" style={{ background: '#29B470', color: 'white' }} type="submit">Next</Button>
        </div>
        )
      case 4:
        return (<div><h5 align="center">Description</h5>
          <h6 align="center">*Description: Write about your Kitchen in 5-6 Lines</h6>
          <form onSubmit={handleNext}>
            <TextField required value={values.description}
              onChange={handleChange('description')} className={classes.textFieldam} id="time" type="text" multiline />
            <p></p><Button variant="contained" style={{ background: '#29B470', color: 'white' }} type="submit">Next</Button>
          </form>
        </div>)
    }
  }
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
    checkedF: false,
    checkedG: false,
  });

  const handleChanges = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }
  function handleNexts() {
    if (state.checkedA === false && state.checkedB === false && state.checkedC === false && state.checkedD === false && state.checkedE === false && state.checkedF === false && state.checkedG === false)
      alert("Select Atleast one");
    else
      setActiveStep(prevActiveStep => prevActiveStep + 1);
  }
  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }
  function handleSubmit() {
    var equipments = "";
    if (state.checkedA === true) equipments += 'Oven,';
    if (state.checkedB === true) equipments += 'Griddle,';
    if (state.checkedC === true) equipments += 'Deep Fryers,';
    if (state.checkedD === true) equipments += 'Grilling Equipments,';
    if (state.checkedE === true) equipments += 'Ranges,';
    if (state.checkedF === true) equipments += 'Ice Makers,';
    if (state.checkedG === true) equipments += 'Food Processors';

    props.onFirst({ name: values.name, address: values.address, city: values.city, zip: values.zip, cuisine: values.cuisine, amenities: values.amenities, description: values.description, equipments: equipments });
    const data = new FormData()
    data.append('threesixty', image.threesixty[0])
    for (var x = 0; x < image.kitchen.length; x++) {
      data.append('kitchen', image.kitchen[x])
    }
    data.append('oven', image.oven[0])
    data.append('griddle', image.griddle[0])
    data.append('deepfryer', image.deepfryer[0])
    data.append('grill', image.grill[0])
    data.append('ranges', image.ranges[0])
    data.append('ice', image.ice[0])
    data.append('food', image.food[0])
    props.onFirstImage(data);
    props.handleNext();
  }
  return (
    <div>
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
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    Back
              </Button>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
