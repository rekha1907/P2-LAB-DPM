import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LayoutExample = () => {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.text}>Teks di Tengah Layar</Text>

      {/* Baris dengan dua kotak */}
      <View style={styles.boxContainer}>
        {/* Kotak 1 */}
        <View style={[styles.box, { backgroundColor: 'grey' }]} />
        {/* Kotak 2 */}
        <View style={[styles.box, { backgroundColor: 'blue' }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3', // Latar belakang abu-abu terang
    justifyContent: 'center', // Untuk menempatkan item di tengah vertikal
    alignItems: 'center', // Untuk menempatkan item di tengah horizontal
  },
  text: {
    fontSize: 24, // Ukuran font
    color: 'blue', // Warna teks
    fontWeight: 'bold', // Gaya teks tebal
    marginBottom: 50, // Jarak antara teks dan kotak
  },
  boxContainer: {
    flexDirection: 'row', // Menempatkan item secara horizontal
    justifyContent: 'space-between', // Memberikan jarak merata di antara kotak
    width: '80%', // Lebar total kontainer kotak
  },
  box: {
    width: 100, // Lebar kotak
    height: 100, // Tinggi kotak
  },
});

export default LayoutExample;