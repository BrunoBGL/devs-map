import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';


import api from '../services/api';
import { subscribeToNewDevs, connect, disconnect } from '../services/socket';

export default function Main({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState(null);
  const [devs, setDevs] = useState([]);
  const [techs, setTechs] = useState('');

  const setupWebSocket = () => {

    const { latitude, longitude } = currentRegion;
    connect({
      latitude,
      longitude,
      techs
    });
  }
  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          longitude,
          latitude,
          longitudeDelta: 0.05,
          latitudeDelta: 0.05,
        })
      }
    };

    loadInitialPosition();
  });

  useEffect(() => {
    subscribeToNewDevs(dev => setDevs([...devs, dev]));
  }, [devs]);

  if (!currentRegion) {
    return null;
  }

  const loadDevs = async () => {

    const { latitude, longitude } = currentRegion;

    const res = await api.get('/search', {
      params: {
        latitude,
        longitude,
        techs,
      }
    })

    setDevs(res.data);
    setupWebSocket();

    devs.map(dev => console.log(dev.location.coordinates[0]))
  }

  const handleRegionChanged = (region) => {
    setCurrentRegion(region)
  }

  return (
    <>
      <MapView
        onRegionChangeComplete={handleRegionChanged}
        style={styles.map}
        initialRegion={currentRegion}
      >
        {devs.map(dev => (
          <Marker
            key={dev._id}
            coordinate={{
              latitude: dev.location.coordinates[0],
              longitude: dev.location.coordinates[1],
            }}>
            <Image style={styles.avatar} source={{ uri: dev.avatar_url }} />
            <Callout onPress={() => {
              navigation.navigate('Profile', { github_username: dev.github_username });
            }}>
              <View style={styles.callout}>
                <Text style={styles.name}>{dev.name}</Text>
                <Text style={styles.bio}>{dev.bio}</Text>
                <Text style={styles.techs}>{dev.techs.join(', ')}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <View style={styles.form}>
        <>
          <TextInput
            style={styles.input}
            placeholder='Buscar usuarios por tecnologias'
            placeholderTextColor='#999'
            autoCapitalize='words'
            autoCorrect={false}
            value={techs}
            onChangeText={setTechs}
          />
          <TouchableOpacity onPress={loadDevs} style={styles.button}>
            <MaterialIcons name='my-location' size={20} color='#fff' />
          </TouchableOpacity>
        </>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 5,
    borderWidth: 5,
    borderColor: '#fff',
  },
  callout: {
    width: 250,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bio: {
    color: '#666',
    marginTop: 5,
  },
  techs: {
    marginTop: 5,
  },
  form: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    left: 20,
    zIndex: 5,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#fff',
    color: '#333',
    borderRadius: 25,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 2,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  }
})