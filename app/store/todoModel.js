import {observable, action} from 'mobx';
class TodoModel {
    @observable a;
    @observable b;
    constructor(){
        this.a = 0;
        this.b = 0;
    }
    @action increaseA(){
        this.a += 1;
    }
    @action dropA(){
        this.a -= 1;
    }
    @action increaseB(){
        this.b += 1;
    }
    @action dropB(){
        this.b -= 1;
    }
}
export default TodoModel;
