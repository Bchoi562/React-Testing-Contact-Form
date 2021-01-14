import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

test("renders without errorss", ()=>{
    render(<ContactForm/>);
});

test("user can fill out and submit form", ()=>{
    render(<ContactForm/>);

    const firstNameInput = screen.getByTestId(/Brian/i);
    const lastNameInput = screen.getByLabelText(/Last Name*/i);
    const emailInput = screen.getByLabelText(/Email*/i);
    const messageInput = screen.getByLabelText(/Message/i);

    userEvent.type(firstNameInput, "Brian");
    userEvent.type(lastNameInput, "Choi");
    userEvent.type(emailInput, "BrianChoi@gmail.com");
    userEvent.type(messageInput, "Coding Rules!");

    const submit = screen.getByRole("button");
    userEvent.click(submit);

    const newUser = screen.getByTestId(/Brian/i);
    expect(newUser).toBeInTheDocument();


});

