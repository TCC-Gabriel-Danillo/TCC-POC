import { useState } from 'react';
import { View, Image } from 'react-native';
import { useUserService, useLocation } from '../../hooks';
import { Text, Input, Button } from "../../components"
import devImg from "../../../assets/dev.png"
import { styles } from './style';

const InitialPage: React.FC = () => {
    const { addUser } = useUserService()
    const position = useLocation()
    const [username, setUsername] = useState(''); 
    
    const handleButtonPress = () => {
      addUser(username, position)
    }

  return(
    <View style={styles.container}>
        <Text fontType='h1' fontWeight='bold'>Bem Vindo ao FindDev!</Text>
        <Text fontType='h2' style={styles.subtitle}>Encontre incríveis desenvolvedores próximos a você.</Text>
       
        <Image source={devImg} style={{width: 300, height: 300, resizeMode: "contain"}} />
        
        <Input onChange={(value) => setUsername(value)} placeholder='Seu Usuário no Github'/>
        <Button onPress={handleButtonPress} style={styles.button}>Entrar</Button>
    </View>
  )
}

export default InitialPage;