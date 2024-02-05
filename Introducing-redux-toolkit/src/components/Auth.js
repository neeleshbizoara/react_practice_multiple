import { useRef } from 'react';
import classes from './Auth.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/authSlice';

const Auth = () => {
  const email = useRef();
  const password = useRef();

  const dispatch = useDispatch();
  // const authState = useSelector(state => state.auth.isAuthenticated)

  function onLogin(event) {
    // debugger
    event.preventDefault();
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    if (emailValue.trim() !== '' && passwordValue !== '') {
      dispatch(authActions.login())
    }
  }
  return (
    <main className={classes.auth}>
      <section onSubmit={onLogin}>
        <form>
          <div className={classes.control}>
            <label htmlFor='email' >Email</label>
            <input type='email' id='email' ref={email} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={password} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
