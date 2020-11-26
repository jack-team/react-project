import React from 'react';

interface Props {
    time: number;
    onPost?: Function;
    children(count: number): any;
}

interface State {
    count: number;
    disabled: boolean;
}

/*
* 倒计时组件，children传入函数
* */
class CountDown extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            disabled: false,
            count: props.time
        }
    }

    static defaultProps = {
        time: 60
    }

    private timer: any = null;

    public start = () => {
        const {
            disabled
        } = this.state;

        if (disabled) {
            return false
        }

        this.setState({
            disabled: true
        }, this.startIn);
    }

    private startIn = () => {
        this.timer = setInterval(
            this.runCount, 1000
        );
    }

    private runCount = () => {
        let {
            count
        } = this.state;

        const {
            time
        } = this.props;

        count -= 1;

        this.setState({
            count: count
        });

        if (count <= 0) {
            this.clearTimer();
            this.setState({
                count: time,
                disabled: false
            }, this.onPost)
        }
    }

    private clearTimer = () => {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    private onPost = () => {
        this.props?.onPost?.();
    }

    componentWillUnmount() {
        this.clearTimer();
    }

    render() {
        const {
            count
        } = this.state;
        return this.props.children(count);
    }
}

export default CountDown;
