import React from 'react';

import {
    InitState as HistoryInitState
} from './../state/reducer/history';

import connect from './../state/connect';

import styles from './../styles/history.moudle.scss';

interface Props {
    historyData: HistoryInitState;
}

@connect([`historyData`])
class History extends React.PureComponent<Props> {

    private formatTime = (time: number) => {
        const date = new Date(time);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();

        const left: string = [year, month, day].map(
            (value: any) => this.completion(value)
        ).join(`-`);

        const right: string = [hour, minute, second].map(
            (value: any) => this.completion(value)
        ).join(`:`);

        return [left, right].join(` `);
    }

    private completion = (code: any) => {
        code = `${code}`;
        return code.length < 2 ? `0${code}` : code;
    }

    get historyList() {
        const {
            historyData
        } = this.props;

        const {
            historyList
        } = historyData;

        return historyList
    }

    render() {
        return (
            <div className={styles.container}>
                {this.historyList.map((item) => {
                    const {
                        success,
                        jsonData,
                        endTime = 0,
                        startTime = 0
                    } = item;

                    return (
                        <div key={item.id} className={styles.item}>
                            <div className={styles.header}>
                                <div>请求时间:{this.formatTime(startTime)}</div>
                                <div>请求耗时:{endTime - startTime}ms</div>
                                <div>请求状态: {success ? `成功` : `失败`}</div>
                            </div>
                            <div className={styles.content}>
                                <div className={styles.json_content}>
                                    {jsonData}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default History;
