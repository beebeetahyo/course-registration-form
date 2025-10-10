// RegistrationForm.jsx
import React, { useState } from 'react';
import './App.css'

function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const [errors, setErrors] = useState({});
  const [Submitted, setIsSubmitted] = useState(false)

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    const newErrors = {};

    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required.';
    }

    if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required.';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Enter a valid email address.';
    }

    if (!age) {
      newErrors.age = 'Age is required.';
    } else if (parseInt(age, 10) < 18) {
      newErrors.age = 'You must be at least 18 years old.';
    }

    if (!course) {
      newErrors.course = 'Please select a course.';
    } 

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted('');
    if (validateForm()) {
    const formData = {
      firstName,
      lastName,
      email,
      age,
      course,
    };
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');

      // Clear form and errors
      setFirstName('');
      setLastName('');
      setEmail('');
      setAge('');
      setCourse('');
      setErrors({});
    } else {
      setIsSubmitted('');
    }
  };

  return (
     
    <form onSubmit={handleSubmit}>
      <h1>Course Registration</h1>
         <div className="container">
    
        <label htmlFor="firstName">First Name:</label>
        <input type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
         {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
        <br />

        <label htmlFor="lastName">Last Name:</label>
        <input type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
         {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
         <br />

        <label htmlFor="email">Email:</label>
        <input type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
         {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
         <br />

        <label htmlFor="age">Age:</label>
        <input type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
         {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
         <br />


        <label htmlFor="course">Select Course:</label>
        <select id="course" value={course}
          onChange={(e) => setCourse(e.target.value)}>
        
          <option value="">-- Please choose a course --</option>
          <option value="basic-react">Learning React Basics</option>
          <option value="working-react">Working With React</option>
          <option value="react-form">React Form</option>
        </select>
         {errors.Course && <p style={{ color: 'red' }}>{errors.Course}</p>}
         {setIsSubmitted && <p style={{ color: 'green' }}>{setIsSubmitted}</p>}
      </div>

      <button type="submit">Submit</button>
      
    </form>
  );
}

export default RegistrationForm;
