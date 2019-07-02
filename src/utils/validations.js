import * as Yup from "yup";
import moment from "moment";

/**
 * custom validations
 */
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const getValidDobRange = () => {
  let min = moment()
    .subtract(100, "years")
    .format("YYYY-MM-DD");
  let max = moment()
    .subtract(6570, "days") //18yrs from today
    .format("YYYY-MM-DD");
  return { min, max };
};

/**
 * login validation
 */
export const LogInValidation = Yup.object().shape({
  email: Yup.string()
    .email("Email is not valid")
    .required("Email is required"),
  password: Yup.string()
    .min("Password is too short")
    .required("Password is required")
});

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
  confirmPassword: Yup.string().required("Please confirm your password")
});

/**
 * application validation
 */
export const ApplicationValidation = Yup.object().shape({
  //personal info
  firstName: Yup.string().required("Must enter your First Name"),
  lastName: Yup.string().required("Must enter your Last Name"),
  email: Yup.string("Must enter your school Email Address")
    .email()
    .required(),
  dob: Yup.date()
    .min(
      new Date(getValidDobRange().min),
      `Date of Birth must be greater than ${getValidDobRange().min}`
    )
    .max(
      new Date(getValidDobRange().max),
      "Must be at least 18 years old to attend Shellhacks"
    ),
  gender: Yup.string(),
  race: Yup.string(),
  phoneNumber: Yup.string()
    .trim()
    .min(10, "Phone Number is too short!")
    .required("Must add Phone Number")
    .matches(phoneRegExp, "Phone number is not valid"),
  //school info
  schoolName: Yup.string().required("You must select a school"),
  levelOfStudy: Yup.string(),
  graduationYear: Yup.string(),
  major: Yup.string(),
  //profetional info
  areaOfFocus: Yup.string(),
  resume: Yup.mixed().required("You must add your resume"),
  // resume: Yup.string().required("Must add your resume"),
  linkedIn: Yup.string().url("Please enter a valid URL for your LinkedIn"),
  portfolio: Yup.string().url("Please enter a valid URL fro you Portfolio"),
  github: Yup.string().url("Please enter a valid URL for you GitHub account"),
  //additional info
  shirtSize: Yup.string().required("You must select a shirt size"),
  dietaryRestriction: Yup.string().required(
    "Please tell us if you have a dietary restrictions"
  ),
  firstTimeHack: Yup.string().required(
    "Please tell us if you are a first time hacker"
  ),
  howDidYouHear: Yup.string().required(
    "Please let us know how you heard about us"
  ),
  reasonForAttending: Yup.string().required(
    "Must tell us if you attended ShellHacks last year"
  ),
  haveBeenToShell: Yup.string().required(
    "Whoa! Please tell us if you've been to ShellHacks before"
  ),
  needReimburesment: Yup.string().required(
    "Must tell us if you need Travel Reimbursement"
  ),
  mlh: Yup.boolean().oneOf([true], "You must agree to MLH Code of Conduct"),
  fiu: Yup.boolean().oneOf([true], "You must agree to FIU Agreements")
});

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
  resume: null,
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
  mlh: "",
  fiu: ""
};
