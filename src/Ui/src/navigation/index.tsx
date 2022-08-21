import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { InitialPage, MapPage } from "../pages"

const Stack = createNativeStackNavigator()


export enum NavigationPages {
    inital = "inital",
    map = "map"
}

export function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={NavigationPages.inital} component={InitialPage} />
                <Stack.Screen name={NavigationPages.map} component={MapPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}