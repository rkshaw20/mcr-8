import {
    Box,
  Divider,
  Flex,
  Heading,
  Image,
  Input,
  Tag,
  Text,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useDataContext } from '../context/DataContextProvider';

// additionalInformation
// :
// {dressCode: 'Business casual', ageRestrictions: '18 and above'}
// address
// :
// "123 Main Street, City"
// eventDescription
// :
// "Join us for a day of technology insights and networking at the Tech Conference, organized by the Tech Community. This offline event will take place on August 1st from 9:00 AM to 5:00 PM at Tech Hub, located at 123 Main Street, City. The conference will feature renowned speakers including John Smith, CTO, and Jane Doe, Software Engineer. With a focus on technology and networking, this event offers a great opportunity to learn, connect, and stay up-to-date with the latest trends in the industry. The event is paid, and the ticket price is ₹7,500. Please adhere to the business casual dress code, and note that the event is open to individuals aged 18 and above."
// eventEndTime
// :
// "2023-07-13T17:00:00"
// eventStartTime
// :
// "2023-07-13T07:00:00"
// eventTags
// :
// Array(2)
// 0
// :
// "technology"
// 1
// :
// "networking"
// length
// :
// 2
// [[Prototype]]
// :
// Array(0)
// eventThumbnail
// :
// "https://i.postimg.cc/SKrZhNpS/pexels-photo-1181403.jpg"
// eventType
// :
// "Offline"
// hostedBy
// :
// "Tech Community"
// id
// :
// "meet001"
// isPaid
// :
// true
// location
// :
// "Tech Hub"
// price
// :
// "7,500"
// speakers
// :
// (2) [{…}, {…}]
// title
// :
// "Tech Conference"
const EventDetails = () => {
  const { eventId } = useParams();
  const { data } = useDataContext();

  console.log(eventId);
  const event = data.find(({ id }) => id === eventId);
  console.log(event);
  return (
    <Flex m={2} flexDir="column" h="full" alignItems="center" gap={2}>
      <Flex w="full" justifyContent="space-between">
        <Heading color="red.400">meetup</Heading>
        <Input type="search" placeholder="search by title and tags" w="300px" />
      </Flex>
      <Divider />
      <Flex gap={2} w='full' >
        <Flex flexDir="column" gap={2} w='50%' m={2} >
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
          {event.eventTags.map(tag => (
            <Tag bgColor="red.400" w="fit-content">
              {tag}
            </Tag>
          ))}
        </Flex>
        <Flex gap={2} flexDir='column' >
       <Box>
        
       </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default EventDetails;
