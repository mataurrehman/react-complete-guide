import React, { Component } from "react";

const witchClass = (WrappedComponent, className) => {
  const WitchClass = class extends Component {
    render() {
      return (
        <div className={className}>
          <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
        </div>
      );
    }
  };
  return React.forwardRef((props, ref) => {
    return <WitchClass {...props} forwardedRef={ref} />;
  });
};

export default witchClass;
