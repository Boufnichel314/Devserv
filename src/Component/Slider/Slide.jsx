import React from "react"
import './Slide.css'
export default function Slide(props) {
 return (
    <div className="Slide" style={{ backgroundImage: `url(${props.image})` }}>
        <div className="Title">{props.title}</div>
        <div className="Description">{props.description}</div>
    </div>
  )
}
