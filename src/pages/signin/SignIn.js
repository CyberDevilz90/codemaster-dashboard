import FormInput from '../../components/FormInput';
import Button from '../../components/Button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { useAuth } from '../../services';

const SignIn = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth();
const [ form, setForm] = useState({
  email: '',
  password: '',
})
const [isLoading, setIsLoading] = useState(false)
const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name] : e.target.value
  })
}

const handleSubmit = async () => {
  setIsLoading(true)
  try {
    const res = await signIn(form)
    localStorage.setItem('access_token', res.token)
    navigate('/admin/dashboard', {replace: true})
  } catch(e) {
  }
  setIsLoading(false)
}

useEffect(() => {
  document.title = 'Sign In';
},[]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="body">
          <img
            alt="codemasters"
            src={window.location.origin + '/codemaster.png'}
            className="codemaster"
          />
          <p className="signin">SIGN IN</p>
          <p className="credential">
            Enter your credentials to access your account
          </p>
          <Box
            width="100%"
            flexDirection="column"
            display="flex"
            marginTop="20px"
          >
            <FormInput
              inputColor="black"
              labelColor="black"
              name="email"
              value={form.email}
              onChange={handleChange}
              label="Email"
              placeholder="Enter your Email"
            />
            <Box padding="5px" />
            <FormInput
              inputColor="black"
              labelColor="black"
              name="password"
              value={form.password}
              onChange={handleChange}
              label="Password"
              placeholder="Enter your Password"
              type="password"
            />
            <Box padding="10px" />
            <Button text="SUBMIT" isBgGradient onClick={handleSubmit} isLoading={isLoading}/>
          </Box>
          <p className="reset">
            Forgot your password ?
            <a href="www.codemasters.id" className="link">
              Reset Password
            </a>
          </p>
        </div>
      </header>
    </div>
  );
};

export default SignIn;
