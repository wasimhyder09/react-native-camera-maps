import { FlatList, View, Text, StyleSheet } from 'react-native';
import PlaceItem from './PlaceItem';
import { Colors } from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';

function PlacesList({ places }) {
  const navigation = useNavigation();
  function selectPlaceHandler(id) {
    navigation.navigate('PlaceDetails', {
      placeId: id
    })
  }
  if (!places || places.length === 0) {
    return <View style={styles.fallbackContainer}>
      <Text style={styles.fallbackText}>No places added yet. Start adding places.</Text>
    </View>
  }
  return <FlatList
    data={places}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <PlaceItem place={item} onSelect={selectPlaceHandler} />}
    style={styles.list}
  />
}

export default PlacesList;

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200
  },
  list: {
    margin: 24
  }
})