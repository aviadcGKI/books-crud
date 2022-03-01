import React from 'react'
import StyledPreviewList from '../styledComponents/styledPreviewList'

function PreviewList(props) {
  return (
    <StyledPreviewList>
        <h2>{props.title}</h2>
        <h4>{props.subTitle}</h4>
    </StyledPreviewList>
  )
}

export default PreviewList