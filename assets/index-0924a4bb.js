import{a as o}from"./index-2b6ba8f0.js";import{d as s,r as i,a as d,o as l,c as r,b as c}from"./index-17f23244.js";import"./request-c09486d7.js";const u={name:"Menus"},I=s({...u,setup(m){const a=[{title:"菜单名称",dataIndex:"menuName"},{title:"权限标识",dataIndex:"permissionCode"},{title:"菜单类型",dataIndex:"menuType"},{title:"开发者",dataIndex:"developer"},{title:"完成时间",dataIndex:"finishAt"}],e=i([]);return(async()=>{const{data:t}=await o();e.value=t.data})(),(t,_)=>{const n=d("a-table");return l(),r("div",null,[c(n,{rowKey:"id",columns:a,"data-source":e.value,pagination:!1},null,8,["data-source"])])}}});export{I as default};
