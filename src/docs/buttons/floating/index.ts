import Component from 'vue-class-component';
import mdButton from '../../../components/button';
import mdIcon from '../../../components/icon';

@Component({
    components: {
        mdButton,
        mdIcon
    },
    template: require('./floating.html')
})
export default class FloatingButtons {
}

