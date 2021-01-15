import { ResizeObserver } from '@juggle/resize-observer'
import React, { useEffect } from 'react'

const ValueBox = () => {
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
      const valueBox = Array.from(
        widgetBody.children as HTMLCollectionOf<HTMLElement>
      )[0]
      const valueBoxItem = valueBox.children[0]
      const valueBoxItemAmount = valueBoxItem.children[0]
      const valueBoxItemText = valueBoxItem.children[1]

      // let valueBoxYP = crWidth * .12;
      // let sizeWidget = Math.max(crWidth, crHeight);
      let scale = 0
      let rem = parseFloat(getComputedStyle(document.documentElement).fontSize)

      console.log(
        parseInt(getComputedStyle(valueBoxItemAmount).fontSize) *
          (valueBoxItem.clientWidth / valueBoxItemAmount.clientWidth / rem)
      )

      if (crWidth <= crHeight) {
        scale = crWidth / 233
      } else {
        scale = (crHeight - widgetHeader.clientHeight) / 188
      }

      valueBox.style.fontSize = `${scale}em`
    }
  })

  const element = document.getElementById('widget-value-box')

  useEffect(() => {
    if (element) {
      ro.observe(element)
    }
  }, [element])

  return (
    <div className="widget widget-value-box" id="widget-value-box">
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
        <div className="value-box">
          <div className="value-box-item">
            <p className="value-box-item-amount">4.2</p>
            <p className="value-box-item-text">P2P Feedback</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ValueBox
