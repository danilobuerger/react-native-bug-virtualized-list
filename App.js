/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import range from 'lodash/range';
import React, {Component} from 'react';
import {Platform, StyleSheet, SectionList, Text, View} from 'react-native';
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout';

const Separator = () =>
  <View style={{height: 10, backgroundColor: 'yellow'}} />

export default class App extends Component {
  renderHeader({section}) {
    return (
      <View style={{height: 50, backgroundColor: 'red'}}>
        <Text>{section.title}</Text>
      </View>
    )
  }
  renderItem({item}) {
    return (
      <View style={{height: 300, backgroundColor: 'blue'}}>
        <Text>{item.title}</Text>
      </View>
    )
  }
  render() {
    return (
      <View>
        <SectionList
          renderSectionHeader={this.renderHeader}
          renderItem={this.renderItem}
          ItemSeparatorComponent={Separator}
          stickySectionHeadersEnabled={true}
          maxToRenderPerBatch={3}
          initialNumToRender={3}
          sections={range(10).map(i => ({
            title: 'Header ' + i,
            data: range(3).map(j => ({
              key: `h${i}i${j}`,
              title: 'Item ' + j
            }))
          }))}
          getItemLayout={sectionListGetItemLayout({
            getItemHeight: () => 300,
            getSectionHeaderHeight: () => 50,
            getSectionFooterHeight: () => 0,
            getSeparatorHeight: () => 10,
          })}
        />
      </View>
    )
  }
}
