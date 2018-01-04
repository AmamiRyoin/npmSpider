/**
 * Created by amamiryoin on 2017/5/31.
 */
export const LOAD_MORE = "LOAD_MORE";
export const SEAECH_DOUJINSHI = "SEAECH_DOUJINSHI";
export let Actions = {
    loadMore : (nextPage)=>{
        return {type:LOAD_MORE,index:nextPage}
    },
    search : (nextState)=>{
        return {type:SEAECH_DOUJINSHI,index:nextState}
    }
};
// export default Actions;