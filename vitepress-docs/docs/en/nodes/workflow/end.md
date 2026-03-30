# End Node

## Definition

The End node defines the final output content when a workflow completes. Every workflow requires at least one End node to output the final result after full execution.

The End node is a flow termination node — no other nodes can be added after it. A workflow only outputs its execution result when it reaches an End node. If the flow has conditional branches, multiple End nodes are needed.

The End node must declare one or more output variables. When declaring, you can reference the output variable of any upstream node.

## Example

The End node's declared variable `text` is the output from an upstream code node — meaning this workflow ends after the model node finishes executing and outputs the results of 3 model nodes.

![End Node](/assets/结束1.png)
