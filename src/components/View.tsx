import { Box } from '@mui/material';
import * as React from 'react';

export const View = (props: any) => {

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
        <div>{props.value}</div>
      </Box>
    </div>
  )

}