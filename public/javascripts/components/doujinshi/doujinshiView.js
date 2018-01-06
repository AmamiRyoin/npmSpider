/**
 * Created by amamiryoin on 2017/5/27.
 */
import React from 'react';
import DoujinshiContainer from './doujinshiContainer';
import Store from '../../store/store';
//import {bindActionCreators} from "redux";
import {Actions} from "../../actions/action";
import {connect} from "react-redux";
let infos = [];
let page = 0;

class DoujinshiView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            info: infos
        }
    }

    static defaultProps = {

    }

    componentDidMount(){
        let querys = this.props.location.search;
        let _this = this;
        // $.ajax({
        //     url:'api/doujinshi/search',
        //     method:'GET',
        //     data:querys,
        //     success:function(res){
        //         console.log(res)
        //     }
        // });
        fetch('/api/doujinshi/search'+querys,).then((response)=>{
            // console.log(response.blob())
            return response.json();
        }).then((response)=>{
            _this.setState({info:response.data});
        })
    }

    componentDidUpdate(){

    }

    render() {
        let _this = this;
        console.log(_this.state)
        return (
            < div id = "doujinshi" >
                <DoujinshiContainer info = { this.state.info }/>
                <div className="see-m"><a onClick={this.props.loadMore}>点击加载</a></div>
            </div>
        )
    }
}
let mapStateToProps = (state)=>{
    return {page:state.page}
};
let mapDispatchToProps = (dispatch)=>{
    return {
        loadMore:()=>dispatch(Actions.loadMore(Store.getState().page))
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(DoujinshiView);