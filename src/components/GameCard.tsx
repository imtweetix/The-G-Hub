import { Card, CardBody, Flex, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import Emoji from './Emoji';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => (
  <Card>
    <Image src={getCroppedImageUrl(game.background_image)} />
    <CardBody>
      <Flex justifyContent="space-between" marginBottom={3}>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <CriticScore score={game.metacritic} />
      </Flex>
      <Heading fontSize="xl">
        {game.name}
        <Emoji rating={game.rating_top} />
      </Heading>
    </CardBody>
  </Card>
);

export default GameCard;
