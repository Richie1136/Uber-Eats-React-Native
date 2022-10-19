import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const SearchBar = () => {
  return (
    <View style={{ marginTop: 15, flexDirection: 'row' }}>
      <GooglePlacesAutocomplete placeholder='Search' styles={{
        textInput: {
          backgroundColor: '#eee',
          borderRadius: 20,
          fontWeight: '700',
          marginTop: 7,
        },
        textInputContainer: {
          backgroundColor: '#eee',
          borderRadius: 50,
          flexDirection: 'row',
          alignItems: 'center',
          marginRight: 10
        },
      }}
        renderLeftButton={() => <View>
          <Ionicons style={{ marginLeft: 10 }} name="location" size={24} />
        </View>}
        renderRightButton={() => <View style={{ marginRight: 10, alignItems: 'center', flexDirection: 'row', backgroundColor: 'white', padding: 9, borderRadius: 30, }}>
          <AntDesign name="clockcircle" size={11} style={{ marginRight: 6 }} />
          <Text>
            Search
          </Text>
        </View>}
      />
    </View>
  )
}

export default SearchBar