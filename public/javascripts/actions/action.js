/**
 * Created by amamiryoin on 2017/5/31.
 */
const LOAD_MORE = "LOAD_MORE";
let loadMore = (nextPage)=>{
    return {type:LOAD_MORE,index:nextPage}
}
export default loadMore;