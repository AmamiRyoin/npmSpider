/**
 * Created by amamiryoin on 2017/5/24.
 */
import React from "react";
import ReactDOM from  'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import DoujinshiView from './doujinshi/doujinshiView';
import SearchComponent from './search/search';
import Store from '../store/store';
Store.subscribe(()=>{});
ReactDOM.render(
    (<BrowserRouter>
        <div>
            <Route path="/search" component={SearchComponent}/>
            <Route path="/index" component={DoujinshiView}/>
        </div>
    </BrowserRouter>)
    , document.getElementById('body'));