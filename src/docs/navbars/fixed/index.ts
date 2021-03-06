import Component from 'vue-class-component';

import mdBadge from '../../../components/badge';
import mdButton from '../../../components/button';
import mdNavbar from '../../../components/navbar';
import mdNavItem from '../../../components/nav-item';
import mdSnippet from '../../snippet';

@Component({
    components: {
        mdBadge,
        mdButton,
        mdNavbar,
        mdNavItem,
        mdSnippet
    },
    template: require('./navbars.html')
})
export default class FixedNavbars {
    private showFixed: boolean;

    data() {
        return {
            showFixed: false
        }
    }

    toggleFixed() {
        this.showFixed = !this.showFixed;
    }
}