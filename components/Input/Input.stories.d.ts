import { StoryObj } from '@storybook/react';
import { default as Input } from './Input';
declare const meta: {
    title: string;
    component: typeof Input;
    tags: string[];
    argTypes: {
        disabled: {
            type: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const PlainText: Story;
export declare const PlainCheckbox: Story;
export declare const PlainRadio: Story;
export declare const PlainColor: Story;
//# sourceMappingURL=Input.stories.d.ts.map