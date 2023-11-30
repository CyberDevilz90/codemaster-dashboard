import { Box, Card, Flex, Image } from '@chakra-ui/react';
import useCustomToast from '../utils/useCustomToast';
import { useEffect, useState } from 'react';
import Button from './Button';
import FormInput from './FormInput';

const UnderContruction = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { showToastError, showToastSuccess } = useCustomToast();
  const onRender = () => {
    showToastError('404 : Not Found');
  };

  useEffect(() => {
    setTimeout(() => {
      onRender();
    }, 3000);
  }, []);

  return (
    <Box display="flex" justifyContent="center">
      <Image
        src={window.location.origin + '/image.jpg'}
        alt="Not Found"
        boxSize="100%"
        maxWidth="100vw"
        maxHeight="100vh"
        fit="contain"
      />
      <Button text="Ini adalah Tombol" isBgGradient={true} />
      <FormInput label="Ini Adalah Form Input" placeholder="placeholder" />
      <Card w="628px" minH="516px" margin="auto" padding="40px">
        <Flex direction="column" gap="16px">
          <FormInput
            name="email"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
            label="Email"
            placeholder="Enter your Email"
          />
          <FormInput
            name="password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
            label="Password"
            placeholder="Enter your Password"
            type="password"
          />
        </Flex>
        <Box />
        <Button text="Button" isLoading={isLoading} onClick={onsubmit} />
      </Card>
    </Box>
  );
};

export default UnderContruction;
