

import { Button, Checkbox, FormControl, FormLabel, Input, Stack, RadioGroup, Radio } from "@chakra-ui/react";
import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/layout';

export default function Login() {
    return (
        <Box
            w={["25rem"]}
            p={[8, 10]}
            mt={['20', '10vh']}
            mx='auto'
            h="31rem"
            border={['none', '1px']}
            borderColor={['', 'gray.300']}
            borderRadius={10}
        >
            <VStack spacing={4} align='flex-start' w='full'>



                <VStack spacing={1} align={['flex-start', 'center']} w='full'>
                    <Heading>Login</Heading>
                    <Text>Enter your e-mail and password to login</Text>
                </VStack>

                <FormControl>
                    <FormLabel>E-mail Address</FormLabel>
                    <Input rounded='none' variant='filled' placeholder="enter your email" />
                </FormControl>

                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input rounded='none' variant='filled' type='password' placeholder="enter your password" />
                </FormControl>

                <HStack w='full' justify='space-between'>
                    <Checkbox>Remember me.</Checkbox>

                    <Button variant='link' colorScheme='blue'>
                        Forgot Password?
                    </Button>
                </HStack>
                <RadioGroup defaultValue='1'>
                    <Stack>

                        <Radio value='3'>No education</Radio>
                        <Radio value='2'>10th</Radio>
                        <Radio value='3'>12th</Radio>
                    </Stack>
                </RadioGroup>

                <Button rounded='none' colorScheme='blue' w={['full', 'auto']} alignSelf='end'>
                    Login
                </Button>

            </VStack>
        </Box>
    );
}