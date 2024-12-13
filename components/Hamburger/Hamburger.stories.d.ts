import { StoryObj } from '@storybook/react';
import { default as Hamburger } from './Hamburger';
declare const meta: {
    title: string;
    component: typeof Hamburger;
    tags: string[];
    argTypes: {
        isActive: {
            type: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Plain: Story;
//# sourceMappingURL=Hamburger.stories.d.ts.map