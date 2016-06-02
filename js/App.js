import React, { Component } from 'react'
import { View, StatusBar, StyleSheet, ListView } from 'react-native'
import NavBar from './components/NavBar'
import UserCard from './components/UserCard'
import {connect} from 'react-redux'
import {userListAction} from './actions/userListAction'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE'
  }
})

class App extends Component {
  constructor() {
    super()
    StatusBar.setBarStyle('light-content')
    this.dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
  }

  componentWillMount() {
    this.props.fetchUser()
    const {dispatch} = this.props
  }

  render() {
    const ds = this.dataSource.cloneWithRows(this.props.userList)

    return (
      <View style={styles.container}>
        <NavBar />
        <ListView
          enableEmptySections={false}
          dataSource={ds}
          renderRow={(user) => <UserCard user={user} />}
        />
      </View>
    )
  }
}

function mapProps(state) {
  return {
    userList: state
  }
}

function mapDispatch(dispatch) {
  return {
    fetchUser: ()=> dispatch(userListAction())
  }
}

export default connect(mapProps, mapDispatch) (App)

