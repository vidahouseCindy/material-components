import Component from 'vue-class-component';

@Component({
    props: {
        disabled: {
            type: Boolean,
            required: false,
            "default": false,
            twoWay: false
        },
        name: {
            type: String,
            required: false,
            "default": null,
            twoWay: false
        }
    },
    events: {
        'tab::select': function (id) {
            this.select(id);
        }
    },
    template: require('./tab.html')
})
export default class Tab {
    private $el: any;
    private $parent: any;
    private $dispatch: any;

    private disabled: boolean;
    private name: string;

    get computedClasses() {
        return this.disabled ? ['disabled'] : [];
    }

    get index() {
        return this.$parent.$children.indexOf(this);
    }

    get id() {
        if (this.name) {
            return this.name;
        }
        else {
            return this.index;
        }
    }

    ready() {
        var hash = window.location.hash;
        var el: HTMLElement = this.$el;
        var anchors = el.getElementsByTagName("A");
        for (var i = 0; i < anchors.length; i++) {
            var a = anchors[i];
            if (hash == a.getAttribute("href")) {
                this.setAsSelected();
            }
        }
    }

    setAsSelected() {
        if (!this.disabled) {
            this.$dispatch('tabs::on-select', this);
        }
    }

    select(id) {
        if (this.id == id) {
            this.setAsSelected();
        }
    }
}