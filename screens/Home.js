
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Button, Image, TextInput, Dimensions, TouchableOpacity,ImageBackground, Alert, SectionList} from 'react-native';
import Books from '../default/books';

//global variables and constants
const icon1 = require('../assets/home-icon.png');
const icon2 = require('../assets/add-icon.png');
const icon3 = require('../assets/list-icon.png');
const novels = Books.filter((e) => {return e.category == 'Novel'});
const shorts = Books.filter((e) => {return e.category == 'Short'});
const dramas = Books.filter((e) => {return e.category == 'Drama'});
const poetry = Books.filter((e) => {return e.category == 'Poetry'});
const sortedBooks = [
    {
        category: 'Novels',
        books: novels
    },
    {
        category: 'Shorts',
        books: shorts
    },
    {
        category: 'Dramas',
        books: dramas
    },
    {
        category: 'Poetry',
        books: poetry
    }];
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const r = 50;
const numColumns = 2;
const tabs = [{
        status: 'All'
    },
    {
        status: 'Sorted'    
    }
];
//methods && components
const BookItem = ({ bookname,image,onPress }) => {
    return(
    <TouchableOpacity style={styles.item} onPress={onPress}>
        <Image source={image} style={styles.bookImage}/>
        <Text style={styles.title}>{bookname}</Text>
    </TouchableOpacity>
  )};
  const SeperatorView = () => {
    return(
      <View style={styles.SeperatorView}/>
    )
  };
  const NavigationComponent = ({icon, name, onPress}) => {
      return(
      <TouchableOpacity style= {styles.navComp} onPress={onPress}>
          <Image source={icon} style={styles.icon}/>
          <Text style={styles.compText}>{name}</Text>
      </TouchableOpacity>)
  };
const Search = () => {};// search function to be implemented
const navigateBookDetails = () => {navigation.navigate('bookDetails',{name: item.name,author: item.author,image: item.image,category: item.category})};


//view
const Home = ({navigation, route}) => {
    const [status,setStatus] = React.useState('All'); 
    const setStatusFilter = status => {
        setStatus(status)
    };
    const user = route.params.user;
    const [search,ChangeText] = useState('');
    
    const renderItem = ({ item }) => (
        <BookItem bookname={item.bookname} image={item.image} onPress={() => {navigateBookDetails}} />
    );
    const DisplayOption1 = () => {return(
        <FlatList 
        data={Books}
        renderItem={renderItem}
        keyExtractor={ (e) => e.id }
        numColumns = {numColumns}
        />
    );};

    const DisplayOption2 = () => {return(
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
        numColumns = {numColumns}
      />
    );};
    const NavigateHome = () => {navigation.navigate('home',{user: user.toUpperCase()})};    
    const NavigateAddbook = () => {navigation.navigate('addbook')};
    const NavigateCategories = () => {navigation.navigate('categories')};
    return(
        <View style={styles.container}>
            <View 
            style={{
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                padding: 40, 
                paddingTop: 60,   
                flexWrap: 'wrap',   
                backgroundColor: 'white',
                width: Dimensions.get('window').width,
                borderBottomRightRadius: 60,
                borderBottomLeftRadius: 60}}>
                <Text style={{fontSize: 25, color: '#660033', fontWeight: 'bold'}}>Hello {user} !</Text>
                <Image source={require('../assets/logo.jpg')} style={{height: 55, width: 55, borderRadius: 25,}}/>
            </View>
            <View style={{flex: 0.2,flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 40, textAlign: 'center', flexWrap: 'wrap'}}>
                <View>
                <TextInput 
                placeholder = "Search..."
                onChangeText = {ChangeText}
                value = {search}
                style = {styles.input}  
                />
                </View>
                <TouchableOpacity
                onPress = {Search}
                style={styles.searchBtn}>
                <Text>Search</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tab}>
                
                    {
                        tabs.map(e => (
                        <TouchableOpacity style={[styles.btnTab, status === e.status && styles.btnTabActive]} onPress={ () => setStatusFilter(e.status)}>
                            <Text style={[styles.text,status === e.status && styles.textTabActive]}>{e.status}</Text>
                        </TouchableOpacity>
                        ))
                    }
            </View>
            <View style={styles.listContainer}>
                {status === 'All' && <DisplayOption1/>}
                {status !== 'All' && <DisplayOption2/>}
            </View>
            <View style = {styles.navigation}>
                <NavigationComponent 
                icon={icon1}
                name={'Home'}
                onPress={NavigateHome}
                />
                <NavigationComponent 
                icon={icon2}
                name={'Add Books'}
                onPress={NavigateAddbook}
                />
                <NavigationComponent 
                icon={icon3}
                name={'Categories'}
                onPress={NavigateCategories}
                />
            </View>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4d4d4d',
        
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
    listContainer: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 60
    },
    input: {
        borderWidth: 1,
        padding: 10,
        height: 40,
        width: w-r,
        marginBottom: 20,
        borderColor: 'rgba(255,255,255,.5)',
        backgroundColor: 'rgba(255,255,255,.01)',
        borderRadius: 20,
        zIndex: 50
    },
    searchBtn: {
        margin: 0,
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderColor: 'rgba(0,0,0,.2)',
        width: 90,
        top: 40,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        height: 40,
        position: 'absolute',
        right: r/2,
        zIndex: 100
    },
    tab: {
       
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginTop: 0,
        marginBottom: 20,
        justifyContent: 'center',
        width: w/2.5,
        alignSelf: 'center',
        borderRadius: 10
    },
    btnTab: {
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        justifyContent: 'center',
        width: w/5,
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    text: {
        fontSize: 15
    },
    btnTabActive: {
        backgroundColor: '#660033'
    },
    textTabActive: {
        color: 'white'
    },
    navigation: {
        flex: 1,
        backgroundColor: '#660033',
        width: w,
        padding: 0,
        justifyContent: 'space-between',
        position: 'absolute',
        flexDirection: 'row',
        bottom: 0,
        paddingLeft: 20,
        paddingRight: 20
    },
    navComp: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    icon: {
        width: 30,
        height: 30,
        borderRadius: 10,
    },
    compText: {
        color : 'white',
        fontWeight: 'bold',
        fontSize: 10,
        alignSelf: 'center'
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'center',
        padding: 10,
        borderColor: 'white',
        borderRadius: 1,
        borderBottomWidth: 1
    },
    headerText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 12
    },
     SeperatorView: {
        height: 1,
        width: w,
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
