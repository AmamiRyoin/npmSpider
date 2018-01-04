/**
 * Created by amamiryoin on 2017/5/26.
 */
import React from 'react';
import Doujinshibox from './doujinshibox';
import "../../../stylesheets/doujinshi.css";
export default class DoujinshiContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                info: props.info
            }
        }

        render() {
            let doujinshiboxes = [];
            this.state.info.forEach((item, index) => {
                    doujinshiboxes.push( < Doujinshibox key = { 'doujinshi' + index }
                        imgSrc = { item.doujinshiImage }
                        title = { item.doujinshiName }
                        href = { item.doujinshiLink }
                        authorHref = { item.doujinshiAuthorLink }
                        author = { item.doujinshiAuthor }
                        downloadHref = { item.doujinshiDownload }
                        />)
                    });
                return ( <
                    div > { doujinshiboxes } <
                    /div>
                )
            }
        }