import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    input: {
      color: "red",
    },
  },
}));

const checkDispather = {
  default: "black",
  correct: "green",
  uncorrect: "red",
};

const AnswerInput = (props) => {
  // correct answer
  const prop = props.prop;
  // boolean
  const check = props.check;
  const show = props.show;
  const clear = props.clear;
  // func
  const setCheck = props.setCheck;

  const classes = useStyles();
  const [inputValue, setInputValue] = useState("");
  const [colorInput, setColorInput] = useState(checkDispather.default);
  const [correctAnswer] = useState(prop);

  useEffect(() => {
    switch (check) {
      case false:
        setColorInput(checkDispather.default);
        break;
      case check === true && correctAnswer === inputValue.toLowerCase():
        setColorInput(checkDispather.correct);
        break;
      case check === true && correctAnswer !== inputValue.toLowerCase():
        setColorInput(checkDispather.uncorrect);
        break;
      default:
        break;
    }
  }, [check]);

  useEffect(() => {
    if (clear === true) {
      setInputValue("");
      setCheck(false);
    }
  }, [clear]);

  useEffect(() => {
    if (show === true) {
      setInputValue(prop);
      setCheck(true);
    }
  }, [show]);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Input
        style={{ color: colorInput }}
        id="standard-basic"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
    </form>
  );
};

export default AnswerInput;
