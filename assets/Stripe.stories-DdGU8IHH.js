import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{S as a}from"./Stripe-CtFrrRky.js";import{M as d}from"./MinolithStatic-B2szigXC.js";import"./Tabula-OTilzUjG.js";import"./index-CqrSl2Gl.js";const x={title:"Backgrounds/Stripe",component:a,tags:["autodocs"],argTypes:{}},e={args:{colorName:void 0},render:o=>r.jsx(d,{colorScheme:"light",children:r.jsx(a,{...o,children:r.jsx("span",{children:"Plain"})})})},n={args:{colorName:void 0},render:o=>r.jsx(d,{colorScheme:"dark",children:r.jsx(a,{...o,children:r.jsx("span",{children:"Plain"})})})};var i,s,t;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    colorName: undefined
  },
  render: props => <MinolithStatic colorScheme="light">
      <Stripe {...props}>
        <span>{"Plain"}</span>
      </Stripe>
    </MinolithStatic>
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var c,p,l;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    colorName: undefined
  },
  render: props => <MinolithStatic colorScheme="dark">
      <Stripe {...props}>
        <span>{"Plain"}</span>
      </Stripe>
    </MinolithStatic>
}`,...(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const j=["LightPlain","DarkPlain"];export{n as DarkPlain,e as LightPlain,j as __namedExportsOrder,x as default};
