import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { ResizeObserver } from '@juggle/resize-observer'

import { Line } from 'react-chartjs-2'
import { ENETRESET } from 'constants'

let options = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
    position: 'right',
    align: 'center',

    labels: {
      padding: 30,
    },
  },
  legendCallback: function (chart: any) {
    return chart.data.datasets
      .map((e: any, i: number, arr: any) => {
        return `
              <div className="chart-label chart-label-${i}">

                  <div className="pretty p-svg p-curve">
                      <input type="checkbox" name="${e.label}-${i}" id="${e.label}-${i}"/>
                      <div className="state p-primary">
                          
                          <svg className="svg svg-icon" viewBox="0 0 20 20">
                              <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style={{stroke: whCe;fill':white;'}}</path>
                          </svg>
                          <label>&nbsp;</label>
                      </div>
                  </div>

                  <label className="chart-label-label" for="${e.label}-${i}">${e.label}</label>
                  <span style={{background-color: $C.borde'rColor}'}}</span>
              </div>`
      })
      .join('')
  },
  plugins: {
    datalabels: {
      display: false,
    },
  },
  scales: {
    yAxes: [
      {
        ticks: {
          fontColor: '#505050',
          fontFamily: '"Inter", sans-serif',
          fontSize: 10,
          fontStyle: '400',
          beginAtZero: true,
          padding: 8.6,
          max: 5,
          min: 1,
          stepSize: 1,
        },
        gridLines: {
          color: '#f5f6f8',
          lineWidth: 1.5,
          display: true,
          drawTicks: false,
          drawOnChartArea: true,
          drawBorder: false,
        },
      },
    ],
    xAxes: [
      {
        ticks: {
          maxRotation: 0,
          fontColor: '#505050',
          fontFamily: '"Inter", sans-serif',
          fontSize: 10.5,
          fontStyle: '400',
          beginAtZero: false,
          padding: 10,
        },
        gridLines: {
          display: false,
          drawTicks: false,
          drawOnChartArea: false,
          drawBorder: false,
        },
      },
    ],
  },
}

let dat = {
  datasets: [
    {
      // showLine: false,
      label: 'Attitude',
      data: [null, 3, 3.4, 3.5, 3.4, 3.5, 4, 3, 3.4, 3.5, 3.4, 3.5, 4, null],
      fill: false,
      borderWidth: 1.5,
      borderColor: '#137ff6',
      pointRadius: 4.5,
      pointBackgroundColor: '#ffffff',
      pointBorderColor: '#137ff6',
      pointBorderWidth: 1.5,
    },
  ],
  labels: [
    '',
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
    '',
  ],
}

const LineGraph = (props: any) => {
  const { data } = props
  const [newData, setNewData] = useState(dat)
  useEffect(() => {
    if (data) {
      infusedData()
    }
  }, [data])

  // REUSABLE RESIZE OBSERVER

  var ro = new ResizeObserver((entries) => {
    for (let entry of entries) {
      const crWidth = entry.borderBoxSize[0].inlineSize
      const crHeight = entry.borderBoxSize[0].blockSize

      const widgetHeader = Array.from(
        entry.target.children as HTMLCollectionOf<HTMLElement>
      )[0]
      const widgetBody = Array.from(
        entry.target.children as HTMLCollectionOf<HTMLElement>
      )[1]
      const lineChart = widgetBody.children[0]
      const lineChartTitle = document.querySelector(
        '.line-chart-title'
      ) as HTMLElement
      const lineChartCanvas = document.querySelector(
        '.line-chart-main'
      ) as HTMLElement
      const widgetLegend = Array.from(
        entry.target.children as HTMLCollectionOf<HTMLElement>
      )[2]
      const widgetLegendItems = widgetLegend.children[1].children

      const widgetHeaderBP = crHeight * 0.071
      let widgetLegendItemsWidth = 0

      //Update sizes
      widgetHeader.style.paddingBottom = `${widgetHeaderBP}px`
      widgetBody.style.maxHeight = `calc(100% - ${
        widgetHeader.clientHeight + widgetLegend.clientHeight
      }px)`
      if (lineChartCanvas)
        lineChartCanvas.style.maxWidth = `calc(100% - ${lineChartTitle.clientWidth}px)`

      //Legend size check
      ;[...widgetLegendItems].forEach((e) => {
        widgetLegendItemsWidth += e.clientWidth + 38
      })

      if (widgetLegend.clientWidth * 2 - 28 <= widgetLegendItemsWidth) {
        widgetLegend.classList.add('small')
      } else {
        widgetLegend.classList.remove('small')
      }

      if (crWidth <= 700.00001) {
        console.log('LESS THAN 700')
        dat.datasets[0].data[dat.datasets[0].data.length - 2]
        ;(dat.labels = [
          '',
          'Jan',
          '',
          'Mar',
          '',
          'May',
          '',
          'Jul',
          '',
          'Sep',
          '',
          'Nov',
          '',
          '',
        ]),
          infusedData()
      } else {
        console.log('MORE THAN 700')
        ;(dat.labels = [
          '',
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
          '',
        ]),
          infusedData()
      }
      /*
          if (crWidth <= 700.00001) {
            //Code for line chart
            if (entry.target.classList.contains('line-chart')) {
              chart01.data.labels = chart01.data.labels.map(e => { return e.substring(0, 3) });
              chart01.update();
              // chart01.data.labels = [
              //   "Jan",
              //   "Feb",
              //   "Mar",
              //   "Apr",
              //   "May",
              //   "Jun",
              //   "Jul",
              //   "Aug",
              //   "Sep",
              //   "Oct",
              //   "Nov",
              //   "Decr"
              // ]
            }
          } else {
            if (entry.target.classList.contains('line-chart')) {
              chart01.data.labels = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
              ]
            }
      
          }
          */
    }
  })

  // var roLegend = new ResizeObserver((entries) => {
  //   for (let entry of entries) {
  //     if (
  //       entry.target?.firstElementChild &&
  //       entry.target.clientWidth <
  //       entry.target.firstElementChild.clientWidth + 20
  //     ) {
  //       entry.target.classList.add('small')
  //     } else {
  //       entry.target.classList.remove('small')
  //     }
  //   }
  // })

  // const element = document.getElementById('line-chart-widget')
  // const legend = document.getElementById('chart-legend-widget')
  // useEffect(() => {
  //   if (element && legend) {
  //     ro.observe(element)
  //     roLegend.observe(legend)
  //   }
  // }, [element, legend])

  var roLegend = new ResizeObserver((entries) => {
    for (let entry of entries) {
      if (
        entry.target?.firstElementChild &&
        entry.target.clientWidth <
          entry.target.firstElementChild.clientWidth + 20
      ) {
        entry.target.classList.add('small')
      } else {
        entry.target.classList.remove('small')
      }
    }
  })

  const element = document.getElementById('widget-line-chart')
  //const legend = document.getElementById('chart-legend-widget')
  useEffect(() => {
    if (element) {
      ro.observe(element)
      //roLegend.observe(legend)
    }
  }, [element])

  const infusedData = () => {
    if (data) {
      const oldData = { ...newData }
      oldData.datasets[0].data = data
      setNewData(oldData)
    }
  }
  return (
    <div className="widget widget-line-chart" id="widget-line-chart">
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
        <div className="line-chart">
          <p className="line-chart-title">Average review</p>
          <div className="line-chart-main">
            <Line data={dat} options={options} />
          </div>
        </div>
      </div>

      <div className="chart-legend">
        <div className="chart-legend-cover">
          <p className="chart-legend-cover-text">
            Click <button>here</button> or hover lines to see legend
          </p>
        </div>
        <div className="chart-legend-main">
          <div className="chart-legend-main-item">
            <div
              className="chart-legend-main-item-color"
              style={{ borderColor: '#0089ff' }}
            ></div>
            <p className="chart-legend-main-item-text">Attitude</p>
          </div>
          <div className="chart-legend-main-item">
            <div
              className="chart-legend-main-item-color"
              style={{ borderColor: '#0089ff' }}
            ></div>
            <p className="chart-legend-main-item-text">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="chart-legend-main-item">
            <div
              className="chart-legend-main-item-color"
              style={{ borderColor: '#0089ff' }}
            ></div>
            <p className="chart-legend-main-item-text">Teamworking</p>
          </div>
          <div className="chart-legend-main-item">
            <div
              className="chart-legend-main-item-color"
              style={{ borderColor: '#0089ff' }}
            ></div>
            <p className="chart-legend-main-item-text">
              Lorem ipsum dolor sit.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LineGraph
