/**
 * Created by amamiryoin on 2017/6/3.
 */
import React from 'react';
import '../../../stylesheets/search.css';
import Store from '../../store/store';
import {Link} from 'react-router-dom';
import {Actions} from '../../actions/action';

export default class SearchComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            querys:{},
            keyword:'',
            checkDoujinshi:false,
            checkManga:false,
            checkImage:false,
            checkCosplay:false
        }
    }

    static defaultProps = {

    }

    // getQuery = ()=>{
    //     let nextState = {
    //         keyword:this.state.keyword,
    //         doujinshi:this.state.checkDoujinshi,
    //         manga:this.state.checkManga,
    //         image:this.state.checkImage,
    //         cosplay:this.state.checkCosplay
    //     };
    //     Store.dispatch(Actions.search(nextState));
    // }

    getKeyword = (e)=>{
        this.setState({keyword:e.target.value});
    }

    isCheck = (stateName,check) => {
        switch(stateName){
            case 'doujinshi':
                this.setState({checkDoujinshi:check});
                break;
            case 'manga':
                this.setState({checkManga:check});
                break;
            case 'image':
                this.setState({checkImage:check});
                break;
            case 'cosplay':
                this.setState({checkCosplay:check});
                break;
            default:
                return
        }

    }

    componentDidMount(){
    }

    render(){
        let {checkDoujinshi,checkManga,checkImage,checkCosplay,keyword} = this.state;
        return (
            <div id="search">
                <div className="search-title">搜索</div>
                <div className="search-text">
                    <label>
                        <input className="keywords" type="text" onChange={this.getKeyword.bind(this)}/>
                    </label>
                    <Link to={{pathname:'/index'
                        ,params:{keyword:keyword,checkCosplay:checkCosplay,checkImage:checkImage,checkManga:checkManga,checkDoujinshi:checkDoujinshi}}}><button>搜索</button></Link>
                </div>
                <div className="search-checks">
                    <label>
                        <input checked={checkDoujinshi} type="checkbox" name="doujinshi" value="doujinshi" onClick={this.isCheck.bind(this,'doujinshi',!checkDoujinshi)}/>同人志
                    </label>
                    <label>
                        <input checked={checkManga} type="checkbox" name="manga" value="manga" onClick={this.isCheck.bind(this,'manga',!checkManga)}/>漫画
                    </label>
                    <label>
                        <input checked={checkImage} type="checkbox" name="image" value="image" onClick={this.isCheck.bind(this,'image',!checkImage)}/>插画
                    </label>
                    <label>
                        <input checked={checkCosplay} type="checkbox" name="cosplay" value="cosplay" onClick={this.isCheck.bind(this,'cosplay',!checkCosplay)}/>cosplay
                    </label>
                </div>
            </div>
        );
    }
}