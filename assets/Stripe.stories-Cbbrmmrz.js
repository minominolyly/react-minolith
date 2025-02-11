import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{S as i}from"./Stripe-Cv7YILAj.js";import{M as d}from"./MinolithStatic-qxgbC_3i.js";import"./Tabula-C_xKIuFK.js";import"./index-DmM0KDA7.js";const x={title:"Backgrounds/Stripe",component:i,tags:["autodocs"],argTypes:{}},e={args:{colorName:void 0},render:a=>r.jsx(d,{colorScheme:"light",children:r.jsx(i,{...a,sizing:{aspectRatio:"16:9"},children:r.jsx("span",{children:"Plain"})})})},n={args:{colorName:void 0},render:a=>r.jsx(d,{colorScheme:"dark",children:r.jsx(i,{...a,sizing:{aspectRatio:"16:9"},children:r.jsx("span",{children:"Plain"})})})};var o,s,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    colorName: undefined
  },
  render: props => <MinolithStatic colorScheme="light">
      <Stripe {...props} sizing={{
      aspectRatio: "16:9"
    }}>
        <span>{"Plain"}</span>
      </Stripe>
    </MinolithStatic>
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var c,p,l;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    colorName: undefined
  },
  render: props => <MinolithStatic colorScheme="dark">
      <Stripe {...props} sizing={{
      aspectRatio: "16:9"
    }}>
        <span>{"Plain"}</span>
      </Stripe>
    </MinolithStatic>
}`,...(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const j=["LightPlain","DarkPlain"];export{n as DarkPlain,e as LightPlain,j as __namedExportsOrder,x as default};
