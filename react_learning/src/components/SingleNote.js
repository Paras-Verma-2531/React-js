import React from 'react'
export default function SingleNote(props) {
  return (
    <div className="Text-Box">
        <p className="singleText">{props.note}</p>
    </div>
  )
}
