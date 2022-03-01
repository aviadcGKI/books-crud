import React from 'react'
import PreviewList from '../styledComponents/styledPreviewList'

function PreviewList(props) {
  return (
    <PreviewList>
        <h2>{props.title}</h2>
        <h4>{props.subTitle}</h4>
    </PreviewList>
  )
}

export default PreviewList