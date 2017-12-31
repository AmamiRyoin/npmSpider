/**
 * Created by amamiryoin on 2017/5/27.
 */
import React from 'react';
import LoadMoreButton from './loadMoreButton';
import DoujinshiContainer from './doujinshiContainer';
import Store from '../../store/store';

let body = document.getElementById("body");
let infos=[];
let page = 0;
$.ajax({
    type: "GET",
    url: "../../../infos/info0.json",
    dataType: "json",
    async:false,
    success: function(response,status,xhr){
        infos.push.apply(infos,response);
    }
});

export default class DoujinshiView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            page:0,
            info:infos
        }
    }

    static defaultProps = {

    }

    render(){
        let _this = this;
        Store.subscribe(()=>{
            if(Store.getState().page ==0 || Store.getState().page!==page){
                page = Store.getState().page;
                $.ajax({
                    type: "GET",
                    url: "../../../infos/info"+page+".json",
                    dataType: "json",
                    async:false,
                    success: function(response,status,xhr){
                        infos.push.apply(infos,response);
                        _this.setState({info:infos});
                    }
                });
            }
        });
        return(
            <div id="doujinshi">
                <DoujinshiContainer info={this.state.info}/>
                <LoadMoreButton/>
            </div>
        )
    }
}