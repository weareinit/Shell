/**
 * Mentor Application form
 */

import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NumberFormat from "react-number-format";
import {
  Select,
  Button,
  Checkbox,
  Input,
  InlineError,
  BlockError,
  Loading,
  MultiSelect,
  ReCAPTCHA
} from "../../components";
import { mentorInitialValues, mentorValidation } from "../../utils/validations";
import services from "../../services/routes";
import "./styles.css";

const mentoredData = [
  { label: "Yes", value: "Yes" },
  { label: "No", value: "No" }
];
const availabilityData = [
  { label: "Friday Night, September 20", value: "Friday Night, September 20" },
  {
    label: "Saturday Morning, September 21",
    value: "Saturday Morning, September 21"
  },
  {
    label: "Saturday Afternoon, September 21",
    value: "Saturday Afternoon, September 21"
  },
  {
    label: "Saturday Evening, September 21",
    value: "Saturday Evening, September 21"
  },
  {
    label: "Sunday Morning, September 22",
    value: "Sunday Morning, September 22"
  }
];
const skillsData = [
  { label: "Frontend", value: "Frontend" },
  { label: "Backend", value: "Backend" },
  { label: "UI/UX", value: "UI/UX" },
  { label: "Mobile Development", value: "Mobile Development" },
  { label: "Game Development", value: "Game Development" },
  { label: "Machine Learning", value: "Machine Learning" },
  { label: "Cybersecurity", value: "Cybersecurity" },
  { label: "Hardware", value: "Hardware" },
  { label: "Other", value: "Other" }
];
const shirtSizeData = [
  { label: "XS", value: "XS" },
  { label: "S", value: "S" },
  { label: "M", value: "M" },
  { label: "L", value: "L" },
  { label: "XL", value: "XL" }
];

const Mentor = ({ history }) => {
  // states
  const [loading, setLoading] = useState(false);
  const [isErrored, setIsErrored] = useState(false);
  const [submittingWithError, setSubmittingWithError] = useState(false);
  const [submittionState, setSubmittionState] = useState("Submitting...");
  const [details, setDetails] = useState("");

  // ....
  const successAction = () => {
    setLoading(false);
    setSubmittionState("Submitted");
    setSubmittingWithError(false); // calling this here because there's a weird bug with it which i won't be fixing ...
    // ^^ temp fix
  };

  // Displays error when submitting with bad inputs
  const setInputError = () => {
    setSubmittingWithError(true);

    setTimeout(() => {
      setSubmittingWithError(false);
    }, 10000);
  };

  // Displays error message
  const faillure = err => {
    setLoading(false);
    setIsErrored(true);
    setDetails(err);
    setSubmittionState("Failed");
    setTimeout(() => {
      setIsErrored(false);
    }, 10000);
  };

  /**
   * Submits application form
   * @param {Object} - form data
   */
  const handleSubmit = values => {
    setLoading(true);
    const apply = async () =>
      await services.mentor(values, faillure, successAction);
    apply();
  };

  let status = () =>
    (submittionState === "Submitted" && (
      <div className="dashboard-page application-overlay negative-margin">
        <div className="submission-modal">
          <h1>{submittionState}</h1>
          <p>You have successfully registered to be a mentor.</p>
          <br />
          <p>Feel free to close this window...</p>
          <FontAwesomeIcon
            style={{ margin: "auto", display: "block" }}
            icon="check"
            size="5x"
          />
        </div>
      </div>
    )) ||
    (loading && (
      <div className="dashboard-page application-overlay negative-margin">
        <div className="submission-modal">
          <h1>{submittionState}</h1>
          <Loading size={40} color="white" />
        </div>
      </div>
    )) ||
    (isErrored && (
      <div className="dashboard-page application-overlay negative-margin">
        <div className="submission-modal failed">
          <h1>{submittionState}</h1>
          <p>{details}</p>
          <p> If this error persist, contact us at upe@fiu.edu</p>
          <FontAwesomeIcon
            style={{ margin: "auto", display: "block" }}
            icon="times"
            size="7x"
          />
        </div>
      </div>
    )) || <></>;

  return (
    <div className="mentor-page">
      {status()}
      <h1>Become a Mentor!</h1>
      <br />
      <p className="mentor-explanation">
        Poop on grasses. Tuxedo cats always looking dapper bring your owner a
        dead bird have a lot of grump in yourself because you can't forget to be
        grumpy and not be like king grumpy cat and small kitty warm kitty little
        balls of fur
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      {submittingWithError && !loading && (
        <BlockError
          errors={[
            "Water you doing? 😲 Scroll down to fix the errors on the form"
          ]}
          shouldShow={submittingWithError}
        />
      )}
      <Formik
        initialValues={mentorInitialValues}
        validationSchema={mentorValidation}
        onSubmit={handleSubmit}
        enableReinitialize={false}
      >
        {({
          values,
          touched,
          errors,
          handleSubmit,
          setFieldValue,
          setFieldTouched,
          onChange
        }) => (
          <div className="application-container">
            <Form onSubmit={handleSubmit}>
              <div className="full-container">
                <Input
                  className="application-input"
                  name="firstName"
                  label="First Name *"
                  placeholder="Jehf"
                  error={!!touched.firstName && !!errors.firstName}
                  errorVal={errors.firstName}
                />
              </div>
              <div className="full-container">
                <Input
                  className="application-input"
                  name="lastName"
                  label="Last Name *"
                  placeholder="Doe"
                  error={!!touched.lastName && !!errors.lastName}
                  errorVal={errors.lastName}
                />
              </div>
              <div className="full-container">
                <Input
                  className="application-input"
                  name="email"
                  type="email"
                  label="Email *"
                  placeholder="roary@fiu.edu"
                  error={!!touched.email && !!errors.email}
                  errorVal={errors.email}
                />
              </div>
              <div className="full-container">
                <InlineError
                  shouldShow={!!touched.resume && errors.resume}
                  error={errors.resume}
                  label="Phone Number *"
                  name="phoneNumber"
                />
                <NumberFormat
                  format="+1 (###) ###-####"
                  className="text-input"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="+1 (786)-000-0000"
                  onValueChange={e => setFieldValue("phoneNumber", e.value)}
                  style={
                    !!touched.phoneNumer && errors.phoneNumer
                      ? { border: "2px solid red" }
                      : null
                  }
                />
              </div>
              <div className="full-container">
                <Input
                  className="application-input"
                  name="organization"
                  type="text"
                  label="What company or organization are you affiliated with? *"
                  placeholder="Florida International University"
                  error={!!touched.organization && !!errors.organization}
                  errorVal={errors.organization}
                />
              </div>
              <div className="full-container">
                <Select
                  className="application-input"
                  label="Have you mentored before or had any kind of teaching experience? *"
                  name="mentored"
                  id="mentored"
                  test={values}
                  value={values.mentored}
                  onBlur={setFieldTouched}
                  onChange={setFieldValue}
                  touched={touched.mentored}
                  error={errors.mentored}
                  placeholder="Select one"
                  options={mentoredData}
                />
              </div>
              <div className="full-container">
                <InlineError
                  shouldShow={errors.elaborate && touched.elaborate}
                  error={errors.elaborate}
                  label="What technologies do you know? "
                />
                <Field
                  name="elaborate"
                  render={({ field, form: { touched, errors } }) => (
                    <textarea
                      {...field}
                      className="application-input text-input"
                      rows="4"
                      placeholder="ExpressJS, ReactJS, Pytorch, Python, Rasberry Pi..."
                      style={
                        !!errors.elaborate && touched.elaborate
                          ? { border: "2px solid red" }
                          : null
                      }
                    />
                  )}
                />
              </div>
              <div className="full-container">
                <Select
                  className="application-input"
                  label="T-shirt Size *"
                  name="shirtSize"
                  id="shirtSize"
                  test={values}
                  value={values.shirtSize}
                  onBlur={setFieldTouched}
                  onChange={setFieldValue}
                  touched={touched.shirtSize}
                  error={errors.shirtSize}
                  placeholder="Select one"
                  options={shirtSizeData}
                />
              </div>

              <div className="full-container">
                <MultiSelect
                  className="application-input"
                  label="What skills do you have that would be great to mentor for? *"
                  id="skills"
                  name="skills"
                  placeholder="Select all that apply"
                  onChange={setFieldValue}
                  value={values.skills}
                  onBlur={setFieldTouched}
                  touched={touched.skills}
                  error={errors.skills}
                  options={skillsData}
                  defaultValue={[]}
                />
              </div>
              <div className="full-container">
                <MultiSelect
                  className="application-input"
                  label="Select the days you would be available for mentoring *"
                  name="availability"
                  id="availability"
                  placeholder="Select all that apply"
                  value={values.availability}
                  onBlur={setFieldTouched}
                  onChange={setFieldValue}
                  touched={touched.availability}
                  error={errors.availability}
                  options={availabilityData}
                  defaultValue={[]}
                />
              </div>
              <div className="agreement">
                <p id="mlhAffiliation">
                  <Field
                    id="mlh--field"
                    component={Checkbox}
                    name="mlhCOC"
                    onChange={onChange}
                  />
                  <label htmlFor="mlh--field">
                    I agree to the terms of both the{" "}
                    <a
                      href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                      rel="noopener noreferrer"
                      target="_blank"
                      style={{
                        color: "var(--shell-sand)",
                        textDecoration: "underline"
                      }}
                    >
                      MLH Contest Terms and Conditions
                    </a>{" "}
                    and the{" "}
                    <a
                      href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                      rel="noopener noreferrer"
                      target="_blank"
                      style={{
                        color: "var(--shell-sand)",
                        textDecoration: "underline"
                      }}
                    >
                      MLH Privacy Policy
                    </a>
                    .
                  </label>
                </p>
                <InlineError
                  shouldShow={errors.mlhCOC && touched.mlhCOC}
                  error={errors.mlhCOC}
                />
              </div>
              <div className="field-div" style={{ margin: "15px 0" }}>
                <ReCAPTCHA
                  shouldShow={
                    (values.firstName &&
                      values.lastName &&
                      values.email &&
                      values.phoneNumer &&
                      values.organization,
                    values.mentored && values.elaborate,
                    values.shirtSize && values.availability)
                  }
                  onChange={key => setFieldValue("captcha", key)}
                />
              </div>
              <div className="application-submit-button">
                <div className="application-button-wrapper">
                  <Button
                    type="submit"
                    title="Submit"
                    id="application"
                    action={() => {
                      if (errors) {
                        setInputError();
                        window.scrollTo(0, 0);
                      }
                    }}
                  />
                </div>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Mentor;
