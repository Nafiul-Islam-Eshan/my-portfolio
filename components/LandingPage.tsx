import React from 'react';
import ContactMeForm from './ContactMeForm';

const LandingPage = () => {
    return (
        <div>
            This is <span className="text-2xl text-yellow-500">Landing page</span>

            <ContactMeForm/>
        </div>
    );
};

export default LandingPage;