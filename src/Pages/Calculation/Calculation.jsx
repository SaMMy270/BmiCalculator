import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import "./Calculation.css";
import under from './under.jpg';
import norm from './norm.jpg';
import over from './over.jpg';
import obese from './obese.jpg';
import chart from './../Guide/bmichart.webp';
//import extreme from './extreme.png'

function Calculation() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [bmiCategory, setBmiCategory] = useState(''); // New state for BMI category
    const [showImage, setShowImage] = useState(false); // New state for image visibility

    const handleHeightChange = (event) => {
        setHeight(event.target.value);
    };

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const bmical = (height, weight) => {
        if ((!height || !weight) || (!height && !weight)) {
            return 0;
        }
        else {
            // Convert height from feet to meters (1 ft = 0.3048 m)
            const heightInMeters = height * 0.3048;
            // Calculate BMI (weight in kg / (height in m)^2)
            return weight / (heightInMeters * heightInMeters);
        }
    };

    const getBmiCategory = (bmiValue) => {
        if (bmiValue < 10) {
            return 'Invalid'; // or another appropriate message
        } else if (bmiValue >= 10 && bmiValue < 18.5) {
            return 'Underweight';
        } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
            return 'Normal weight';
        } else if (bmiValue >= 25 && bmiValue < 29.9) {
            return 'Overweight';
        } else {
            return 'Obesity'; // Assuming BMI of 30 or more is classified as obesity
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        const calculatedBmi = bmical(height, weight); // Calculate BMI
        setBmi(calculatedBmi); // Update the BMI state
        setBmiCategory(getBmiCategory(calculatedBmi)); // Update the BMI category state
        setShowImage(true); // Show the image when BMI is calculated
    };

    const getImage = () => {
        switch (bmiCategory) {
            case 'Underweight':
                return under;
            case 'Normal weight':
                return norm;
            case 'Overweight':
                return over;
            case 'Obesity':
                return obese;
            case 0:
                return chart;
            default:
                return chart;
        }
    };

    return (
        <div>
            <Navbar />
            <div className='main_bmi'>
                <h1>BMI Calculator</h1>

                <form className='Bmi_cal' onSubmit={handleSubmit}>
                    <label>
                        Height (ft): &nbsp; &nbsp;
                        <input type="number" value={height} onChange={handleHeightChange} />
                    </label>
                    <br />
                    <label>
                        Weight (kg): &nbsp;
                        <input type="number" value={weight} onChange={handleWeightChange} />
                    </label>
                    <br />
                    <div className='btn-top'>
                        <button className='btn' type="submit">Calculate BMI</button>
                    </div>
                </form>
                {bmi !== null && (
                    <p className='Result'>
                        <span style={{ color: "red" }}>Result :</span> Your BMI is {bmi.toFixed(2)} kg/m², Category: {bmiCategory}
                    </p>
                )}

                {/* Conditional rendering of the image */}
                {showImage && (
                    <div className='imageCat'>
                        <img className="cat" src={getImage()} alt="Category" />
                    </div>
                )}
                {/* <div className='image-container'>
                    <img className='imago' src='' alt="BMI Illustration" />
                </div> */}
            </div>
        </div>
    );
}

export default Calculation;