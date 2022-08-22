import * as React from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
import { useLocation, useUserService } from '../../hooks';
import { Text } from '../../components';
import { PRIMARY } from '../../constants';
import makerImg from "../../../assets/marker.png"

export default function Map() {
  const location = useLocation()
  const { users } = useUserService()


  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        initialRegion={{
          latitude: location.latitude, 
          longitude: location.longitude, 
          latitudeDelta: 0.05, 
          longitudeDelta: 0.05,
        }}
      >
        {
          users.map(user => {
            return(
              <Marker 
                key={user.id} 
                coordinate={{
                  latitude: user.position.latitude, 
                  longitude: user.position.longitude
                }}
                image={makerImg}
              >

                <Callout>
                  <View style={styles.calloutView}>
                    <View style={styles.calloutImage}>
                      <Image source={{uri: user.phoroUrl}} style={styles.imageMarker}/>
                      <Text fontWeight='bold' style={styles.calloutTitle}>{user.username}</Text>
                    </View>
                    <Text style={styles.calloutContent}>Techs: {user.techs?.join(", ")}</Text>
                    {user.email && <Text style={styles.calloutContent}>Email: {user.email}</Text>}
                  </View>
                </Callout>
              </Marker>
            )
          })
        }
      
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  imageMarker: { 
    width: 60, 
    height: 60, 
    resizeMode: "contain",
    borderRadius: 50,
    borderWidth: 5,
    borderColor: PRIMARY
  }, 
  calloutView: { width: 250 }, 
  calloutTitle: { marginLeft: 10, textAlign: "center" }, 
  calloutContent: { fontSize: 12 }, 
  calloutImage: { flexDirection: "row", alignItems: "center", marginBottom: 5 }
});