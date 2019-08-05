import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Ball from './src/Ball';
import Deck from './src/Deck';
import { DEKC_LIST } from './data';

class App extends Component {
  static defaultProps = {
    onSwipeRight: () => {},
    onSwipeLeft: () => {},
  }

  renderCard(item) {
    return (
      <Card
        key={item.id}
        title={item.text}
        image={{ uri: item.uri }}
      >
        <Text style={{ marginBottom: 10 }}>
         Card
        </Text>
        <Button
          icon={{ name: 'code', color: '#fff' }}
          backgroundColor="#3a9f4"
          title="View Now!"
        />
      </Card>
    );
  }

  renderNoMoreCards() {
    return (
      <Card title="All done!">
        <Text style={{ marginBottom: 10 }}>
          There's no more card left!
        </Text>
        <Button
          backgroundColor="#3a9f4"
          title="Get more!"
        />
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DEKC_LIST}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;