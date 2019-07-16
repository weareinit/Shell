/**
 * Applications form
 * ------------------------------
 * @author Jehf K D. (@jehfkemsy)
 */

import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { Select, Button, Checkbox, TextInput, Loading } from "../../components";
import schools from "../../config/data/schools";
import applicationData from "../../config/data/application";
import {
  ApplicationValidation,
  ApplicationInitialValues
} from "../../utils/validations";
import { apply } from "../../services/routes";
import "./style.css";
// import { readFile, writeFile } from "fs";

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitionError: "",
      isSubmitting: false,
      isSubmitted: false,
      submitionStatus: "",
      loading: false
    };
  }

  handleSubmit = values => {
    const { history } = this.props;

    this.setState({
      isSubmitting: true,
      submitionStatus: "Submitting",
      loading: true
    });

    console.log("Starting submittion: ", this.state);

    let response = apply(values, history);

    console.log(response);

    this.setState({
      submitionStatus: "Submitted",
      isSubmitted: true,
      loading: false
    });
    console.log("success: ", response);
    console.log("After submitted: ", this.state);

    //lets user know application is submitted before closing the modal
    setTimeout(() => {
      this.setState({
        isSubmitting: false
      });
    }, 10000);

    // await console.log("Finish: ", this.state);

    // this.setState({
    //   submitionError: "Something Went Wrong...Try Again",
    //   submitionStatus: ""
    // });

    // setTimeout(
    //   () =>
    //     this.setState({
    //       isSubmitting: false
    //     }),
    //   10000
    // );
  };

  render() {
    let {
      genderData,
      raceData,
      majorData,
      levelOfStudyData,
      graduationYearData,
      areaOfFocusData,
      dietaryRestrictionData,
      shirtSizeData,
      yesNoData,
      howDidYouHearData
    } = applicationData;
    return (
      <div className="dashboard-page">
        <h1>Application</h1>
        <Loading
          withOverlay={true}
          shouldShow={this.state.isSubmitting}
          submitionStatus={this.state.submitionStatus}
          loading={this.state.loading}
          isClosable={this.state.isSubmitted || !!this.state.submitionError}
          errorText={this.state.submitionError}
          submitted={this.state.isSubmitted}
        />
        <Formik
          initialValues={ApplicationInitialValues}
          validationSchema={ApplicationValidation}
          onSubmit={this.handleSubmit}
          enableReinitialize={false}
        >
          {({
            values,
            touched,
            errors,
            handleSubmit,
            setFieldValue,
            setFieldTouched,
            validationSchema,
            ...rest
          }) => (
            <div className="application-container">
              <Form onSubmit={handleSubmit}>
                <h2>Personal Information</h2>
                <div className="half-container">
                  <TextInput
                    className="application-input"
                    label="First Name"
                    name="firstName"
                    placeholder="Jehf"
                    error={!!(touched.firstName && errors.firstName)}
                    errorVal={errors.firstName}
                  />
                </div>
                <div className="half-container">
                  <TextInput
                    className="application-input"
                    label="Last Name"
                    name="lastName"
                    placeholder="Doe"
                    error={!!(touched.lastName && errors.lastName)}
                    errorVal={errors.lastName}
                  />
                </div>
                <div className="full-container">
                  <TextInput
                    className="application-input"
                    label="Email Address"
                    name="email"
                    placeholder="roary@fiu.edu"
                    error={!!touched.email && !!errors.email}
                    errorVal={errors.email}
                  />
                </div>
                <div className="full-container">
                  <TextInput
                    className="application-input"
                    extraStylesClass="dob"
                    label="Date of Birth"
                    name="dob"
                    type="date"
                    error={!!touched.dob && !!errors.dob}
                    errorVal={errors.dob}
                  />
                </div>
                <div className="half-container">
                  <Select
                    className="application-input"
                    label="Gender"
                    name="gender"
                    id={"gener"}
                    test={values}
                    value={values.gender}
                    onBlur={setFieldTouched}
                    onChange={setFieldValue}
                    touched={touched.gender}
                    error={errors.gender}
                    placeholder="Select one"
                    options={genderData}
                  />
                </div>
                <div className="half-container">
                  <Select
                    className="application-input"
                    label="Race/Ethnicity"
                    id={"race"}
                    test={values}
                    name="race"
                    value={values.race}
                    onBlur={setFieldTouched}
                    onChange={setFieldValue}
                    touched={touched.race}
                    placeholder="Select one"
                    error={errors.race}
                    options={raceData}
                  />
                </div>
                <div className="full-container">
                  <TextInput
                    className="application-input"
                    name="phoneNumber"
                    label="Phone Number"
                    placeholder="000-000-0000"
                    error={!!touched.phoneNumber && !!errors.phoneNumber}
                    errorVal={errors.phoneNumber}
                  />
                </div>
                <h2>School Information</h2>
                <div className="half-container">
                  <Select
                    className="application-input"
                    label="School Name"
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
                  <Select
                    className="application-input"
                    label="Major"
                    name="major"
                    id="major"
                    placeholder="Computer Science"
                    value={values.major}
                    onBlur={setFieldTouched}
                    onChange={setFieldValue}
                    touched={touched.major}
                    error={errors.major}
                    options={majorData}
                  />
                </div>
                <div className="half-container">
                  <Select
                    className="application-input"
                    label="Level of Study"
                    name="levelOfStudy"
                    id="levelOfStudy"
                    placeholder="Undergraduate"
                    value={values.levelOfStudy}
                    onBlur={setFieldTouched}
                    onChange={setFieldValue}
                    touched={touched.levelOfStudy}
                    error={errors.levelOfStudy}
                    options={levelOfStudyData}
                  />
                </div>
                <div className="half-container">
                  <Select
                    className="application-input"
                    label="Graduation Year"
                    id="graduationYear"
                    name="graduationYear"
                    placeholder="2020"
                    onChange={setFieldValue}
                    value={values.graduationYear}
                    onBlur={setFieldTouched}
                    touched={touched.graduationYear}
                    error={errors.graduationYear}
                    options={graduationYearData}
                  />
                </div>
                <h2>Profetional Information</h2>
                <div className="full-container">
                  <Select
                    className="application-input"
                    label=" Which role best describe you?"
                    id="areaOfFocus"
                    name="areaOfFocus"
                    placeholder="Front-end Developer"
                    onChange={setFieldValue}
                    value={values.areaOfFocus}
                    onBlur={setFieldTouched}
                    touched={touched.areaOfFocus}
                    error={errors.areaOfFocus}
                    options={areaOfFocusData}
                  />
                </div>
                <div className="half-container">
                  <TextInput
                    className="application-input"
                    extraStylesClass="resume"
                    name="resume"
                    type="file"
                    label="Resume"
                    error={!!touched.resume && errors.resume}
                    errorVal={errors.resume}
                  />
                </div>
                <div className="half-container">
                  <TextInput
                    className="application-input"
                    name="linkedIn"
                    type="url"
                    label="LinkedIn"
                    placeholder="https://www.linkedin.com/in/jehf-doe"
                    error={!!touched.linkedIn && !!errors.linkedIn}
                    errorVal={errors.linkedIn}
                  />
                </div>
                <div className="half-container">
                  <TextInput
                    className="application-input"
                    name="github"
                    type="url"
                    label="GitHub"
                    placeholder="https://github.com/jehfdoe"
                    error={!!touched.github && !!errors.github}
                    errorVal={errors.github}
                  />
                </div>
                <div className="half-container">
                  <TextInput
                    className="application-input"
                    name="portfolio"
                    type="url"
                    label="Porfolio"
                    placeholder="https://shellhacks.net"
                    error={!!touched.portfolio && !!errors.portfolio}
                    errorVal={errors.portfolio}
                  />
                </div>
                <h2>Additional Information</h2>
                <div className="full-container">
                  <TextInput
                    className="application-input"
                    type="text"
                    name="reasonForAttending"
                    label="Reason for attending"
                    placeholder="I love ShellHacks"
                    error={
                      !!touched.reasonForAttending &&
                      !!errors.reasonForAttending
                    }
                    errorVal={errors.reasonForAttending}
                  />
                </div>
                <div className="full-container">
                  <Select
                    className="application-input"
                    label="Any dietary Restriction?"
                    id="dietaryRestriction"
                    name="dietaryRestriction"
                    placeholder="Vegan"
                    onChange={setFieldValue}
                    value={values.dietaryRestriction}
                    onBlur={setFieldTouched}
                    touched={touched.dietaryRestriction}
                    error={errors.dietaryRestriction}
                    options={dietaryRestrictionData}
                  />
                </div>
                <div className="half-container">
                  <Select
                    className="application-input"
                    label="Shirt Size"
                    id="shirtSize"
                    name="shirtSize"
                    placeholder="Select One"
                    onChange={setFieldValue}
                    value={values.shirtSize}
                    onBlur={setFieldTouched}
                    touched={touched.shirtSize}
                    error={errors.shirtSize}
                    options={shirtSizeData}
                  />
                </div>
                <div className="half-container">
                  <Select
                    className="application-input"
                    label="Need travel reinburesment?"
                    id="needReimburesment"
                    name="needReimburesment"
                    placeholder="Select One"
                    onChange={setFieldValue}
                    value={values.needReimburesment}
                    onBlur={setFieldTouched}
                    touched={touched.needReimburesment}
                    error={errors.needReimburesment}
                    options={yesNoData}
                  />
                </div>
                <div className="half-container">
                  <Select
                    className="application-input"
                    label="First time hacker?"
                    id="firstTimeHack"
                    name="firstTimeHack"
                    placeholder="Select One"
                    onChange={setFieldValue}
                    value={values.firstTimeHack}
                    onBlur={setFieldTouched}
                    touched={touched.firstTimeHack}
                    error={errors.firstTimeHack}
                    options={yesNoData}
                  />
                </div>
                <div className="half-container">
                  <Select
                    className="application-input"
                    label="Attended last year?"
                    id="haveBeenToShell"
                    name="haveBeenToShell"
                    placeholder="Select One"
                    onChange={setFieldValue}
                    value={values.haveBeenToShell}
                    onBlur={setFieldTouched}
                    touched={touched.haveBeenToShell}
                    error={errors.haveBeenToShell}
                    options={yesNoData}
                  />
                </div>
                <div className="full-container">
                  <Select
                    className="application-input"
                    label="How did you hear about us?"
                    id="howDidYouHear"
                    name="howDidYouHear"
                    placeholder="Select One"
                    onChange={setFieldValue}
                    value={values.howDidYouHear}
                    onBlur={setFieldTouched}
                    touched={touched.howDidYouHear}
                    error={errors.howDidYouHear}
                    options={howDidYouHearData}
                  />
                </div>
                <div className="agreement">
                  <p>
                    <Field component={Checkbox} name="mlh" id="mlh" />I confirm
                    that I have read and agree to the{" "}
                    <a
                      href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                      rel="noopener noreferrer"
                      target="_blank"
                      style={{
                        color: "var(--shell-sand)",
                        textDecoration: "underline"
                      }}
                    >
                      MLH Code of Conduct
                    </a>
                  </p>
                  <p>
                    <Field
                      component={Checkbox}
                      name="sponsorPromo"
                      id="sponsorPromo"
                    />
                    I agree to receive communications from sponsors
                  </p>
                </div>
                <div className="application-submit-button">
                  <div className="application-button-wrapper">
                    <Button type="submit" title="Submit" id="application" />
                  </div>
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
