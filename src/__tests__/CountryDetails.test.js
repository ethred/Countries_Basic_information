import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import CountryDetails from '../components/CountryDetails';
import store from '../redux/store';

test('Check CountryDetail component rendered correctly', () => {
  const tree = render(
    <Provider store={store}>
      <BrowserRouter>
        <CountryDetails />
      </BrowserRouter>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
