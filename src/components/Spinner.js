import React from 'react'
import {View, Image} from 'react-native'
import loadingImg from '../img/loading.gif'
 
 const LoaderImg = () => {
    return (
        <View>
            <Image source={loadingImg} style={{...styles.loadingImg}} />
        </View>
    )
}
const styles= {
    loadingImg:{
        width:50,
        height:50
    }
}
export default LoaderImg