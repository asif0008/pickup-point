import { Button } from '@mui/material'
import React from 'react'

const CustomBtn = ({ value, size, bg, color, weight, click }) => {
  return (
    <>
      <Button sx={{
        background: bg,
        width: size,
        fontSize: '14px',
        color: color,
        borderRadius: '8px',
        fontWeight: weight ? weight : '400',
        fontFamily: '"Glory", sans-serif !important',
        height: '40px',
        "&:hover": {
          background: '#ff5b5c !important'
        }
      }}
      onClick={click}
      >
        {value}
      </Button>
    </>
  )
}

export default CustomBtn