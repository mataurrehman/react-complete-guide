import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';


class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                    this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                    break;
            }
        }

        render () {
            return (
                <div>
                    <CounterOutput value={this.props.ctr} />
                    <CounterControl label="Increment" clicked={this.props.OnIncrementCounter} />
                    <CounterControl label="Decrement" clicked={this.props.OnDecrementCounter}  />
                    <CounterControl label="Add 10" clicked={this.props.OnAddCounter}  />
                    <CounterControl label="Subtract 15" clicked={this.props.OnSubtractCounter}  />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        ctr:state.counter,
    };
}
const mapDispatchToProps = dispatch => {
    return  {
        OnIncrementCounter: () => dispatch({type:'INCREMENT'}),
        OnDecrementCounter: () => dispatch({type:'DECREMENT'}),
        OnAddCounter: () => dispatch({type:'ADD', val:10}),
        OnSubtractCounter: () => dispatch({type:'SUBTRACT', val:15}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
