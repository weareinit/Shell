import React, { Component } from "react";
import { Formik } from "formik";
import { Form, Field } from 'formik'

import { ApplicationValidation, ApplicationInitialValues } from "../../utils/validations";
import {Select} from '../common';
import axios from "axios";
import "./style.css";
import { readFile } from "fs";

class Application extends Component {


  handleSubmit(values, { resetForm }) {
    console.log(values);

    const apply = async () => {
      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            dob: values.dob,
            gender: values.gender,
            race: values.race,
            phoneNumber: values.phoneNumber
          }
        );
        console.log(response.data);
        resetForm();
      } catch (error) {
        console.log(error);
      }
    };
    apply();
  }

  min = () => {
    let date = new Date()
  }

  max = () => {
    let date = new Date()

    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    if (month.toString().length < 2) {
      month = "0" + month
    }
    if (day.toString().length < 2) {
      day = "0" + day
    }

    let maxDate = year + "-" + month + "-" + day

    return maxDate
  }
  render() {
    return (
      <div id="application">
        <h1 className="page-title">Application</h1>
        <Formik
          initialValues={ApplicationInitialValues}
          validationSchema={ApplicationValidation}
          onSubmit={this.handleSubmit}
          enableReinitialize={false}
        >{({
          values,
          touched,
          dirty,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
          setFieldValue,
          setFieldTouched,
          isSubmitting }) => (

            <div id="application-container">
              <Form onSubmit={handleSubmit}>
                <h3>Personal Information</h3>

                <div className="half-field-container">
                  <Field
                    className="application-input-half"
                    name="firstName"
                    type="text"

                    style={touched.firstName && errors.firstName ? { border: '2px solid red' } : null}
                    placeholder="First Name"
                  />

                  <Field
                    className="application-input-half"
                    name="lastName"
                    type="text"
                    style={touched.lastName && errors.lastName ? { border: '2px solid red' } : null}
                    placeholder="Last Name"
                  />
                </div>

                <div className="full-field-container">
                  <Field
                    className="application-input-full"
                    name="email"
                    type="email"
                    style={touched.email && errors.email ? { border: '2px solid red' } : null}
                    placeholder="School Email"
                  />
                </div>

                <div className="full-field-container">
                  <Field
                    className="application-input-full"
                    name="dob"
                    type="date"
                    min="1900-01-01"
                    placeholder="DOB: "
                    max={() => (this.max())}

                    style={touched.dob && errors.dob ? { border: '2px solid red' } : null}
                  />
                </div>

                <div className="half-field-container">

                  <Select
                    className="application-select-input-half"
                    name='gender'
                    id={"gener"}
                    test={values}
                    name='gender'
                    value={values.gender}
                    onBlur={setFieldTouched}
                    onChange={setFieldValue}
                    touched={touched.gender}
                    error={errors.gender}
                    placeholder="Gender"
                    onBlur={setFieldTouched}
                    options={[
                      { value: 'male', label: 'Male' },
                      { value: 'female', label: 'female' },
                      { value: 'nb', label: 'Other/Non-Binary' },]}
                  />
                  <Select
                    className={"application-select-input-half"}
                    id={"race"}
                    test={values}
                    name='race'
                    value={values.race}
                    onBlur={setFieldTouched}
                    onChange={setFieldValue}
                    touched={touched.race}
                    placeholder="Race/Ethnicity"
                    error={errors.race}
                    options={[
                      { value: 'white', label: 'White' },
                      { value: 'black', label: 'Black or African American' },
                      { value: 'hispanic', label: 'Hispanic or Latin' },
                      { value: 'native', label: 'Native American' },
                      { value: 'asian', label: 'Asian' },
                      { value: 'other', label: 'Other' }]}

                  />
                </div>

                <div className="full-field-container">
                  <Field
                    className="application-input-full"
                    name="phoneNumber"
                    type="text"
                    style={touched.phoneNumber && errors.phoneNumber ? { border: '2px solid red' } : null}
                    placeholder="Phone Number"
                  />
                </div>

                <h3>School Information</h3>
                <div className="half-field-container">
                  <Select
                    className="application-select-input-half"
                    name="schoolName"
                    id={"schoolName"}
                    value={values.schoolName}
                    onBlur={setFieldTouched}
                    onChange={setFieldValue}
                    touched={touched.schoolName}
                    error={errors.schoolName}
                    placeholder="School Name"
                    options={[
                      { value: 'UM', label: 'UM' },
                      { value: 'FIU', label: 'FIU' },]}
                  />

                  <Select
                    className="application-select-input-half"
                    name="major"
                    id="major"
                    placeholder="Major"
                    value={values.major}
                    onBlur={setFieldTouched}
                    onChange={setFieldValue}
                    touched={touched.major}
                    error={errors.major}
                    options={[
                      { value: 'cs', label: 'Computer Sciences' },
                      { value: 'it', label: 'Information Technology' },
                      { value: 'ce', label: 'Computer Engineering' },
                      { value: 'other', label: 'Other' },]}
                  />
                </div>

                <div className="half-field-container">
                  <Select
                    className="application-select-input-half"
                    name="levelOfStudy"
                    id="levelOfStudy"
                    placeholder="Level of Study"
                    value={values.levelOfStudy}
                    onBlur={setFieldTouched}
                    onChange={setFieldValue}
                    touched={touched.levelOfStudy}
                    error={errors.levelOfStudy}
                    options={[
                      { value: 'undergrade', label: 'Undergraduate' },
                      { value: 'graduate', label: 'Graduate' },]}
                  />

                  <Select
                    className="application-select-input-half"
                    id="graduationYear"
                    name="graduationYear"
                    placeholder="Graduation Year"
                    onChange={setFieldValue}
                    value={values.graduationYear}
                    onBlur={setFieldTouched}
                    touched={touched.graduationYear}
                    error={errors.graduationYear}
                    options={[
                      { value: '2019', label: '2019' },
                      { value: '2020', label: '2020' },
                      { value: '2020', label: '2021' },
                      { value: '2020', label: '2022' },
                      { value: '2020', label: '2023' },]}
                  />
                </div>

                <h3>Profetional Information</h3>

                <div className="full-field-container">
                  <Select
                    className="application-select-input-full"
                    id="areaOfFocus"
                    name="areaOfFocus"
                    placeholder="Which role best describe you?"
                    onChange={setFieldValue}
                    value={values.areaOfFocus}
                    onBlur={setFieldTouched}
                    touched={touched.areaOfFocus}
                    error={errors.areaOfFocus}
                    options={[
                      { value: 'web developer', label: 'Web Developer' },
                      { value: 'mobile developer', label: 'Mobile Developer' },
                      { value: 'frontend', label: 'Front-end Developer' },
                      { value: 'backend', label: 'Back-end Developer' },
                      { value: 'designer', label: 'UI/UX Designer' },
                      { value: 'entrepreneur', label: 'Entrepreneur' },
                      { value: 'other', label: 'Other' }]}

                  />

                </div>

                <div className="half-field-container">
                  <Field
                    className="application-input-half input-file"
                    name="resume"
                    type="file"
                    style={touched.resume && errors.resume ? { border: '2px solid red' } : null}
                    placeholder="Resume"
                    onBlur={() => {
                      let reader = new FileReader();
                      console.log(setFieldValue("resume", readFile.__promisify__(values.resume)))
                    }}
                  />
                  <Field
                    className="application-input-half"
                    name="linkedIn"
                    type="url"
                    placeholder="LinkedIn"
                    style={touched.linkedIn && errors.linkedIn ? { border: '2px solid red' } : null}
                  />
                </div>

                <div className="half-field-container">
                  <Field
                    className="application-input-half"
                    name="github"
                    type="url"
                    placeholder="Github"
                    style={touched.github && errors.github ? { border: '2px solid red' } : null}
                  />
                  <Field
                    className="application-input-half"
                    name="portfolio"
                    type="url"
                    placeholder="Potfolio"
                    style={touched.portfolio && errors.portfolio ? { border: '2px solid red' } : null}
                  />
                </div>

                <h3>Additional Information</h3>
                <div className="full-field-container">
                  <Field
                    className="application-input-full"
                    type="text"
                    placeholder="Reason for attending?"
                    name="reasonForAttending"
                    style={touched.reasonForAttending && errors.reasonForAttending ? { border: '2px solid red' } : null} />
                </div>

                <div className="full-field-container">
                  <Select
                    className="application-select-input-full"
                    id="dietaryRestriction"
                    name="dietaryRestriction"
                    placeholder="Any dietary Restriction?"
                    onChange={setFieldValue}
                    value={values.dietaryRestriction}
                    onBlur={setFieldTouched}
                    touched={touched.dietaryRestriction}
                    error={errors.dietaryRestriction}
                    options={[
                      { value: 'xs', label: 'XS' },
                      { value: 's', label: 'S' },
                      { value: 'm', label: 'M' },
                      { value: 'l', label: 'L' },
                      { value: 'xl', label: 'XL' },
                      { value: 'xxl', label: 'XXL' },
                      { value: 'xxxl', label: 'XXXL' }]}
                  />
                </div>

                <div className="half-field-container">
                  <Select
                    className="application-select-input-half"
                    id="shirtSize"
                    name="shirtSize"
                    placeholder="Shirt Size"
                    onChange={setFieldValue}
                    value={values.shirtSize}
                    onBlur={setFieldTouched}
                    touched={touched.shirtSize}
                    error={errors.shirtSize}
                    options={[
                      { value: 'xs', label: 'XS' },
                      { value: 's', label: 'S' },
                      { value: 'm', label: 'M' },
                      { value: 'l', label: 'L' },
                      { value: 'xl', label: 'XL' },
                      { value: 'xxl', label: 'XXL' },
                      { value: 'xxxl', label: 'XXXL' }]}
                  />
                  <Select
                    className="application-select-input-half"
                    id="needReimburesment"
                    name="needReimburesment"
                    placeholder="Need travel reinburesment?"
                    onChange={setFieldValue}
                    value={values.needReimburesment}
                    onBlur={setFieldTouched}
                    touched={touched.needReimburesment}
                    error={errors.needReimburesment}
                    options={[
                      { value: 'yes', label: 'Yes' },
                      { value: 'no', label: 'No' },
                    ]}
                  />
                </div>

                <div className="half-field-container">
                  <Select
                    className="application-select-input-half"
                    id="firstTimeHack"
                    name="firstTimeHack"
                    placeholder="First time hacker?"
                    onChange={setFieldValue}
                    value={values.firstTimeHack}
                    onBlur={setFieldTouched}
                    touched={touched.firstTimeHack}
                    error={errors.firstTimeHack}
                    options={[
                      { value: 'yes', label: 'Yes' },
                      { value: 'no', label: 'No' },
                    ]}
                  />
                  <Select
                    className="application-select-input-half"
                    id="haveBeenToShell"
                    name="haveBeenToShell"
                    placeholder="Attended last year?"
                    onChange={setFieldValue}
                    value={values.haveBeenToShell}
                    onBlur={setFieldTouched}
                    touched={touched.haveBeenToShell}
                    error={errors.haveBeenToShell}
                    options={[
                      { value: 'yes', label: 'Yes' },
                      { value: 'no', label: 'No' },
                    ]}
                  />
                </div>

                <div className="full-field-container">
                  <Select
                    className="application-select-input-full"
                    id="howDidYouHear"
                    name="howDidYouHear"
                    placeholder="How did you hear about us?"
                    onChange={setFieldValue}
                    value={values.howDidYouHear}
                    onBlur={setFieldTouched}
                    touched={touched.howDidYouHear}
                    error={errors.howDidYouHear}
                    options={[
                      { value: 'instagram', label: 'Instagram' },
                      { value: 'facebook', label: 'Facebook' },
                    ]}
                  />
                </div>

                <div className="agreements-container">
                  <div className="agreement">

                    <p> <input
                      name="isGoing"
                      type="checkbox"
                      style={touched.mlh && errors.mlh ? { border: '2px solid red' } : null}
                    />I confirm that I have read and agree with the <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank">MLH Code of Conduct</a></p>
                    <p>  <input
                      name="isGoing"
                      type="checkbox"
                      style={touched.fiu && errors.fiu ? { border: '2px solid red' } : null}
                    />I confirm that I have read and agree with the <a href="https://studentaffairs.fiu.edu/get-support/student-conduct-and-conflict-resolution/student-code-of-conduct%20/index.php" target="_blank">FIU Code of Conduct</a></p>
                  </div>

                </div>
                <button className="submit-button" type="submit" disabled={isSubmitting}>
                  Submit
              </button>
              </Form>

            </div>
          )}
        </Formik>
      </div>
    );
  }
}

export default Application;
