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
                        startTime,
                        endTime,
                        jsonData
                    } = item;


                    return (
                        <div key={item.id} className={styles.item}>
                            <div className={styles.header}>
                                <div>请求耗时:{endTime - startTime} ms</div>
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
