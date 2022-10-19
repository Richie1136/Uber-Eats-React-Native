import { View, Text, SafeAreaView } from 'react-native'
import HeaderTabs from '../components/headertabs/HeaderTabs'

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs />
      </View>
    </SafeAreaView>
  )
}

export default Home