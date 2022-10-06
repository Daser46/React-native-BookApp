// using an array of objects in a js file -> can use a json file instead(have to parse the json to access it) anyway datas are not save in a local file in real world scenarios
export default Books = [
    {
        id: 1, 
        bookname: 'Moby-Dick', 
        image: require('../assets/moby-dick.jpg'),
        category: 'Novel',
        author: 'Herman Melville'
    },
    {
        id: 2, 
        bookname: 'The Sea-Wolf', 
        image: require('../assets/sea-wolf.jpg'),
        category: 'Novel',
        author: 'Jack London'
    },
    {
        id: 3, 
        bookname: 'Ice Station', 
        image: require('../assets/ice-station.jpg'),
        category: 'Novel',
        author: 'Mathew Reiley'
    },
    {
        id: 4, 
        bookname: 'Rapunzel', 
        image: require('../assets/rapunzel.jpg'),
        category: 'Short',
        author: 'Simon Hood'
    },
    {
        id: 5, 
        bookname: 'Earth Power', 
        image: require('../assets/earth-power.jpeg'), 
        category: 'Short',
        author: 'Scott Cunningham'
    },
    {
        id: 6, 
        bookname: 'Mistress Fear', 
        image: require('../assets/mistress-fear.jpg'),
        category: 'Short',
        author: 'Katherine Eyre'
    },
    {
        id: 7, 
        bookname: 'Macbeth', 
        image: require('../assets/macbeth.jpg'),
        category: 'Drama',
        author: 'William Shekspeare'
    },
    {
        id: 8, 
        bookname: 'Julius Cesar', 
        image: require('../assets/julius-cesar.jpg'),
        category: 'Drama',
        author: 'William Shekspeare'
    },
    {
        id: 9, 
        bookname: 'Hamlet', 
        image: require('../assets/hamlet.jpg'),
        category: 'Drama',
        author: 'William Shekspeare'
    },
    {
        id: 10, 
        bookname: 'Milk and Honey', 
        image: require('../assets/milk-and-honey.jpg'),
        category: 'Poetry',
        author: 'Rupi Kapur'
    },
    {
        id: 11, 
        bookname: 'Leaves of Grass', 
        image:  require('../assets/leaves-of-grass.jpg'),
        category: 'Poetry',
        author: 'Walt Whitman'
    },
];