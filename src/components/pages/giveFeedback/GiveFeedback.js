import React from 'react';
import Main from '../../common/Main/Main';
import PageHeader from '../../common/PageHeader/PageHeader';
import People from '../../common/People/People';
import Person from '../../common/Person/Person';
import Button from '../../common/Button/Button';
import Options from '../../common/Options/Options';
import { withStyles } from '@material-ui/styles';
import { styles } from './GiveFeedbackStyles';

function GiveFeedback(props) {
  const { classes } = props;

  return (
    <Main page={'giveFeedback'}>
      <PageHeader page={'giveFeedback'}>
        <p className="PageHeader-subtitle">
          Nokia Oyj <i className="icon-arrow-right"></i> Team Marketing
        </p>
        <p className="PageHeader-title">Give feedback</p>
        <div className="PageHeader-bottom">
          <Options>
            <div className="option active">All team members</div>
            <div className="option">My todo list</div>
          </Options>

          <div className="PageHeader-bottom-buttons">
            <input type="text" placeholder="Search..." />
            <Button color="green" size="medium">
              Invite new member
            </Button>
            <Button color="lightGradient" size="mediumSquare">
              <i className="icon-sort"></i>
            </Button>
          </div>
        </div>
      </PageHeader>

      {/* PLACEHOLDER */}
      <div className={`hide ${classes.placeholder}`}>
        <img
          src="/img/feedback-placeholder-img.png"
          alt="Clip art"
          className={classes.placeholderImg}
        />
        <p className={classes.placeholderTitle}>
          No team members yet in this team
        </p>
        <p className={classes.placeholderText}>
          Click <button>here</button> to invite new team members
        </p>
      </div>

      <People page={'giveFeedback'}>
        <Person
          showImg={true}
          name="Marko Rajkovic"
          position="Frontend Developer"
          initials="MR"
          img="/img/p-01.png"
        />
        <Person
          showImg={false}
          name="Marko Rajkovic"
          position="Frontend Developer"
          initials="MR"
          img="/img/p-01.png"
        />
        <Person
          showImg={true}
          name="Marko Rajkovic"
          position="Frontend Developer"
          initials="MR"
          img="/img/p-01.png"
        />
        <Person
          showImg={true}
          name="Marko Rajkovic"
          position="Frontend Developer"
          initials="MR"
          img="/img/p-01.png"
        />
        <Person
          showImg={true}
          name="Marko Rajkovic"
          position="Frontend Developer"
          initials="MR"
          img="/img/p-01.png"
        />
        <Person
          showImg={true}
          name="Marko Rajkovic"
          position="Frontend Developer"
          initials="MR"
          img="/img/p-01.png"
        />
        <Person
          showImg={true}
          name="Marko Rajkovic"
          position="Frontend Developer"
          initials="MR"
          img="/img/p-01.png"
        />
        <Person
          showImg={true}
          name="Marko Rajkovic"
          position="Frontend Developer"
          initials="MR"
          img="/img/p-01.png"
        />
        <Person
          showImg={true}
          name="Marko Rajkovic"
          position="Frontend Developer"
          initials="MR"
          img="/img/p-01.png"
        />
        <Person
          showImg={true}
          name="Marko Rajkovic"
          position="Frontend Developer"
          initials="MR"
          img="/img/p-01.png"
        />
        <Person
          showImg={true}
          name="Marko Rajkovic"
          position="Frontend Developer"
          initials="MR"
          img="/img/p-01.png"
        />
        <Person
          showImg={true}
          name="Marko Rajkovic"
          position="Frontend Developer"
          initials="MR"
          img="/img/p-01.png"
        />
        <Person
          showImg={true}
          name="Marko Rajkovic"
          position="Frontend Developer"
          initials="MR"
          img="/img/p-01.png"
        />
        <Person
          showImg={true}
          name="Marko Rajkovic"
          position="Frontend Developer"
          initials="MR"
          img="/img/p-01.png"
        />
        <Person
          showImg={true}
          name="Marko Rajkovic"
          position="Frontend Developer"
          initials="MR"
          img="/img/p-01.png"
        />
        <Person
          showImg={true}
          name="Marko Rajkovic"
          position="Frontend Developer"
          initials="MR"
          img="/img/p-01.png"
        />
        <Person
          showImg={true}
          name="Marko Rajkovic"
          position="Frontend Developer"
          initials="MR"
          img="/img/p-01.png"
        />
        <Person
          showImg={true}
          name="Marko Rajkovic"
          position="Frontend Developer"
          initials="MR"
          img="/img/p-01.png"
        />
        <Person
          showImg={true}
          name="Marko Rajkovic"
          position="Frontend Developer"
          initials="MR"
          img="/img/p-01.png"
        />
        <Person
          showImg={true}
          name="Marko Rajkovic"
          position="Frontend Developer"
          initials="MR"
          img="/img/p-01.png"
        />
        <Person
          showImg={true}
          name="Marko Rajkovic"
          position="Frontend Developer"
          initials="MR"
          img="/img/p-01.png"
        />
        <Person
          showImg={false}
          name="Marko Rajkovic"
          position="Frontend Developer"
          initials="MR"
          img="/img/p-01.png"
        />
        <Person
          showImg={true}
          name="Marko Rajkovic"
          position="Frontend Developer"
          initials="MR"
          img="/img/p-01.png"
        />
        <Person
          showImg={true}
          name="Marko Rajkovic"
          position="Frontend Developer"
          initials="MR"
          img="/img/p-01.png"
        />
        <Person
          showImg={true}
          name="Marko Rajkovic"
          position="Frontend Developer"
          initials="MR"
          img="/img/p-01.png"
        />
        <Person
          showImg={true}
          name="Marko Rajkovic"
          position="Frontend Developer"
          initials="MR"
          img="/img/p-01.png"
        />
        <Person
          showImg={true}
          name="Marko Rajkovic"
          position="Frontend Developer"
          initials="MR"
          img="/img/p-01.png"
        />
        <Person
          showImg={true}
          name="Marko Rajkovic"
          position="Frontend Developer"
          initials="MR"
          img="/img/p-01.png"
        />
      </People>
    </Main>
  );
}

export default withStyles(styles)(GiveFeedback);
