import { Box, Card, CardBody, Image, Link, Text } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

const EventCard = ({ event }) => {

  return (
    <Card w="300px" gap={2} margin={2} >
        <Link as={ReachLink} to={`${event.id}`} >
       
      <CardBody>
        <Box>
          <Image
            src={event.eventThumbnail}
            alt={event.title}
            position="relative"
          />
          <Box
            rounded={2}
            position="absolute"
            top={6}
            left={6}
            bgColor="gray.50"
          >
            <Text m=".2rem">{event.eventType}</Text>
          </Box>
        </Box>
        <Text> {new Date(event.eventEndTime).toDateString() +
                  " " +
                  new Date(event.eventEndTime).toLocaleTimeString()}{" "} </Text>
        <Text fontWeight="bold">{event.title}</Text>
      </CardBody>
      </Link>
    </Card>
  );
};

export default EventCard;
