import { render } from '@testing-library/react';
import Home from './Home';

const renderHome = () => render(<Home />);

describe('Home', () => {
  it('renders h1', () => {
    const { getByTestId } = renderHome();
    expect(getByTestId('home')).toBeInTheDocument();
    expect(getByTestId('home')).toHaveTextContent('Home');
  });
});
