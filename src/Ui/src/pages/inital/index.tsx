import { Position } from '@domain/entities';
import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useUserService } from '../../context';

// import { Container } from './styles';

const InitialPage: React.FC = () => {
    const { addUser } = useUserService()

    useEffect(() => {
        addUser('', {} as Position)
    }, [])
    
  return(
    <View>
        <Text>INITAL PAGE</Text>
    </View>
  )
}

export default InitialPage;