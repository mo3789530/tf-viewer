import { Box } from '@mui/material';
import * as React from 'react';
import { parse } from '../libs/parse';
import { sanitizer } from '../libs/sanitizer';
import '../App.css';


export const View = (props: any) => {
  const sanitized = sanitizer(props.value);
  
  const tf = parse(sanitized);
  return (
    <div>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '90vh' },
          // width: '100vh'
        }}
        noValidate
        autoComplete="off"
      >
        <div dangerouslySetInnerHTML={{__html: tf}}></div>
      </Box>
    </div>
  )

}