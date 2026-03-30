# How to Use Recycled Knowledge

## Assistant Applications

The output of Knowledge Recycling is equivalent to a **private knowledge base**. Go to the **My Assistant** application's parameter settings page and bind the knowledge base to the corresponding assistant.

![Knowledge Recycling - Bind Knowledge Base](/assets/知识回收/知识回收-6.png)

After binding, when a user's question matches a recycled Q&A pair via rerank and embedding, the system will reply directly with the corresponding Q&A content.

---

## Conversational Workflow

Each conversational workflow Agent can **only bind its own knowledge recycling library** — it cannot bind another Agent's library.

Steps:

1. Open the orchestration page of the corresponding workflow
2. Enable the **Annotation Reply** feature in the function bar

![Knowledge Recycling - Annotation Reply](/assets/知识回收/知识回收-7.png)

---

## Parameters

| Parameter | Description |
|-----------|-------------|
| Embedding Model | Bind the corresponding vectorization model based on your use case |
| Score Threshold | Controls matching precision; a threshold of `1` means exact match; lower values allow looser matching |
