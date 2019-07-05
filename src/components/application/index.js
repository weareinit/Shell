/**
 * Applications form
 * ------------------------------
 * @author Jehf K D. (@jehfkemsy)
 */
import React, { Component } from "react";
import { Formik, ErrorMessage, Form, Field } from "formik";
import {
  ApplicationValidation,
  ApplicationInitialValues
} from "../../utils/validations";
import { Select, Button, Checkbox, SelectAsync } from "../common";
import schools from "../../config/data/schools";
import { apply } from "../../services/routes";
import "./style.css";
import { readFile, writeFile } from "fs";

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showErrs: false
    };
  }

  handleSubmit = (values, { resetForm }) => {
    const { history } = this.props;

    let nextAction = () => {
      console.log("hello"); //temp
    };
    console.log(history);

    const submitApplication = async () => {
      try {
        apply(values, nextAction, history);
        alert(JSON.stringify(values));

        resetForm();
      } catch (error) {
        alert(error);
      }
    };
    submitApplication();
  };

  render() {
    const { history } = this.props;
    return (
      <div className="dashboard-page">
        <h1>Application</h1>
        <Formik
          initialValues={ApplicationInitialValues}
          validationSchema={ApplicationValidation}
          onSubmit={this.handleSubmit}
          enableReinitialize={false}
        >
          {({
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
            setFieldError,
            isSubmitting,
            isValid
          }) => (
            <div className="application-container">
              {<></> && console.log(values)}
              <Form onSubmit={handleSubmit}>
                <h2>Personal Information</h2>
                <div className="half-container">
                  <label htmlFor="firstName">*First Name</label>
                  <Field
                    className="application-input"
                    name="firstName"
                    type="text"
                    style={
                      touched.firstName && errors.firstName
                        ? { border: "2px solid red" }
                        : null
                    }
                    placeholder="Jehf"
                  />
                  <span className="application-error"></span>
                </div>
                <div className="half-container">
                  <label htmlFor="lastName">*Last Name</label>
                  <Field
                    className="application-input"
                    name="lastName"
                    type="text"
                    style={
                      touched.lastName && errors.lastName
                        ? { border: "2px solid red" }
                        : null
                    }
                    placeholder="Doe"
                  />
                </div>
                <div className="full-container">
                  <label htmlFor="email">*School Email Address</label>
                  <Field
                    className="application-input"
                    name="email"
                    type="email"
                    style={
                      touched.email && errors.email
                        ? { border: "2px solid red" }
                        : null
                    }
                    placeholder="roary@fiu.edu"
                  />
                </div>
                <div className="full-container">
                  <label htmlFor="dob">Date of Birth</label>
                  <Field
                    className="application-input"
                    name="dob"
                    type="date"
                    style={
                      touched.dob && errors.dob
                        ? { border: "2px solid red" }
                        : null
                    }
                  />
                </div>
                <div className="half-container">
                  <label htmlFor="gender">Gender</label>
                  <Select
                    className="application-input"
                    name="gender"
                    id={"gener"}
                    test={values}
                    value={values.gender}
                    onBlur={setFieldTouched}
                    onChange={setFieldValue}
                    touched={touched.gender}
                    error={errors.gender}
                    placeholder="Select one"
                    options={[
                      { value: "male", label: "Male" },
                      { value: "female", label: "female" },
                      { value: "nb", label: "Other/Non-Binary" }
                    ]}
                  />
                </div>
                <div className="half-container">
                  <label htmlFor="race">Race/Ethnicity</label>
                  <Select
                    className="application-input"
                    id={"race"}
                    test={values}
                    name="race"
                    value={values.race}
                    onBlur={setFieldTouched}
                    onChange={setFieldValue}
                    touched={touched.race}
                    placeholder="Select one"
                    error={errors.race}
                    options={[
                      {
                        value: "American Indian or Alaskan Native",
                        label: "American Indian or Alaskan Native"
                      },
                      {
                        value: "White/Caucasian",
                        label: "White /Caucasian"
                      },
                      {
                        value: "Black or African American",
                        label: "Black or African American"
                      },
                      { value: "hispanic", label: "Hispanic or Latin" },
                      { value: "native", label: "Native American" },
                      {
                        value: "Asian/Pacific Islander",
                        label: "Asian/Pacific Islander"
                      },
                      {
                        value: "Multiple Ethnicity/Other",
                        label: "Multiple Ethnicity/Other"
                      },
                      {
                        value: "Prefer not to answer",
                        label: "Prefer not to answer"
                      }
                    ]}
                  />
                </div>
                <div className="full-container">
                  <label htmlFor="phoneNumber">*Phone Number</label>
                  <Field
                    className="application-input"
                    name="phoneNumber"
                    type="text"
                    style={
                      touched.phoneNumber && errors.phoneNumber
                        ? { border: "2px solid red" }
                        : null
                    }
                    placeholder="000-000-0000"
                  />
                </div>
                <h2>School Information</h2>
                <div className="half-container">
                  <label htmlFor="schoolName">*School Name</label>
                  <Select
                    className="application-input"
                    name="schoolName"
                    id={"schoolName"}
                    value={values.schoolName}
                    onBlur={setFieldTouched}
                    onChange={setFieldValue}
                    touched={touched.schoolName}
                    error={errors.schoolName}
                    placeholder="Florida International University"
                    options={schools}
                  />
                </div>
                <div className="half-container">
                  <label htmlFor="major">Major</label>
                  <Select
                    className="application-input"
                    name="major"
                    id="major"
                    placeholder="Computer Science"
                    value={values.major}
                    onBlur={setFieldTouched}
                    onChange={setFieldValue}
                    touched={touched.major}
                    error={errors.major}
                    options={[
                      { value: "Computer Science", label: "Computer Science" },
                      {
                        value: "Imformation Technology",
                        label: "Information Technology"
                      },
                      {
                        value: "Computer Engineering",
                        label: "Computer Engineering"
                      },
                      { value: "other", label: "Other" }
                    ]}
                  />
                </div>
                <div className="half-container">
                  <label htmlFor="levelOfStudy">Level of Study</label>
                  <Select
                    className="application-input"
                    name="levelOfStudy"
                    id="levelOfStudy"
                    placeholder="Undergraduate"
                    value={values.levelOfStudy}
                    onBlur={setFieldTouched}
                    onChange={setFieldValue}
                    touched={touched.levelOfStudy}
                    error={errors.levelOfStudy}
                    options={[
                      {
                        value: "High school diploma or equivalent",
                        label: "High school diploma or equivalent"
                      },
                      { value: "undergraduate", label: "Undergraduate" },
                      { value: "Graduate", label: "Graduate" }
                    ]}
                  />
                </div>
                <div className="half-container">
                  <label htmlFor="graduationYear">Graduation Year</label>
                  <Select
                    className="application-input"
                    id="graduationYear"
                    name="graduationYear"
                    placeholder="2020"
                    onChange={setFieldValue}
                    value={values.graduationYear}
                    onBlur={setFieldTouched}
                    touched={touched.graduationYear}
                    error={errors.graduationYear}
                    options={[
                      { value: "2019", label: "2019" },
                      { value: "2020", label: "2020" },
                      { value: "2020", label: "2021" },
                      { value: "2020", label: "2022" },
                      { value: "2020", label: "2023" }
                    ]}
                  />
                </div>
                <h2>Profetional Information</h2>
                <div className="full-container">
                  <label htmlFor="areaOfFocus">
                    Which role best describe you?
                  </label>
                  <Select
                    className="application-input"
                    id="areaOfFocus"
                    name="areaOfFocus"
                    placeholder="Front-end Developer"
                    onChange={setFieldValue}
                    value={values.areaOfFocus}
                    onBlur={setFieldTouched}
                    touched={touched.areaOfFocus}
                    error={errors.areaOfFocus}
                    options={[
                      { value: "web developer", label: "Web Developer" },
                      { value: "mobile developer", label: "Mobile Developer" },
                      { value: "frontend", label: "Front-end Developer" },
                      { value: "backend", label: "Back-end Developer" },
                      { value: "designer", label: "UI/UX Designer" },
                      { value: "entrepreneur", label: "Entrepreneur" },
                      { value: "other", label: "Other" }
                    ]}
                  />
                </div>
                <div className="half-container">
                  <label htmlFor="resume">*Resume</label>
                  <Field
                    className="application-input"
                    name="resume"
                    type="file"
                    style={
                      touched.resume && errors.resume
                        ? { border: "2px solid red" }
                        : null
                    }
                    placeholder="Resume"
                    onBlur={() => {
                      let reader = new FileReader();
                    }}
                  />
                </div>
                <div className="half-container">
                  <label htmlFor="linkedIn">LinkedIn</label>
                  <Field
                    className="application-input"
                    name="linkedIn"
                    type="url"
                    placeholder="https://www.linkedin.com/in/jehf-doe"
                    style={
                      touched.linkedIn && errors.linkedIn
                        ? { border: "2px solid red" }
                        : null
                    }
                  />
                </div>
                <div className="half-container">
                  <label htmlFor="github">Github</label>
                  <Field
                    className="application-input"
                    name="github"
                    type="url"
                    placeholder="https://github.com/jehfdoe"
                    style={
                      touched.github && errors.github
                        ? { border: "2px solid red" }
                        : null
                    }
                  />
                </div>
                <div className="half-container">
                  <label htmlFor="portfolio">Portfolio</label>
                  <Field
                    className="application-input"
                    name="portfolio"
                    type="url"
                    placeholder="https://shellhacks.net"
                    style={
                      touched.portfolio && errors.portfolio
                        ? { border: "2px solid red" }
                        : null
                    }
                  />
                </div>
                <h2>Additional Information</h2>
                <div className="full-container">
                  <label htmlFor="reasonForAttending">
                    *Reason for attending?
                  </label>
                  <Field
                    className="application-input"
                    type="text"
                    placeholder="I love ShellHacks"
                    name="reasonForAttending"
                    style={
                      touched.reasonForAttending && errors.reasonForAttending
                        ? { border: "2px solid red" }
                        : null
                    }
                  />
                </div>
                <div className="full-container">
                  <label htmlFor="dietaryRestriction">
                    *Any dietary Restriction?
                  </label>
                  <Select
                    className="application-input"
                    id="dietaryRestriction"
                    name="dietaryRestriction"
                    placeholder="Vegan"
                    onChange={setFieldValue}
                    value={values.dietaryRestriction}
                    onBlur={setFieldTouched}
                    touched={touched.dietaryRestriction}
                    error={errors.dietaryRestriction}
                    options={[
                      { value: "Vegan", label: "Vegan" },
                      { value: "Vegetarian", label: "Vegetarian" },
                      {
                        value: "Lactose Intolerance",
                        label: "Lactose Intolerance"
                      },
                      { value: "Nut-free", label: "Nut-free" },
                      { value: "Gluten Free", label: "Gluten Free" },
                      { value: "Dairy-free", label: "Dairy-free" },
                      { value: "Other", label: "Other" }
                    ]}
                  />
                </div>
                <div className="half-container">
                  <label htmlFor="shirtSize">*Shirt Size</label>
                  <Select
                    className="application-input"
                    id="shirtSize"
                    name="shirtSize"
                    placeholder="Select One"
                    onChange={setFieldValue}
                    value={values.shirtSize}
                    onBlur={setFieldTouched}
                    touched={touched.shirtSize}
                    error={errors.shirtSize}
                    options={[
                      { value: "xs", label: "XS" },
                      { value: "s", label: "S" },
                      { value: "m", label: "M" },
                      { value: "l", label: "L" },
                      { value: "xl", label: "XL" },
                      { value: "xxl", label: "XXL" },
                      { value: "xxxl", label: "XXXL" }
                    ]}
                  />
                </div>
                <div className="half-container">
                  <label htmlFor="needReimburesment">
                    *Need travel reinburesment?
                  </label>
                  <Select
                    className="application-input"
                    id="needReimburesment"
                    name="needReimburesment"
                    placeholder="Select One"
                    onChange={setFieldValue}
                    value={values.needReimburesment}
                    onBlur={setFieldTouched}
                    touched={touched.needReimburesment}
                    error={errors.needReimburesment}
                    options={[
                      { value: "yes", label: "Yes" },
                      { value: "no", label: "No" }
                    ]}
                  />
                </div>
                <div className="half-container">
                  <label htmlFor="firstTimeHack">*First time hacker?</label>
                  <Select
                    className="application-input"
                    id="firstTimeHack"
                    name="firstTimeHack"
                    placeholder="Select One"
                    onChange={setFieldValue}
                    value={values.firstTimeHack}
                    onBlur={setFieldTouched}
                    touched={touched.firstTimeHack}
                    error={errors.firstTimeHack}
                    options={[
                      { value: "yes", label: "Yes" },
                      { value: "no", label: "No" }
                    ]}
                  />
                </div>
                <div className="half-container">
                  <label htmlFor="haveBeenToShell">*Attended last year?</label>
                  <Select
                    className="application-input"
                    id="haveBeenToShell"
                    name="haveBeenToShell"
                    placeholder="Select One"
                    onChange={setFieldValue}
                    value={values.haveBeenToShell}
                    onBlur={setFieldTouched}
                    touched={touched.haveBeenToShell}
                    error={errors.haveBeenToShell}
                    options={[
                      { value: "yes", label: "Yes" },
                      { value: "no", label: "No" }
                    ]}
                  />
                </div>
                <div className="full-container">
                  <label htmlFor="howDidYouHear">
                    *How did you hear about us?
                  </label>
                  <Select
                    className="application-input"
                    id="howDidYouHear"
                    name="howDidYouHear"
                    placeholder="Select One"
                    onChange={setFieldValue}
                    value={values.howDidYouHear}
                    onBlur={setFieldTouched}
                    touched={touched.howDidYouHear}
                    error={errors.howDidYouHear}
                    options={[
                      { value: "Instagram", label: "Instagram" },
                      { value: "Facebook", label: "Facebook" },
                      { value: "LinkedIn", label: "LinkedIn" },
                      { value: "Twitter", label: "Twitter" },
                      {
                        value: "My School's CS Club",
                        label: "My School's CS Club"
                      },
                      { value: "Friends", label: "Friends" }
                    ]}
                  />
                </div>
                <div className="agreement">
                  <p>
                    <Field component={Checkbox} name="mlh" id="mlh" />
                    confirm that I have read and agree with the{" "}
                    <a
                      href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      MLH Code of Conduct
                    </a>
                  </p>
                  <p>
                    <Field component={Checkbox} name="fiu" id="fiu" />I confirm
                    that I have read and agree with the{" "}
                    <a
                      href="https://studentaffairs.fiu.edu/get-support/student-conduct-and-conflict-resolution/student-code-of-conduct%20/index.php"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      FIU Code of Conduct
                    </a>
                  </p>
                </div>
                <div className="application-submit-button">
                  <Button type="submit" title="Submit" id="application" />
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    );
  }
}
export default Application;
