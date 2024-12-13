import { StoryObj } from '@storybook/react';
import { default as Badge } from './Badge';
declare const meta: {
    title: string;
    component: typeof Badge;
    tags: string[];
    argTypes: {
        isSmall: {
            type: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Plain: Story;
//# sourceMappingURL=Badge.stories.d.ts.map