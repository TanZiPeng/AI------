# Condition Node

## Definition

The Condition node evaluates upstream variable values and automatically routes the flow to different branches. It supports multi-level `IF` / `ELIF` / `ELSE` logic and is the core branching node in a workflow.

---

## Node Behavior

### Branch Execution

The Condition node evaluates branches in order:

| Order | Condition | Result |
|-------|-----------|--------|
| 1 | IF condition is `True` | Execute IF branch |
| 2 | IF is `False`, ELIF exists | Evaluate each ELIF in order |
| 3 | An ELIF condition is `True` | Execute that ELIF branch |
| 4 | All IF / ELIF are `False` | Execute ELSE branch |

> Only one branch is executed per run. Conditions are matched top-to-bottom.

---

### Condition Types

#### String

| Condition | Description |
|-----------|-------------|
| Contains | Variable value contains the specified string |
| Does not contain | Variable value does not contain the specified string |
| Starts with | Variable value starts with the specified string |
| Ends with | Variable value ends with the specified string |
| Is | Variable value exactly matches the specified string |
| Is not | Variable value does not match the specified string |
| Is empty | Variable value is an empty string or null |
| Is not empty | Variable value is not empty |

#### Number

| Condition | Description |
|-----------|-------------|
| Equals | Equal to the specified value |
| Not equals | Not equal to the specified value |
| Greater than | Greater than the specified value |
| Less than | Less than the specified value |
| Greater than or equal | Greater than or equal to the specified value |
| Less than or equal | Less than or equal to the specified value |
| Is empty | Variable value is null |
| Is not empty | Variable value is not null |

---

### Multiple Condition Combinations

A single branch can have multiple conditions combined with logical operators:

- **AND** — All conditions must be true (intersection)
- **OR** — Any condition being true is sufficient (union)

Useful for fine-grained control in complex business scenarios.

---

## Use Case

### Customer Service Response Routing

The example below shows a typical Condition node configuration for a **customer service flow**:

![Condition Node Example](/assets/条件选择/条件选择1.png)

**Condition setup:**

- **IF**: `conversation_id` from the parameter extraction node is **not empty**
- **AND**: `conversation_id` **equals** `createworkorder`
- **ELIF**: `conversation_id` is **not empty**

**Branch logic:**

1. Only IF is satisfied (`conversation_id` not empty) → Execute **CASE1**, retrieve conversation history
2. Both IF and AND are satisfied → Execute **CASE2**, proceed directly to issue analysis
3. None of the above → Execute **ELSE**, perform intent recognition on the question
