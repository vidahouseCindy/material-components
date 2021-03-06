import Component from 'vue-class-component';
import components from '../../../components';
import directives from '../../../directives';

@Component({
    components,
    directives,
    template: require('./raised.html')
})
export default class RaisedButtons {
    data() {
        return {
            icon: '',
            iconAlignRight: false,
            large: false,
            disabled: false
        }
    }
}

