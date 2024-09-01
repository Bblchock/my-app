import '../css/app.scss';
import { useEffect } from 'react';

import { observer } from 'mobx-react-lite';
import { AppBar, Drawer, ThemeBar } from 'modules';
import { CssBaseline, ThemeProvider, useNavigate } from 'shared';
import { themeStore, settingsStore } from 'data';

import { Main, Routing } from 'components';

export const App = observer(() => {
  const navigate = useNavigate();
  const { currentPage } = settingsStore;

  useEffect(() => {
    if (currentPage.id !== 0) {
      navigate(currentPage.path);
    }
  }, [navigate, currentPage]);

  return (
    <ThemeProvider theme={themeStore.theme}>
      <CssBaseline />
      <AppBar />
      <Drawer />
      <ThemeBar />

      <Main>
        <Routing />
      </Main>
    </ThemeProvider>
  );
});
