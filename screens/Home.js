import React from 'react'
import HeaderTab from '../components/HeaderTab'
import { SafeAreaView, View } from 'react-native'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import { ScrollView } from 'react-native-gesture-handler'
export default function Home() {
    return (

        // Not Working SafeAreaView

        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
            <View style={{ backgroundColor: "white", padding: 15, paddingTop: 30 }}>
                <HeaderTab />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Categories/>
            </ScrollView>
        </SafeAreaView>
    )
}
