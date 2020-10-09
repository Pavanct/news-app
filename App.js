import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Linking, SafeAreaView, StyleSheet, Text, View, FlatList, TouchableNativeFeedback } from 'react-native';
import { Button, Card, Divider } from 'react-native-elements';
import News from './src/News';
// import * as Article from './src/components/Article';
import moment from 'moment';

const ListHeader = () => {
  //View to set in Header
  return (
    <View style={styles.headerFooterStyle}>
      <Text style={styles.textStyle1}>
        News
        </Text>
    </View>
  );
};

const ListFooter = () => {
  //View to set in Footer
  return (
    <View style={styles.headerFooterStyle}>
      <Text style={{
        textAlign: 'center',
        color: '#fff',
        fontSize: 12,
        padding: 7, }}>
        Copyright 2020 Tähtitech ÖU
        </Text>
    </View>
  );
};

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
        style={{ width: 100}}
        featuredTitle={article.article.title}
        featuredTitleStyle={featuredTitleStyle}
        image={{
          uri: article.article.urlToImage || defaultImg
        }}
      >
        {/* <Card.FeaturedTitle style={featuredTitleStyle}>{article.article.title}</Card.FeaturedTitle> */}
        {/* <Card.Image source={{ uri: article.article.urlToImage || defaultImg }} /> */}
        <Text style={{ marginBottom: 10, fontSize: 15 }}>
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


export default function App() {
  const news = News();
  // console.log(news.articles);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={news.articles}
        renderItem={({ item }) => <Article article={item} />}
        keyExtractor={item => item.url}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={ListFooter}
      /></SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  }, 
  headerFooterStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#26d980',
    fontSize: 14,
  },
  textStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    padding: 7,
  },
  textStyle1: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 30,
    padding: 7,
  },
  noteStyle: {
    margin: 5,
    fontStyle: 'italic',
    color: '#b2bec3',
    fontSize: 12
  },
  featuredTitleStyle: {
    marginHorizontal: 5,
    textShadowColor: '#00000f',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 10
  }
});
