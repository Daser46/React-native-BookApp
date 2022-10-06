import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, Dimensions,TouchableOpacity, Image, SafeAreaView } from 'react-native';
import Books from '../default/books.js'
const w = Dimensions.get('window').width;
const novels = Books.filter((e) => {return e.category == 'Novel'});
const shorts = Books.filter((e) => {return e.category == 'Short'});
const dramas = Books.filter((e) => {return e.category == 'Drama'});
const poetry = Books.filter((e) => {return e.category == 'Poetry'});



export default function Categories() {
  const SeperatorView = () => {
    return(
      <View style={styles.SeperatorView}/>
    )
  };
  const BookItem = ({ bookname,image,onPress }) => (
    <TouchableOpacity style={styles.item} onPress={onPress}>
        <Image source={image} style={styles.bookImage}/>
        <Text style={styles.title}>{bookname}</Text>
    </TouchableOpacity>
  );
  const renderItem = ({ item }) => (
    <BookItem bookname={item.bookname} image={item.image} onPress={() => {}} />
);

  return (
    <SafeAreaView style={styles.container}>
      <Text>categories screen is to be implemented.. contact depraba.dp@gmail.com</Text>
      <SectionList
        ItemSeperatorComponent={SeperatorView}
        sections = {[
          {title:'Novels', data: novels },
          {title:'Shorts', data: shorts },
          {title:'Dramas', data: dramas },
          {title:'Poetry', data: poetry },
        ]}
        renderSectionHeader = {({section}) => (
          <Text style={styles.textTitle} >
              {section.title}
          </Text>
        )}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
    paddingTop: 50
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  },
  SeperatorView: {
    height: 1,
    width: '100%',
    backgroundColor: 'skyblue',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textTitle: {
    backgroundColor: 'green',
    padding: 10,
    fontSize: 26,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    backgroundColor: '#660033',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    textAlign: 'center',
    width: (w-80)/2.125,
    height: ((w-50)*1.5)/2.125,
    justifyContent: 'center'
},
title: {
    fontSize: 16,
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold'
},
bookImage: {
    width: (w-100)/2.125,
    height: ((w-100)*1.5)/2.125,
},
});


