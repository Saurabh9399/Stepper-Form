import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const PersonalInfoForm = ({ onNext, onBack }) => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
  });

  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
    // Assuming form submission is successful, proceed to the next step
    onNext();
  };

  return (
    <div className="w-2/3 h-full mx-auto pt-[10%]">
      <h1 className="text-4xl font-bold mb-4 ml-[16.5%]">Personal Info</h1>
      <p className="text-gray-600 mb-6 ml-[16.5%]">Please provide your name, email address, and phone number.</p>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form className="flex flex-col items-center">
          <div className="mt-8 mb-8 w-full sm:w-2/3">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              className="mt-1 p-3 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
              placeholder="e.g. Stephen King"
            />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          <div className="mb-8 w-full sm:w-2/3">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <Field
              type="text"
              id="email"
              name="email"
              className="mt-1 p-3 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
              placeholder="e.g. stephenking@gmail.com"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          <div className="mb-8 w-full sm:w-2/3">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <Field
              type="text"
              id="phone"
              name="phone"
              className="mt-1 p-3 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
              placeholder="e.g. +1 234 567 890"
            />
            <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          <div className="flex justify-around mt-[10%] w-[105%]">
          <div className="bg-gray-700 text-white px-6 py-3 rounded">
          <button type="button" onClick={onBack} >
          Go Back
          </button>
          </div>
          <div className="bg-gray-700 text-white rounded px-6 py-3">
            <button type="submit">
              Next Step
            </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default PersonalInfoForm;
