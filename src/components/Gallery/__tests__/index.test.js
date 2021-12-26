import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gallery from '..';

const portrait = { name: "portraits", description: "Portraits of people in my life" };
const commercial = {
    name: "commercial",
    description:
    "Photos of grocery stores, food trucks, and other commercial projects",
};

afterEach(cleanup)

describe('Gallery is rendering', () => {

    it('renders', () => {
        render(<Gallery currentCategory={commercial} />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Gallery currentCategory={commercial} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders', () => {
        const { getByTestId } = render(<Gallery currentCategory={commercial} />);
        expect(getByTestId('h1tag')).toHaveTextContent('Commercial');
    });
});