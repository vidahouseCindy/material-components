import Component from 'vue-class-component';

@Component({
    interval: {
        type: Number,
        "default": 4000,
        validator: function (value) {
            return value > 1000
        }
    },
    template: require('./slider.html')
})
export default class Slider {
    private $broadcast: any;
    private $children: any;

    private activeItem: number;
    private itemsCount: number;
    private interval: number;
    private intervalHandler: number;

    data() {
        return {
            activeItem: 0,
            itemsCount: 0,
        }
    }

    ready() {
        this.$broadcast('slider::activate', this.activeItem);

        this.interval = this.interval ? this.interval : 4000;
        this.itemsCount = this.$children.length;
        this.setupInterval();
    }

    handler() {
        if (this.$children) {
            this.activeItem = (this.activeItem + 1) % this.itemsCount;
            this.$broadcast('slider::activate', this.activeItem);
        }
    }

    setupInterval() {
        this.intervalHandler = setInterval(this.handler, this.interval);
    }

    clearInterval() {
        if (this.intervalHandler) {
            clearInterval(this.intervalHandler);
            this.intervalHandler = null;
        }
    }

    setActive(index) {
        this.$broadcast('slider::activate', index);
        this.activeItem = index;
        this.clearInterval();
    }

}