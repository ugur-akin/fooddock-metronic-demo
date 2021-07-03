import React from "react";
import {
  Stepper as MUIStepper,
  Step,
  StepLabel,
  StepConnector,
  makeStyles,
  withStyles,
} from "@material-ui/core/";
import {
  PersonTwoTone as ProfileIcon,
  AddBoxTwoTone as AddItemIcon,
  LocalShippingTwoTone as ShipmentIcon,
  NextWeekTwoTone as ReadyIcon,
} from "@material-ui/icons/";
import clsx from "clsx";
import { useParams } from "react-router";

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <ProfileIcon />,
    2: <AddItemIcon />,
    3: <ShipmentIcon />,
    4: <ReadyIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

const steps = [0, 1, 2, 3];
const labels = [
  "Profile Settings",
  "Add Items",
  "Shipment",
  "Ready to take off!",
];

export const Stepper = () => {
  const { step } = useParams();
  const activeStepIdx = parseInt(step, 10) - 1;

  return (
    <MUIStepper
      alternativeLabel
      activeStep={activeStepIdx}
      connector={<ColorlibConnector />}
    >
      {steps.map((stepIdx) => (
        <Step key={labels[stepIdx]}>
          <StepLabel StepIconComponent={ColorlibStepIcon}>
            {labels[stepIdx]}
          </StepLabel>
        </Step>
      ))}
    </MUIStepper>
  );
};
