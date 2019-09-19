import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionTypes from '../../store/actions';



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
                    <hr/>
                    <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Results</button>
                    <ul>
                        {
                            this.props.storedResults.map(strResult => {
                                return <li key={strResult.id} onClick={()=>this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                            })
                        }
                    </ul>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        ctr:state.ctr.counter,
        storedResults: state.res.results,
    };
}
const mapDispatchToProps = dispatch => {
    return  {
        OnIncrementCounter: () => dispatch({type:actionTypes.INCREMENT}),
        OnDecrementCounter: () => dispatch({type:actionTypes.DECREMENT}),
        OnAddCounter: () => dispatch({type:actionTypes.ADD, val:10}),
        OnSubtractCounter: () => dispatch({type:actionTypes.SUBTRACT, val:15}),
        onStoreResult: (result) => dispatch({type:actionTypes.STORE_RESULT, result:result}),
        onDeleteResult: (id) => dispatch({type:actionTypes.DELETE_RESULT, resultElId:id}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
