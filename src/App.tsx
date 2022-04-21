import { KeyboardArrowUp } from '@mui/icons-material';
import { Box, Container, CssBaseline, Fab, Grid, Skeleton, StyledEngineProvider, ThemeProvider, useScrollTrigger, Zoom } from '@mui/material';
import React, { lazy, Suspense, useMemo, useState } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import './App.scss';
import './Database/Database';
import { ArtCharDatabase, DatabaseContext } from './Database/Database';
import { DBLocalStorage } from './Database/DBStorage';
import Footer from './Footer';
import Header from './Header';
import './i18n';
import { theme } from './Theme';

const Home = lazy(() => import('./PageHome/HomeDisplay'))
const ArtifactDisplay = lazy(() => import('./PageArtifact/ArtifactDisplay'))
const CharacterRouter = lazy(() => import('./PageCharacter/CharacterRouter'))
const ToolsDisplay = lazy(() => import('./PageTools/ToolsDisplay'))
const TestDisplay = lazy(() => import('./PageTest/TestDisplay'))
const SettingsDisplay = lazy(() => import('./PageSettings/SettingsDisplay'))
const WeaponDisplay = lazy(() => import('./PageWeapon/WeaponDisplay'))
const DocumentationDisplay = lazy(() => import('./PageDocumentation/DocumentationDisplay'))
const ScannerDisplay = lazy(() => import('./PageScanner/ScannerDisplay'))

function ScrollTop({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 85, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

function App() {
  const [database, setDatabase] = useState(() => new ArtCharDatabase(new DBLocalStorage(localStorage)))
  const dbContextObj = useMemo(() => ({ database, setDatabase }), [database, setDatabase])
  return <StyledEngineProvider injectFirst>{/* https://mui.com/guides/interoperability/#css-injection-order-2 */}
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DatabaseContext.Provider value={dbContextObj}>
        {/* TODO: Links of Router v5 won't work unless React.StrictMode is put inside the Router https://github.com/remix-run/react-router/issues/7870#issuecomment-1099884642, Either update to v6, or wait for a fix to v5 */}
        <HashRouter basename="/"><React.StrictMode>
          <Grid container direction="column" minHeight="100vh">
            <Grid item >
              <Header anchor="back-to-top-anchor" />
            </Grid>
            <Container maxWidth="xl" sx={{ px: { xs: 0.5, sm: 1, md: 2 } }}>
              <Suspense fallback={<Skeleton variant="rectangular" sx={{ width: "100%", height: "100%" }} />}>
                <Switch>
                  <Route path="/artifact" component={ArtifactDisplay} />
                  <Route path="/weapon" component={WeaponDisplay} />
                  <Route path="/character" component={CharacterRouter} />
                  <Route path="/tools" component={ToolsDisplay} />
                  {process.env.NODE_ENV === "development" && <Route path="/test" component={TestDisplay} />}
                  <Route path="/setting" component={SettingsDisplay} />
                  <Route path="/doc" component={DocumentationDisplay} />
                  <Route path="/scanner" component={ScannerDisplay} />
                  <Route path="/" component={Home} />
                </Switch>
              </Suspense>
            </Container>
            {/* make sure footer is always at bottom */}
            <Grid item flexGrow={1} />
            <Grid item >
              <Footer />
            </Grid>
          </Grid>
          <ScrollTop >
            <Fab color="secondary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUp />
            </Fab>
          </ScrollTop>
        </React.StrictMode></HashRouter>
      </DatabaseContext.Provider>
    </ThemeProvider>
  </StyledEngineProvider>
}
export default App;
