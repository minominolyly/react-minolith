import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{N as m,a as l,b as e,c as s,d as t,e as i,f as d,g as u,h as r}from"./NavAccordion-B3kIp6xQ.js";import{M as B}from"./MinolithStatic-D46fgrYP.js";import{H as x}from"./Hamburger-DIGvsuwa.js";import"./Tabula-ORd-0ym0.js";import"./index-CqrSl2Gl.js";const L={title:"Components/Nav",component:m,tags:["autodocs"],argTypes:{}},v=a.jsxs(a.Fragment,{children:[a.jsx(r,{as:"a",href:"/",children:"NavMenuItem1"}),a.jsx(r,{as:"a",href:"/",children:"NavMenuItem2"}),a.jsx(r,{as:"a",href:"/",children:"NavMenuItem3"})]}),n={args:{},render:h=>a.jsx(B,{children:a.jsxs(m,{...h,children:[a.jsxs(l,{isSmallOrLess:!0,children:[a.jsxs(e,{children:[a.jsx(s,{children:a.jsx(x,{})}),a.jsx(t,{children:"Center"}),a.jsx(i,{})]}),a.jsx(d,{isActive:!0,children:v})]}),a.jsxs(u,{isMediumOrMore:!0,children:[a.jsxs(e,{children:[a.jsx(s,{children:"NavBrandLeft"}),a.jsx(t,{children:"NavBrandCenter"}),a.jsx(i,{children:"NavBrandRight"})]}),a.jsx(d,{children:v})]})]})})};var N,c,o;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {},
  render: props => <MinolithStatic>
      <Nav {...props}>
        <NavAccordion isSmallOrLess>
          <NavBrand>
            <NavBrandLeft>
              <Hamburger />
            </NavBrandLeft>
            <NavBrandCenter>{"Center"}</NavBrandCenter>
            <NavBrandRight></NavBrandRight>
          </NavBrand>
          <NavMenu isActive={true}>{navMenuItems}</NavMenu>
        </NavAccordion>
        <NavStatic isMediumOrMore>
          <NavBrand>
            <NavBrandLeft>{"NavBrandLeft"}</NavBrandLeft>
            <NavBrandCenter>{"NavBrandCenter"}</NavBrandCenter>
            <NavBrandRight>{"NavBrandRight"}</NavBrandRight>
          </NavBrand>
          <NavMenu>{navMenuItems}</NavMenu>
        </NavStatic>
      </Nav>
    </MinolithStatic>
}`,...(o=(c=n.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};const S=["Plain"];export{n as Plain,S as __namedExportsOrder,L as default};
