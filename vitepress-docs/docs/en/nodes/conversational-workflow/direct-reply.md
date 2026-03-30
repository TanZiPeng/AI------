# Direct Reply Node

## Definition

The Direct Reply node defines the reply content within a Chatflow process.

You can freely define the reply format in the text editor — including fixed text, output variables from upstream steps, or a combination of both.

The node can be added at any point in the flow to stream content to the conversation reply. It supports WYSIWYG configuration and mixed text and image output, such as:

1. Outputting LLM node reply content
2. Outputting generated tables
3. Outputting plain text

**Example:** Outputting plain text

![Direct Reply](/assets/直接回复1.png)

> The Direct Reply node does not have to be the final output node. When used as an intermediate process node, it can stream results at intermediate steps without waiting for the entire flow to finish.
