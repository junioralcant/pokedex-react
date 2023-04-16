import {render} from '@testing-library/react';
import App from './App';

describe('Jest', () => {
  it('testing jest', () => {
    expect(1).toBe(1);
  });

  it('App', () => {
    const {debug} = render(<App />);
    console.log(debug());
  });
});
