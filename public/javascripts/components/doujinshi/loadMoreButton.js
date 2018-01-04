/**
 * Created by amamiryoin on 2017/5/26.
 */
import React, { Component } from 'react';
import {Actions} from '../../actions/action';
import Store from '../../store/store';
export default class LoadMoreButton extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }

    static defaultProps = {
    }

    componentDidMount(){

    }

    render(){
        let _page = 0;
        return(
            <div className="see-m"><a onClick={()=>{Store.dispatch(Actions.loadMore(_page))}}>点击加载</a></div>
        )
    }
}