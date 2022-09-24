import { Box, TextField } from '@mui/material';
import * as React from 'react';

export const InputFilde = (props: any) => {
  return (
    <div>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '95vh' },
          // width: '100vh'
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="plan-text"
          label="Terraform plan"
          multiline
          rows={100}
          value={props.value}
          onChange={props.handleChange}
        />
      </Box>
    </div>
  );
}