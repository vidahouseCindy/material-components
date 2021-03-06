import Component from 'vue-class-component';

import docSnippet from '../snippet';
import docDefaultDropdown from './default';

import events from '../../mixins/events';

@Component({
    components: {
        docSnippet,
        docDefaultDropdown
    },
    mixins: [
        events
    ],
    template: require('./dropdowns.html')
})
export default class Dropdowns {
    data() {
        return {
            api: [
                {
                    name: 'Dropdown',
                    api: require('../../components/dropdown/dropdown-api.json')
                },
                {
                    name: 'Dropdown list',
                    api: require('../../components/dropdown-list/dropdown-list-api.json')
                },
                {
                    name: 'Dropdown item',
                    api: require('../../components/dropdown-item/dropdown-item-api.json')
                }
            ],
            snippets: {
                defaultDropdown: require('./default/default.snippet.html')
            },
            src: [
                {
                    name: 'Dropdown',
                    script: require("!!html!highlightjs?lang=ts!../../components/dropdown/index.ts"),
                    template: require('!!html!highlightjs?lang=html!../../components/dropdown/dropdown.html')
                },
                {
                    name: 'Dropdown list',
                    script: require("!!html!highlightjs?lang=ts!../../components/dropdown-list/index.ts"),
                    template: require('!!html!highlightjs?lang=html!../../components/dropdown-list/dropdown-list.html')
                },
                {
                    name: 'Dropdown item',
                    script: require("!!html!highlightjs?lang=ts!../../components/dropdown-item/index.ts"),
                    template: require('!!html!highlightjs?lang=html!../../components/dropdown-item/dropdown-item.html')
                }
            ]
        }
    }
}