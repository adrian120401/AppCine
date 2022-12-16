import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

export const LayoutContainer: React.FC = ({ children }) => {
  return (
    <ScrollView>
      <View style={styles.wrapper}>{children}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 20,
  },
});
