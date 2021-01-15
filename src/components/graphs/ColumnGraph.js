import { ResizeObserver } from '@juggle/resize-observer';
import React, { useEffect } from 'react';

const ColoumnGraph = () => {
  // REUSABLE RESIZE OBSERVER
  var ro = new ResizeObserver((entries) => {
    for (let entry of entries) {
      const crWidth = entry.borderBoxSize[0].inlineSize;
      const crHeight = entry.borderBoxSize[0].blockSize;

      const widgetHeader = entry.target.children[0];
      const widgetBody = entry.target.children[1];
      const columnChart = widgetBody.children[0];
      const columnChartTitle = columnChart.children[0];
      const columnChartArea = columnChart.children[1];
      const columnChartYAxis = columnChart.children[2];
      const columnChartXAxis = columnChart.children[3];
      const columnChartYAxisItems = columnChartYAxis.children;

      const widgetHeaderBP = crHeight * 0.071;
      const columnChartYAxisPadding = crWidth * 0.013;

      //Update sizes
      widgetHeader.style.paddingBottom = `${widgetHeaderBP}px`;
      columnChartYAxis.style.padding = `0 ${columnChartYAxisPadding}px`;
      [...columnChartYAxisItems].forEach((e) => {
        e.children[1].style.width = `${columnChartArea.clientWidth}px`;

        e.children[1].style.right = `-${columnChartYAxisPadding}px`;
      });

      //Rotate text
      if (columnChartXAxis.children[0].clientWidth <= 60) {
        entry.target.classList.add('rotate-text');
      } else {
        entry.target.classList.remove('rotate-text');
      }

      //HEIGHT CHECK
      if (crHeight > 700.00001) {
        entry.target.classList.add('h-70');
      } else if (entry.target.classList.contains('h-70')) {
        entry.target.classList.remove('h-70');
      }

      if (crHeight <= 700 && crHeight > 650.00001) {
        entry.target.classList.add('h-65');
      } else if (entry.target.classList.contains('h-65')) {
        entry.target.classList.remove('h-65');
      }

      if (crHeight <= 650 && crHeight > 600.00001) {
        entry.target.classList.add('h-60');
      } else if (entry.target.classList.contains('h-60')) {
        entry.target.classList.remove('h-60');
      }

      if (crHeight <= 600 && crHeight > 550.00001) {
        entry.target.classList.add('h-55');
      } else if (entry.target.classList.contains('h-55')) {
        entry.target.classList.remove('h-55');
      }

      if (crHeight <= 550 && crHeight > 500.00001) {
        entry.target.classList.add('h-50');
      } else if (entry.target.classList.contains('h-50')) {
        entry.target.classList.remove('h-50');
      }

      if (crHeight <= 500 && crHeight > 450.00001) {
        entry.target.classList.add('h-45');
      } else if (entry.target.classList.contains('h-45')) {
        entry.target.classList.remove('h-45');
      }

      if (crHeight <= 450 && crHeight > 400.00001) {
        entry.target.classList.add('h-40');
      } else if (entry.target.classList.contains('h-40')) {
        entry.target.classList.remove('h-40');
      }

      if (crHeight <= 400 && crHeight > 350.00001) {
        entry.target.classList.add('h-35');
      } else if (entry.target.classList.contains('h-35')) {
        entry.target.classList.remove('h-35');
      }

      if (crHeight <= 350 && crHeight > 300.00001) {
        entry.target.classList.add('h-30');
      } else if (entry.target.classList.contains('h-30')) {
        entry.target.classList.remove('h-30');
      }

      if (crHeight <= 300 && crHeight > 250.00001) {
        entry.target.classList.add('h-25');
      } else if (entry.target.classList.contains('h-25')) {
        entry.target.classList.remove('h-25');
      }

      if (crHeight <= 250) {
        entry.target.classList.add('h-20');
      } else if (entry.target.classList.contains('h-20')) {
        entry.target.classList.remove('h-20');
      }
    }
  });

  const element = document.getElementById('widget-column-chart');
  // const elementItems = document.querySelectorAll('.column-chart.regular .column-chart-area-graph-item');

  useEffect(() => {
    if (element) {
      ro.observe(element);

      let columnChartBars =
        element.children[1].children[0].children[1].children;
      let columnChartXAxisItems =
        element.children[1].children[0].children[3].children;

      let itemWidth = 100 / columnChartBars.length / 2;

      [...columnChartBars].forEach((e) => {
        e.style.width = `${itemWidth}%`;
        e.style.margin = `0 ${itemWidth / 2}%`;
      });

      [...columnChartXAxisItems].forEach((e) => {
        e.style.width = `${itemWidth * 1.5}%`;
        e.style.margin = `0 ${itemWidth / 4}%`;
      });
    }
  }, [element]);

  return (
    <div className="widget widget-column-chart" id="widget-column-chart">
      <div className="widget-header">
        <input
          type="text"
          value="Chart title"
          className="widget-header-title"
          placeholder="Write Chart Title"
        ></input>
        <div className="widget-header-buttons">
          <i className="icon-expand-outlined"></i>
          <i className="icon-cog-outlined"></i>
        </div>
      </div>

      <div className="widget-body">
        <div className="column-chart">
          <div className="column-chart-title">
            <p className="column-chart-title-text">Count</p>
          </div>

          <div className="column-chart-area">
            <div
              className="column-chart-area-item"
              style={{ height: '20%', backgroundColor: '#12b2ed' }}
            >
              <p className="column-chart-area-item-label">18</p>
            </div>
            <div
              className="column-chart-area-item"
              style={{ height: '55%', backgroundColor: '#ffce00' }}
            >
              <p className="column-chart-area-item-label">18</p>
            </div>
            <div
              className="column-chart-area-item"
              style={{ height: '90%', backgroundColor: '#6bd833' }}
            >
              <p className="column-chart-area-item-label">18</p>
            </div>
            <div
              className="column-chart-area-item"
              style={{ height: '80%', backgroundColor: '#535ff0' }}
            >
              <p className="column-chart-area-item-label">18</p>
            </div>
            <div
              className="column-chart-area-item"
              style={{ height: '70%', backgroundColor: '#fc731d' }}
            >
              <p className="column-chart-area-item-label">18</p>
            </div>
          </div>

          <div className="column-chart-y-axis">
            <div className="column-chart-y-axis-item">
              <p className="column-chart-y-axis-item-label">8</p>
              <span className="column-chart-y-axis-item-line"></span>
            </div>
            <div className="column-chart-y-axis-item">
              <p className="column-chart-y-axis-item-label">7</p>
              <span className="column-chart-y-axis-item-line"></span>
            </div>
            <div className="column-chart-y-axis-item">
              <p className="column-chart-y-axis-item-label">6</p>
              <span className="column-chart-y-axis-item-line"></span>
            </div>
            <div className="column-chart-y-axis-item">
              <p className="column-chart-y-axis-item-label">5</p>
              <span className="column-chart-y-axis-item-line"></span>
            </div>
            <div className="column-chart-y-axis-item">
              <p className="column-chart-y-axis-item-label">4</p>
              <span className="column-chart-y-axis-item-line"></span>
            </div>
            <div className="column-chart-y-axis-item">
              <p className="column-chart-y-axis-item-label">3</p>
              <span className="column-chart-y-axis-item-line"></span>
            </div>
            <div className="column-chart-y-axis-item">
              <p className="column-chart-y-axis-item-label">2</p>
              <span className="column-chart-y-axis-item-line"></span>
            </div>
            <div className="column-chart-y-axis-item">
              <p className="column-chart-y-axis-item-label">1</p>
              <span className="column-chart-y-axis-item-line"></span>
            </div>
            <div className="column-chart-y-axis-item">
              <p className="column-chart-y-axis-item-label">0</p>
              <span className="column-chart-y-axis-item-line"></span>
            </div>
          </div>

          <div className="column-chart-x-axis">
            <div className="column-chart-x-axis-item">
              <p className="column-chart-x-axis-item-label">Productivity</p>
            </div>
            <div className="column-chart-x-axis-item">
              <p className="column-chart-x-axis-item-label">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="column-chart-x-axis-item">
              <p className="column-chart-x-axis-item-label">Attitude</p>
            </div>
            <div className="column-chart-x-axis-item">
              <p className="column-chart-x-axis-item-label">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, hic!
              </p>
            </div>
            <div className="column-chart-x-axis-item">
              <p className="column-chart-x-axis-item-label">Teamworking</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColoumnGraph;
