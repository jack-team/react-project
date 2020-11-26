import React from 'react';

import axios from 'axios';

import {
    CountDown
} from './../components';

import {
    InitState as HistoryInitState
} from './../state/reducer/history';

import connect from './../state/connect';

import styles from './../styles/index.moudle.scss';

import Params, * as historyActions from './../state/actions/history';

interface Props {
    history: any;
    historyData: HistoryInitState;
    saveHistory(para: Params): void;
}

interface State {
    loading: boolean;
    jsonString: string
}

const apiUrl: string = `https://api.github.com`;

@connect([`historyData`], {
    saveHistory: historyActions.saveFetchDta
})
class Index extends React.PureComponent<Props, State> {
    private timer: any = null;
    private countInstance: any = null;

    state: State = {
        loading: false,
        jsonString: ``
    }

    componentDidMount() {
        this.onStartCountDown();
    }

    componentWillUnmount() {
        this.clearTimer();
    }

    private clearTimer = () => {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    private goHistory = () => {
        this.props.history.push('/history');
    }

    private onStartCountDown = () => {
        this.countInstance?.start?.();
    }

    /*发送网络请求*/
    private onFetch = async () => {
        this.setState({
            loading: true
        });

        let startTime = Date.now();
        let jsonData: string = ``;
        let success: boolean = true;

        try {
            const {
                data
            } = await axios.get(apiUrl);

            jsonData = data ? JSON.stringify(data) : ``;

        } catch (e) {
            success = false;
        }

        this.timer = setTimeout(() => {
            this.setState({
                loading: false,
                jsonString: jsonData
            }, this.onStartCountDown);
        }, 1000)

        this.props.saveHistory?.({
            id: `${Date.now()}`,
            success: success,
            jsonData: jsonData,
            startTime: startTime,
            endTime: Date.now()
        });
    }

    private renderContent = (count: number) => {
        const {
            loading
        } = this.state;

        return loading ? (
            <div className={styles.text}>
                接口请求中...
            </div>
        ) : (
            <div className={styles.text}>
                {count} 秒后发送请求
            </div>
        )
    }

    render() {
        const {
            jsonString
        } = this.state

        return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <CountDown
                        time={5}
                        onPost={this.onFetch}
                        children={this.renderContent}
                        ref={(instance: any) => this.countInstance = instance}
                    />
                    <div className={styles.go_history} onClick={this.goHistory}>
                        {`请求历史>`}
                    </div>
                </div>
                {jsonString ? (
                    <div className={styles.content}>
                        <div className={styles.json_content}>
                            {jsonString}
                        </div>
                    </div>
                ) : null}
            </div>
        );
    }
}

export default Index;
