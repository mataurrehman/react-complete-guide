import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage:''
     }

    componentDidCatch = (error, errorInfo) => {
      // You can also log the error to an error reporting service
        this.setState({hasError:true, errorMessage:error});
    }

    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>{this.state.errorMessage}</h1>;
      }

      return this.props.children;
    }
  }
export default ErrorBoundary;
