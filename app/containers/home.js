import React from 'react';
import {observer,inject} from 'mobx-react';
// import todo from './todoModel';

@inject(['todoModel']) @observer
class Home extends React.Component{
    constructor(props){
        super(props);
        this.store = this.props.todoModel;
    }
    render(){
        const {a,b, increaseA,dropA,increaseB,dropB} = this.store;
        return (
            <div>
                <p>a={a} ,b={b}</p>
                <p>
                    <button onClick={increaseA.bind(this.store)}>increaseA</button>
                    <button onClick={dropA.bind(this.store)}>dropA</button>
                    <button onClick={increaseB.bind(this.store)}>increaseB</button>
                    <button onClick={dropB.bind(this.store)}>dropB</button>
                </p>
            </div>
        );
    }
}
export default Home;

