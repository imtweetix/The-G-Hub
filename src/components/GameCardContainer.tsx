import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Flex borderRadius={10} overflow="hidden">
      {children}
    </Flex>
  );
};

export default GameCardContainer;
