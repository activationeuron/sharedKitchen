import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Book from "./Book";
import Typography from "@material-ui/core/Typography";
import Addkitchen from "./Addkitchens";
import { connect } from "react-redux";
import ImageUploader from "react-images-upload";

import Nav from "./Nav";

function VerticalLinearStepper() {
  const axios = require("axios");
  const [Firststate, setFirststate] = React.useState({});
  const onFirst = pictures => {
    setFirststate(pictures);
  };
  const [Firststateimage, setFirststateimage] = React.useState([]);
  const onFirstImage = pictures => {
    setFirststateimage(pictures);
  };
  const [Secondstate, setSecondstate] = React.useState({});
  const onSecond = pictures => {
    setSecondstate(pictures);
  };
  const [image, setImage] = React.useState({
    doc1: [],
    doc2: [],
    doc3: []
  });

  const onDrop = name => pictures => {
    setImage({ ...image, [name]: pictures });
  };

  const useStyles = makeStyles(theme => ({
    root: {
      width: "90%",
      margin: "5vh"
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    actionsContainer: {
      marginBottom: theme.spacing(2)
    },
    resetContainer: {
      padding: theme.spacing(3)
    },
    icon: {
      color: "#29B470 !important"
    }
  }));

  function getSteps() {
    return [
      "About Your Kitchen",
      "Booking Availability And Terms Of Usage",
      "Documents Upload"
    ];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <div>
            <Addkitchen
              onFirst={onFirst}
              initialdata={Firststate}
              onFirstImage={onFirstImage}
              handleNext={handleNext}
            />
          </div>
        );
      case 1:
        return (
          <div>
            <Book
              onSecond={onSecond}
              initialdata={Secondstate}
              handleNext={handleNext}
              handleBack={handleBack}
            />
          </div>
        );
      case 2:
        return (
          <div className="row">
            <div className="col-sm-4">
              <ImageUploader
                accept="*"
                withIcon={true}
                buttonText="Choose Files"
                onChange={onDrop("doc1")}
                imgExtension={[".pdf", ".docs", "docx", "ppt"]}
                maxFileSize={52428800}
                label="Choose Licenses"
              />
            </div>
            <div className="col-sm-4">
              <ImageUploader
                withIcon={true}
                accept="*"
                buttonText="Choose Files"
                onChange={onDrop("doc2")}
                imgExtension={[".pdf", ".docs", "docx", "ppt"]}
                maxFileSize={52428800}
                label="Choose Licenses"
              />
            </div>
            <div className="col-sm-4">
              <ImageUploader
                withIcon={true}
                accept="*"
                buttonText="Choose Files"
                onChange={onDrop("doc3")}
                imgExtension={[".pdf", ".docs", "docx", "ppt"]}
                maxFileSize={52428800}
                label="Choose Licenses"
              />
            </div>
            <div className={classes.actionsContainer}>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  style={{ background: "#29B470", color: "white" }}
                  onClick={handleNext}
                  className={classes.button}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        );
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
  function finalSubmit() {
    var results = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < 30; i++) {
      results += characters.charAt(
        Math.floor(Math.random() * charactersLength)
      );
    }
    fetch("/users/addkitchen", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        Firststate: Firststate,
        Secondstate: Secondstate,
        img: results
      })
    })
      .then(result => result.json())
      .then(info => {});
    axios
      .post("/users/image", Firststateimage, {
        headers: {
          path: results
        }
      })
      .then(res => {
        // then print response status
      });
    const data = new FormData();
    data.append("Firstdoc", image.doc1[0]);
    data.append("seconddoc", image.doc2[0]);
    data.append("thirddoc", image.doc3[0]);

    axios
      .post("/users/image", data, {
        headers: {
          path: results
        }
      })
      .then(res => {
        // then print response status
      });
  }
  return (
    <div style={{ color: "red !important" }}>
      <Nav />
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel
                StepIconProps={{
                  classes: {
                    active: classes.icon,
                    completed: classes.icon
                  }
                }}
              >
                {label}
              </StepLabel>
              <StepContent>
                <Typography>{getStepContent(index)}</Typography>
                {
                  <div className={classes.actionsContainer}>
                    <div>
                      {/* <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                  </Button>
                    <Button
                      variant="contained"
                      style={{ background: '#29B470', color: 'white' }}
                      onClick={handleNext}
                      className={classes.button}
                    >Next
                  </Button> */}
                    </div>
                  </div>
                }
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
            <Button onClick={finalSubmit} className={classes.button}>
              Submit Data
            </Button>
          </Paper>
        )}
      </div>
    </div>
  );
}

function mapStateToProps(state, hasownprops) {
  console.log(state);
  console.log(hasownprops);
}

export default connect(mapStateToProps)(VerticalLinearStepper);
