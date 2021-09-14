import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CatContext } from '../context/CatContext';

export const Shop = () => {
    const { top: paddingTop } = useSafeAreaInsets();

    const { catState } = useContext(CatContext)
    return (
        <View style={{paddingTop: paddingTop + 10, paddingLeft: 20, alignItems: 'center'}}>
            <Text>Dia aun  no implementado</Text>
            <Text>{catState.date}</Text>
            <Text>{catState.category}</Text>
        </View>
    )
}
