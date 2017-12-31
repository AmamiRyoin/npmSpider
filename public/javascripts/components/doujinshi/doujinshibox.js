/**
 * Created by amamiryoin on 2017/4/20.
 */
import React from 'react';

export default class doujinshiBox extends React.Component{
    constructor(props){
        super(props);
        this.state={

        };
    }
    static defaultProps = {
        imgSrc:"",
        title:"",
        href:"",
        authorHref:"",
        downloadHref:""
    }

    render(){
        return (
            <div className="fl-p">
                <div>
                    <img className="img-c" src={this.props.imgSrc} alt={this.props.title}/>
                </div>
                <div className="fl-t">
                    <a target="_blank" href={this.props.href}>{this.props.title}</a>
                </div>
                <div>
                    <a target="_blank" href={this.props.authorHref}>{"作者："+this.props.author}</a>
                </div>
                <div>
                    <a target="_blank" href={this.props.downloadHref}>立即下载种子文件</a>
                </div>
            </div>
        );
    };
};