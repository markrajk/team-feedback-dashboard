import React from 'react';
import Button from '../../../common/Button/Button';
import { withStyles } from '@material-ui/styles';
import { styles } from './FeedbackDataCardStyles';

function FeedbackDataCard(props) {
  const {
    classes,
    title,
    reviews,
    charts,
    lastVisited,
    questions,
    routeProps,
  } = props;

  const iconTextText = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="18"
      viewBox="0 0 27 18"
    >
      <g transform="translate(-281 -344)">
        <rect
          width="27"
          height="18"
          rx="2"
          transform="translate(281 344)"
          fill="#017cad"
        />
        <text
          transform="translate(282.5 356.5)"
          fill="#fff"
          font-size="9.25"
          font-family="Inter-Bold, Inter"
          font-weight="700"
          letter-spacing="-0.04em"
        >
          <tspan x="0" y="0">
            TEXT
          </tspan>
        </text>
      </g>
    </svg>
  );

  const iconTextUneven = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="10"
      viewBox="0 0 20 10"
    >
      <g transform="translate(-285.5 -312.5)">
        <line
          x1="18"
          transform="translate(286.5 313.5)"
          fill="none"
          stroke="#017cad"
          stroke-linecap="round"
          stroke-width="2"
        />
        <line
          x1="11.094"
          transform="translate(286.5 317.5)"
          fill="none"
          stroke="#017cad"
          stroke-linecap="round"
          stroke-width="2"
        />
        <line
          x1="14"
          transform="translate(286.5 321.5)"
          fill="none"
          stroke="#017cad"
          stroke-linecap="round"
          stroke-width="2"
        />
      </g>
    </svg>
  );

  let icon = iconTextText;

  const iconLineGraph = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24.501"
      viewBox="0 0 25 24.501"
    >
      <path
        d="M5949,470.5a2.5,2.5,0,1,1,2.5,2.5A2.5,2.5,0,0,1,5949,470.5Zm7.5-9.5-3.5,7Zm5,3.5a2.487,2.487,0,0,1,.5-1.5l-2.5-3,2.5,3a2.5,2.5,0,1,1-.5,1.5Zm7.5-9.5-4,7Zm-14,3.5a2.5,2.5,0,1,1,2.5,2.5A2.5,2.5,0,0,1,5955,458.5Zm12.5-6a2.5,2.5,0,1,1,2.5,2.5A2.5,2.5,0,0,1,5967.5,452.5Z"
        transform="translate(-5948.25 -449.25)"
        fill="#fff"
        stroke="#017cad"
        stroke-width="1.5"
      />
    </svg>
  );

  let allQuestions = null;

  if (questions.length && questions) {
    allQuestions = questions.map((question) => {
      if (question.type === 'graph') icon = iconLineGraph;
      if (question.type === 'star') icon = iconTextUneven;
      if (question.type === 'text') icon = iconTextText;

      return (
        <div className={classes.question}>
          <div className={classes.questionIcon}>{icon}</div>
          <p className={classes.questionText}>{question.text}</p>
        </div>
      );
    });
  }

  function handleClick() {
    routeProps.history.push(`/widgets`);
  }

  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.header}>
        <p className={classes.headerTitle}>{title}</p>
        <div className={classes.headerButtons}>
          <Button color="lightGradient" size="smallSquare">
            <i className="icon-material-lock"></i>
          </Button>
          <Button color="lightGradient" size="smallSquare">
            <i className="icon-ellipsis"></i>
          </Button>
        </div>
      </div>
      <p className={classes.reviews}>
        {allQuestions ? `${reviews} new reviews` : 'No data yet'}
      </p>

      <div className={classes.main}>
        {allQuestions ? (
          allQuestions
        ) : (
          <img
            src="/img/feedback-data-card-placeholder.png"
            alt="Clip art"
            className={classes.mainPlaceholder}
          />
        )}
      </div>

      <div className={classes.footer}>
        <p>{charts} charts</p>
        <p>Last visited {lastVisited}</p>
      </div>
    </div>
  );
}

export default withStyles(styles)(FeedbackDataCard);
