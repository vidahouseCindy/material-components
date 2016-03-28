import Component from 'vue-class-component';

import mdNavbar from '../../../components/navbar';
import mdNavItem from '../../../components/nav-item';
import mdIcon from '../../../components/icon';

@Component({
    components: {
        mdNavbar,
        mdNavItem,
        mdIcon
    },
    template: require('./navbars.html')
})
export default class MobileCollase {
    data() {
        return {
        }
    }
}