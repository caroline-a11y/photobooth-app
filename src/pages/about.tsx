import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const About: React.FC = () => {
    return(
        <div>
            <NavBar />
            <h1>About Us</h1>
            <p>We are dedicated to providing the best photobooth experience.</p>
            <Footer />
    </div>
    );
};

export default About;