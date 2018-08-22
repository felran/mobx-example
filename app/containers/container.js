import React from 'react';
import { inject, observer } from 'mobx-react';

/**
 * 实现store的过滤，只监听某个值的改变，组件才进行更新
 */
@inject(({todoModel})=>({b:todoModel.b})) @observer
class Container extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillReceiveProps(props){
        console.log(props);
    }
    render(){
        const {a=0,b} = this.props;
        return(
            <div>
                <p>Container receive a={a}</p>
                <p>Container receive b={b}</p>
            </div>
            
        );
    }
}
export default Container;
