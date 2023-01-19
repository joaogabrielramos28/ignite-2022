import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import Logo from '../../../../assets/Logo.png';

export const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={Logo} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0D0D0D',
  },
  wrapper: {
    paddingVertical: 40,
  },
});
