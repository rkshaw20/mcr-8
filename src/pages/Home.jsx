import {
  Card,
  CardBody,
  Divider,
  Flex,
  Heading,
  Image,
  Input,
  Select,
  Text,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { useDataContext } from '../context/DataContextProvider';
import EventCard from '../Components/EventCard';
import { useState } from 'react';

const Home = () => {
  const { data } = useDataContext();
  const [selectedInput, setSelectedInput] = useState('');
  const [search, setSearch] = useState('');

  const handleSelect = e => {
    setSelectedInput(e.target.value);
  };
  const handleSearch = e => {
    setSearch(e.target.value.toLowerCase().trim());
  };
  const searchedData = search.length
    ? data.filter(({ title,eventTags }) => title.toLowerCase().includes(search)|| eventTags.includes(search)) 
    : data;

  const filteredData =
  selectedInput.length?
    selectedInput === 'Both'
      ? searchedData
      : searchedData.filter(({ eventType }) => eventType === selectedInput): searchedData;


  return (
    <Flex m={2} flexDir="column" h="full" alignItems="center" gap={2}>
      <Flex w="full" justifyContent="space-between">
        <Heading color="red.400">meetup</Heading>
        <Input
          type="search"
          placeholder="search by title and tags"
          w="300px"
          onChange={e => handleSearch(e)}
        />
        {/* <ColorModeSwitcher/> */}
      </Flex>
      <Divider />

      <Flex w="full" h="full" flexDir="column">
        <Flex w="full" justifyContent="space-between">
          <Heading>Meetup Events</Heading>
          <Select
            placeholder="Select option"
            w="200px"
            onChange={e => handleSelect(e)}
          >
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
            <option value="Both">Both</option>
          </Select>
        </Flex>
        <Flex flexWrap="wrap">
          {filteredData.map(event => (
            <EventCard event={event} key={event.id} />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Home;
