import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import BookingForm from "./BookingForm"; // Adjust the path accordingly

describe("Booking Form", () => {
    const availableTimes = ['17:00', '17:30'];
    const today = new Date().toISOString().split('T')[0];
    const dispatch = jest.fn();
    const submitData = jest.fn();
    test("should render all fields and their default values", async () => {
        render(
            <BookingForm availableTimes={availableTimes} submitData={submitData} updateTimes={dispatch}/>
        );
        const dateInput = screen.getByLabelText(/Select Date:/);
        const timeSelect = screen.getByLabelText(/Select Time:/);
        const timeOptions = await screen.findAllByTestId("times")
        const peopleInput = screen.getByLabelText(/Number of People:/)
        const occasionSelect = screen.getByLabelText(/Occasion:/)
        const occasionOptions = await screen.findAllByTestId("occasions");
        const submitButton = screen.getByRole("button");

        fireEvent.change(dateInput, { target: { value: today } });
        fireEvent.change(peopleInput, { target: { value: 1}});
        fireEvent.click(submitButton);
        
        expect(dateInput).toBeInTheDocument();
        expect(dateInput).toHaveAttribute('type', 'date');
        expect(dateInput).toHaveAttribute('id', 'date');
        expect(dateInput).toHaveValue(today);


        expect(timeSelect).toBeInTheDocument();
        expect(timeSelect).toHaveAttribute('id', 'time');
        expect(timeOptions.length).toBe(2);

        expect(peopleInput).toBeInTheDocument();
        expect(peopleInput).toHaveAttribute('id', 'people');
        expect(peopleInput).toHaveAttribute('type', 'number');
        expect(peopleInput).toHaveValue(1);

        expect(occasionSelect).toBeInTheDocument();
        expect(occasionSelect).toHaveAttribute('id', 'occasion');
        
        
        expect(submitButton).toBeInTheDocument();
        expect(submitButton).toHaveAttribute('type', 'submit');
        expect(submitButton).toBeEnabled();
    })
});