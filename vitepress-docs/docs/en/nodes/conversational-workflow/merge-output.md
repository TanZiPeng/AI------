# Merge Output Node

## Definition

The Merge Output node is one of the most commonly used variable merging and data aggregation nodes in a workflow. Its purpose is to combine the outputs, variables, text, and content from multiple upstream nodes into a single unified result.

## Use Cases

- Combine "user question" + "knowledge base answer" + "conversation history" into one string
- Merge results from multiple tool nodes (search, query, generation)
- Format variables for use by a downstream LLM or reply node
- Standardize output format to prevent downstream nodes from receiving messy data

## Configuration

**Input Variables** — Add input variables (arg1, arg2, arg3, ...)

**Code** — Reference variables using `{{ }}` in the code area and arrange the layout

**Output Variable** — Outputs a `string` type. The node automatically concatenates all input content into the final output, so the result has a single copy button.

![Merge Output](/assets/整合输出.png)
