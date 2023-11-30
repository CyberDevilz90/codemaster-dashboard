'use-client';

import {
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Image,
  Center,
  Button,
} from '@chakra-ui/react';
import { FiHome, FiUsers } from 'react-icons/fi';
import { VsNote, VsSettings } from 'react-icons/vsc';
import { BiBook, BiDollar, BiLogOut } from 'react-icons/bi';
import Constants from '../constants';
import { useNavigate } from 'react-router-dom';

const LinkItems = [
  {
    name: 'Home',
    icon: FiHome,
    pathname: '/admin/dasboard',
  },
  {
    name: 'Course',
    icon: BiBook,
    pathname: '/admin/course',
  },
  {
    name: 'Students',
    icon: FiHome,
    pathname: '/admin/students',
  },
  {
    name: 'Payment',
    icon: FiHome,
    pathname: '/admin/payment',
  },
  {
    name: 'Report',
    icon: FiHome,
    pathname: '/admin/report',
  },
  {
    name: 'Settings',
    icon: FiHome,
    pathname: '/admin/settings',
  },
];

const NavItem = ({ icon, children, pathname, ...rest }) => {
  const currentPathName = window.location.pathname;
  const isActive = pathname === currentPathName;

  return (
    <Box
      as="a"
      href={pathname}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        pt="12px"
        pb="12px"
        pl="16px"
        pr="16px"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        color={isActive ? "white" : 'gray.500'}
        bgGradient={
          isActive ? 'linear(to-r, #F94449 37.55%, #A62D31 184.78%)' : ''
        }
        fontSize="14"
        _hover={{
          bgGradient: 'linear(to-r, #F94449 37.55%, #A62D31 184.78%)',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="14"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const Sidebar = ({ onclose, ...rest }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('gray.100', 'gray.100')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      p='24px'
      {...rest}
    >
      <Flex>
        <Image
          src={window.location.origin + '/codemaster.png'}
          w="200px"
        />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onclose} />
      </Flex>
      <Box mb="40px">
        <Center>
          <Image
            src={window.location.origin + '/Avatar.png'}
            w="100px"
            h="100px"
            mt='40px'
          />
        </Center>
        <Center mt="8px">
          <Text fontSize="md" color='black'>Amanda Santini</Text>
        </Center>
        <Center>
          <Text fontSize="sm" color="gray.500">
            Admin
          </Text>
        </Center>
      </Box>
      <Flex direction="column" gap="16px">
        {LinkItems.map(Link => (
          <NavItem key={Link.name} icon={Link.icon} pathname={Link.pathname}>
            {Link.name}
          </NavItem>
        ))}
      </Flex>
      <Center>
        <Button
          textColor="gray.500"
          mt="40px"
          size="sm"
          variant="ghost"
          rightIcon={<BiLogOut />}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Center>
    </Box>
  );
};

export default Sidebar;
