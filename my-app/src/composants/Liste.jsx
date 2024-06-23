import React from 'react'

export default function Liste(props) {
  return (
<ul>
    {props.tableau.map(item => <li>{item}</li>)}
</ul>  )
}
