/**
 * Applications form
 */

import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NumberFormat from 'react-number-format';
import {
  Select,
  Button,
  Checkbox,
  Input,
  InlineError,
  BlockError,
  Loading,
  MultiSelect
} from '../../components'
import schools from '../../config/data/schools'
import applicationData from '../../config/data/application'
import {
  ApplicationValidation,
  ApplicationInitialValues
} from '../../utils/validations'
import services from '../../services/routes'
import './style.css'

// field values
const {
  genderData,
  raceData,
  majorData,
  levelOfStudyData,
  graduationYearData,
  areaOfFocusData,
  dietaryRestrictionData,
  shirtSizeData,
  yesNoData,
  didAttended,
  howDidYouHearData
} = applicationData

const Application = ({ history, userData, refresh }) => {
  // states
  const [loading, setLoading] = useState(false)
  const [isErrored, setIsErrored] = useState(false)
  const [submittingWithError, setSubmittingWithError] = useState(false)
  const [submittionState, setSubmittionState] = useState('Submitting...')
  const { applicationStatus } = userData
  // if (!applicationStatus) applicationStatus = 'Unknown user...Please Login'

  // Displays error when submitting with bad inputs
  const setInputError = () => {
    setSubmittingWithError(true);

    setTimeout(() => {
      setSubmittingWithError(false)
    }, 10000)
  }

  // Displays error message
  const faillure = () => {
    setLoading(false);
    setIsErrored(true)

    setTimeout(() => {
      setIsErrored(false)
    }, 10000)
  }

  /**
   * Submits application form
   * @param {Object} - form data
   */
  const handleSubmit = values => {
    setLoading(true)
    const apply = async () => await services.apply(values, history, refresh, faillure)
    apply();
  }

  let status = () =>
    (applicationStatus.toLowerCase() !== 'not applied' && (
      <div className='dashboard-page application-overlay'>
        <div className='submission-modal'>
          <h1>{applicationStatus}</h1>
          <FontAwesomeIcon
            style={{ margin: 'auto', display: 'block' }}
            icon='check'
            size='5x'
          />
        </div>
      </div>
    )) ||
    (loading && (
      <div className='dashboard-page application-overlay'>
        <div className='submission-modal'>
          <h1>{submittionState}</h1>
          <Loading size={30} color='white' />
        </div>
      </div>
    )) || (isErrored && (
      <div className='dashboard-page application-overlay'>
        <div className='submission-modal'>
          <h1>Failed</h1>
          <FontAwesomeIcon
            style={{ margin: 'auto', display: 'block' }}
            icon='times'
            size='5x'
          />
        </div>
      </div>
    )) || <></>


  let formValues = applicationStatus !== "not applied" ? userData : ApplicationInitialValues;

  return (
    <div className='dashboard-page'>
      {status()}
      <h1>Application</h1>

      {(submittingWithError && !loading) && (
        <BlockError
          errors={[
            "Water you doing? 😲 Scroll down to fix the errors on the form"
          ]}
          shouldShow={
            submittingWithError
          }
        />
      )}
      <Formik
        initialValues={formValues}
        validationSchema={ApplicationValidation}
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
            <div className='application-container'>
              <Form onSubmit={handleSubmit}>
                <h2>Personal Information</h2>
                <div className='full-container'>
                  <Input
                    className='application-input'
                    extraStylesClass='dob'
                    label='Date of Birth *'
                    name='dob'
                    type='date'
                    error={!!touched.dob && !!errors.dob}
                    errorVal={errors.dob}
                  />
                </div>
                <div className='full-container'>
                  <Select
                    className='application-input'
                    label='Gender *'
                    name='gender'
                    id={'gener'}
                    test={values}
                    value={values.gender}
                    onBlur={setFieldTouched}
                    onChange={setFieldValue}
                    touched={touched.gender}
                    error={errors.gender}
                    placeholder='Select one'
                    options={genderData}
                  />
                </div>
                <div className='full-container'>
                  <Select
                    className='application-input'
                    label='Race / Ethnicity *'
                    id={'race'}
                    test={values}
                    name='race'
                    value={values.race}
                    onBlur={setFieldTouched}
                    onChange={setFieldValue}
                    touched={touched.race}
                    placeholder='Select one'
                    error={errors.race}
                    options={raceData}
                  />
                </div>
                <div className='full-container'>
                  <InlineError
                    shouldShow={!!touched.resume && errors.resume}
                    error={errors.resume}
                    label={'Phone Number *'}
                    name={'phoneNumber'}
                  />
                  <NumberFormat
                    format="+1 (###) ###-####"
                    type="input"
                    className='text-input'
                    name='phoneNumber'
                    id='phoneNumber'
                    placeholder='+1 (786)-000-0000'
                    onValueChange={(e) => setFieldValue("phoneNumber", e.value)}
                    style={
                      !!touched.phoneNumer && errors.phoneNumer
                        ? { border: '2px solid red' }
                        : null
                    }
                  />
                </div>
                <h2>School Information</h2>
                <div className='full-container'>
                  <Select
                    className='application-input'
                    label='School Name *'
                    name='schoolName'
                    id={'schoolName'}
                    value={values.schoolName}
                    onBlur={setFieldTouched}
                    onChange={setFieldValue}
                    touched={touched.schoolName}
                    error={errors.schoolName}
                    placeholder='Florida International University'
                    options={schools}
                  />
                </div>
                <div className='full-container'>
                  <Select
                    className='application-input'
                    label='Major *'
                    name='major'
                    id='major'
                    placeholder='Computer Science'
                    value={values.major}
                    onBlur={setFieldTouched}
                    onChange={setFieldValue}
                    touched={touched.major}
                    error={errors.major}
                    options={majorData}
                  />
                </div>
                <div className='full-container'>
                  <Select
                    className='application-input'
                    label='Level of Study *'
                    name='levelOfStudy'
                    id='levelOfStudy'
                    placeholder='Undergraduate'
                    value={values.levelOfStudy}
                    onBlur={setFieldTouched}
                    onChange={setFieldValue}
                    touched={touched.levelOfStudy}
                    error={errors.levelOfStudy}
                    options={levelOfStudyData}
                  />
                </div>
                <div className='full-container'>
                  <Select
                    className='application-input'
                    label='Graduation Year *'
                    id='graduationYear'
                    name='graduationYear'
                    placeholder='2020'
                    onChange={setFieldValue}
                    value={values.graduationYear}
                    onBlur={setFieldTouched}
                    touched={touched.graduationYear}
                    error={errors.graduationYear}
                    options={graduationYearData}
                  />
                </div>
                <h2>Professional Information</h2>
                <div className='full-container'>
                  <Select
                    className='application-input'
                    label=' Which role best describes you?'
                    id='areaOfFocus'
                    name='areaOfFocus'
                    placeholder='Front-end Developer'
                    onChange={setFieldValue}
                    value={values.areaOfFocus}
                    onBlur={setFieldTouched}
                    touched={touched.areaOfFocus}
                    error={errors.areaOfFocus}
                    options={areaOfFocusData}
                  />
                </div>

                <div className='full-container'>
                  <InlineError
                    shouldShow={!!touched.resume && errors.resume}
                    error={errors.resume}
                    label={'Resume *'}
                    name={'resume'}
                  />
                  <input
                    className='text-input application-input'
                    name='file'
                    type='file'
                    onChange={e => {
                      setFieldValue('resume', e.currentTarget.files[0])
                      setFieldValue('email', userData.email) // getting email from user login info
                    }}
                    style={
                      !!touched.resume && errors.resume
                        ? { border: '2px solid red' }
                        : null
                    }
                  />
                </div>
                <div className='full-container'>
                  <Input
                    className='application-input'
                    name='linkedIn'
                    type='url'
                    label='LinkedIn'
                    placeholder='https://www.linkedin.com/in/jehf-doe'
                    error={!!touched.linkedIn && !!errors.linkedIn}
                    errorVal={errors.linkedIn}
                  />
                </div>
                <div className='full-container'>
                  <Input
                    className='application-input'
                    name='github'
                    type='url'
                    label='GitHub'
                    placeholder='https://github.com/jehfdoe'
                    error={!!touched.github && !!errors.github}
                    errorVal={errors.github}
                  />
                </div>
                <div className='full-container'>
                  <Input
                    className='application-input'
                    name='portfolio'
                    type='url'
                    label='Website'
                    placeholder='https://shellhacks.net'
                    error={!!touched.portfolio && !!errors.portfolio}
                    errorVal={errors.portfolio}
                  />
                </div>
                <h2>Additional Information</h2>
                <div className='full-container'>
                  <InlineError
                    shouldShow={
                      (errors.reasonForAttending && touched.reasonForAttending)
                    }
                    error={errors.reasonForAttending}
                    label='Why would you like to attend ShellHacks? *'
                  />
                  <Field
                    name='reasonForAttending'
                    render={({ field, form: { touched, errors } }) => (
                      <textarea {...field} className='application-input text-input'
                        rows="6"
                        placeholder='Be as detailed as possible - this is your chance to tell us why we should select you!'
                        style={
                          !!errors.reasonForAttending && touched.reasonForAttending
                            ? { border: '2px solid red' }
                            : null
                        } />
                    )}
                  />
                </div>
                <div className='full-container'>
                  <MultiSelect
                    className='application-input'
                    label='Any dietary restrictions? *'
                    id='dietaryRestriction'
                    name='dietaryRestriction'
                    placeholder='Vegan'
                    onChange={setFieldValue}
                    value={values.dietaryRestriction}
                    onBlur={setFieldTouched}
                    touched={touched.dietaryRestriction}
                    error={errors.dietaryRestriction}
                    options={dietaryRestrictionData}
                    defaultValue={[]}
                  />
                </div>
                <div className='full-container'>
                  <Select
                    className='application-input'
                    label='Need travel reimbursement? *'
                    id='needReimbursement'
                    name='needReimbursement'
                    placeholder='Select One'
                    onChange={setFieldValue}
                    value={values.needReimbursement}
                    onBlur={setFieldTouched}
                    touched={touched.needReimbursement}
                    error={errors.needReimbursement}
                    options={yesNoData}
                  />
                </div>
                <div className='full-container'>
                  <Select
                    className='application-input'
                    label='First time hacker? *'
                    id='firstTimeHack'
                    name='firstTimeHack'
                    placeholder='Select One'
                    onChange={setFieldValue}
                    value={values.firstTimeHack}
                    onBlur={setFieldTouched}
                    touched={touched.firstTimeHack}
                    error={errors.firstTimeHack}
                    options={yesNoData}
                  />
                </div>
                <div className='full-container'>
                  <MultiSelect
                    isMulti
                    className='application-input'
                    label='Attended ShellHacks before? *'
                    id='haveBeenToShell'
                    name='haveBeenToShell'
                    placeholder='Select One'
                    onChange={setFieldValue}
                    value={values.haveBeenToShell}
                    onBlur={setFieldTouched}
                    touched={touched.haveBeenToShell}
                    error={errors.haveBeenToShell}
                    options={didAttended}
                    defaultValue={[]}
                  />
                </div>
                <div className='full-container'>
                  <Select
                    className='application-input'
                    label='T-Shirt Size *'
                    id='shirtSize'
                    name='shirtSize'
                    placeholder='Select One'
                    onChange={setFieldValue}
                    value={values.shirtSize}
                    onBlur={setFieldTouched}
                    touched={touched.shirtSize}
                    error={errors.shirtSize}
                    options={shirtSizeData}
                  />
                </div>
                <div className='full-container'>
                  <Select
                    className='application-input'
                    label='How did you hear about us? *'
                    id='howDidYouHear'
                    name='howDidYouHear'
                    placeholder='Select One'
                    onChange={setFieldValue}
                    value={values.howDidYouHear}
                    onBlur={setFieldTouched}
                    touched={touched.howDidYouHear}
                    error={errors.howDidYouHear}
                    options={howDidYouHearData}
                  />
                </div>
                <div className='agreement'>
                  <p id='mlh'>
                    <Field
                      id='mlh-agree'
                      component={Checkbox}
                      name='mlh'
                      onChange={onChange}
                    />
                    <label htmlFor="mlh-agree">
                      I confirm that I have read and agree to the{' '}
                      <a
                        href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'
                        rel='noopener noreferrer'
                        target='_blank'
                        style={{
                          color: 'var(--shell-sand)',
                          textDecoration: 'underline'
                        }}
                      >
                        MLH Code of Conduct
                  </a>
                    </label>
                  </p>

                  <p id='mlhAffiliation'>
                    <Field
                      id='mlh--field'
                      component={Checkbox}
                      name='mlhAffiliation'
                      onChange={onChange}
                    />
                    <label htmlFor="mlh--field">
                      I authorize you to share my application/registration information for event administration, ranking, MLH administration, pre- and post-event informational e-mails, and occasional messages about hackathons in-line with the  <a
                        href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'
                        rel='noopener noreferrer'
                        target='_blank'
                        style={{
                          color: 'var(--shell-sand)',
                          textDecoration: 'underline'
                        }}
                      >MLH Privacy Policy</a>. I further agree to the terms of both the  <a
                        href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'
                        rel='noopener noreferrer'
                        target='_blank'
                        style={{
                          color: 'var(--shell-sand)',
                          textDecoration: 'underline'
                        }}
                      >MLH Contest Terms and Conditions</a> and the  <a
                        href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'
                        rel='noopener noreferrer'
                        target='_blank'
                        style={{
                          color: 'var(--shell-sand)',
                          textDecoration: 'underline'
                        }}
                      >MLH Privacy Policy</a>.
                  </label>
                  </p>
                  <br />
                  <p id='sponsor-promo'>
                    <Field
                      id='sponsor-promo--field'
                      component={Checkbox}
                      name='sponsorPromo'
                      onChange={onChange}
                    /><label htmlFor="sponsor-promo--field">
                      I would like information, tips, and offers about ShellHacks
                  and other sponsor related products and services</label>
                  </p>
                  <br />
                  <InlineError
                    shouldShow={
                      (errors.mlh && touched.mlh) || (errors.mlhAffiliation && touched.mlhAffiliation) ||
                      (errors.sponsorPromo && touched.sponsorPromo)
                    }
                    error={errors.mlh || errors.sponsorPromo || errors.mlhAffiliation}
                  />
                </div>
                <div className='application-submit-button'>
                  <div className='application-button-wrapper'>
                    <Button type='submit' title='Submit' id='application'
                      action={() => {
                        if (errors) {
                          setInputError();
                          window.scrollTo(0, 0)
                        };
                      }}
                    />
                  </div>
                </div>
              </Form>
            </div>
          )}
      </Formik>
    </div>
  )
}

export default Application
