//eslint-disable-next-line
import React from 'react'
import { useState } from 'react'
import {
  TextField,
  Box,
  Button,
  ThemeProvider,
  createTheme,
  Typography,
} from '@mui/material'
import { grey, red, green, blue } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: blue[500],
    },
  },
})
const isValidIEEEFormat = (text: string): boolean => {
  // ここにIEEEのルールを正規表現で記述してください。
  const ieeeRegex =
    /^\[\d+\]\s+((?:\w|\.)+\s*(?:,|\.)\s*)*(?:“[^”]+,”\s*)(?:(?:[\w\s\.,])+,\s*)*vol\.\s*\d+\s*,\s*no\.\s*\d+\s*,\s*pp\.\s*\d+-\d+\s*,\s*(?:\w+|\d{1,2})\s*\d{4}\.\s*\[Online\]\.\s*Available:\s*(?:https?:\/\/)?(?:[\w\-])+(\.(?:[\w\-])+)*(\/[\w\-]+)*(\/[\w\-]+)*\.(?:[\w\-])+(\?[\w=&]+)?\.\s*Accessed on:\s*\w+\s*\d{1,2}\s*,\s*\d{4}\.$/
  return ieeeRegex.test(text)
}

const App: React.FC = () => {
  const [inputText, setInputText] = useState('')
  const [bgColor, setBgColor] = useState('')

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value)
  }

  const handleButtonClick = () => {
    if (isValidIEEEFormat(inputText)) {
      setBgColor(green[100])
    } else {
      setBgColor(red[100])
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundColor: bgColor,
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            marginBottom: 4,
            color: theme.palette.secondary.main,
            fontWeight: 'bold',
          }}
        >
          IEEE Checker
        </Typography>
        <TextField
          label="英文を入力"
          value={inputText}
          onChange={handleTextChange}
          multiline
          minRows={3}
          maxRows={10}
          fullWidth
          variant="outlined"
          sx={{ marginY: 5 }}
        />
        <Button
          variant="contained"
          onClick={handleButtonClick}
          sx={{ marginLeft: 160 }}
        >
          判断する
        </Button>
      </Box>
    </ThemeProvider>
  )
}

export default App
