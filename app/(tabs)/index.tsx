import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
        
    
        source={require('@/assets/images/mask.jpeg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Emerson Argote</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Bio</ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold"> Role: Designer</ThemedText> 
          {/* Press{' '} */}
          d{/* <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools. */}
        </ThemedText>
       
       <ThemedText>
        Hello my Name is Emerson Argote, one thing that Im well associate with is art, I have loved the idea of creating whatever
        </ThemedText>
        
        <ThemedText>
          comes acrross my mind. Having this as my passon started when I was young where I was obsesed with many animated shows 
        </ThemedText>
        
        <ThemedText>
          and programs such as those comming from Qubo and PBS kids. This passon was enhanced when I met an artist in 9th grade
        </ThemedText>
        
        <ThemedText>
          where they drew me in their  detailed artstyle, I was encaptivated by this display of art in which drove my passion 
        </ThemedText>
        
        <ThemedText>
          for art and further more into animation. Which leads me to presure a carrer in animation, whether in the storyboard,
        </ThemedText>
        
        <ThemedText>
          character design, or rough animator division of the animation industry.
        </ThemedText>
      </ThemedView>
      {/* <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView> */}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 290,
    width: 290,
    bottom: 0,
    left: 50,
    position: 'absolute',
    borderRadius: 50,
  },
  ParallaxScrollView: {
    left: 30,
    bottom:10,
    position: 'absolute',
  }

});
