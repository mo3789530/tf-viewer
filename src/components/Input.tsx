import { TextField } from '@mui/material';
import * as React from 'react';

export const InputFilde = (props: any) => {
  return (
    <div style={{width: "50%"}}>
        <TextField
          id="plan-text"
          label="Terraform plan"
          multiline
          rows={100}
          value={props.value}
          onChange={props.handleChange}
          fullWidth={true}
        />
    </div>
  );
}