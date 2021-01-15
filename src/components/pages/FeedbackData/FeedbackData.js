import React from 'react';
import Main from '../../common/Main/Main';
import PageHeader from '../../common/PageHeader/PageHeader';
import FeedbackDataCard from './FeedbackDataCard/FeedbackDataCard';
import { withStyles } from '@material-ui/styles';
import { styles } from './FeedbackDataStyles';

function FeedbackData(props) {
  const { classes, routeProps } = props;

  return (
    <Main page="feedbackData">
      <PageHeader page="feedbackData">
        <p className="PageHeader-subtitle">
          Nokia Oyj <i className="icon-arrow-right"></i> Team Marketing
        </p>
        <p className="PageHeader-title">
          Feedback data - <span>Dashboards</span>
        </p>
      </PageHeader>

      <div className={classes.cardContainer}>
        <FeedbackDataCard
          routeProps={routeProps}
          title={'Team Feedback'}
          reviews={6}
          charts={5}
          lastVisited={'1.2.2021'}
          questions={[
            { type: 'graph', text: 'How do people feel working in this team' },
            { type: 'star', text: 'How well work is planned and organized' },
            { type: 'text', text: 'What could we do better in this team' },
          ]}
        />

        <FeedbackDataCard
          routeProps={routeProps}
          title={'P2P Feedback'}
          reviews={6}
          charts={5}
          lastVisited={'1.2.2021'}
          questions={[
            { type: 'graph', text: 'Attitude, Productivity, Teamworking' },
            { type: 'text', text: 'Compliments and improvement ideas' },
          ]}
        />

        <FeedbackDataCard
          routeProps={routeProps}
          title={'Supervisor Feedback'}
          reviews={6}
          charts={5}
          lastVisited={'1.2.2021'}
          questions={[
            { type: 'graph', text: 'How does the team leader lead this team' },
            { type: 'star', text: 'How does the team leader treat his people' },
            { type: 'text', text: 'What could the team leader do better' },
          ]}
        />

        <FeedbackDataCard
          routeProps={routeProps}
          title={'Self Evaluations'}
          reviews={6}
          charts={5}
          lastVisited={'1.2.2021'}
          questions={[
            { type: 'graph', text: 'Attitude, Productivity, Teamworking' },
            { type: 'text', text: 'What did I do well' },
            { type: 'text', text: 'What can I do better' },
          ]}
        />

        <FeedbackDataCard
          routeProps={routeProps}
          title={'Subordinate Feedback'}
          reviews={6}
          charts={5}
          lastVisited={'1.2.2021'}
          questions={[]}
        />
      </div>
    </Main>
  );
}

export default withStyles(styles)(FeedbackData);
