import flux from 'control';
import {createStore, bind} from 'alt/utils/decorators';
import actions from 'actions/dummyActions';

class DummyStore {
    constructor(){
        this.name = 'awesome';
    }

    updateName(name) {
        this.name = name;
    }
}

export default DummyStore;  