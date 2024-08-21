import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const proxyUrl = 'http://192.168.5.168:3000/proxy?url=';  // Replace YOUR_LOCAL_IP with your machine’s IP address

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: proxyUrl + encodeURIComponent('https://taplink.cc/helpme1') }}
        style={{ flex: 1 }}
        startInLoadingState
        javaScriptEnabled={true}
        domStorageEnabled={true}
        mixedContentMode="always"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
