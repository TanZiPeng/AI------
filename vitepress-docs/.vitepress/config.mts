import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI Platform Docs',
  description: 'AI Knowledge Intelligence Platform Documentation',
  srcDir: 'docs',
  outDir: 'dist',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      title: 'AI平台说明文档',
      description: '国民AI知识智能平台使用文档',
      themeConfig: {
        nav: [
          { text: '开始使用', link: '/开始使用/介绍' },
          { text: '节点说明', link: '/节点说明/工作流/开始' },
          { text: '知识库', link: '/知识库说明/创建知识库' },
          { text: '知识回收', link: '/知识回收/如何使用' },
          { text: '组织架构', link: '/组织架构说明/用户管理' },
          { text: '词库说明', link: '/词库说明/脱敏词库' },
          { text: '调试发布', link: '/调试发布/我的助手' },
          { text: '系统配置', link: '/系统配置说明/模型配置' },
          { text: '组件说明', link: '/组件说明/组件调用' },
        ],
        sidebar: {
          '/开始使用/': [
            {
              text: '开始使用',
              items: [
                { text: '介绍', link: '/开始使用/介绍' },
                { text: '关键说明', link: '/开始使用/关键说明' },
                {
                  text: '快速入门',
                  items: [
                    { text: '我的助手', link: '/开始使用/快速入门/我的助手-快速入门' },
                    { text: '工作流', link: '/开始使用/快速入门/工作流-快速入门' },
                    { text: '对话型工作流', link: '/开始使用/快速入门/对话型工作流-快速入门' },
                    { text: '知识库', link: '/开始使用/快速入门/知识库-快速入门' },
                    { text: '翻译助手', link: '/开始使用/快速入门/翻译助手快速入门' },
                  ]
                }
              ]
            }
          ],
          '/节点说明/': [
            {
              text: '工作流节点',
              items: [
                { text: '开始', link: '/节点说明/工作流/开始' },
                { text: '模型', link: '/节点说明/工作流/模型' },
                { text: '知识库', link: '/节点说明/工作流/知识库' },
                { text: 'HTTP请求', link: '/节点说明/工作流/HTTP请求' },
                { text: '代码运行', link: '/节点说明/工作流/代码运行' },
                { text: '条件选择', link: '/节点说明/工作流/条件选择' },
                { text: '参数提炼', link: '/节点说明/工作流/参数提炼' },
                { text: '意图识别', link: '/节点说明/工作流/意图识别' },
                { text: '任务循环', link: '/节点说明/工作流/任务循环' },
                { text: '整合输出', link: '/节点说明/工作流/整合输出' },
                { text: '文本提取', link: '/节点说明/工作流/文本提取' },
                { text: '文档拆分', link: '/节点说明/工作流/文档拆分' },
                { text: '执行SQL', link: '/节点说明/工作流/执行SQL' },
                { text: '结束', link: '/节点说明/工作流/结束' },
              ]
            },
            {
              text: '对话工作流节点',
              items: [
                { text: '开始', link: '/节点说明/对话工作流/开始' },
                { text: '模型', link: '/节点说明/对话工作流/模型' },
                { text: '知识库', link: '/节点说明/对话工作流/知识库' },
                { text: 'HTTP请求', link: '/节点说明/对话工作流/HTTP请求' },
                { text: '代码运行', link: '/节点说明/对话工作流/代码运行' },
                { text: '条件选择', link: '/节点说明/对话工作流/条件选择' },
                { text: '变量赋值', link: '/节点说明/对话工作流/变量赋值' },
                { text: '参数提炼', link: '/节点说明/对话工作流/参数提炼' },
                { text: '意图识别', link: '/节点说明/对话工作流/意图识别' },
                { text: '任务循环', link: '/节点说明/对话工作流/任务循环' },
                { text: '整合输出', link: '/节点说明/对话工作流/整合输出' },
                { text: '文本提取', link: '/节点说明/对话工作流/文本提取' },
                { text: '文档拆分', link: '/节点说明/对话工作流/文档拆分' },
                { text: '对话SQL', link: '/节点说明/对话工作流/对话SQL' },
                { text: '直接回复', link: '/节点说明/对话工作流/直接回复' },
                { text: '临时知识库', link: '/节点说明/对话工作流/临时知识库' },
              ]
            }
          ],
          '/知识库说明/': [
            {
              text: '知识库',
              items: [
                { text: '创建知识库', link: '/知识库说明/创建知识库' },
                { text: '知识库配置', link: '/知识库说明/知识库配置' },
                { text: '召回测试', link: '/知识库说明/召回测试' },
                { text: '文件授权', link: '/知识库说明/文件授权' },
              ]
            }
          ],
          '/知识回收/': [
            {
              text: '知识回收',
              items: [
                { text: '如何使用', link: '/知识回收/如何使用' },
                { text: '触发收集', link: '/知识回收/触发收集' },
                { text: '知识审核', link: '/知识回收/知识审核' },
                { text: '知识广场', link: '/知识回收/知识广场' },
              ]
            }
          ],
          '/组织架构说明/': [
            {
              text: '组织架构',
              items: [
                { text: '用户管理', link: '/组织架构说明/用户管理' },
                { text: '部门管理', link: '/组织架构说明/部门管理' },
                { text: '角色权限管理', link: '/组织架构说明/角色权限管理' },
                { text: '公司信息', link: '/组织架构说明/公司信息' },
              ]
            }
          ],
          '/系统配置说明/': [
            {
              text: '系统配置',
              items: [
                { text: '模型配置', link: '/系统配置说明/模型配置' },
                // { text: '页面配置', link: '/系统配置说明/页面配置' },
              ]
            }
          ],
          '/调试发布/': [
            {
              text: '调试发布',
              items: [
                { text: '我的助手', link: '/调试发布/我的助手' },
                { text: '工作流', link: '/调试发布/工作流' },
                { text: '对话型工作流', link: '/调试发布/对话型工作流' },
                { text: '翻译助手', link: '/调试发布/翻译助手' },
              ]
            }
          ],
          '/词库说明/': [
            {
              text: '词库说明',
              items: [
                { text: '脱敏词库', link: '/词库说明/脱敏词库' },
                { text: '语料库', link: '/词库说明/语料库' },
              ]
            }
          ],
          '/组件说明/': [
            {
              text: '组件说明',
              items: [
                { text: '组件中心', link: '/组件说明/组件中心' },
                { text: '创建组件', link: '/组件说明/创建组件' },
                { text: '组件调用', link: '/组件说明/组件调用' },
              ]
            }
          ],
          '/langbot/': [
            {
              text: 'LangBot',
              items: [
                { text: '企业微信', link: '/langbot/wecom' },
              ]
            }
          ],
        },
        search: { provider: 'local' },
        outline: { label: '本页目录' },
        docFooter: { prev: '上一页', next: '下一页' },
        lastUpdated: { text: '最后更新' }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'AI Platform Docs',
      description: 'AI Knowledge Intelligence Platform Documentation',
      themeConfig: {
        nav: [
          { text: 'Getting Started', link: '/en/getting-started/introduction' },
          { text: 'Nodes', link: '/en/nodes/workflow/start' },
          { text: 'Knowledge Base', link: '/en/knowledge-base/create' },
          { text: 'Knowledge Recycling', link: '/en/knowledge-recycling/how-to-use' },
          { text: 'Organization', link: '/en/organization/user-management' },
          { text: 'Glossary', link: '/en/glossary/desensitization' },
          { text: 'Debug & Publish', link: '/en/debug-publish/my-assistant' },
          { text: 'System Config', link: '/en/system-config/model-config' },
          { text: 'Components', link: '/en/components/component-call' },
        ],
        sidebar: {
          '/en/getting-started/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Introduction', link: '/en/getting-started/introduction' },
                { text: 'Key Concepts', link: '/en/getting-started/key-concepts' },
                {
                  text: 'Quick Start',
                  items: [
                    { text: 'My Assistant', link: '/en/getting-started/quick-start/my-assistant' },
                    { text: 'Workflow', link: '/en/getting-started/quick-start/workflow' },
                    { text: 'Conversational Workflow', link: '/en/getting-started/quick-start/conversational-workflow' },
                    { text: 'Knowledge Base', link: '/en/getting-started/quick-start/knowledge-base' },
                    { text: 'Translation Assistant', link: '/en/getting-started/quick-start/translation-assistant' },
                  ]
                }
              ]
            }
          ],
          '/en/nodes/': [
            {
              text: 'Workflow Nodes',
              items: [
                { text: 'Start', link: '/en/nodes/workflow/start' },
                { text: 'Model', link: '/en/nodes/workflow/model' },
                { text: 'Knowledge Base', link: '/en/nodes/workflow/knowledge-base' },
                { text: 'HTTP Request', link: '/en/nodes/workflow/http-request' },
                { text: 'Code Execution', link: '/en/nodes/workflow/code-execution' },
                { text: 'Condition', link: '/en/nodes/workflow/condition' },
                { text: 'Parameter Extraction', link: '/en/nodes/workflow/parameter-extraction' },
                { text: 'Intent Recognition', link: '/en/nodes/workflow/intent-recognition' },
                { text: 'Task Loop', link: '/en/nodes/workflow/task-loop' },
                { text: 'Merge Output', link: '/en/nodes/workflow/merge-output' },
                { text: 'Text Extraction', link: '/en/nodes/workflow/text-extraction' },
                { text: 'Document Split', link: '/en/nodes/workflow/document-split' },
                { text: 'Execute SQL', link: '/en/nodes/workflow/execute-sql' },
                { text: 'End', link: '/en/nodes/workflow/end' },
              ]
            },
            {
              text: 'Conversational Workflow Nodes',
              items: [
                { text: 'Start', link: '/en/nodes/conversational-workflow/start' },
                { text: 'Model', link: '/en/nodes/conversational-workflow/model' },
                { text: 'Knowledge Base', link: '/en/nodes/conversational-workflow/knowledge-base' },
                { text: 'HTTP Request', link: '/en/nodes/conversational-workflow/http-request' },
                { text: 'Code Execution', link: '/en/nodes/conversational-workflow/code-execution' },
                { text: 'Condition', link: '/en/nodes/conversational-workflow/condition' },
                { text: 'Variable Assignment', link: '/en/nodes/conversational-workflow/variable-assignment' },
                { text: 'Parameter Extraction', link: '/en/nodes/conversational-workflow/parameter-extraction' },
                { text: 'Intent Recognition', link: '/en/nodes/conversational-workflow/intent-recognition' },
                { text: 'Task Loop', link: '/en/nodes/conversational-workflow/task-loop' },
                { text: 'Merge Output', link: '/en/nodes/conversational-workflow/merge-output' },
                { text: 'Text Extraction', link: '/en/nodes/conversational-workflow/text-extraction' },
                { text: 'Document Split', link: '/en/nodes/conversational-workflow/document-split' },
                { text: 'Conversational SQL', link: '/en/nodes/conversational-workflow/conversational-sql' },
                { text: 'Direct Reply', link: '/en/nodes/conversational-workflow/direct-reply' },
                { text: 'Temporary Knowledge Base', link: '/en/nodes/conversational-workflow/temporary-knowledge-base' },
              ]
            }
          ],
          '/en/knowledge-base/': [
            {
              text: 'Knowledge Base',
              items: [
                { text: 'Create Knowledge Base', link: '/en/knowledge-base/create' },
                { text: 'Configuration', link: '/en/knowledge-base/configuration' },
                { text: 'Recall Testing', link: '/en/knowledge-base/recall-testing' },
                { text: 'File Authorization', link: '/en/knowledge-base/file-authorization' },
              ]
            }
          ],
          '/en/knowledge-recycling/': [
            {
              text: 'Knowledge Recycling',
              items: [
                { text: 'How to Use', link: '/en/knowledge-recycling/how-to-use' },
                { text: 'Trigger Collection', link: '/en/knowledge-recycling/trigger-collection' },
                { text: 'Knowledge Review', link: '/en/knowledge-recycling/knowledge-review' },
                { text: 'Knowledge Square', link: '/en/knowledge-recycling/knowledge-square' },
              ]
            }
          ],
          '/en/organization/': [
            {
              text: 'Organization',
              items: [
                { text: 'User Management', link: '/en/organization/user-management' },
                { text: 'Department Management', link: '/en/organization/department-management' },
                { text: 'Role & Permission', link: '/en/organization/role-permission' },
                { text: 'Company Info', link: '/en/organization/company-info' },
              ]
            }
          ],
          '/en/system-config/': [
            {
              text: 'System Config',
              items: [
                { text: 'Model Config', link: '/en/system-config/model-config' },
              ]
            }
          ],
          '/en/debug-publish/': [
            {
              text: 'Debug & Publish',
              items: [
                { text: 'My Assistant', link: '/en/debug-publish/my-assistant' },
                { text: 'Workflow', link: '/en/debug-publish/workflow' },
                { text: 'Conversational Workflow', link: '/en/debug-publish/conversational-workflow' },
                { text: 'Translation Assistant', link: '/en/debug-publish/translation-assistant' },
              ]
            }
          ],
          '/en/glossary/': [
            {
              text: 'Glossary',
              items: [
                { text: 'Desensitization Glossary', link: '/en/glossary/desensitization' },
                { text: 'Corpus', link: '/en/glossary/corpus' },
              ]
            }
          ],
          '/en/components/': [
            {
              text: 'Components',
              items: [
                { text: 'Component Center', link: '/en/components/component-center' },
                { text: 'Create Component', link: '/en/components/create-component' },
                { text: 'Component Call', link: '/en/components/component-call' },
              ]
            }
          ],
        },
        search: { provider: 'local' },
        outline: { label: 'On this page' },
        docFooter: { prev: 'Previous', next: 'Next' },
        lastUpdated: { text: 'Last updated' }
      }
    }
  },

  themeConfig: {
    logo: '/favicon.ico',
  }
})
