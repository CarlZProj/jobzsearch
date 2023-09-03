//TODO: use for configuring sign up

const signUpConfig = {
  header: 'Sign Up',
  hideAllDefaults: true,
  signUpFields: [
    {
      label: 'Full Name',
      key: 'name',
      required: true,
      displayOrder: 1,
      type: 'string',
    },
  ],
};

export default signUpConfig;
