import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/api-client';

interface Props{
    game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card >
        {/* <Image src ={getCroppedImageUrl(game.background_image)}/> */}
        <Image src ={game.background_image}/>
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
            <HStack justifyContent='space-between'>
              <CriticScore score={game.metacritic}/>
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard
