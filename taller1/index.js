import {AppRegistry} from 'react-native';
import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image} from 'react-native';

        const DATA = [
            {
                id: '1',
                title: 'Mercurio',
                description: 'Mercurio es el planeta más cercano al sol y tarda 88 días en dar la vuelta al sol',
                src: require('./src/imgs/mercurio.jpg'),
            },
            {
                id: '2',
                title: 'Venus',
                description: 'Venus es el segundo planeta más cercano al sol y es el planeta más caliente del sistema solar',
                src: require('./src/imgs/venus.jpg'),
            },
            {
                id: '3',
                title: 'Tierra',
                description: 'La tierra es el tercer planeta más cercano al sol, está dentro de la llamada zona habitable',
                src: require('./src/imgs/tierra.jpg'),
            },
            {
                id: '4',
                title: 'Marte',
                description: 'Marte es el cuarto planeta más cercano al sol, posee 1 décimo de la masa de la tierra',
                src: require('./src/imgs/marte.jpg'),
            },
            {
                id: '5',
                title: 'Júpiter',
                description: 'Es el planeta más grande del sistema solar, es un planeta gaseoso y proteje a la tierra de impactos de asteroides masivos',
                src: require('./src/imgs/jupiter.jpg'),
            },
            {
                id: '6',
                title: 'Saturno',
                description: 'Es el segundo planeta más grande del sistema solar, es facilmente reconocido por sus enormes anillos de hielo y asteroides',
                src: require('./src/imgs/saturno.jpg'),
            },
            {
                id: '7',
                title: 'Urano',
                description: 'Urano es el séptimo planeta del sistema solar y el único que rota de lado. Es un planeta formado de hielo fluido',
                src: require('./src/imgs/urano.jpg'),
            },
            {
                id: '8',
                title: 'Neptuno',
                description: 'Neptuno es el último planeta del sistema solar, es muy parecido a Urano',
                src: require('./src/imgs/neptuno.jpg'),
            },
        ];


        const Item = ({title, description, img}) => (
            <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <SafeAreaView style={styles.contenedor2}>
            <Image style={styles.img} source={img} />
            </SafeAreaView>            
             </View>
        );

        const App = () => {
            const renderItem = ({ item }) => (
            <Item title={item.title} description={item.description} img={item.src}/>
            );
            return (
                <SafeAreaView style={styles.container}>

                <SafeAreaView style={styles.contenedor}>
                <Text style={styles.titulo}>Espacio</Text>
                </SafeAreaView>

                <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ItemSeparatorComponent = {()=> <View style={{marginVertical:5, borderColor: 'black', borderWidth: 1}}/>}
                />
                </SafeAreaView>
            );
            
         }

        const styles = StyleSheet.create({
            container: {
            flex: 2,
            padding: 0,
            margin: 0,
            },
            contenedor: {
                backgroundColor: 'blue',
                
            },
            titulo: {
                fontSize: 35,
                fontFamily: "Times New Roman, Times, Serif",
                color: 'white',

            },
            item: {
            backgroundColor: 'white',
            padding: 5,
            marginVertical: 8,
            marginHorizontal: 20,
            },
            title: {
            fontSize: 20,
            color: 'gray',
            },
            description: {
                fontSize: 15,
                color: 'black',
            },
            img: {      
                width: 100,
                height: 100,
                borderWidth: 2,
                borderColor: 'black',
                resizeMode: 'contain',
                margin: 9,
                borderRadius: 150,
                position: 'relative'
            },
         });


AppRegistry.registerComponent("taller1", () => App);
