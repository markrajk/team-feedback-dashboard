import { ResizeObserver } from '@juggle/resize-observer'
import React, { useEffect } from 'react'

const BarGraph = () => {
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
      const barChart = Array.from(
        widgetBody.children as HTMLCollectionOf<HTMLElement>
      )[0]
      const barChartArea = Array.from(
        barChart.children as HTMLCollectionOf<HTMLElement>
      )[0]
      const barChartAreaItems = Array.from(
        barChartArea.children as HTMLCollectionOf<HTMLElement>
      )
      const barChartXAxis = Array.from(
        barChart.children as HTMLCollectionOf<HTMLElement>
      )[2]
      const barChartXAxisItems = Array.from(
        barChartXAxis.children as HTMLCollectionOf<HTMLElement>
      )

      const widgetHeaderBP = crHeight * 0.071
      const barChartAreaTP = crHeight * 0.045

      //Update sizes
      widgetHeader.style.paddingBottom = `${widgetHeaderBP}px`
      widgetBody.style.maxHeight = `calc(100% - ${widgetHeader}px)`
        ; (entry.target as HTMLElement).style.paddingBottom = `${crHeight * 0.054
          }px`
      barChartArea.style.paddingTop = `${barChartAreaTP}px`
      document.documentElement.style.setProperty(
        '--bar-graph-top-padding',
        barChartAreaTP + 'px'
      )

        ;[...barChartXAxisItems].forEach((e) => {
          Array.from(
            e.children as HTMLCollectionOf<HTMLElement>
          )[1].style.height = `${barChartArea.clientHeight - barChartAreaTP}px`
        })

      //Height of bars
      let height = barChartArea.clientHeight - barChartAreaTP - 5
      let barHeight = height / (barChartAreaItems.length * 1.5)

        ;[...barChartAreaItems].forEach((e) => {
          if (e.classList.contains('bar-chart-area-item')) {
            e.style.height = `${barHeight}px`
            e.style.marginBottom = `${barHeight / 2 <= 10 ? 10 : barHeight / 2}px`
          }
        })
    }
  })

  const element = document.getElementById('widget-bar-chart')

  useEffect(() => {
    if (element) {
      ro.observe(element)
    }
  }, [element])

  return (
    <div className="widget widget-bar-chart" id="widget-bar-chart">
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
        <div className="bar-chart">
          <div className="bar-chart-area">
            <div
              className="bar-chart-area-item"
              style={{ backgroundColor: '#12b2ed', width: '80%' }}
            >
              <p className="bar-chart-area-item-label">Aki Kaurismaki</p>
              <span className="bar-chart-area-item-amount">+20%</span>
            </div>
            <div
              className="bar-chart-area-item"
              style={{ backgroundColor: '#ffce00', width: '70%' }}
            >
              <p className="bar-chart-area-item-label">Ray Croc</p>
              <span className="bar-chart-area-item-amount">+20%</span>
            </div>
            <div
              className="bar-chart-area-item"
              style={{ backgroundColor: '#6bd833', width: '60%' }}
            >
              <p className="bar-chart-area-item-label">Jonathan Ive</p>
              <span className="bar-chart-area-item-amount">+20%</span>
            </div>
            <div
              className="bar-chart-area-item"
              style={{ backgroundColor: '#535ff0', width: '50%' }}
            >
              <p className="bar-chart-area-item-label">Werner von Siemens</p>
              <span className="bar-chart-area-item-amount">+20%</span>
            </div>
            <div
              className="bar-chart-area-item"
              style={{ backgroundColor: '#fc731d', width: '40%' }}
            >
              <p className="bar-chart-area-item-label">Freddie Mercury</p>
              <span className="bar-chart-area-item-amount">+20%</span>
            </div>
            <div
              className="bar-chart-area-item"
              style={{ backgroundColor: '#ff9300', width: '30%' }}
            >
              <p className="bar-chart-area-item-label">Stevie Wonder</p>
              <span className="bar-chart-area-item-amount">+20%</span>
            </div>
            <div
              className="bar-chart-area-item"
              style={{ backgroundColor: '#0080ff', width: '20%' }}
            >
              <p className="bar-chart-area-item-label">Tyler Durden</p>
              <span className="bar-chart-area-item-amount">+20%</span>
            </div>
            <div
              className="bar-chart-area-item"
              style={{ backgroundColor: '#af52de', width: '10%' }}
            >
              <p className="bar-chart-area-item-label">Gregory Porter</p>
              <span className="bar-chart-area-item-amount">+20%</span>
            </div>
            <div
              className="bar-chart-area-item"
              style={{ backgroundColor: '#c4d1cf', width: '10%' }}
            >
              <p className="bar-chart-area-item-label">Gregory Porter</p>
              <span className="bar-chart-area-item-amount">+20%</span>
            </div>
            <div
              className="bar-chart-area-item"
              style={{ backgroundColor: '#27e066', width: '10%' }}
            >
              <p className="bar-chart-area-item-label">Gregory Porter</p>
              <span className="bar-chart-area-item-amount">+20%</span>
            </div>
          </div>

          <div className="bar-chart-area-back">
            <div className="bar-chart-area-back-line"></div>
            <div className="bar-chart-area-back-line"></div>
            <div className="bar-chart-area-back-line"></div>
            <div className="bar-chart-area-back-line"></div>
            <div className="bar-chart-area-back-line"></div>
          </div>

          <div className="bar-chart-x-axis">
            <div className="bar-chart-x-axis-item">
              <p className="bar-chart-x-axis-item-label">1.0</p>
              <div className="bar-chart-x-axis-item-line"></div>
            </div>
            <div className="bar-chart-x-axis-item">
              <p className="bar-chart-x-axis-item-label">2.0</p>
              <div className="bar-chart-x-axis-item-line"></div>
            </div>
            <div className="bar-chart-x-axis-item">
              <p className="bar-chart-x-axis-item-label">3.0</p>
              <div className="bar-chart-x-axis-item-line"></div>
            </div>
            <div className="bar-chart-x-axis-item">
              <p className="bar-chart-x-axis-item-label">4.0</p>
              <div className="bar-chart-x-axis-item-line"></div>
            </div>
            <div className="bar-chart-x-axis-item">
              <p className="bar-chart-x-axis-item-label">5.0</p>
              <div className="bar-chart-x-axis-item-line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BarGraph
