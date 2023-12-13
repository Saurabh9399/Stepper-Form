import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPersonalInfo } from "../../redux/userSlice";

const PersonalInfoForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const personalInfo = useSelector(store => store.user.personalInfo);
  const initialValues = {
    name: personalInfo.name || "",
    email: personalInfo.email || "",
    phone: personalInfo.phone || "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
  });

  const handleSubmit = (values, { setSubmitting, isValid, dirty }) => {
    // Formik provides the setSubmitting function, which can be used to prevent
    // the form submission while validation is still being performed.

    navigate("/plan")
    console.log(values);
    dispatch(addPersonalInfo(values));
    // Set submitting to false to allow the form to be submitted again
    setSubmitting(false);
  };

  return (
    <div className="w-2/3 h-full mx-auto pt-[5%]">
      <h1 className="text-4xl font-bold mb-4 ml-[16.5%]">Personal Info</h1>
      <p className="text-gray-600 mb-6 ml-[16.5%]">Please provide your name, email address, and phone number.</p>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ dirty, isValid }) => (
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
                // value={personalInfo.name}
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
                // value={personalInfo.email}
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
                // value={personalInfo.phone}
              />
              <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="flex justify-around mt-[6%] w-[105%]">
              <div className="bg-transparent text-white px-6 py-3 rounded"></div>
              {(
                <div className="bg-gray-700 text-white rounded px-6 py-3">
                    <button type="submit">Next Step</button>
                </div>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PersonalInfoForm;
