import React, { PureComponent } from 'react'
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity
} from 'react-native'
import TextMarquee from './index'

/* TODO:
- If text is only slightly wider than screen then bounce text instead
*/

export default class App extends PureComponent {

  render() {
    const Spacer = () => <View style={styles.spacer} />
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.marquee.startAnimation()}>
          <Text>Start Animation</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.marquee.stopAnimation()}>
          <Text>Stop Animation</Text>
        </TouchableOpacity>

        <TextMarquee marqueeOnMount={false} ref={c => this.marquee = c}>
          Super long piece of text is long. The quick brown fox jumps over the lazy dog.
        </TextMarquee>
        <Spacer />
        
        <TextMarquee>
          Super long piece of text is long. The quick brown fox jumps over the lazy dog.
        </TextMarquee>
        <Spacer />

        <TextMarquee >
          This fits in its container and wont scroll
        </TextMarquee>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex:            1,
    backgroundColor: '#fff',
    alignItems:      'center',
    justifyContent:  'center'
  }, 
  spacer: {
    width:             '85%',
    borderBottomWidth: 2, 
    borderColor:       'grey',
    margin:            15
  }
})
