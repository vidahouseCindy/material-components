import Component from 'vue-class-component';

import mdCollection from '../../../components/collection';
import mdCollectionItem from '../../../components/collection-item';

@Component({
    components: {
        mdCollection,
        mdCollectionItem
    },
    template: require('./header.html')
})
export default class HeaderCollection {
}

