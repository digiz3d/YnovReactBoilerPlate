import React from 'react';

import { ThemeProvider } from 'styled-components';
import theme from './src/config/theme';
import MainStackNavigator from './src/config/routes';

export default () => (
  <ThemeProvider theme={theme}>
    <MainStackNavigator />
  </ThemeProvider>
);
