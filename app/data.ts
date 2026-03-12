export const turnData = {
  fact_id: 'c87f47e682873725c6216117af35a3ec',
  num_turns: 1,
  start_time: '2026-03-11T05:50:22.161561Z',
  end_time: '2026-03-11T05:57:40.369212Z',
  turn_ids: [
    {
      ea267d2b1d937bf96fffe2d511e8463: {
        start_time: '2026-03-11T05:50:22.161561Z',
        end_time: '2026-03-11T05:57:40.369212Z',
        trace_id: 'c87f47e682873725c6216117af35a3ec'
      }
    }
  ]
};

export const turnChildrenData = {
  graph_metadata: {
    fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
    num_turns: 1,
    start_time: '2026-03-11T05:50:22.669478+00:00',
    end_time: '2026-03-11T05:57:40.369118+00:00',
    turn_ids: ['ea267d2b1d937bf96fffe2d511e8463'],
    span_count: 42,
    total_errors: 0,
    error_turn_count: 0,
    overall_status: 'OK',
    status_count_ok: 42,
    token_total_tokens: 153969,
    agents_involved: [
      'general_analysis_agent',
      'okahu_sre_agent',
      'output_processor',
      'router_agent'
    ],
    agents_involved_count: 4,
    tools_involved: ['get_app_error_groups', 'get_apps', 'transfer_to_agent'],
    tools_involved_count: 3
  },
  nodes: [
    {
      id: 'query:ea267d2b1d937bf96fffe2d511e8463:0',
      type: 'turn',
      name: 'ea267d2b1d937bf96fffe2d511e8463',
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_index: 0,
      metadata: {},
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'e6776026a07d0f79',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'e6776026a07d0f79',
        field: 'end_time'
      },
      user_input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'e6776026a07d0f79',
        field: 'events.data.input'
      },
      agent_output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'e6776026a07d0f79',
        field: 'events.data.output'
      },
      prev_output: null,
      status: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'e6776026a07d0f79',
        field: 'status'
      }
    },
    {
      id: 'agent:ea267d2b1d937bf96fffe2d511e8463:0:okahu_sre_agent',
      type: 'agent',
      name: 'okahu_sre_agent',
      framework: 'agent.adk',
      metadata: {},
      system_prompt: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '3c2b9d45dc89a42a',
        field: null
      }
    },
    {
      id: 'agent:ea267d2b1d937bf96fffe2d511e8463:0:router_agent',
      type: 'agent',
      name: 'router_agent',
      framework: 'agent.adk',
      metadata: {},
      system_prompt: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'f2038ee2a4d35643',
        field: 'events.data.input'
      }
    },
    {
      id: 'agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      type: 'agent',
      name: 'general_analysis_agent',
      framework: 'agent.adk',
      metadata: {},
      system_prompt: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '1ab8e7d166af349b',
        field: 'events.data.input'
      }
    },
    {
      id: 'agent:ea267d2b1d937bf96fffe2d511e8463:0:output_processor',
      type: 'agent',
      name: 'output_processor',
      framework: 'agent.adk',
      metadata: {},
      system_prompt: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'b9a39edde13f8e76',
        field: 'events.data.input'
      }
    },
    {
      id: 'tool:ea267d2b1d937bf96fffe2d511e8463:0:transfer_to_agent:agentic.tool.invocation',
      type: 'tool',
      name: 'transfer_to_agent',
      framework: 'tool.adk',
      metadata: {},
      description: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '190f85eaab49a3da',
        field: 'entity.1.description'
      }
    },
    {
      id: 'tool:ea267d2b1d937bf96fffe2d511e8463:0:get_apps:agentic.tool.invocation',
      type: 'tool',
      name: 'get_apps',
      framework: 'tool.adk',
      metadata: {},
      description: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'f35943d09d930a83',
        field: 'entity.1.description'
      }
    },
    {
      id: 'tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      type: 'tool',
      name: 'get_app_error_groups',
      framework: 'tool.adk',
      metadata: {},
      description: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'd1e23ff58852c7e9',
        field: 'entity.1.description'
      }
    }
  ],
  edges: [
    {
      id: 'edge:invokes:ea267d2b1d937bf96fffe2d511e8463:0',
      edge_type: 'INVOKES',
      edge_label: 'INVOKES',
      from_node: 'query:ea267d2b1d937bf96fffe2d511e8463:0',
      to_node: 'agent:ea267d2b1d937bf96fffe2d511e8463:0:okahu_sre_agent',
      step_number: 1,
      context_id: null,
      parent_context_id: null,
      parent_edge_id: null,
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'e6776026a07d0f79',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'e6776026a07d0f79',
        field: 'end_time'
      },
      token_summary: null,
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'e6776026a07d0f79',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'e6776026a07d0f79',
        field: 'events.data.output'
      },
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_index: 0
    },
    {
      id: 'edge:uses_tool:ea267d2b1d937bf96fffe2d511e8463:190f85eaab49a3da:tool:ea267d2b1d937bf96fffe2d511e8463:0:transfer_to_agent:agentic.tool.invocation',
      edge_type: 'USES_TOOL',
      edge_label: 'USES_TOOL_ctx_1(Step 3)',
      from_node: 'agent:ea267d2b1d937bf96fffe2d511e8463:0:router_agent',
      to_node:
        'tool:ea267d2b1d937bf96fffe2d511e8463:0:transfer_to_agent:agentic.tool.invocation',
      step_number: 3,
      context_id: 'ctx_1',
      parent_context_id: 'ctx_1',
      parent_edge_id:
        'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:3c2b9d45dc89a42a:agent:ea267d2b1d937bf96fffe2d511e8463:0:router_agent',
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '190f85eaab49a3da',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '190f85eaab49a3da',
        field: 'end_time'
      },
      token_summary: null,
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      tool_name: 'transfer_to_agent',
      span_refs: {
        anchor: '441f1ca76041eb10',
        tool: '190f85eaab49a3da'
      },
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '190f85eaab49a3da',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '190f85eaab49a3da',
        field: 'events.data.output'
      },
      decision: {
        span_id: 'f2038ee2a4d35643',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'f2038ee2a4d35643',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'f2038ee2a4d35643',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'f2038ee2a4d35643',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'f2038ee2a4d35643',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'f2038ee2a4d35643',
          field: 'events.data.output'
        },
        reasoning: null
      },
      execution: {
        span_id: '190f85eaab49a3da',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '190f85eaab49a3da',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '190f85eaab49a3da',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '190f85eaab49a3da',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '190f85eaab49a3da',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '190f85eaab49a3da',
          field: 'events.data.output'
        }
      },
      receipt: {
        span_id: '441f1ca76041eb10',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '441f1ca76041eb10',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '441f1ca76041eb10',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '441f1ca76041eb10',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '441f1ca76041eb10',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '441f1ca76041eb10',
          field: 'events.data.output'
        }
      }
    },
    {
      id: 'edge:uses_tool:ea267d2b1d937bf96fffe2d511e8463:f35943d09d930a83:tool:ea267d2b1d937bf96fffe2d511e8463:0:get_apps:agentic.tool.invocation',
      edge_type: 'USES_TOOL',
      edge_label: 'USES_TOOL_ctx_2(Step 5)',
      from_node:
        'agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      to_node:
        'tool:ea267d2b1d937bf96fffe2d511e8463:0:get_apps:agentic.tool.invocation',
      step_number: 5,
      context_id: 'ctx_2',
      parent_context_id: 'ctx_2',
      parent_edge_id:
        'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:441f1ca76041eb10:agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'f35943d09d930a83',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'f35943d09d930a83',
        field: 'end_time'
      },
      token_summary: null,
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      tool_name: 'get_apps',
      span_refs: {
        anchor: '17e4535a09bc080d',
        tool: 'f35943d09d930a83'
      },
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'f35943d09d930a83',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'f35943d09d930a83',
        field: 'events.data.output'
      },
      decision: {
        span_id: '9a42c17c13ea59fa',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.output'
        },
        reasoning: null
      },
      execution: {
        span_id: 'f35943d09d930a83',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'f35943d09d930a83',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'f35943d09d930a83',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'f35943d09d930a83',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'f35943d09d930a83',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'f35943d09d930a83',
          field: 'events.data.output'
        }
      },
      receipt: {
        span_id: '17e4535a09bc080d',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.output'
        }
      }
    },
    {
      id: 'edge:uses_tool:ea267d2b1d937bf96fffe2d511e8463:d1e23ff58852c7e9:tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      edge_type: 'USES_TOOL',
      edge_label: 'USES_TOOL_ctx_2(Step 6)',
      from_node:
        'agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      to_node:
        'tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      step_number: 6,
      context_id: 'ctx_2',
      parent_context_id: 'ctx_2',
      parent_edge_id:
        'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:441f1ca76041eb10:agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'd1e23ff58852c7e9',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'd1e23ff58852c7e9',
        field: 'end_time'
      },
      token_summary: null,
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      tool_name: 'get_app_error_groups',
      span_refs: {
        anchor: '17e4535a09bc080d',
        tool: 'd1e23ff58852c7e9'
      },
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'd1e23ff58852c7e9',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'd1e23ff58852c7e9',
        field: 'events.data.output'
      },
      decision: {
        span_id: '9a42c17c13ea59fa',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.output'
        },
        reasoning: null
      },
      execution: {
        span_id: 'd1e23ff58852c7e9',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'd1e23ff58852c7e9',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'd1e23ff58852c7e9',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'd1e23ff58852c7e9',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'd1e23ff58852c7e9',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'd1e23ff58852c7e9',
          field: 'events.data.output'
        }
      },
      receipt: {
        span_id: '17e4535a09bc080d',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.output'
        }
      }
    },
    {
      id: 'edge:uses_tool:ea267d2b1d937bf96fffe2d511e8463:1747c43c42f22d5a:tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      edge_type: 'USES_TOOL',
      edge_label: 'USES_TOOL_ctx_2(Step 7)',
      from_node:
        'agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      to_node:
        'tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      step_number: 7,
      context_id: 'ctx_2',
      parent_context_id: 'ctx_2',
      parent_edge_id:
        'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:441f1ca76041eb10:agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '1747c43c42f22d5a',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '1747c43c42f22d5a',
        field: 'end_time'
      },
      token_summary: null,
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      tool_name: 'get_app_error_groups',
      span_refs: {
        anchor: '17e4535a09bc080d',
        tool: '1747c43c42f22d5a'
      },
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '1747c43c42f22d5a',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '1747c43c42f22d5a',
        field: 'events.data.output'
      },
      decision: {
        span_id: '9a42c17c13ea59fa',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.output'
        },
        reasoning: null
      },
      execution: {
        span_id: '1747c43c42f22d5a',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '1747c43c42f22d5a',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '1747c43c42f22d5a',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '1747c43c42f22d5a',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '1747c43c42f22d5a',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '1747c43c42f22d5a',
          field: 'events.data.output'
        }
      },
      receipt: {
        span_id: '17e4535a09bc080d',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.output'
        }
      }
    },
    {
      id: 'edge:uses_tool:ea267d2b1d937bf96fffe2d511e8463:baf2ced2cd08c77b:tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      edge_type: 'USES_TOOL',
      edge_label: 'USES_TOOL_ctx_2(Step 8)',
      from_node:
        'agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      to_node:
        'tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      step_number: 8,
      context_id: 'ctx_2',
      parent_context_id: 'ctx_2',
      parent_edge_id:
        'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:441f1ca76041eb10:agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'baf2ced2cd08c77b',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'baf2ced2cd08c77b',
        field: 'end_time'
      },
      token_summary: null,
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      tool_name: 'get_app_error_groups',
      span_refs: {
        anchor: '17e4535a09bc080d',
        tool: 'baf2ced2cd08c77b'
      },
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'baf2ced2cd08c77b',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'baf2ced2cd08c77b',
        field: 'events.data.output'
      },
      decision: {
        span_id: '9a42c17c13ea59fa',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.output'
        },
        reasoning: null
      },
      execution: {
        span_id: 'baf2ced2cd08c77b',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'baf2ced2cd08c77b',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'baf2ced2cd08c77b',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'baf2ced2cd08c77b',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'baf2ced2cd08c77b',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'baf2ced2cd08c77b',
          field: 'events.data.output'
        }
      },
      receipt: {
        span_id: '17e4535a09bc080d',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.output'
        }
      }
    },
    {
      id: 'edge:uses_tool:ea267d2b1d937bf96fffe2d511e8463:ffe2c8abc677a443:tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      edge_type: 'USES_TOOL',
      edge_label: 'USES_TOOL_ctx_2(Step 9)',
      from_node:
        'agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      to_node:
        'tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      step_number: 9,
      context_id: 'ctx_2',
      parent_context_id: 'ctx_2',
      parent_edge_id:
        'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:441f1ca76041eb10:agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'ffe2c8abc677a443',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'ffe2c8abc677a443',
        field: 'end_time'
      },
      token_summary: null,
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      tool_name: 'get_app_error_groups',
      span_refs: {
        anchor: '17e4535a09bc080d',
        tool: 'ffe2c8abc677a443'
      },
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'ffe2c8abc677a443',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'ffe2c8abc677a443',
        field: 'events.data.output'
      },
      decision: {
        span_id: '9a42c17c13ea59fa',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.output'
        },
        reasoning: null
      },
      execution: {
        span_id: 'ffe2c8abc677a443',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'ffe2c8abc677a443',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'ffe2c8abc677a443',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'ffe2c8abc677a443',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'ffe2c8abc677a443',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'ffe2c8abc677a443',
          field: 'events.data.output'
        }
      },
      receipt: {
        span_id: '17e4535a09bc080d',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.output'
        }
      }
    },
    {
      id: 'edge:uses_tool:ea267d2b1d937bf96fffe2d511e8463:67b25961221e72b6:tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      edge_type: 'USES_TOOL',
      edge_label: 'USES_TOOL_ctx_2(Step 10)',
      from_node:
        'agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      to_node:
        'tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      step_number: 10,
      context_id: 'ctx_2',
      parent_context_id: 'ctx_2',
      parent_edge_id:
        'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:441f1ca76041eb10:agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '67b25961221e72b6',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '67b25961221e72b6',
        field: 'end_time'
      },
      token_summary: null,
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      tool_name: 'get_app_error_groups',
      span_refs: {
        anchor: '17e4535a09bc080d',
        tool: '67b25961221e72b6'
      },
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '67b25961221e72b6',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '67b25961221e72b6',
        field: 'events.data.output'
      },
      decision: {
        span_id: '9a42c17c13ea59fa',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.output'
        },
        reasoning: null
      },
      execution: {
        span_id: '67b25961221e72b6',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '67b25961221e72b6',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '67b25961221e72b6',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '67b25961221e72b6',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '67b25961221e72b6',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '67b25961221e72b6',
          field: 'events.data.output'
        }
      },
      receipt: {
        span_id: '17e4535a09bc080d',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.output'
        }
      }
    },
    {
      id: 'edge:uses_tool:ea267d2b1d937bf96fffe2d511e8463:b7dd5bfb8c5b1d44:tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      edge_type: 'USES_TOOL',
      edge_label: 'USES_TOOL_ctx_2(Step 11)',
      from_node:
        'agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      to_node:
        'tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      step_number: 11,
      context_id: 'ctx_2',
      parent_context_id: 'ctx_2',
      parent_edge_id:
        'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:441f1ca76041eb10:agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'b7dd5bfb8c5b1d44',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'b7dd5bfb8c5b1d44',
        field: 'end_time'
      },
      token_summary: null,
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      tool_name: 'get_app_error_groups',
      span_refs: {
        anchor: '17e4535a09bc080d',
        tool: 'b7dd5bfb8c5b1d44'
      },
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'b7dd5bfb8c5b1d44',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'b7dd5bfb8c5b1d44',
        field: 'events.data.output'
      },
      decision: {
        span_id: '9a42c17c13ea59fa',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.output'
        },
        reasoning: null
      },
      execution: {
        span_id: 'b7dd5bfb8c5b1d44',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'b7dd5bfb8c5b1d44',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'b7dd5bfb8c5b1d44',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'b7dd5bfb8c5b1d44',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'b7dd5bfb8c5b1d44',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'b7dd5bfb8c5b1d44',
          field: 'events.data.output'
        }
      },
      receipt: {
        span_id: '17e4535a09bc080d',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.output'
        }
      }
    },
    {
      id: 'edge:uses_tool:ea267d2b1d937bf96fffe2d511e8463:4bd82345aef580be:tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      edge_type: 'USES_TOOL',
      edge_label: 'USES_TOOL_ctx_2(Step 12)',
      from_node:
        'agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      to_node:
        'tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      step_number: 12,
      context_id: 'ctx_2',
      parent_context_id: 'ctx_2',
      parent_edge_id:
        'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:441f1ca76041eb10:agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '4bd82345aef580be',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '4bd82345aef580be',
        field: 'end_time'
      },
      token_summary: null,
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      tool_name: 'get_app_error_groups',
      span_refs: {
        anchor: '17e4535a09bc080d',
        tool: '4bd82345aef580be'
      },
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '4bd82345aef580be',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '4bd82345aef580be',
        field: 'events.data.output'
      },
      decision: {
        span_id: '9a42c17c13ea59fa',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.output'
        },
        reasoning: null
      },
      execution: {
        span_id: '4bd82345aef580be',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '4bd82345aef580be',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '4bd82345aef580be',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '4bd82345aef580be',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '4bd82345aef580be',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '4bd82345aef580be',
          field: 'events.data.output'
        }
      },
      receipt: {
        span_id: '17e4535a09bc080d',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.output'
        }
      }
    },
    {
      id: 'edge:uses_tool:ea267d2b1d937bf96fffe2d511e8463:887485e2fcd5ab2c:tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      edge_type: 'USES_TOOL',
      edge_label: 'USES_TOOL_ctx_2(Step 13)',
      from_node:
        'agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      to_node:
        'tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      step_number: 13,
      context_id: 'ctx_2',
      parent_context_id: 'ctx_2',
      parent_edge_id:
        'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:441f1ca76041eb10:agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '887485e2fcd5ab2c',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '887485e2fcd5ab2c',
        field: 'end_time'
      },
      token_summary: null,
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      tool_name: 'get_app_error_groups',
      span_refs: {
        anchor: '17e4535a09bc080d',
        tool: '887485e2fcd5ab2c'
      },
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '887485e2fcd5ab2c',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '887485e2fcd5ab2c',
        field: 'events.data.output'
      },
      decision: {
        span_id: '9a42c17c13ea59fa',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.output'
        },
        reasoning: null
      },
      execution: {
        span_id: '887485e2fcd5ab2c',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '887485e2fcd5ab2c',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '887485e2fcd5ab2c',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '887485e2fcd5ab2c',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '887485e2fcd5ab2c',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '887485e2fcd5ab2c',
          field: 'events.data.output'
        }
      },
      receipt: {
        span_id: '17e4535a09bc080d',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.output'
        }
      }
    },
    {
      id: 'edge:uses_tool:ea267d2b1d937bf96fffe2d511e8463:4cd40bc56994fd24:tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      edge_type: 'USES_TOOL',
      edge_label: 'USES_TOOL_ctx_2(Step 14)',
      from_node:
        'agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      to_node:
        'tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      step_number: 14,
      context_id: 'ctx_2',
      parent_context_id: 'ctx_2',
      parent_edge_id:
        'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:441f1ca76041eb10:agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '4cd40bc56994fd24',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '4cd40bc56994fd24',
        field: 'end_time'
      },
      token_summary: null,
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      tool_name: 'get_app_error_groups',
      span_refs: {
        anchor: '17e4535a09bc080d',
        tool: '4cd40bc56994fd24'
      },
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '4cd40bc56994fd24',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '4cd40bc56994fd24',
        field: 'events.data.output'
      },
      decision: {
        span_id: '9a42c17c13ea59fa',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.output'
        },
        reasoning: null
      },
      execution: {
        span_id: '4cd40bc56994fd24',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '4cd40bc56994fd24',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '4cd40bc56994fd24',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '4cd40bc56994fd24',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '4cd40bc56994fd24',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '4cd40bc56994fd24',
          field: 'events.data.output'
        }
      },
      receipt: {
        span_id: '17e4535a09bc080d',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.output'
        }
      }
    },
    {
      id: 'edge:uses_tool:ea267d2b1d937bf96fffe2d511e8463:3126d050fb8ac1fa:tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      edge_type: 'USES_TOOL',
      edge_label: 'USES_TOOL_ctx_2(Step 15)',
      from_node:
        'agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      to_node:
        'tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      step_number: 15,
      context_id: 'ctx_2',
      parent_context_id: 'ctx_2',
      parent_edge_id:
        'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:441f1ca76041eb10:agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '3126d050fb8ac1fa',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '3126d050fb8ac1fa',
        field: 'end_time'
      },
      token_summary: null,
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      tool_name: 'get_app_error_groups',
      span_refs: {
        anchor: '17e4535a09bc080d',
        tool: '3126d050fb8ac1fa'
      },
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '3126d050fb8ac1fa',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '3126d050fb8ac1fa',
        field: 'events.data.output'
      },
      decision: {
        span_id: '9a42c17c13ea59fa',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.output'
        },
        reasoning: null
      },
      execution: {
        span_id: '3126d050fb8ac1fa',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3126d050fb8ac1fa',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3126d050fb8ac1fa',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3126d050fb8ac1fa',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3126d050fb8ac1fa',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3126d050fb8ac1fa',
          field: 'events.data.output'
        }
      },
      receipt: {
        span_id: '17e4535a09bc080d',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.output'
        }
      }
    },
    {
      id: 'edge:uses_tool:ea267d2b1d937bf96fffe2d511e8463:c19bb3fee55a9953:tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      edge_type: 'USES_TOOL',
      edge_label: 'USES_TOOL_ctx_2(Step 16)',
      from_node:
        'agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      to_node:
        'tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      step_number: 16,
      context_id: 'ctx_2',
      parent_context_id: 'ctx_2',
      parent_edge_id:
        'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:441f1ca76041eb10:agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'c19bb3fee55a9953',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'c19bb3fee55a9953',
        field: 'end_time'
      },
      token_summary: null,
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      tool_name: 'get_app_error_groups',
      span_refs: {
        anchor: '17e4535a09bc080d',
        tool: 'c19bb3fee55a9953'
      },
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'c19bb3fee55a9953',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'c19bb3fee55a9953',
        field: 'events.data.output'
      },
      decision: {
        span_id: '9a42c17c13ea59fa',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.output'
        },
        reasoning: null
      },
      execution: {
        span_id: 'c19bb3fee55a9953',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'c19bb3fee55a9953',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'c19bb3fee55a9953',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'c19bb3fee55a9953',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'c19bb3fee55a9953',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'c19bb3fee55a9953',
          field: 'events.data.output'
        }
      },
      receipt: {
        span_id: '17e4535a09bc080d',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.output'
        }
      }
    },
    {
      id: 'edge:uses_tool:ea267d2b1d937bf96fffe2d511e8463:4a5b6c97e4aacab5:tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      edge_type: 'USES_TOOL',
      edge_label: 'USES_TOOL_ctx_2(Step 17)',
      from_node:
        'agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      to_node:
        'tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      step_number: 17,
      context_id: 'ctx_2',
      parent_context_id: 'ctx_2',
      parent_edge_id:
        'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:441f1ca76041eb10:agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '4a5b6c97e4aacab5',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '4a5b6c97e4aacab5',
        field: 'end_time'
      },
      token_summary: null,
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      tool_name: 'get_app_error_groups',
      span_refs: {
        anchor: '17e4535a09bc080d',
        tool: '4a5b6c97e4aacab5'
      },
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '4a5b6c97e4aacab5',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '4a5b6c97e4aacab5',
        field: 'events.data.output'
      },
      decision: {
        span_id: '9a42c17c13ea59fa',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.output'
        },
        reasoning: null
      },
      execution: {
        span_id: '4a5b6c97e4aacab5',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '4a5b6c97e4aacab5',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '4a5b6c97e4aacab5',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '4a5b6c97e4aacab5',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '4a5b6c97e4aacab5',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '4a5b6c97e4aacab5',
          field: 'events.data.output'
        }
      },
      receipt: {
        span_id: '17e4535a09bc080d',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.output'
        }
      }
    },
    {
      id: 'edge:uses_tool:ea267d2b1d937bf96fffe2d511e8463:df054347929246cd:tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      edge_type: 'USES_TOOL',
      edge_label: 'USES_TOOL_ctx_2(Step 18)',
      from_node:
        'agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      to_node:
        'tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      step_number: 18,
      context_id: 'ctx_2',
      parent_context_id: 'ctx_2',
      parent_edge_id:
        'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:441f1ca76041eb10:agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'df054347929246cd',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'df054347929246cd',
        field: 'end_time'
      },
      token_summary: null,
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      tool_name: 'get_app_error_groups',
      span_refs: {
        anchor: '17e4535a09bc080d',
        tool: 'df054347929246cd'
      },
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'df054347929246cd',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'df054347929246cd',
        field: 'events.data.output'
      },
      decision: {
        span_id: '9a42c17c13ea59fa',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.output'
        },
        reasoning: null
      },
      execution: {
        span_id: 'df054347929246cd',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'df054347929246cd',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'df054347929246cd',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'df054347929246cd',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'df054347929246cd',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'df054347929246cd',
          field: 'events.data.output'
        }
      },
      receipt: {
        span_id: '17e4535a09bc080d',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.output'
        }
      }
    },
    {
      id: 'edge:uses_tool:ea267d2b1d937bf96fffe2d511e8463:162067665fd21756:tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      edge_type: 'USES_TOOL',
      edge_label: 'USES_TOOL_ctx_2(Step 19)',
      from_node:
        'agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      to_node:
        'tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      step_number: 19,
      context_id: 'ctx_2',
      parent_context_id: 'ctx_2',
      parent_edge_id:
        'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:441f1ca76041eb10:agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '162067665fd21756',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '162067665fd21756',
        field: 'end_time'
      },
      token_summary: null,
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      tool_name: 'get_app_error_groups',
      span_refs: {
        anchor: '17e4535a09bc080d',
        tool: '162067665fd21756'
      },
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '162067665fd21756',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '162067665fd21756',
        field: 'events.data.output'
      },
      decision: {
        span_id: '9a42c17c13ea59fa',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.output'
        },
        reasoning: null
      },
      execution: {
        span_id: '162067665fd21756',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '162067665fd21756',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '162067665fd21756',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '162067665fd21756',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '162067665fd21756',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '162067665fd21756',
          field: 'events.data.output'
        }
      },
      receipt: {
        span_id: '17e4535a09bc080d',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.output'
        }
      }
    },
    {
      id: 'edge:uses_tool:ea267d2b1d937bf96fffe2d511e8463:c4fadccfc86e61d9:tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      edge_type: 'USES_TOOL',
      edge_label: 'USES_TOOL_ctx_2(Step 20)',
      from_node:
        'agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      to_node:
        'tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      step_number: 20,
      context_id: 'ctx_2',
      parent_context_id: 'ctx_2',
      parent_edge_id:
        'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:441f1ca76041eb10:agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'c4fadccfc86e61d9',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'c4fadccfc86e61d9',
        field: 'end_time'
      },
      token_summary: null,
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      tool_name: 'get_app_error_groups',
      span_refs: {
        anchor: '17e4535a09bc080d',
        tool: 'c4fadccfc86e61d9'
      },
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'c4fadccfc86e61d9',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'c4fadccfc86e61d9',
        field: 'events.data.output'
      },
      decision: {
        span_id: '9a42c17c13ea59fa',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.output'
        },
        reasoning: null
      },
      execution: {
        span_id: 'c4fadccfc86e61d9',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'c4fadccfc86e61d9',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'c4fadccfc86e61d9',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'c4fadccfc86e61d9',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'c4fadccfc86e61d9',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'c4fadccfc86e61d9',
          field: 'events.data.output'
        }
      },
      receipt: {
        span_id: '17e4535a09bc080d',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.output'
        }
      }
    },
    {
      id: 'edge:uses_tool:ea267d2b1d937bf96fffe2d511e8463:fb0d3af31778fe6f:tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      edge_type: 'USES_TOOL',
      edge_label: 'USES_TOOL_ctx_2(Step 21)',
      from_node:
        'agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      to_node:
        'tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      step_number: 21,
      context_id: 'ctx_2',
      parent_context_id: 'ctx_2',
      parent_edge_id:
        'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:441f1ca76041eb10:agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'fb0d3af31778fe6f',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'fb0d3af31778fe6f',
        field: 'end_time'
      },
      token_summary: null,
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      tool_name: 'get_app_error_groups',
      span_refs: {
        anchor: '17e4535a09bc080d',
        tool: 'fb0d3af31778fe6f'
      },
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'fb0d3af31778fe6f',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'fb0d3af31778fe6f',
        field: 'events.data.output'
      },
      decision: {
        span_id: '9a42c17c13ea59fa',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.output'
        },
        reasoning: null
      },
      execution: {
        span_id: 'fb0d3af31778fe6f',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'fb0d3af31778fe6f',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'fb0d3af31778fe6f',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'fb0d3af31778fe6f',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'fb0d3af31778fe6f',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'fb0d3af31778fe6f',
          field: 'events.data.output'
        }
      },
      receipt: {
        span_id: '17e4535a09bc080d',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.output'
        }
      }
    },
    {
      id: 'edge:uses_tool:ea267d2b1d937bf96fffe2d511e8463:974766669d5c710f:tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      edge_type: 'USES_TOOL',
      edge_label: 'USES_TOOL_ctx_2(Step 22)',
      from_node:
        'agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      to_node:
        'tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      step_number: 22,
      context_id: 'ctx_2',
      parent_context_id: 'ctx_2',
      parent_edge_id:
        'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:441f1ca76041eb10:agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '974766669d5c710f',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '974766669d5c710f',
        field: 'end_time'
      },
      token_summary: null,
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      tool_name: 'get_app_error_groups',
      span_refs: {
        anchor: '17e4535a09bc080d',
        tool: '974766669d5c710f'
      },
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '974766669d5c710f',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '974766669d5c710f',
        field: 'events.data.output'
      },
      decision: {
        span_id: '9a42c17c13ea59fa',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.output'
        },
        reasoning: null
      },
      execution: {
        span_id: '974766669d5c710f',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '974766669d5c710f',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '974766669d5c710f',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '974766669d5c710f',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '974766669d5c710f',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '974766669d5c710f',
          field: 'events.data.output'
        }
      },
      receipt: {
        span_id: '17e4535a09bc080d',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.output'
        }
      }
    },
    {
      id: 'edge:uses_tool:ea267d2b1d937bf96fffe2d511e8463:068fee456ddcce5b:tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      edge_type: 'USES_TOOL',
      edge_label: 'USES_TOOL_ctx_2(Step 23)',
      from_node:
        'agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      to_node:
        'tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      step_number: 23,
      context_id: 'ctx_2',
      parent_context_id: 'ctx_2',
      parent_edge_id:
        'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:441f1ca76041eb10:agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '068fee456ddcce5b',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '068fee456ddcce5b',
        field: 'end_time'
      },
      token_summary: null,
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      tool_name: 'get_app_error_groups',
      span_refs: {
        anchor: '17e4535a09bc080d',
        tool: '068fee456ddcce5b'
      },
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '068fee456ddcce5b',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '068fee456ddcce5b',
        field: 'events.data.output'
      },
      decision: {
        span_id: '9a42c17c13ea59fa',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.output'
        },
        reasoning: null
      },
      execution: {
        span_id: '068fee456ddcce5b',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '068fee456ddcce5b',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '068fee456ddcce5b',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '068fee456ddcce5b',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '068fee456ddcce5b',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '068fee456ddcce5b',
          field: 'events.data.output'
        }
      },
      receipt: {
        span_id: '17e4535a09bc080d',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.output'
        }
      }
    },
    {
      id: 'edge:uses_tool:ea267d2b1d937bf96fffe2d511e8463:bacabae5f150eb11:tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      edge_type: 'USES_TOOL',
      edge_label: 'USES_TOOL_ctx_2(Step 24)',
      from_node:
        'agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      to_node:
        'tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      step_number: 24,
      context_id: 'ctx_2',
      parent_context_id: 'ctx_2',
      parent_edge_id:
        'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:441f1ca76041eb10:agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'bacabae5f150eb11',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'bacabae5f150eb11',
        field: 'end_time'
      },
      token_summary: null,
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      tool_name: 'get_app_error_groups',
      span_refs: {
        anchor: '17e4535a09bc080d',
        tool: 'bacabae5f150eb11'
      },
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'bacabae5f150eb11',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'bacabae5f150eb11',
        field: 'events.data.output'
      },
      decision: {
        span_id: '9a42c17c13ea59fa',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.output'
        },
        reasoning: null
      },
      execution: {
        span_id: 'bacabae5f150eb11',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'bacabae5f150eb11',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'bacabae5f150eb11',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'bacabae5f150eb11',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'bacabae5f150eb11',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'bacabae5f150eb11',
          field: 'events.data.output'
        }
      },
      receipt: {
        span_id: '17e4535a09bc080d',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.output'
        }
      }
    },
    {
      id: 'edge:uses_tool:ea267d2b1d937bf96fffe2d511e8463:365e18520111cb4a:tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      edge_type: 'USES_TOOL',
      edge_label: 'USES_TOOL_ctx_2(Step 25)',
      from_node:
        'agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      to_node:
        'tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      step_number: 25,
      context_id: 'ctx_2',
      parent_context_id: 'ctx_2',
      parent_edge_id:
        'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:441f1ca76041eb10:agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '365e18520111cb4a',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '365e18520111cb4a',
        field: 'end_time'
      },
      token_summary: null,
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      tool_name: 'get_app_error_groups',
      span_refs: {
        anchor: '17e4535a09bc080d',
        tool: '365e18520111cb4a'
      },
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '365e18520111cb4a',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '365e18520111cb4a',
        field: 'events.data.output'
      },
      decision: {
        span_id: '9a42c17c13ea59fa',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.output'
        },
        reasoning: null
      },
      execution: {
        span_id: '365e18520111cb4a',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '365e18520111cb4a',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '365e18520111cb4a',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '365e18520111cb4a',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '365e18520111cb4a',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '365e18520111cb4a',
          field: 'events.data.output'
        }
      },
      receipt: {
        span_id: '17e4535a09bc080d',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.output'
        }
      }
    },
    {
      id: 'edge:uses_tool:ea267d2b1d937bf96fffe2d511e8463:3605482e3cb6c5a4:tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      edge_type: 'USES_TOOL',
      edge_label: 'USES_TOOL_ctx_2(Step 26)',
      from_node:
        'agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      to_node:
        'tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      step_number: 26,
      context_id: 'ctx_2',
      parent_context_id: 'ctx_2',
      parent_edge_id:
        'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:441f1ca76041eb10:agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '3605482e3cb6c5a4',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '3605482e3cb6c5a4',
        field: 'end_time'
      },
      token_summary: null,
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      tool_name: 'get_app_error_groups',
      span_refs: {
        anchor: '17e4535a09bc080d',
        tool: '3605482e3cb6c5a4'
      },
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '3605482e3cb6c5a4',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '3605482e3cb6c5a4',
        field: 'events.data.output'
      },
      decision: {
        span_id: '9a42c17c13ea59fa',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.output'
        },
        reasoning: null
      },
      execution: {
        span_id: '3605482e3cb6c5a4',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3605482e3cb6c5a4',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3605482e3cb6c5a4',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3605482e3cb6c5a4',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3605482e3cb6c5a4',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3605482e3cb6c5a4',
          field: 'events.data.output'
        }
      },
      receipt: {
        span_id: '17e4535a09bc080d',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.output'
        }
      }
    },
    {
      id: 'edge:uses_tool:ea267d2b1d937bf96fffe2d511e8463:043fb95af8ff2349:tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      edge_type: 'USES_TOOL',
      edge_label: 'USES_TOOL_ctx_2(Step 27)',
      from_node:
        'agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      to_node:
        'tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      step_number: 27,
      context_id: 'ctx_2',
      parent_context_id: 'ctx_2',
      parent_edge_id:
        'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:441f1ca76041eb10:agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '043fb95af8ff2349',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '043fb95af8ff2349',
        field: 'end_time'
      },
      token_summary: null,
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      tool_name: 'get_app_error_groups',
      span_refs: {
        anchor: '17e4535a09bc080d',
        tool: '043fb95af8ff2349'
      },
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '043fb95af8ff2349',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '043fb95af8ff2349',
        field: 'events.data.output'
      },
      decision: {
        span_id: '9a42c17c13ea59fa',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.output'
        },
        reasoning: null
      },
      execution: {
        span_id: '043fb95af8ff2349',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '043fb95af8ff2349',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '043fb95af8ff2349',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '043fb95af8ff2349',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '043fb95af8ff2349',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '043fb95af8ff2349',
          field: 'events.data.output'
        }
      },
      receipt: {
        span_id: '17e4535a09bc080d',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.output'
        }
      }
    },
    {
      id: 'edge:uses_tool:ea267d2b1d937bf96fffe2d511e8463:443257474bb2854b:tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      edge_type: 'USES_TOOL',
      edge_label: 'USES_TOOL_ctx_2(Step 28)',
      from_node:
        'agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      to_node:
        'tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      step_number: 28,
      context_id: 'ctx_2',
      parent_context_id: 'ctx_2',
      parent_edge_id:
        'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:441f1ca76041eb10:agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '443257474bb2854b',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '443257474bb2854b',
        field: 'end_time'
      },
      token_summary: null,
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      tool_name: 'get_app_error_groups',
      span_refs: {
        anchor: '17e4535a09bc080d',
        tool: '443257474bb2854b'
      },
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '443257474bb2854b',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '443257474bb2854b',
        field: 'events.data.output'
      },
      decision: {
        span_id: '9a42c17c13ea59fa',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.output'
        },
        reasoning: null
      },
      execution: {
        span_id: '443257474bb2854b',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '443257474bb2854b',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '443257474bb2854b',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '443257474bb2854b',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '443257474bb2854b',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '443257474bb2854b',
          field: 'events.data.output'
        }
      },
      receipt: {
        span_id: '17e4535a09bc080d',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.output'
        }
      }
    },
    {
      id: 'edge:uses_tool:ea267d2b1d937bf96fffe2d511e8463:b08c513edb497a23:tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      edge_type: 'USES_TOOL',
      edge_label: 'USES_TOOL_ctx_2(Step 29)',
      from_node:
        'agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      to_node:
        'tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      step_number: 29,
      context_id: 'ctx_2',
      parent_context_id: 'ctx_2',
      parent_edge_id:
        'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:441f1ca76041eb10:agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'b08c513edb497a23',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'b08c513edb497a23',
        field: 'end_time'
      },
      token_summary: null,
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      tool_name: 'get_app_error_groups',
      span_refs: {
        anchor: '17e4535a09bc080d',
        tool: 'b08c513edb497a23'
      },
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'b08c513edb497a23',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'b08c513edb497a23',
        field: 'events.data.output'
      },
      decision: {
        span_id: '9a42c17c13ea59fa',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.output'
        },
        reasoning: null
      },
      execution: {
        span_id: 'b08c513edb497a23',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'b08c513edb497a23',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'b08c513edb497a23',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'b08c513edb497a23',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'b08c513edb497a23',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'b08c513edb497a23',
          field: 'events.data.output'
        }
      },
      receipt: {
        span_id: '17e4535a09bc080d',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.output'
        }
      }
    },
    {
      id: 'edge:uses_tool:ea267d2b1d937bf96fffe2d511e8463:3d3614dcff0b846a:tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      edge_type: 'USES_TOOL',
      edge_label: 'USES_TOOL_ctx_2(Step 30)',
      from_node:
        'agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      to_node:
        'tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      step_number: 30,
      context_id: 'ctx_2',
      parent_context_id: 'ctx_2',
      parent_edge_id:
        'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:441f1ca76041eb10:agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '3d3614dcff0b846a',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '3d3614dcff0b846a',
        field: 'end_time'
      },
      token_summary: null,
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      tool_name: 'get_app_error_groups',
      span_refs: {
        anchor: '17e4535a09bc080d',
        tool: '3d3614dcff0b846a'
      },
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '3d3614dcff0b846a',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '3d3614dcff0b846a',
        field: 'events.data.output'
      },
      decision: {
        span_id: '9a42c17c13ea59fa',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.output'
        },
        reasoning: null
      },
      execution: {
        span_id: '3d3614dcff0b846a',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3d3614dcff0b846a',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3d3614dcff0b846a',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3d3614dcff0b846a',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3d3614dcff0b846a',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3d3614dcff0b846a',
          field: 'events.data.output'
        }
      },
      receipt: {
        span_id: '17e4535a09bc080d',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.output'
        }
      }
    },
    {
      id: 'edge:uses_tool:ea267d2b1d937bf96fffe2d511e8463:476d3f72bd1f958d:tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      edge_type: 'USES_TOOL',
      edge_label: 'USES_TOOL_ctx_2(Step 31)',
      from_node:
        'agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      to_node:
        'tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      step_number: 31,
      context_id: 'ctx_2',
      parent_context_id: 'ctx_2',
      parent_edge_id:
        'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:441f1ca76041eb10:agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '476d3f72bd1f958d',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '476d3f72bd1f958d',
        field: 'end_time'
      },
      token_summary: null,
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      tool_name: 'get_app_error_groups',
      span_refs: {
        anchor: '17e4535a09bc080d',
        tool: '476d3f72bd1f958d'
      },
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '476d3f72bd1f958d',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '476d3f72bd1f958d',
        field: 'events.data.output'
      },
      decision: {
        span_id: '9a42c17c13ea59fa',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.output'
        },
        reasoning: null
      },
      execution: {
        span_id: '476d3f72bd1f958d',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '476d3f72bd1f958d',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '476d3f72bd1f958d',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '476d3f72bd1f958d',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '476d3f72bd1f958d',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '476d3f72bd1f958d',
          field: 'events.data.output'
        }
      },
      receipt: {
        span_id: '17e4535a09bc080d',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.output'
        }
      }
    },
    {
      id: 'edge:uses_tool:ea267d2b1d937bf96fffe2d511e8463:63b3fd4d1e1c190b:tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      edge_type: 'USES_TOOL',
      edge_label: 'USES_TOOL_ctx_2(Step 32)',
      from_node:
        'agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      to_node:
        'tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      step_number: 32,
      context_id: 'ctx_2',
      parent_context_id: 'ctx_2',
      parent_edge_id:
        'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:441f1ca76041eb10:agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '63b3fd4d1e1c190b',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '63b3fd4d1e1c190b',
        field: 'end_time'
      },
      token_summary: null,
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      tool_name: 'get_app_error_groups',
      span_refs: {
        anchor: '17e4535a09bc080d',
        tool: '63b3fd4d1e1c190b'
      },
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '63b3fd4d1e1c190b',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '63b3fd4d1e1c190b',
        field: 'events.data.output'
      },
      decision: {
        span_id: '9a42c17c13ea59fa',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.output'
        },
        reasoning: null
      },
      execution: {
        span_id: '63b3fd4d1e1c190b',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '63b3fd4d1e1c190b',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '63b3fd4d1e1c190b',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '63b3fd4d1e1c190b',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '63b3fd4d1e1c190b',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '63b3fd4d1e1c190b',
          field: 'events.data.output'
        }
      },
      receipt: {
        span_id: '17e4535a09bc080d',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.output'
        }
      }
    },
    {
      id: 'edge:uses_tool:ea267d2b1d937bf96fffe2d511e8463:3b564cf59e1c7fc4:tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      edge_type: 'USES_TOOL',
      edge_label: 'USES_TOOL_ctx_2(Step 33)',
      from_node:
        'agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      to_node:
        'tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      step_number: 33,
      context_id: 'ctx_2',
      parent_context_id: 'ctx_2',
      parent_edge_id:
        'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:441f1ca76041eb10:agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '3b564cf59e1c7fc4',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '3b564cf59e1c7fc4',
        field: 'end_time'
      },
      token_summary: null,
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      tool_name: 'get_app_error_groups',
      span_refs: {
        anchor: '17e4535a09bc080d',
        tool: '3b564cf59e1c7fc4'
      },
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '3b564cf59e1c7fc4',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '3b564cf59e1c7fc4',
        field: 'events.data.output'
      },
      decision: {
        span_id: '9a42c17c13ea59fa',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.output'
        },
        reasoning: null
      },
      execution: {
        span_id: '3b564cf59e1c7fc4',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3b564cf59e1c7fc4',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3b564cf59e1c7fc4',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3b564cf59e1c7fc4',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3b564cf59e1c7fc4',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3b564cf59e1c7fc4',
          field: 'events.data.output'
        }
      },
      receipt: {
        span_id: '17e4535a09bc080d',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.output'
        }
      }
    },
    {
      id: 'edge:uses_tool:ea267d2b1d937bf96fffe2d511e8463:b4af5877b6eebfe0:tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      edge_type: 'USES_TOOL',
      edge_label: 'USES_TOOL_ctx_2(Step 34)',
      from_node:
        'agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      to_node:
        'tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      step_number: 34,
      context_id: 'ctx_2',
      parent_context_id: 'ctx_2',
      parent_edge_id:
        'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:441f1ca76041eb10:agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'b4af5877b6eebfe0',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'b4af5877b6eebfe0',
        field: 'end_time'
      },
      token_summary: null,
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      tool_name: 'get_app_error_groups',
      span_refs: {
        anchor: '17e4535a09bc080d',
        tool: 'b4af5877b6eebfe0'
      },
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'b4af5877b6eebfe0',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'b4af5877b6eebfe0',
        field: 'events.data.output'
      },
      decision: {
        span_id: '9a42c17c13ea59fa',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.output'
        },
        reasoning: null
      },
      execution: {
        span_id: 'b4af5877b6eebfe0',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'b4af5877b6eebfe0',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'b4af5877b6eebfe0',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'b4af5877b6eebfe0',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'b4af5877b6eebfe0',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'b4af5877b6eebfe0',
          field: 'events.data.output'
        }
      },
      receipt: {
        span_id: '17e4535a09bc080d',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.output'
        }
      }
    },
    {
      id: 'edge:uses_tool:ea267d2b1d937bf96fffe2d511e8463:a7fa6b52c91055e6:tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      edge_type: 'USES_TOOL',
      edge_label: 'USES_TOOL_ctx_2(Step 35)',
      from_node:
        'agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      to_node:
        'tool:ea267d2b1d937bf96fffe2d511e8463:0:get_app_error_groups:agentic.tool.invocation',
      step_number: 35,
      context_id: 'ctx_2',
      parent_context_id: 'ctx_2',
      parent_edge_id:
        'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:441f1ca76041eb10:agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'a7fa6b52c91055e6',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'a7fa6b52c91055e6',
        field: 'end_time'
      },
      token_summary: null,
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      tool_name: 'get_app_error_groups',
      span_refs: {
        anchor: '17e4535a09bc080d',
        tool: 'a7fa6b52c91055e6'
      },
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'a7fa6b52c91055e6',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: 'a7fa6b52c91055e6',
        field: 'events.data.output'
      },
      decision: {
        span_id: '9a42c17c13ea59fa',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '9a42c17c13ea59fa',
          field: 'events.data.output'
        },
        reasoning: null
      },
      execution: {
        span_id: 'a7fa6b52c91055e6',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'a7fa6b52c91055e6',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'a7fa6b52c91055e6',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'a7fa6b52c91055e6',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'a7fa6b52c91055e6',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: 'a7fa6b52c91055e6',
          field: 'events.data.output'
        }
      },
      receipt: {
        span_id: '17e4535a09bc080d',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.output'
        }
      }
    },
    {
      id: 'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:3c2b9d45dc89a42a:agent:ea267d2b1d937bf96fffe2d511e8463:0:router_agent',
      edge_type: 'DELEGATES_TO',
      edge_label: 'DELEGATES_TO_ctx_1(Step 2)',
      from_node: 'agent:ea267d2b1d937bf96fffe2d511e8463:0:okahu_sre_agent',
      to_node: 'agent:ea267d2b1d937bf96fffe2d511e8463:0:router_agent',
      step_number: 2,
      context_id: 'ctx_1',
      parent_context_id: null,
      parent_edge_id: 'edge:invokes:ea267d2b1d937bf96fffe2d511e8463:0',
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '3c2b9d45dc89a42a',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '3c2b9d45dc89a42a',
        field: 'end_time'
      },
      token_summary: null,
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      span_refs: {
        parent: '3c2b9d45dc89a42a',
        child: '441f1ca76041eb10',
        inference: '3c2b9d45dc89a42a'
      },
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '441f1ca76041eb10',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '441f1ca76041eb10',
        field: 'events.data.output'
      },
      decision: {
        span_id: '3c2b9d45dc89a42a',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3c2b9d45dc89a42a',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3c2b9d45dc89a42a',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3c2b9d45dc89a42a',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3c2b9d45dc89a42a',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3c2b9d45dc89a42a',
          field: 'events.data.output'
        },
        reasoning: null
      },
      execution: {
        span_id: '3c2b9d45dc89a42a',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3c2b9d45dc89a42a',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3c2b9d45dc89a42a',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3c2b9d45dc89a42a',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3c2b9d45dc89a42a',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3c2b9d45dc89a42a',
          field: 'events.data.output'
        }
      },
      receipt: {
        span_id: '441f1ca76041eb10',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '441f1ca76041eb10',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '441f1ca76041eb10',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '441f1ca76041eb10',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '441f1ca76041eb10',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '441f1ca76041eb10',
          field: 'events.data.output'
        }
      }
    },
    {
      id: 'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:441f1ca76041eb10:agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      edge_type: 'DELEGATES_TO',
      edge_label: 'DELEGATES_TO_ctx_2(Step 4)',
      from_node: 'agent:ea267d2b1d937bf96fffe2d511e8463:0:router_agent',
      to_node: 'agent:ea267d2b1d937bf96fffe2d511e8463:0:general_analysis_agent',
      step_number: 4,
      context_id: 'ctx_2',
      parent_context_id: 'ctx_1',
      parent_edge_id:
        'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:3c2b9d45dc89a42a:agent:ea267d2b1d937bf96fffe2d511e8463:0:router_agent',
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '441f1ca76041eb10',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '441f1ca76041eb10',
        field: 'end_time'
      },
      token_summary: null,
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      span_refs: {
        parent: '441f1ca76041eb10',
        child: '17e4535a09bc080d',
        inference: '441f1ca76041eb10'
      },
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '17e4535a09bc080d',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '17e4535a09bc080d',
        field: 'events.data.output'
      },
      decision: {
        span_id: '441f1ca76041eb10',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '441f1ca76041eb10',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '441f1ca76041eb10',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '441f1ca76041eb10',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '441f1ca76041eb10',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '441f1ca76041eb10',
          field: 'events.data.output'
        },
        reasoning: null
      },
      execution: {
        span_id: '441f1ca76041eb10',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '441f1ca76041eb10',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '441f1ca76041eb10',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '441f1ca76041eb10',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '441f1ca76041eb10',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '441f1ca76041eb10',
          field: 'events.data.output'
        }
      },
      receipt: {
        span_id: '17e4535a09bc080d',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '17e4535a09bc080d',
          field: 'events.data.output'
        }
      }
    },
    {
      id: 'edge:delegates_to:ea267d2b1d937bf96fffe2d511e8463:3c2b9d45dc89a42a:agent:ea267d2b1d937bf96fffe2d511e8463:0:output_processor',
      edge_type: 'DELEGATES_TO',
      edge_label: 'DELEGATES_TO_ctx_3(Step 36)',
      from_node: 'agent:ea267d2b1d937bf96fffe2d511e8463:0:okahu_sre_agent',
      to_node: 'agent:ea267d2b1d937bf96fffe2d511e8463:0:output_processor',
      step_number: 36,
      context_id: 'ctx_3',
      parent_context_id: null,
      parent_edge_id: 'edge:invokes:ea267d2b1d937bf96fffe2d511e8463:0',
      parallel_group_id: null,
      is_concurrent: false,
      status: {
        code: 'OK',
        message: null
      },
      start_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '3c2b9d45dc89a42a',
        field: 'start_time'
      },
      end_time: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '3c2b9d45dc89a42a',
        field: 'end_time'
      },
      token_summary: null,
      fact_id: 'ea267d2b1d937bf96fffe2d511e8463',
      turn_id: 'ea267d2b1d937bf96fffe2d511e8463',
      span_refs: {
        parent: '3c2b9d45dc89a42a',
        child: '45ed488653d36665',
        inference: '3c2b9d45dc89a42a'
      },
      input: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '45ed488653d36665',
        field: 'events.data.input'
      },
      output: {
        trace_id: 'c87f47e682873725c6216117af35a3ec',
        span_id: '45ed488653d36665',
        field: 'events.data.output'
      },
      decision: {
        span_id: '3c2b9d45dc89a42a',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3c2b9d45dc89a42a',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3c2b9d45dc89a42a',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3c2b9d45dc89a42a',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3c2b9d45dc89a42a',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3c2b9d45dc89a42a',
          field: 'events.data.output'
        },
        reasoning: null
      },
      execution: {
        span_id: '3c2b9d45dc89a42a',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3c2b9d45dc89a42a',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3c2b9d45dc89a42a',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3c2b9d45dc89a42a',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3c2b9d45dc89a42a',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '3c2b9d45dc89a42a',
          field: 'events.data.output'
        }
      },
      receipt: {
        span_id: '45ed488653d36665',
        status: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '45ed488653d36665',
          field: 'status'
        },
        start_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '45ed488653d36665',
          field: 'start_time'
        },
        end_time: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '45ed488653d36665',
          field: 'end_time'
        },
        input: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '45ed488653d36665',
          field: 'events.data.input'
        },
        output: {
          trace_id: 'c87f47e682873725c6216117af35a3ec',
          span_id: '45ed488653d36665',
          field: 'events.data.output'
        }
      }
    }
  ]
};
