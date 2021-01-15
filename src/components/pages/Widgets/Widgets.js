import React, { useState } from 'react';
import Main from '../../common/Main/Main';
import Button from '../../common/Button/Button';
import Options from '../../common/Options/Options';
import ColumnGraph from '../../graphs/ColumnGraph';
import BarGraph from '../../graphs/BarGraph.tsx';
import ValueBox from '../../graphs/ValueBox.tsx';
import PieChart from '../../graphs/PieChart.tsx';
import LineGraphFancy from '../../graphs/LineGraphFancy.tsx';
import { WidthProvider, Responsive } from 'react-grid-layout';
import { withStyles } from '@material-ui/styles';
import { styles } from './WidgetsStyles';

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const originalLayouts = getFromLS('layouts') || {};

class ResponsiveLocalStorageLayout extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleBackClick = this.handleBackClick.bind(this);
  }
  state = {
    layouts: JSON.parse(JSON.stringify(originalLayouts)),
  };

  static get defaultProps() {
    return {
      className: 'layout',
      cols: { xl: 12, lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
      rowHeight: 50,
    };
  }

  resetLayout() {
    this.setState({ layouts: {} });
  }

  onLayoutChange(layout, layouts) {
    saveToLS('layouts', layouts);
    this.setState({ layouts });
  }

  handleBackClick(routeProps) {
    alert('CLICKED');
    console.log(routeProps);
    // routeProps.history.push(`/feedbackData`);
  }

  render() {
    const { classes, routeProps } = this.props;

    function handleBackClick() {
      routeProps.history.push(`/feedbackData`);
    }

    return (
      <Main page="widgets">
        <div className={classes.PageHeader}>
          <div className={classes.PageHeaderLeft}>
            <Button
              color="lightGradient"
              size="smallSquare"
              handleClick={handleBackClick}
            >
              <i className="icon-arrow-left"></i>
            </Button>
            <div style={{ marginLeft: '1.6rem' }}>
              <p className={classes.PageHeaderTitle}>Team Feedback</p>
              <Options size="small" color="light">
                <div className="option active">Charts</div>
                <div className="option">Text</div>
              </Options>
            </div>
          </div>
          <div className={classes.PageHeaderRight}>
            <Button color="lightGradient" size="small">
              <i className="icon-time" style={{ marginRight: '.3rem' }}></i>{' '}
              REFRESH
            </Button>
            <Button color="lightGradient" size="small">
              <i className="icon-document" style={{ marginRight: '.3rem' }}></i>{' '}
              EXPORT PDF
            </Button>
            <Button color="green" size="small">
              ADD QUESTION
            </Button>
            <Button color="lightGradient" size="smallSquare">
              <i className="icon-expand"></i>
            </Button>
          </div>
        </div>
        <ResponsiveReactGridLayout
          className="layout"
          breakpoints={{
            xl: 1880,
            lg: 1370,
            md: 900,
            sm: 768,
            xs: 480,
            xxs: 0,
          }}
          useCSSTransforms={false}
          cols={{ xl: 12, lg: 9, md: 6, sm: 3, xs: 3, xxs: 3 }}
          rowHeight={30}
          isBounded={true}
          layouts={this.state.layouts}
          resizeHandles={['e', 'se']}
          margin={[20, 20]}
          onLayoutChange={(layout, layouts) => {
            this.onLayoutChange(layout, layouts);
            this.setState({ layouts });
          }}
        >
          <div
            key="chart1"
            data-grid={{
              w: 3,
              h: 8,
              x: 0,
              y: 0,
              minW: 2,
              minH: 6,
              maxH: 12,
            }}
          >
            <BarGraph />
          </div>
          <div
            key="chart2"
            data-grid={{
              w: 3,
              h: 8,
              x: 6,
              y: 0,
              minW: 2,
              minH: 6,
              maxH: 12,
            }}
          >
            <LineGraphFancy />
          </div>
          <div
            key="chart3"
            data-grid={{
              w: 3,
              h: 8,
              x: 6,
              y: 0,
              minW: 2,
              minH: 6,
              maxH: 12,
            }}
          >
            <ColumnGraph />
          </div>
          <div
            key="chart4"
            data-grid={{
              w: 3,
              h: 8,
              x: 9,
              y: 0,
              minW: 2,
              minH: 6,
              maxH: 12,
            }}
          >
            <PieChart />
          </div>
          <div
            key="chart5"
            data-grid={{
              w: 2,
              h: 6,
              x: 0,
              y: 8,
              minW: 1,
              minH: 3,
              maxH: 12,
            }}
          >
            <ValueBox />
          </div>
        </ResponsiveReactGridLayout>
      </Main>
    );
  }
}

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem('rgl-8')) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      'rgl-8',
      JSON.stringify({
        [key]: value,
      })
    );
  }
}

if (process.env.STATIC_EXAMPLES === true) {
  import('../../../hooks/test-hook').then((fn) =>
    fn.default(ResponsiveLocalStorageLayout)
  );
}

export default withStyles(styles)(ResponsiveLocalStorageLayout);
