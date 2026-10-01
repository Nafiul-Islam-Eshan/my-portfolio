import React from 'react';
import ContactMeForm from './ContactMeForm';

const LandingPage = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Welcome to My Portfolio</h1>
            <p className="text-center text-gray-600">
                This is a simple landing page for my portfolio.
            </p>

            

            <ContactMeForm/>
        </div>
    );
};

export default LandingPage;