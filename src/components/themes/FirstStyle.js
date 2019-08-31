import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  section: {
    margin: 10,
    padding: 10,
    backgroundColor: 'black',
    height: '300px',
  },
});

// Create Document Component
const MyDocument = () => (
  <Document title="Moje CV" author="Maciej Fiałkowski">
    <Page size="A4" style={styles.page} wrap unbreakable>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #3</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #4</Text>
      </View>
    </Page>
  </Document>
);
export default MyDocument;
