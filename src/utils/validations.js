import * as Yup from 'yup'
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

/**
 * login validation 
 */
export const LogInValidation = Yup.object().shape({
  email: Yup.string()
    .email("Email is not valid")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
})


/**
 * signup validation 
 */
export const SignUpValidation = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First name cannot be empty")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Last name cannot be empty")
    .required("Last name is required"),
  email: Yup.string()
    .email("Email is not valid")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
})

/**
 * application validation 
 */
export const ApplicationValidation = Yup.object().shape({
  //personal info
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  dob: Yup.string().required(),
  gender: Yup.string().required(),
  race: Yup.string().required(),
  phoneNumber: Yup.string().trim().min(10, "Phone Number is too short!").required().matches(phoneRegExp, 'Phone number is not valid'),
  //school info
  schoolName: Yup.string().required("Must select a school"),
  levelOfStudy: Yup.string().required("Must select your level of study"),
  graduationYear: Yup.string().required("Must select your graduation year"),
  major: Yup.string().required("Must select your major"),
  //profetional info
  areaOfFocus: Yup.string().required("Must select an area of focus"),
  resume: Yup.string().required("Must add your resume"),
  linkedIn: Yup.string(),
  portfolio: Yup.string(),
  github: Yup.string(),
  //additional info
  shirtSize: Yup.string().required(),
  dietaryRestriction: Yup.string().required(),
  firstTimeHack: Yup.string().required(),
  howDidYouHear: Yup.string().required(),
  reasonForAttending: Yup.string().required(),
  haveBeenToShell: Yup.string().required(),
  needReimburesment: Yup.string().required(),
  mlh: Yup.string().required("You must agree to the MLH Code of Conduct."),
  fiu: Yup.string().required("You must agree to the FIU Code of Conduct.")
})

export const ApplicationInitialValues = {
  //personal info
  firstName: "",
  lastName: "",
  email: "",
  dob: "",
  gender: "",
  race: "",
  phoneNumber: "",
  //school info
  schoolName: "",
  levelOfStudy: "",
  graduationYear: "",
  major: "",
  //profetional info
  areaOfFocus: "",
  resume: "",
  linkedIn: "",
  portfolio: "",
  github: "",
  //additional info
  shirtSize: "",
  dietaryRestriction: "",
  firstTimeHack: "",
  howDidYouHear: "",
  reasonForAttending: "",
  haveBeenToShell: "",
  needReimburesment: "",
  mlh: "DISAGREE",
  fiu: "DISAGREE",
}


