import Component from 'vue-class-component';
import docBreadcrumbs from './default';
import docNavbarBreadcrumbs from './navbar';

@Component({
    components: {
        docBreadcrumbs,
        docNavbarBreadcrumbs
    },
    template: require('./badges.html')
})
export default class Breadcrumbs {
    data() {
        return {
            api: require('../../components/breadcrumbs/breadcrumbs-api.json'),
            snippets: {
                breadcrumbs: require('./default/default.snippet.html'),
                navbarBreadcrumbs: require('./navbar/navbar.snippet.html')
            },
            src: {
                script: require("!!html!highlightjs?lang=ts!../../components/breadcrumbs/index.ts"),
                template: require('!!html!highlightjs?lang=html!../../components/breadcrumbs/breadcrumbs.html')
            }
        }
    }
}