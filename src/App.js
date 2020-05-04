import React from 'react'; 
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  appName: state.appName
})

class App extends React.Component {
    // constructor() {
    //     super();
    //     this.state = { };
    // }

    // componentWillMount() {
    //     store.subscribe(() => this.setState( store.getState() ));
    // }

  render() {
    // const onClick = () => store.dispatch({type: 'TOGGLE'});
    return (
        <div>
            Learn Redux 
            {this.props.appName}
          </div>
        
    );
  }
}

export default connect(mapStateToProps, () => ({}) )(App);
