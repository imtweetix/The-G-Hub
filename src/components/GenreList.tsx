import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingBottom={3}>
          <HStack spacing={3}>
            <Image
              boxSize="32px"
              objectFit="cover"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name + ' Games'}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
