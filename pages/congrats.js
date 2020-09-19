import { useState } from 'react'
import Appbar from '../components/appbar'
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';


export default function congrats() {

  return (
    <div>
      <Typography>congrats</Typography>
      <Button href='/listwords' >Continue</Button>
    </div>

  )
}