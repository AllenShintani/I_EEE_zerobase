//eslint-disable-next-line
import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'

const ItalicInput = () => {
  const [content, setContent] = useState('')

  const handleInput = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLDivElement
    setContent(target.innerHTML)
  }

  return (
    <Box
      component="div"
      contentEditable
      onInput={handleInput}
      sx={{
        fontStyle: 'italic',
        border: '1px solid rgba(0, 0, 0, 0.23)',
        borderRadius: 4,
        padding: 1,
        minHeight: 56,
        fontSize: '1rem',
        fontFamily: 'Roboto, sans-serif',
      }}
    >
      {content}
    </Box>
  )
}

export default ItalicInput
