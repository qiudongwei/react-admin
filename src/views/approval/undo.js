import React, { Component, Fragment } from 'react'

import { map, prop } from 'ramda'
import { className, extractData } from 'js/utils'
import emitter from 'EventBus'

import Pagination from 'components/Pagination'
import CommonQuery from 'components/CommonQuery'
import CommonInput from 'components/CommonInput'
import CommonTable from 'components/CommonTable'
import AlignCell from 'components/AlignCell'
class ApprovalUndo extends Component {
    constructor (props) {
        super(props)
        this.state = {
            data: [{
                system: 'MOMP',
                apply_no: 'YW0001190919',
                apply_type: 'YW',
                apply_name: '业务合同审批申请',
                applicant_name: '小龙女',
                apply_date: '2019-10-01',
                status: 100,
            },{
                system: 'AFS',
                apply_no: 'FW0001190919',
                apply_type: 'FW',
                apply_name: '法务合同审批申请',
                applicant_name: '杨过',
                apply_date: '2019-10-01',
                status: 101,
            },{
                system: 'AFS',
                apply_no: 'FW0001190919',
                apply_type: 'FW',
                apply_name: '法务合同审批申请',
                applicant_name: '杨过',
                apply_date: '2019-10-01',
                status: 101,
            }],
            form: {
                apply_name: '',
                applicant_name: ''
            }
        }
    }
    render () {
        return (
            <div className="view">
                <div className="view-head">
                    <div className="view-title">待办</div>
                    <ul className="view-tap">
                        <li className="view-tap-item active">全部</li>
                        <li className="view-tap-item">财务类</li>
                        <li className="view-tap-item">业务类</li>
                        <li className="view-tap-item">行政类</li>
                    </ul>
                </div>
                <div className="view-body">
                    <CommonQuery >
                        <CommonInput model='form.apply_name' placeholder="申请单名称" />
                        <CommonInput model='form.applicant_name' placeholder="申请人" />
                    </CommonQuery>
                    <CommonTable>
                        <Fragment key="left-thead">
                            <tr>
                                <th>系统</th>
                                <th>申请号</th>
                            </tr>
                        </Fragment>
                        <Fragment key="thead">
                            <tr>
                                <th>申请单</th>
                                <th>申请单</th>
                                <th>申请单</th>
                                <th>申请单</th>
                                <th>申请单</th>
                                <th>申请单</th>
                                <th>申请单</th>
                                <th>申请单</th>
                                <th>申请单</th>
                                <th>申请单</th>
                                <th>单据类型</th>
                                <th>申请人</th>
                                <th>申请时间</th>
                            </tr>
                        </Fragment>
                        <Fragment key="right-thead">
                            <tr>
                                <th>状态</th>
                            </tr>
                        </Fragment>
                        { map(each => (
                            <Fragment key={ each.apply_no }>
                                <Fragment key="left-tbody">
                                    <tr>
                                        <AlignCell><span className={ className({
                                            'system-icon': true,
                                            [each.system]: true
                                        }) }>{ each.system }</span></AlignCell>
                                        <td>{ each.apply_no }</td>
                                    </tr>
                                </Fragment>
                                <Fragment key="tbody">
                                    <tr>
                                        <td>{ each.apply_name }</td>
                                        <td>{ each.apply_name }</td>
                                        <td>{ each.apply_name }</td>
                                        <td>{ each.apply_name }</td>
                                        <td>{ each.apply_name }</td>
                                        <td>{ each.apply_name }</td>
                                        <td>{ each.apply_name }</td>
                                        <td>{ each.apply_name }</td>
                                        <td>{ each.apply_name }</td>
                                        <td>{ each.apply_name }</td>
                                        <td>{ each.apply_type }</td>
                                        <td>{ each.applicant_name }</td>
                                        <td>{ each.apply_date }</td>
                                    </tr>
                                </Fragment>
                                <Fragment key="right-tbody">
                                    <tr>
                                        <td>{ each.status }</td>
                                    </tr>
                                </Fragment>
                            </Fragment>
                        ), this.state.data) }
                    </CommonTable>
                </div>
                <div className="view-foot">
                    <Pagination />
                </div>
            </div>
        )
    }
    componentDidMount () {
        emitter.on('form.apply_name', (val) => {
            const form = prop('form', this.state)
            this.setState({
                form: {
                    apply_name: val,
                    ...extractData([], ['apply_name'])(form)
                }
            })
        })

        emitter.on('form.applicant_name', (val) => {
            const form = prop('form', this.state)
            this.setState({
                form: {
                    applicant_name: val,
                    ...extractData([], ['applicant_name'])(form)
                }
            })
        })
    }
    componentWillUnmount () {
        emitter.off('from.apply_name')
    }
    
}

export default ApprovalUndo