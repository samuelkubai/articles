import React, { PureComponent } from 'react';

const styles = {
    backgroundColor: "white",
    border: "solid 1px black",
    borderRadius: "2px"
};

class Button extends PureComponent{
    render() {
        const { children } = this.props;

        return (
            <button style={styles}>
                {children}
            </button>
        );
    }
}

export default Button
