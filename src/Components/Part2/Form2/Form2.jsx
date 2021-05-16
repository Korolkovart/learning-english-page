import React, { useState, useEffect } from "react";
import AnswerInput from "../../Input/AnswerInput";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import s from "./Form2.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Form2 = () => {
  const classes = useStyles();

  const correctAnswer = {
    first: "yes",
    second: "15 years ago",
    third: "security guard",
    fourth: "journalism",
    fifth: "2 weeks",
    sixth: "yes",
    seventh: "mohandas gandhi",
    eighth: "diet for a new america",
  };

  const [check, setCheck] = useState();
  const [clear, setClear] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setCheck();
  }, [check]);

  useEffect(() => {
    setClear();
  }, [clear]);

  useEffect(() => {
    setShow();
  }, [show]);

  return (
    <div className={s.wrapper}>
      <h2>Question 1 – 3</h2>
      <div className={s.info}>
        <p className={s.info__text}>
          Play ► and Listen the audio, complete the notes below by{" "}
          <strong>filling the gaps.</strong> Write{" "}
          <strong>no more than three words and/or a number</strong> for each
          answer.
        </p>
      </div>
      <ul className={s.list}>
        <li className={s.link}>
          <p>Spontaneous english podcast about vegetarianism</p>
        </li>
        <li className={s.link}>
          <p>The author tells his story</p>
        </li>
        <li className={s.link}>
          <p>Did the author eat meet before?</p>
        </li>

        <li className={s.link}>
          <span>Enter Your answer :</span>
          <AnswerInput
            prop={correctAnswer.first}
            check={check}
            setCheck={setCheck}
            clear={clear}
            show={show}
          />
        </li>
        <li className={s.link}>
          <p>When did the author become a vegetarian?</p>
        </li>

        <li className={s.link}>
          <span>Enter Your answer :</span>
          <AnswerInput
            prop={correctAnswer.second}
            check={check}
            setCheck={setCheck}
            clear={clear}
            show={show}
          />
        </li>
        <li className={s.link}>
          <p>First job</p>
        </li>
        <li className={s.link}>
          <span>Enter Your answer :</span>
          <AnswerInput
            prop={correctAnswer.third}
            check={check}
            setCheck={setCheck}
            clear={clear}
            show={show}
          />
        </li>
      </ul>
      <div className={classes.root}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCheck(true)}
        >
          Check
        </Button>

        <Button onClick={() => setShow(true)}>Show</Button>
        <Button onClick={() => setClear(true)}>Clear</Button>
      </div>
    </div>
  );
};
export default Form2;
