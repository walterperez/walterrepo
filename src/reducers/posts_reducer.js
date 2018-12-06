const initialState= {
  ListWebs : [
    {name:'Blog',postName:" Welcome",icon:"faHandPointRight"},
    {name:'Blog1',postName:" My projects",icon:"faFileAlt"},
    {name:'Blog2',postName:" About",icon:"faInfoCircle"},
    {name:'Blog3',postName:" Tools",icon:"faWrench"},
    {name:'Blog4',postName:" Services",icon:"faShoppingCart"},
    {name:'Blog5',postName:" Photos",icon:"faCameraRetro"},
    {name:'Blog6',postName:" Brand Designs",icon:"faPenNib"},
    {name:'Blog7',postName:" Contact",icon:"faAt"},
    {name:'Blog8',postName:" Legal Advise",icon:"faBalanceScale"},
  ]
};

const posts_reducer = (state=initialState) => {
        return state
};
export default posts_reducer
  