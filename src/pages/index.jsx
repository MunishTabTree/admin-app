// importing pages from auth
import Login from './auth/login';
import Signup from './auth/signup';
import Forgot from './auth/forgot';

// importing pages from home
import HomePage from './home'

// import layout for all tabs
import MainLayout from './layout/main';
import AuthLayout from './layout/auth';

// importing error files
import Error404 from './error/404';

export {
  MainLayout,
  AuthLayout,
  Login,
  Signup,
  Forgot,
  HomePage,
  Error404
}