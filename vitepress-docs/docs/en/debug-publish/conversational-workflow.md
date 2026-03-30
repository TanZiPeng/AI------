# Conversational Workflow (Debug & Publish)

The Conversational Workflow editor is used to orchestrate multi-turn dialogue AI application flows. After orchestration, use the top-right toolbar to check, preview, and publish.

![Conversational Workflow Interface](/assets/调试发布/对话业务流-基础界面.png)

---

## Page Layout

| Area | Description |
|------|-------------|
| Left Node Panel | Draggable node types; two tabs: **Nodes** and **Components** |
| Central Canvas | Orchestration area; connect nodes with lines to form a complete workflow |
| Top-right Toolbar | Four entry points: **Checklist**, **Preview**, **Features**, and **Publish** |

### Available Node Types

| Group | Nodes |
|-------|-------|
| (Basic) | Model, Knowledge Base, Temporary Knowledge Base, Direct Reply |
| Question Understanding | Intent Recognition |
| Logic | Condition, Task Loop |
| Transform | Code Execution, Merge Output, Text Extraction, Document Split, Parameter Extraction, Variable Assignment, Conversational SQL |
| Tools | HTTP Request |

---

## Preview & Debug

Click the **Preview** button in the top right. A preview panel appears on the right side for real-time testing without publishing.

![Preview - Node Flow Log](/assets/调试发布/对话业务流-预览-节点流转日志.png)

Enter a question in the bottom input box and send. The preview panel displays:

- **Conversation Reply** — The AI's answer based on the workflow configuration
- **Workflow Node Flow Log** — Execution status, time, and data processing details for each node

### Node Log Details

Expand a node (e.g., the **Model** node) to view detailed run information:

| Field | Description |
|-------|-------------|
| Data Processing | Input data received by the node in JSON format, including message history, model provider, model name, etc. |
| Output | Execution result including model reply text and Token usage stats (prompt_tokens, completion_tokens, etc.) |
| Execution Time | Time taken by this node, shown to the right of the node name (e.g., `2.755s`) |

> **Tip:** Node flow logs help identify abnormal nodes. Test various input scenarios thoroughly before publishing.

---

## Publish & Update

After preview verification, click the **Publish** button in the top right:

![Publish Update](/assets/调试发布/对话型业务流-发布更新.png)

| Action | Description |
|--------|-------------|
| Publish Update | Publish the current workflow's latest configuration as the live version; takes effect immediately for live applications |
| Run | Launch the currently published version; redirects to the application run interface |

---

## Run Interface

After clicking **Run**, the application's conversation run interface opens. Users can have a formal conversation with the published AI application here.

![Run Interface](/assets/调试发布/对话型业务流-运行界面.png)

| Area | Description |
|------|-------------|
| Left History | Shows historical conversation records; click **New Conversation** to start a new session |
| Top App Name | Displays the current workflow's name |
| Conversation Settings | Expand to configure conversation-related parameters |
| Central Conversation Area | Shows the complete conversation between the user and the AI |
| Bottom Input Box | Enter a question or request and click Send |

> **Note:** The run interface shows the effect of the published version. To test unpublished changes, use the **Preview** feature.
