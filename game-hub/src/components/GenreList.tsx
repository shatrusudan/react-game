import React from 'react'
import useGenres from '../hooks/useGenres'
import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';

const GenreList = () => {
const {genres, isLoading, error} = useGenres();

if(error) return null;
if(isLoading) return <Spinner />;
  return (
    <List>
        {genres.map(genre => (
        <ListItem key={genre.id} paddingY= '5px'>
            <HStack>
                <Image boxSize='32px' borderRadius={8} src={genre.image_background}></Image>
                <Text fontSize='lg'>{genre.name}</Text>
            </HStack>
            </ListItem>
            ))}
    </List>
  )
}

export default GenreList
