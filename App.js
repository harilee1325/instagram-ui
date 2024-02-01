import { StyleSheet, View, Image, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.logoStyle}
          source={require('./assets/camera.png')}
        />
        <Text style={styles.headingText}>
          Instagram
        </Text>
        <Image
          style={styles.logoStyle}
          source={require('./assets/chat.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  logoStyle: {
    height: 30,
    width: 30,
    marginTop: 15,
    marginStart: 10,
    marginEnd: 10
  },
  headingText: {
    fontSize: 45,
  }

  //https://www.google.com/search?newwindow=1&sca_esv=de7a49ba27450786&sxsrf=ACQVn09se4q9haUjpMNbiyf6hnzKHsFJ3Q:1706715816991&q=instagram+home+page+ui&tbm=isch&source=lnms&sa=X&ved=2ahUKEwi1-YPw-4eEAxV5SGwGHRfTCLIQ0pQJegQIDBAB&biw=1680&bih=938&dpr=2#imgrc=NFFHizeSYEUlDM


});