import React from 'react'
import HeaderTab from '../components/HeaderTab'
import {View} from 'react-native'
export default function Home() {
    return (

        // Not Working SafeAreaView
        <View style={{paddingTop:40 }}>
            <HeaderTab/>
        </View>
    )
}
