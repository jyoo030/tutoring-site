import {
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  HStack,
  ButtonGroup,
  Box,
  Spacer,
  IconButton
} from '@chakra-ui/react';
import { ArrowForwardIcon, CalendarIcon } from '@chakra-ui/icons';

export default function WithBackgroundImage() {
  return (
    <>
    <Flex
      w= 'full' 
      h='75vh'
      bg="facebook.100"
      direction="row"
      align="center"
      justify="center">

      <Flex flex={1}>
        <Spacer flex={1}/>
        <VStack flex={2} align="flex-start">
          <Text
            color={'black'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>JYOONITS ACADEMY</Text>
          <Text
            color={'black'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>LEARN TO CODE</Text>
          <Text pt={10}>Change out photo on right lol</Text>
          <ButtonGroup spacing={5} pt={10} size='lg'>
            <Button rightIcon={<ArrowForwardIcon />}>Courses</Button>
            <Button rightIcon={<ArrowForwardIcon />}>Contact Us</Button>
          </ButtonGroup>
        </VStack>
      </Flex>
      <Flex
        flex={1}
        w={'full'}
        h={'100%'}
        backgroundImage={
          'url(https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3269&q=80)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>    
      </Flex>
    </Flex>
    <Flex
      w= 'full' 
      h='90vh'
      bg="white"
      direction="row"
      align="center"
      justify="center">
      
      <Flex gap={10} w="70vw" h="40%">
        <Box borderRadius="xl" bg='pink.100' w="25%" h="100%">
          <VStack py={5} h="100%" w="100%">
            <CalendarIcon h="50%" w="50%"/>
            <Spacer/>
            <Text fontWeight={700} fontSize='3xl'>AP CS A</Text>
            <Text>10 Week Course</Text>
            <Button rightIcon={<ArrowForwardIcon />}>Learn More</Button>
          </VStack>
        </Box>
        <Box borderRadius="xl" bg='linkedin.100' w="25%" h="100%">
          <VStack py={5} h="100%" w="100%">
            <CalendarIcon h="50%" w="50%"/>
            <Spacer/>
            <Text fontWeight={700} fontSize='3xl'>AP CS B</Text>
            <Text>20 Week Course</Text>
            <Button rightIcon={<ArrowForwardIcon />}>Learn More</Button>
          </VStack>
        </Box>
        <Box borderRadius="xl" bg='green.100' w="25%" h="100%">
          <VStack py={5} h="100%" w="100%">
            <CalendarIcon h="50%" w="50%"/>
            <Spacer/>
            <Text fontWeight={700} fontSize='3xl'>Web Development</Text>
            <Text>12 Week Course</Text>
            <Button rightIcon={<ArrowForwardIcon />}>Learn More</Button>
          </VStack>
        </Box>
        <Box borderRadius="xl" bg='purple.100' w="25%" h="100%">
          <VStack py={5} h="100%" w="100%">
            <CalendarIcon h="50%" w="50%"/>
            <Spacer/>
            <Text fontWeight={700} fontSize='3xl'>Intro to Python</Text>
            <Text>8 Week Course</Text>
            <Button rightIcon={<ArrowForwardIcon />}>Learn More</Button>
          </VStack>
        </Box>
      </Flex>
    </Flex>
    </>
  );
}
