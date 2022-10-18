import { View, Text, Button, TouchableOpacity } from 'react-native'

const HeaderTabs = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <HeaderButton title="Delivery" btnColor="black" txtColor="white" />
      <HeaderButton title="Pickup" btnColor="white" txtColor="black" />
    </View>
  )
}

const HeaderButton = ({ title, btnColor, txtColor }) => (
  <View>
    <TouchableOpacity style={{ backgroundColor: btnColor, paddingVertical: 6, paddingHorizontal: 16, borderRadius: 30 }}>
      <Text style={{ color: txtColor, fontSize: 14, fontWeight: '900' }}>{title}</Text>
    </TouchableOpacity>
  </View>
)

export default HeaderTabs