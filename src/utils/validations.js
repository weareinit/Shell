import * as Yup from 'yup';
import moment from 'moment';

/**
 * custom validations
 */
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const getValidDobRange = () => {
    const min = moment()
        .subtract(100, 'years')
        .format('YYYY-MM-DD');
    const max = moment()
        .subtract(6570, 'days') // 18yrs from today
        .format('YYYY-MM-DD');
    return { min, max };
};

/**
 * login validation
 */
export const LogInValidation = Yup.object().shape({
    email: Yup.string()
        .email('Email is not valid')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Password is too short')
        .required('Required'),
});

export const LoginInitialValues = {
    email: '',
    password: '',
};

/**
 * signup validation
 */
export const SignUpValidation = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'First Name is too Short')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Last Name is too Short')
        .required('Required'),
    email: Yup.string()
        .email('Email is not valid')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Password is too Short')
        .required('Required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords Must Match')
        .required('Required'),
});

export const SignUpInitialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

/**
 * validates user verification form
 */
export const registrationCodeValidation = Yup.object().shape({
    verificationCode: Yup.string()
        // .min(8, 'You Confirmation Code Must be 8 Characters Minimum')
        // .max(8, 'You Confirmation Code Must be 8 Characters Maximum')
        .required('Required'),
    email: Yup.string()
        .email('Please Enter a Valid Email')
        .required('Required'),
});

export const registrationCodeInitialValues = {
    verificationCode: '',
    email: '',
};

/**
 * validates forgot password from
 */
export const forgotPasswordValidation = Yup.object().shape({
    email: Yup.string()
        .email('Email is not Valid')
        .required('Required'),
});
export const forgotPasswordInitialValues = {
    userEmail: '',
};

/**
 * validates reset password from
 */
export const resetPasswordValidation = Yup.object().shape({
    resetCode: Yup.string().required('Required'),
    email: Yup.string()
        .email('Email is not Valid')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Password is too Short')
        .required('Required'),
    confirmpassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords Must Match')
        .required('Required'),
});

export const resetPasswordInitialValues = {
    resetCode: '',
    email: '',
    password: '',
    confirmpassword: '',
};

/**
 * application validation
 */
export const ApplicationValidation = Yup.object().shape({
    // personal info
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string('Email is not valid')
        .email('Email is not Valid')
        .required('Required'),
    dob: Yup.date()
        .min(
            new Date(getValidDobRange().min),
            `Date Must be greater than ${getValidDobRange().min}`
        )
        .max(new Date(getValidDobRange().max), 'Must Be at Least 18 Years Old')
        .required('Required'),
    gender: Yup.string(),
    race: Yup.string(),
    phoneNumber: Yup.string()
        .trim()
        .min(10, 'Phone Number is too short')
        .required('Required')
        .matches(phoneRegExp, 'Phone number is not valid'),
    // school info
    schoolName: Yup.string().required('Required'),
    levelOfStudy: Yup.string(),
    graduationYear: Yup.string(),
    major: Yup.string(),
    // profetional info
    areaOfFocus: Yup.string(),
    resume: Yup.mixed().required('Required'),
    // resume: Yup.string().required("Must add your resume"),
    linkedIn: Yup.string().url('LinkedIn URL is not Valid'),
    portfolio: Yup.string().url('Portfolio URL is not Valid'),
    github: Yup.string().url('Github URL is not Valid'),
    // additional info
    shirtSize: Yup.string().required('Required'),
    dietaryRestriction: Yup.string().required('Required'),
    firstTimeHack: Yup.string().required('Required'),
    howDidYouHear: Yup.string().required('Required'),
    reasonForAttending: Yup.string().required('Required'),
    haveBeenToShell: Yup.string().required('Required'),
    needReimburesment: Yup.string().required('Required'),
    mlh: Yup.boolean()
        .oneOf([true], 'You must agree to MLH Code of Conduct')
        .required('Required'),
    sponsorPromo: Yup.boolean().oneOf(
        [true],
        'Must Agree to receive emails from our Sponsors'
    ),
    // .required("Required")
});

// application initial values
export const ApplicationInitialValues = {
    // personal info
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    gender: '',
    race: '',
    phoneNumber: '',
    // school info
    schoolName: '',
    levelOfStudy: '',
    graduationYear: '',
    major: '',
    // profetional info
    areaOfFocus: '',
    resume: null,
    linkedIn: '',
    portfolio: '',
    github: '',
    // additional info
    shirtSize: '',
    dietaryRestriction: '',
    firstTimeHack: '',
    howDidYouHear: '',
    reasonForAttending: '',
    haveBeenToShell: '',
    needReimburesment: '',
    mlh: '',
    sponsorPromo: '',
};