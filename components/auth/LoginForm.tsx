import {FcGoogle} from 'react-icons/fc';
import {FiMail} from "react-icons/fi";
import {Button, Center, Stack, Text} from '@chakra-ui/react';
import {useDisclosure} from "@chakra-ui/hooks";
import LoginEmail from "./LoginEmail";
import CustomIcon from "../customIcon/CustomIcon";
import metamaskIcon from '../../public/assets/images/metamask-fox.svg'
import {FaTwitter} from "react-icons/fa";
import styles from './LoginForm.module.css'


export default function LoginForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Center p={8}>
      <LoginEmail isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
      <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>
        {/* Metamask */}
        <Button w={'full'} leftIcon={<CustomIcon className={styles.customIcon} imgSrc={metamaskIcon} />}>
          <Center>
            <Text>Sign In with Metamask</Text>
          </Center>
        </Button>
        <Button onClick={onOpen} w={'full'} leftIcon={<FiMail />}>
          <Center>
            <Text>Sign In with Email</Text>
          </Center>
        </Button>
        {/* Google */}
        <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
          <Center>
            <Text>Sign in with Google</Text>
          </Center>
        </Button>
        {/* Twitter */}
        <Button w={'full'} colorScheme={'twitter'} variant={'outline'} leftIcon={<FaTwitter />}>
          <Center>
            <Text>Sign in with Twitter</Text>
          </Center>
        </Button>

      </Stack>
    </Center>
  );
}