import { Button, SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { getTomorrowDate } from '../services/date-service';

const GameGrid = () => {

const {games, error, isLoading} = useGames();
const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{ sm : 1, md : 2, lg : 3, xl : 5 }} padding='10px' spacing={3}>
            {isLoading && skeletons.map((Skeleton) => <GameCardContainer><GameCardSkeleton key={Skeleton}/></GameCardContainer>)}
            {games.map((game) => (
            <GameCardContainer>
                <GameCard key = {game.id} game = {game}/>
            </GameCardContainer>
            ))}
        </SimpleGrid>
        <Button onClick={getTomorrowDate}> Date</Button>
    </>
  )
}

export default GameGrid
