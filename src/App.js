import { BrowserRouter as AppRouter, Route, Switch, } from "react-router-dom";
import React, { Suspense } from 'react';
import ErrorPage from "./pages/ErrorPage";
import LoadingSkeleton from "./components/LoadingSkeleton";
const CustomerPage = React.lazy(() => import('./pages/Customer'))
function App() {
  return (
    <AppRouter>
      <Suspense fallback={<></>}>
        <Switch>
          <Route exact path="/:customer" >
            <CustomerPage />
          </Route>
          <Route path="/" >
            <ErrorPage />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Suspense>
    </AppRouter>
  );
}

export default App;
