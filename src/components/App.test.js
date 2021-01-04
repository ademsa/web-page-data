import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders ui', () => {
    render(<App />);

    expect(screen.getByText(/Web Page as a Data Source/i)).toBeInTheDocument();
    expect(screen.getByText(/Analyze and extract data from HTML page source/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Paste HTML page source here...')).toBeInTheDocument();
    expect(screen.getByText('Analyze')).toBeInTheDocument();
    expect(screen.getByText('Reset')).toBeInTheDocument();
});

test('analyze and reset', () => {
    const { container } = render(<App />);

    const textarea = screen.getByPlaceholderText('Paste HTML page source here...');
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveValue('');

    expect(container.querySelector('#content .columns')).not.toBeInTheDocument();

    fireEvent.change(textarea, { target: { value: '<h1>Test</h1>' } });

    expect(textarea).toHaveValue('<h1>Test</h1>');

    fireEvent.click(screen.getByText('Analyze'));

    expect(container.querySelector('#content .columns')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Reset'));

    expect(textarea).toHaveValue('');
    expect(container.querySelector('#content .columns')).not.toBeInTheDocument();
});
