import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';

export default function Total() {
    return (
      <React.Fragment>
        <Title>Total</Title>
        <Typography component="p" variant="h4">
          $3,024.00
        </Typography>
      </React.Fragment>
    );
  }