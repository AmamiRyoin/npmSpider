/**
 * Created by amamiryoin on 2017/6/3.
 */
import React from 'react';
import '../../../stylesheets/search.css';

export default class SearchComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            keyWords:''
        }
    }

    static defaultProps = {

    }

    getKeyWords = (e)=>{
        this.setState({keyWords:e.target.value});
    }

    render(){
        return (
            <div id="search">
                <div className="search-title">E-HENTAI种子搜索</div>
                <div className="search-text">
                    <label>
                        <input type="text" onChange={this.getKeyWords.bind(this)}/>
                    </label>
                    <button type="submit">搜索</button>
                </div>
                <div className="search-checks">
                    <label>
                        <input type="checkbox" name="doujinshi" value="doujinshi"/>同人志
                    </label>
                    <label>
                        <input type="checkbox" name="manga" value="manga"/>漫画
                    </label>
                    <label>
                        <input type="checkbox" name="image" value="image"/>插画
                    </label>
                    <label>
                        <input type="checkbox" name="cosplay" value="cosplay"/>cosplay
                    </label>
                </div>
            </div>
        );
    }
}