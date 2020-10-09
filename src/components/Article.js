import React, { Component } from 'react';
import { View, Linking } from 'react-native';
import { SafeAreaView, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import moment from 'moment';


const Article = (article) => {
    console.log(article);
    const { noteStyle, featuredTitleStyle } = styles;
    const time = moment(article.article.publishedAt || moment.now()).fromNow();
    const defaultImg =
        'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';


    return (
        <TouchableNativeFeedback
            useForeground
            onPress={() => Linking.openURL(article.article.url)}
        >
            <Card
                featuredTitle={article.article.title}
                featuredTitleStyle={featuredTitleStyle}
                image={{
                    uri: article.article.urlToImage || defaultImg
                }}
            >
                <Text style={{ marginBottom: 10 }}>
                    {article.article.description || 'Read More..'}
                </Text>
                <Divider style={{ backgroundColor: '#dfe6e9' }} />
                <View
                    style={{ flexDirection: 'row', justifyContent: 'space-between' }}
                >
                    <Text style={noteStyle}>{article.article.source.name.toUpperCase()}</Text>
                    <Text style={noteStyle}>{time}</Text>
                </View>
            </Card>
        </TouchableNativeFeedback>
    );
}

const styles = {
    noteStyle: {
        margin: 5,
        fontStyle: 'italic',
        color: '#b2bec3',
        fontSize: 10
    },
    featuredTitleStyle: {
        marginHorizontal: 5,
        textShadowColor: '#00000f',
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 3
    }
};

export default Article;
