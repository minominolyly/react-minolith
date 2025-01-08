import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{S as o}from"./Stripe-DDdEmTKP.js";import{M as l}from"./MinolithStatic-Ba1-Mxfp.js";import"./Tabula-ORd-0ym0.js";import"./index-CqrSl2Gl.js";const x={title:"Backgrounds/Stripe",component:o,tags:["autodocs"],argTypes:{}},n={args:{colorName:void 0},render:a=>r.jsx(l,{children:r.jsx(o,{...a,sizing:{aspectRatio:"16:9"},children:r.jsx("span",{children:"Plain"})})})},e={args:{colorName:void 0},render:a=>r.jsx(l,{colorScheme:"dark",children:r.jsx(o,{...a,children:r.jsx("span",{children:"Plain"})})})};var i,s,t;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    colorName: undefined
  },
  render: props => <MinolithStatic>
      <Stripe {...props} sizing={{
      aspectRatio: "16:9"
    }}>
        <span>{"Plain"}</span>
      </Stripe>
    </MinolithStatic>
}`,...(t=(s=n.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var c,p,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    colorName: undefined
  },
  render: props => <MinolithStatic colorScheme="dark">
      <Stripe {...props}>
        <span>{"Plain"}</span>
      </Stripe>
    </MinolithStatic>
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const j=["LightPlain","DarkPlain"];export{e as DarkPlain,n as LightPlain,j as __namedExportsOrder,x as default};
