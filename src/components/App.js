import React from 'react'; 
import Header from './Header';
import Home from './Home'
import { connect } from 'react-redux';
import agent from '../agent';


const mapStateToProps = state => ({
  appName: state.common.appName,
  currentUser: state.common.currentUser,
  redirectTo: state.common.redirectTo
})

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) => 
    dispatch({ type: 'APP_LOAD', payload, token }), 
  onRedirectTo: () => {
    dispatch({ type: 'REDIRECT' })
  }
}) 

class App extends React.Component {
  componentWillMount() {
    const token = window.localStorage.getItem('jwt')
    if(token) {
      agent.setToken(token)
    }
    this.props.onLoad(token ? agent.Auth.current() : null, token)
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.redirectTo){
      this.context.router.replace(nextProps.redirectTo)
      this.props.onRedirectTo()
    }
  }
  render() {
    return (
        <div>
            <Header
            currentUser={this.props.currentUser}
            appName={this.props.appName}/>
            {this.props.children}
          </div>
        
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
