import Component from 'vue-class-component';

import mdLinearPreloader from '../../../components/linear-preloader';

@Component({
    components: {
        mdLinearPreloader
    },
    template: require('./linear-indeterminate.html')
})
export default class LinearIndeterminatePreloader {
}

