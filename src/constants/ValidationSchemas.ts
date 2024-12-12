import * as Yup from 'yup';

export const signupValidationSchema = Yup.object().shape({
  name: Yup.string()
    .trim('Name cannot be empty')
    .min(3)
    .required('Name is required')
    .label('Name'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      'It must contain 8 characters, one uppercase, one lowercase, and a number',
    )
    .min(8)
    .label('Password'),
  // confirmPassword: Yup.string()
  //   .required(`Confirm password is required`)
  //   .equals([Yup.ref('password'), null], `Passwords don't match`)
  //   .label('confirmPassword'),
});

export const signInValidationSchema = Yup.object().shape({
  email: Yup.string()
    .trim('Email is required')
    .required('Email is required')
    .email('Invalid email address'),
  password: Yup.string().required('Password is required').label('Password'),
});

export const forgotPasswordSchema = Yup.object().shape({
  userEmail: Yup.string()
    .trim('Email is required')
    .required('Email is required')
    .email('Invalid email address'),
});

export const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      'It must contain 8 characters, one uppercase, one lowercase, and a number',
    )
    .min(8)
    .label('Password'),
  confirmPassword: Yup.string()
    .required(`Confirm password is required`)
    .equals([Yup.ref('password'), null], `Passwords don't match`)
    .label('confirmPassword'),
});

export const passwordUpdateSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .required('Current Password is required')
    .label('Password'),
  newPassword: Yup.string()
    .required('New Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      'It must contain 8 characters, one uppercase, one lowercase, and a number',
    )
    .min(8)
    .label('Password'),
  confirmPassword: Yup.string()
    .required(`Confirm password is required`)
    .equals([Yup.ref('newPassword'), null], `Passwords don't match`)
    .label('confirmPassword'),
});
