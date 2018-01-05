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
// $.ajax({
//     type: "GET",
//     url: "/api/doujinshi/search",
//     dataType: "json",
//     async: false,
//     success: function(response, status, xhr) {
//         infos.push.apply(infos, response);
//     }
// });

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
    }

    render() {
        let _this = this;
        console.log("222",this.props)
        // Store.subscribe(() => {
        //     alert(Store.getState());
            // if (Store.getState().page == 0 || Store.getState().page !== page) {
            //     page = Store.getState().page;
            //     $.ajax({
            //         type: "GET",
            //         url: "/api/doujinshi/search?doujinshiName=脸肿汉化组",
            //         dataType: "json",
            //         async: false,
            //         success: function(response, status, xhr) {
            //             infos.push.apply(infos, response);
            //             _this.setState({ info: infos });
            //         }
            //     });
            // }
        // });
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