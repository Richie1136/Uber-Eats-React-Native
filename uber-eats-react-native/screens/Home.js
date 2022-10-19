import { View, Text, SafeAreaView } from 'react-native'
import Categories from '../components/categories/Categories'
import HeaderTabs from '../components/headertabs/HeaderTabs'
import SearchBar from '../components/searchbar/SearchBar'

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <Categories />
    </SafeAreaView>
  )
}

export default Home