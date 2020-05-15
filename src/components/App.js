import React from 'react'; 
import Header from './Header';
import Home from './Home'
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  appName: state.common.appName, 
  redirectTo: state.common.redirectTo
})

const mapDispatchToProps = dispatch => ({
  onRedirectTo: () => {
    dispatch({type: 'REDIRECT'})
  }
}) 

class App extends React.Component {
  componentWillReceiveProps(nextProps){
    if(nextProps.redirectTo){
      this.context.router.replace(nextProps.redirectTo)
      this.props.onRedirectTo()
    }
  }
  render() {
    return (
        <div>
            <Header appName={this.props.appName}/>
            {this.props.children}
          </div>
        
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
