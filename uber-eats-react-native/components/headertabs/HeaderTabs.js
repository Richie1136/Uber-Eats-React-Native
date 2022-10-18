import { View, Text, Button, TouchableOpacity } from 'react-native'

const HeaderTabs = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <HeaderButton title="Delivery" />
      <HeaderButton title="Pickup" />
    </View>
  )
}

const HeaderButton = ({ title }) => (
  <View>
    <TouchableOpacity style={{ backgroundColor: 'black' }}>
      <Text style={{ color: 'white' }}>{title}</Text>
    </TouchableOpacity>
  </View>
)

export default HeaderTabs