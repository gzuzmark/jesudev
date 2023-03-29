import type { Schema } from '@markdoc/markdoc';

export const fence: Schema = {
    render: 'Fence',
    children: ["strong", "em", "s", "code", "text", "tag"],
    attributes: {      
      language: {
        type: String
      }
    }
};
