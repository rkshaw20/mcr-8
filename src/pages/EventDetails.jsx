import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tag,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import { useParams } from 'react-router-dom';
import { useDataContext } from '../context/DataContextProvider';

import { FiClock } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { useState } from 'react';

const EventDetails = () => {
  const { eventId } = useParams();
  const { data } = useDataContext();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [rsvp,setRsvp]=useState(false)

  const event = data.find(({ id }) => id === eventId);

  const handleRsvp=()=>{
    setRsvp(true);
    onClose();
  }

  const currentDate= new Date();
  const isCrossed=event.eventEndTime < currentDate;
  return (
    <Flex m={2} flexDir="column" h="full" alignItems="center" gap={2}>
      <Flex w="full" justifyContent="space-between">
        <Heading color="red.400">meetup</Heading>
        <Input type="search" placeholder="search by title and tags" w="300px" />
      </Flex>
      <Divider />
      <Flex gap={2} w="full">
        <Flex flexDir="column" gap={2} w="50%" m={2}>
          <Heading>{event.title}</Heading>
          <Text>Hosted By:{event.hostedBy}</Text>
          <Image
            src={event.eventThumbnail}
            alt={event.title}
            w="500px"
            h="300px"
          />
          <Heading size="md">Details:</Heading>
          <Text> {event.eventDescription}</Text>
          <Heading size="md">Additionl Information:</Heading>
          <Text fontWeight="bold">Dress Code:</Text>{' '}
          <Text>{event.additionalInformation.dressCode}</Text>
          <Text fontWeight="bold">Age Restriction:</Text>{' '}
          <Text>{event.additionalInformation.ageRestrictions}</Text>
          <Heading size="bold">Event Tags:</Heading>
          {event.eventTags.map((tag, i) => (
            <Tag key={i} bgColor="red.400" w="fit-content">
              {tag}
            </Tag>
          ))}
        </Flex>
        <Flex gap={2} flexDir="column">
          <Box rounded="1rem" bgColor="gray.200" p={2}>
            <Text m={1}>
              <Icon as={FiClock} />{' '}
              {new Date(event.eventStartTime).toDateString() +
                ' ' +
                new Date(event.eventStartTime).toLocaleTimeString()}{' '}
              to{' '}
              {new Date(event.eventEndTime).toDateString() +
                ' ' +
                new Date(event.eventEndTime).toLocaleTimeString()}
            </Text>{' '}
            <Text m={1}>
              <Icon as={GoLocation} />
              {event.location}, {event.address}
            </Text>
            <Text>Rs.{event.price}</Text>
          </Box>

          <Flex flexDir="column" gap={2}>
            <Heading size="md">Speakers:({event.speakers.length})</Heading>
            {event.speakers.map((item,i) => (
              <Flex
                key={i}
                flex="1"
                gap="4"
                alignItems="center"
                flexWrap="wrap"
                bgColor='gray.200'
                p={1}
              >
                <Avatar name={item.name} src={item.image} />

                <Box>
                  <Heading size="sm">{item.name}</Heading>
                  <Text>{item.designation}</Text>
                </Box>
              </Flex>
            ))}
          </Flex>
          {!isCrossed &&           <Button bgColor='red.400' w='fit-content' onClick={ !rsvp ? onOpen: null} >{rsvp? 'Already RSVPed':'RSVP'}</Button>
}
          <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
            <Flex flexDir='column' alignItems='center' w='full' >
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input isRequired placeholder='Name' type='text' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input isRequired placeholder='email' type='email' />
            </FormControl>
          </ModalBody>

          <ModalFooter  >
            <Flex  flexDir='column' alignItems='center' >
            <Text color='gray.400' size='sm' >*You have to make the payment at the venue.</Text>
            <Button colorScheme='blue' mr={3} onClick={handleRsvp} bgColor='red.400' >
              RSVP
            </Button>
            </Flex>
            
          </ModalFooter>
          </Flex>
        </ModalContent>

      </Modal>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default EventDetails;
