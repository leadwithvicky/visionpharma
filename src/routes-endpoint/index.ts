//auth

const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8083';

/**
 * this route for static page from the harcoded constant data [NEXT SERVER API]
 * NOTE: No need to change this route or implement this route in our backend api
 */
export const COURSE_ROUTES = {
  base: '/api/course',
};

/**
 * this route for static page from the harcoded constant data [NEXT SERVER API]
 * NOTE: No need to change this route or implement this route in our backend api
 */
export const CURRICULUM_ROUTES = {
  base: '/api/curriculum',
};

/**
 * this route for s3 bucket [NEXT SERVER API]
 * NOTE: This route is not implemented in our backend api
 * TODO: Implement this fron our backend apis if needed then change the route to our backend api
 */
export const S3_ROUTES = {
  delete: '/api/private/s3/delete',
  list: '/api/private/s3/list',
  presignedUrl: '/api/private/s3/presigned-url',
  upload: '/api/private/s3/upload',
  uploadPresignedUrl: '/api/private/s3/upload-presigned-url',
};

/**
 * this route for send email [NEXT SERVER API]
 * NOTE: This route is not implemented in our backend api
 * TODO: Implement this fron our backend apis if needed then change the route to our backend api
 */
export const SENDEMAIL_ROUTES = {
  base: '/api/private/send-email',
};

/**
 * ----- BELOW ROUTES ARE IMPLEMENTED IN OUR BACKEND API -----
 * ----- DO NOT CHANGE THESE ROUTES -----
 */
export const AUTH_ROUTES = {
  authMe: '/api/auth/me', //TODO: Implement this fron our backend apis
  //public
  // login: '/api/public/auth/login',
  // signup: '/api/public/auth/signup',

  login: `${BASE_URL}/auth/login`,
  signup: `${BASE_URL}/auth/signup`,
  signInWithGoogle:`${BASE_URL}/auth/google`,
  userDetail:`${BASE_URL}/private/users/token`
};

export const ENROLLMENT_ROUTES = {
  // base: '/api/private/enrollment',
  // userProgram: '/api/private/enrollment/user-programs',
  base: `${BASE_URL}/private/enrollment`,
  userProgram: `${BASE_URL}/private/enrollment/user-programs`,
};

export const PROGRAMS_ROUTES = {
  // base: '/api/private/programs',
  // curriculum: '/api/private/programs/curriculum',
  // update: '/api/private/programs/update',
  base: `${BASE_URL}/private/programs`,
  curriculum: `${BASE_URL}/private/programs/curriculum`,
  update: `${BASE_URL}/private/programs/update`,
};

export const SCHEDULECLASS_ROUTES = {
  // base: '/api/private/schedule-class',
  // enrolled: '/api/private/schedule-class/enrolled',
  base: `${BASE_URL}/private/schedule-class`,
  enrolled: `${BASE_URL}/private/schedule-class/enrolled`,
};

export const USERS_ROUTES = {
  // base: '/api/private/users',
  // changePassword: '/api/private/users/change-password',
  base: `${BASE_URL}/private/users`,
  changePassword: `${BASE_URL}/private/users/change-password`,
};

export const WEEKLYTEST_ROUTES = {
  // base: '/api/private/weekly-test',
  // analysis: '/api/private/weekly-test/analysis',
  // answers: '/api/private/weekly-test/answers',
  // questions: '/api/private/weekly-test/questions',
  // submissions: '/api/private/weekly-test/submissions',
  // test: '/api/private/weekly-test/test',

  base: `${BASE_URL}/private/weekly-test`,
  analysis: `${BASE_URL}/private/weekly-test/analysis`,
  answers: `${BASE_URL}/private/weekly-test/answers`,
  questions: `${BASE_URL}/private/weekly-test/questions`,
  submissions: `${BASE_URL}/private/weekly-test/submissions`,
  test: `${BASE_URL}/private/weekly-test/test`,
};
