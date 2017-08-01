import React from 'react';

function childrenWithProps(children, props){
    console.log(children)
     console.log(props)
    return React.Children.map(children, child => React.cloneElement(child, {...props}))       
}

export { childrenWithProps };