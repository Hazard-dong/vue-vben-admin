import{a as e,h as s,i as o,o as t,j as i,w as l,k as r,p as a}from"./index.e76c06f1.js";import"./xlsx.9d951958.js";import"./index.2e7cfb95.js";import"./Trigger.e0ae6bef.js";import"./omit.387e4bc9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.9023c34c.js";import"./CheckOutlined.187a3060.js";import{s as n}from"./index.15751672.js";import"./index.1bb021e3.js";import"./index.6b9d0259.js";import"./colors.b20c9223.js";import"./index.eba57d7e.js";import"./RightOutlined.238a5698.js";import"./usePageContext.db13adb7.js";import"./types.2b5911d0.js";import"./index.13fbb8a0.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.b9c7bfd3.js";import"./index.0492ce3b.js";import"./index.f4cf7fd8.js";import"./UpOutlined.c57d18c6.js";import"./index.22e82fe7.js";import"./index.ffdab4cb.js";import"./index.470a4b2d.js";import"./index.545f4296.js";import"./index.652cf000.js";import"./index.351bc02d.js";import"./index.ec0f3664.js";import"./index.ac515f18.js";import"./transButton.914fefeb.js";import{a as p}from"./index.1ef513c1.js";import"./CloseOutlined.364204b4.js";import"./FullscreenOutlined.647cd1c9.js";import"./index.6d17570e.js";import"./RightOutlined.4e6f221b.js";import"./useTimeout.0b9d202d.js";import"./tsxHelper.3ee1ad98.js";import"./index.1671d981.js";import"./animation.7d541661.js";import"./useScrollTo.ae385fa0.js";import{s as d}from"./index.90bfe2f3.js";import"./useAttrs.cd179906.js";import"./index.3c40b99f.js";import"./useWindowSizeFn.18768138.js";import"./index.cee60ffd.js";import"./uuid.40269c00.js";import"./download.75bd0097.js";import{u as c}from"./useForm.fb4d76f9.js";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];var u=e({components:{BasicForm:n,CollapseContainer:p,PageWrapper:d},setup(){const{createMessage:e}=s(),[o,{setProps:t}]=c({labelWidth:120,schemas:m,actionColOptions:{span:24}});return{register:o,schemas:m,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},setProps:t}}});const f={class:"mb-4"},b=a("更改labelWidth"),j=a("还原labelWidth"),P=a("更改Size"),x=a("还原Size"),C=a("禁用表单"),h=a("解除禁用"),k=a("紧凑表单"),_=a("还原正常间距"),g=a(" 操作按钮位置 "),S={class:"mb-4"},O=a(" 隐藏操作按钮 "),w=a(" 显示操作按钮 "),B=a(" 隐藏重置按钮 "),v=a(" 显示重置按钮 "),W=a(" 隐藏查询按钮 "),F=a(" 显示查询按钮 "),R=a(" 修改重置按钮 "),y=a(" 修改查询按钮 ");u.render=function(e,s,a,n,p,d){const c=o("a-button"),m=o("BasicForm"),u=o("CollapseContainer"),z=o("PageWrapper");return t(),i(z,{title:"UseForm操作示例"},{default:l((()=>[r("div",f,[r(c,{onClick:s[1]||(s[1]=s=>e.setProps({labelWidth:150})),class:"mr-2"},{default:l((()=>[b])),_:1}),r(c,{onClick:s[2]||(s[2]=s=>e.setProps({labelWidth:120})),class:"mr-2"},{default:l((()=>[j])),_:1}),r(c,{onClick:s[3]||(s[3]=s=>e.setProps({size:"large"})),class:"mr-2"},{default:l((()=>[P])),_:1}),r(c,{onClick:s[4]||(s[4]=s=>e.setProps({size:"default"})),class:"mr-2"},{default:l((()=>[x])),_:1}),r(c,{onClick:s[5]||(s[5]=s=>e.setProps({disabled:!0})),class:"mr-2"},{default:l((()=>[C])),_:1}),r(c,{onClick:s[6]||(s[6]=s=>e.setProps({disabled:!1})),class:"mr-2"},{default:l((()=>[h])),_:1}),r(c,{onClick:s[7]||(s[7]=s=>e.setProps({compact:!0})),class:"mr-2"},{default:l((()=>[k])),_:1}),r(c,{onClick:s[8]||(s[8]=s=>e.setProps({compact:!1})),class:"mr-2"},{default:l((()=>[_])),_:1}),r(c,{onClick:s[9]||(s[9]=s=>e.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:l((()=>[g])),_:1})]),r("div",S,[r(c,{onClick:s[10]||(s[10]=s=>e.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:l((()=>[O])),_:1}),r(c,{onClick:s[11]||(s[11]=s=>e.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:l((()=>[w])),_:1}),r(c,{onClick:s[12]||(s[12]=s=>e.setProps({showResetButton:!1})),class:"mr-2"},{default:l((()=>[B])),_:1}),r(c,{onClick:s[13]||(s[13]=s=>e.setProps({showResetButton:!0})),class:"mr-2"},{default:l((()=>[v])),_:1}),r(c,{onClick:s[14]||(s[14]=s=>e.setProps({showSubmitButton:!1})),class:"mr-2"},{default:l((()=>[W])),_:1}),r(c,{onClick:s[15]||(s[15]=s=>e.setProps({showSubmitButton:!0})),class:"mr-2"},{default:l((()=>[F])),_:1}),r(c,{onClick:s[16]||(s[16]=s=>e.setProps({resetButtonOptions:{disabled:!0,text:"重置New"}})),class:"mr-2"},{default:l((()=>[R])),_:1}),r(c,{onClick:s[17]||(s[17]=s=>e.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:l((()=>[y])),_:1})]),r(u,{title:"useForm示例"},{default:l((()=>[r(m,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default u;