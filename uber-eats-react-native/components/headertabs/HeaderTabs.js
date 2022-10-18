import { View, Text, Button, TouchableOpacity } from 'react-native'
import { useState } from 'react'

const HeaderTabs = () => {

  const [activeTab, setActiveTab] = useState("Delivery")

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <HeaderButton title="Delivery" btnColor="black" txtColor="white" activeTab={activeTab} setActiveTab={setActiveTab} />
      <HeaderButton title="Pickup" btnColor="white" txtColor="black" activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  )
}

const HeaderButton = ({ title, btnColor, txtColor, activeTab, setActiveTab }) => (
  <View>
    <TouchableOpacity onPress={() => setActiveTab(title)} style={{ backgroundColor: activeTab === title ? 'black' : 'white', paddingVertical: 6, paddingHorizontal: 16, borderRadius: 30 }}>
      <Text style={{ color: activeTab === title ? 'white' : 'black', fontSize: 14, fontWeight: '900' }}>{title}</Text>
    </TouchableOpacity>
  </View>
)

export default HeaderTabs