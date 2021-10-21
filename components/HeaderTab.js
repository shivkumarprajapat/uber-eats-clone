import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function HeaderTab() {
    return (
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <HeaderButton text='Delivery' btnColor="black" textColor="white" />
            <HeaderButton text='Pickup' btnColor="white" textColor="black" />
        </View>
    )
}

const HeaderButton = (props) => (
    <TouchableOpacity
        style={{
            backgroundColor: props.btnColor,
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,marginRight:10
        }}
    >
        <Text
            style={{
                color: props.textColor,
                fontSize: 15,
                fontWeight: "900"
            }}
        >{props.text}</Text>
    </TouchableOpacity>
)

