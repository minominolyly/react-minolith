import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{M as o,a as g,b as m}from"./MessageHeader-g3LC2cEU.js";import{M as l}from"./MinolithStatic-DqXT3blX.js";import"./Tabula-ORd-0ym0.js";import"./index-CqrSl2Gl.js";const B={title:"Components/Message",component:o,tags:["autodocs"],argTypes:{}},s={args:{colorName:void 0},render:a=>e.jsx(l,{children:e.jsxs(o,{...a,children:[e.jsx(g,{children:"Header"}),e.jsx(m,{children:"Body"})]})})},r={args:{colorName:void 0},render:a=>e.jsx(l,{children:e.jsx(o,{...a,children:e.jsx(m,{children:"Body"})})})};var n,t,d;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    colorName: undefined
  },
  render: props => <MinolithStatic>
      <Message {...props}>
        <MessageHeader>
          {"Header"}
        </MessageHeader>
        <MessageBody>
          {"Body"}
        </MessageBody>
      </Message>
    </MinolithStatic>
}`,...(d=(t=s.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    colorName: undefined
  },
  render: props => <MinolithStatic>
      <Message {...props}>
        <MessageBody>
          {"Body"}
        </MessageBody>
      </Message>
    </MinolithStatic>
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const j=["Plain","BodyOnly"];export{r as BodyOnly,s as Plain,j as __namedExportsOrder,B as default};
