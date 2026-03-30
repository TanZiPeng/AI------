# Key Concepts

Understanding these core concepts will help you get the most out of the AI Platform.

---

## Application Types

The platform supports four types of AI applications, each suited to different scenarios:

| Type | Description | Best For |
|------|-------------|----------|
| **My Assistant** | Conversational Q&A application with multi-turn dialogue | Customer service, knowledge Q&A, business assistants |
| **Workflow** | Single-run automated task pipeline | Document processing, content generation, data transformation |
| **Conversational Workflow** | Multi-turn dialogue with visual process orchestration | Complex business processes, guided task execution |
| **Translation Assistant** | Specialized text translation with glossary management | Document translation, terminology-consistent localization |

---

## Nodes

Nodes are the building blocks of workflows and conversational workflows. Each node performs a specific function, and nodes are connected together on a canvas to form a complete process.

**Common node types:**

- **Start** — Entry point; receives user input and injects system variables
- **Model** — Calls a large language model to process input and generate output
- **Knowledge Base** — Retrieves relevant text segments from a private knowledge base
- **Condition** — Routes the flow to different branches based on variable values
- **Code Execution** — Runs custom Python or NodeJS logic
- **HTTP Request** — Calls external APIs or services
- **End / Direct Reply** — Terminates the flow and outputs the final result

---

## Variables

Variables carry data between nodes. There are several variable types:

| Type | Description |
|------|-------------|
| **System Variables** | Automatically injected by the platform (e.g., `sys.query`, `sys.user_id`) |
| **Input Variables** | Defined on the Start node; collected from the user before the flow runs |
| **Node Output Variables** | Produced by each node after execution; referenced by downstream nodes |
| **Session Variables** | Persist across turns in a conversational workflow (Chatflow only) |

---

## Knowledge Base

The knowledge base is a RAG (Retrieval-Augmented Generation) module. You upload documents, the platform chunks and vectorizes them, and at runtime the system retrieves the most relevant segments to inject into the model's context — enabling accurate, document-grounded answers.

Key settings:
- **Embedding Model** — Converts text to vectors for semantic search
- **Retrieval Mode** — Vector search, full-text search, or hybrid
- **Top K** — Number of segments to return
- **Score Thresholimum similarity score to include a segment
- **Rerank Model** — Re-ranks retrieved results for higher precision

---

## Prompt

A prompt is the instruction given to a large language model to define its behavior, role, and output format. Prompts can reference upstream node variables using `{{ variable }}` syntax, allowing dynamic, context-aware instructions.

---

## Components

Components are reusable capabilities that can be plugged into applications. They include:

- **Built-in components** — Platform-provided integrations (e.g., Google Search, Bing)
- **Custom components** — User-defined HTTP services described via OpenAPI Schema
- **Published workflows** — A workflow published as a component, callable from other flows

---

## Knowledge Recycling

Knowledge Recycling is a feedback loop that turns high-quality conversation answers into reusable knowledge. Users thumbs-up good answers during conversations; the platform collects them nightly, and administrators review and approve them into a QA knowledge base that improves future responses.

---

## Glossary

The glossary module controls how specific terms are translated in the Translation Assistant:

- **Corpus** — Maps source terms to fixed transls (e.g., "药理学" → "pharmacology")
- **Desensitization Glossary** — Replaces sensitive content with placeholders before sending to the model, then restores the original after translation
