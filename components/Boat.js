import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'grey',
        alignItems: 'center',
        borderWidth: 1,
        marginLeft: 30,
        marginRight: 30
    },

    sections:{
        flex: 1,
        flexDirection: 'column',
        justify: 'space-between',
        backgroundColor: 'lightgray',
        borderWidth: 1,
        justifyContent: 'space-around',
        padding: 10,
        marginTop: 15,
        marginLeft: 20,
        marginRight: 20
    },

    title: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'grey',
        alignItems: 'center',
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    img: {
        width: '100%',
        height: 200
    },

    description: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'darkgray',
        alignItems: 'center',
        borderWidth: 1,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 15,
        padding:2,
        textAlign: 'center',
        color:'white',
    }


});

const Boats = ({boat_name, icon_name, rating, description, picture}) => {
    return (
        <View style={styles.sections}>
            <Text></Text>
            <Text style={styles.title}>
                <Icon name={icon_name} size={20} color="#B23B23" />
                {boat_name}
                <Icon name={icon_name} size={20} color="#B23B23" />
            </Text>
            <Text style={styles.description}>
                {description}
            </Text>
            <Text></Text>
            <Text>
                Rating: {Array.from({ length: rating }, (_, index) => (
                <Icon key={index} name="star-rate" size={15} color="#FFBF00" />
                //{Array.from({length:rating} creates a new array that has a specified length when it is called later
                // in the "AllBoats function".
                //{length:rating} is used for an object to pass to Array.from where the length is used to specify how many elements there will be
                //(_, index) is a mapping function that is usually called for every new element in a newly created array
            ))}
            </Text>
            <Image source={picture} style={styles.img} />
        </View>
    );
};

const AllBoats = () => {
    return (
        <ScrollView>
            <Text></Text>
            <Text style={[styles.header, {marginTop: 40, color:'white', textAlign: 'center', fontSize: 24}]}>
                GetABoat - For Sale
            </Text>
            <Boats boat_name="Sea Ray 500 Sundancer" icon_name="directions-boat" rating={4} description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away." picture = {require('../img/sea_ray.jpg')} />
            <Boats boat_name="Four Winns Horizon 180" icon_name="directions-boat" rating={5} description="'A sporty look and refined details truly set the Horizon 180 above all others." picture = {require('../img/four_winns.jpg')} />
            <Boats boat_name="Flipper 640 ST" icon_name="directions-boat" rating={4} description="A modern take on the classic, traditional hardtop and perfect for a family picnic." picture = {require('../img/flipper.jpg')} />
            <Boats boat_name="Princess V48" icon_name="directions-boat" rating={3} description="A modern take on the classic, traditional hardtop and perfect for a family picnic." picture = {require('../img/princess.jpg')} />
            <Boats boat_name="Bayliner 175 Bowrider" icon_name="directions-boat" rating={5} description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance." picture = {require('../img/bayliner.jpg')} />
            <Boats boat_name="Fairline Targa 47" icon_name="directions-boat" rating={4} description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit." picture = {require('../img/fairline.jpg')} />
        </ScrollView>
    );
};

export default AllBoats;
