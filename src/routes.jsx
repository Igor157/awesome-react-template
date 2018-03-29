import React from 'react';
import ReactDOM from 'react-dom';
// import './default.scss';
// import styles from './ik-currency-page.style.scss';
import {
  Route,
  NavLink,
  Switch
} from 'react-router-dom';

import {About} from './components/About/About';
import {Auth} from './components/Auth/Auth';
import {Home} from './components/Home/Home';
import {Navigation} from './components/Navigation/Navigation';


export class Routes extends React.Component {
  render() {
    return (
        <div className="ik-currency-page">
      <Route
        path='/'
        render={() =>
          <div className="ik-currency-page">
            <Switch>
              <Route
                path='/about'
                render={() => <FilterSearch
                  className="ik-currency-page__search ik-currency-page__search--unvizible"
                />}
              />
              <Route
                path='/favorite'
                render={() => <FilterSearch
                  className="ik-currency-page__search ik-currency-page__search--unvizible"
                />}
              />
              <Route
                path='/'
                render={() => <FilterSearch
                  className="ik-currency-page__search"
                />}
              />
            </Switch>
            <ConnectedNavigation
              className="ik-currency-page__navigation"
            />
            <Switch>
              <Route
                exact path='/'
                render={() => <ChooseAvailableCurrencies
                  className="ik-currency-page__available-currencies"
                />}
              />
              <Route
                path='/calculator'
                render={() => <ChooseAvailableCurrencies
                  className="ik-currency-page__available-currencies"
                />}
              />
            </Switch>
            <Switch>
              <Route
                path='/calculator'
                render={() => <ConnectedCurrencyCalculator
                  className="ik-currency-page__currency-calculator"
                />}
              />
              <Route
                exact path='/'
                render={() => <ConnectedSaveableCurrencyDynamic
                  className="ik-currency-page__saveable-currency-dynamic"
                />}
              />
              <Route
                path='/favorite'
                render={() => <ConnectedFavoriteCurrencies
                  className="ik-currency-page__favorite-currencies"
                />}
              />
              <Route
                path='/about'
                render={() =>
                  <About
                  className="ik-currency-page__about"
                  />
                }
              />
            </Switch>
          </div>
        }
      />
    );
  }
}
