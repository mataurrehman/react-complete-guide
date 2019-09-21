import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionCreators from '../../store/actions/index';



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
        OnIncrementCounter: () => dispatch(actionCreators.increment()),
        OnDecrementCounter: () => dispatch(actionCreators.decrement()),
        OnAddCounter: () => dispatch(actionCreators.add(10)),
        OnSubtractCounter: () => dispatch(actionCreators.subtract(15)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
