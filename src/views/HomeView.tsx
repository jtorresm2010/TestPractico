import { View, Text } from 'react-native'
import React from 'react'
import HomeStyles from '../styles/HomeStyles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TestComponent from '../components/TestComponent';

const HomeView = () => {
    const safeAreaInsets = useSafeAreaInsets();

    return (
        <View style={[
            HomeStyles.container,
            {
                paddingTop: safeAreaInsets.top,
                paddingBottom: safeAreaInsets.bottom,
                paddingLeft: safeAreaInsets.left,
                paddingRight: safeAreaInsets.right,
            }
        ]}>
            <TestComponent />
        </View>
    )
}

export default HomeView