import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Countries from '../components/Countries';
import store from '../redux/store';

test('Check countries component rendered correctly', () => {
  const tree = render(
    <Provider store={store}>
      <BrowserRouter>
        <Countries />
      </BrowserRouter>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
