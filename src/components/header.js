import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Header = () => (
  <AppBar position="sticky">
    <Toolbar>
      <Typography variant="title" color="inherit">
        Album Search
      </Typography>
    </Toolbar>
  </AppBar>
)

export default Header
