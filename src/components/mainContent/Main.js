import React, { useState, useCallback, useMemo } from "react";
import ReactFlow, { Background, MarkerType } from "reactflow";
import "reactflow/dist/style.css";
import "tailwindcss/tailwind.css";
import { BiRightArrow } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";

import Card from "../atoms/Card";

const data = [
  {
    function: "/litellm/proxy/proxy_server.py:chat_completion",
    params: [
      {
        identifier: "request",
        type: "Request",
      },
      {
        identifier: "fastapi_response",
        type: "Response",
      },
    ],
    response_object: "",
    children: [
      {
        function: "/litellm/proxy/proxy_server.py:ProxyConfig.load_team_config",
        params: [
          {
            identifier: "self",
            type: null,
          },
          {
            identifier: "team_id",
            type: "str",
          },
        ],
        response_object: "",
        children: [
          {
            function: "/litellm/proxy/proxy_server.py:ProxyConfig.get_config",
            params: [
              {
                identifier: "self",
                type: null,
              },
            ],
            response_object: "dict",
            children: [
              {
                function: "/litellm/proxy/utils.py:update_spend",
                params: [
                  {
                    identifier: "prisma_client",
                    type: "PrismaClient",
                  },
                  {
                    identifier: "db_writer_client",
                    type: "Optional[HTTPHandler]",
                  },
                  {
                    identifier: "proxy_logging_obj",
                    type: "ProxyLogging",
                  },
                ],
                response_object: "",
                children: [
                  {
                    function: "/litellm/proxy/utils.py:print_verbose",
                    params: [
                      {
                        identifier: "print_statement",
                        type: null,
                      },
                    ],
                    response_object: "",
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            function: "/litellm/proxy/utils.py:_is_valid_team_configs",
            params: [],
            response_object: "",
            children: [],
          },
        ],
      },
      {
        function: "/litellm/proxy/proxy_server.py:parse_cache_control",
        params: [
          {
            identifier: "cache_control",
            type: null,
          },
        ],
        response_object: "",
        children: [],
      },
      {
        function: "/litellm/proxy/proxy_server.py:select_data_generator",
        params: [
          {
            identifier: "response",
            type: null,
          },
          {
            identifier: "user_api_key_dict",
            type: null,
          },
        ],
        response_object: "",
        children: [
          {
            function: "/litellm/proxy/proxy_server.py:async_data_generator",
            params: [
              {
                identifier: "response",
                type: null,
              },
              {
                identifier: "user_api_key_dict",
                type: null,
              },
            ],
            response_object: "",
            children: [
              {
                function:
                  "/litellm/proxy/utils.py:ProxyLogging.post_call_failure_hook",
                params: [
                  {
                    identifier: "self",
                    type: null,
                  },
                  {
                    identifier: "original_exception",
                    type: "Exception",
                  },
                  {
                    identifier: "user_api_key_dict",
                    type: "UserAPIKeyAuth",
                  },
                ],
                response_object: "",
                children: [
                  {
                    function:
                      "/litellm/proxy/utils.py:ProxyLogging.alerting_handler",
                    params: [
                      {
                        identifier: "self",
                        type: null,
                      },
                      {
                        identifier: "message",
                        type: "str",
                      },
                      {
                        identifier: "level",
                        type: 'Literal["Low", "Medium", "High"]',
                      },
                      {
                        identifier: "alert_type",
                        type: 'Literal[\n            "llm_exceptions",\n            "llm_too_slow",\n            "llm_requests_hanging",\n            "budget_alerts",\n            "db_exceptions",\n        ]',
                      },
                    ],
                    response_object: "",
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        function: "/litellm/proxy/utils.py:ProxyLogging.during_call_hook",
        params: [
          {
            identifier: "self",
            type: null,
          },
          {
            identifier: "data",
            type: "dict",
          },
          {
            identifier: "user_api_key_dict",
            type: "UserAPIKeyAuth",
          },
          {
            identifier: "call_type",
            type: 'Literal[\n            "completion",\n            "embeddings",\n            "image_generation",\n            "moderation",\n            "audio_transcription",\n        ]',
          },
        ],
        response_object: "",
        children: [],
      },
      {
        function: "/litellm/proxy/utils.py:ProxyLogging.post_call_failure_hook",
        params: [
          {
            identifier: "self",
            type: null,
          },
          {
            identifier: "original_exception",
            type: "Exception",
          },
          {
            identifier: "user_api_key_dict",
            type: "UserAPIKeyAuth",
          },
        ],
        response_object: "",
        children: [
          {
            function: "/litellm/proxy/utils.py:ProxyLogging.alerting_handler",
            params: [
              {
                identifier: "self",
                type: null,
              },
              {
                identifier: "message",
                type: "str",
              },
              {
                identifier: "level",
                type: 'Literal["Low", "Medium", "High"]',
              },
              {
                identifier: "alert_type",
                type: 'Literal[\n            "llm_exceptions",\n            "llm_too_slow",\n            "llm_requests_hanging",\n            "budget_alerts",\n            "db_exceptions",\n        ]',
              },
            ],
            response_object: "",
            children: [],
          },
        ],
      },
      {
        function: "/litellm/proxy/utils.py:ProxyLogging.post_call_success_hook",
        params: [
          {
            identifier: "self",
            type: null,
          },
          {
            identifier: "response",
            type: "Union[ModelResponse, EmbeddingResponse, ImageResponse]",
          },
          {
            identifier: "user_api_key_dict",
            type: "UserAPIKeyAuth",
          },
        ],
        response_object: "",
        children: [],
      },
      {
        function: "/litellm/proxy/utils.py:ProxyLogging.pre_call_hook",
        params: [
          {
            identifier: "self",
            type: null,
          },
          {
            identifier: "user_api_key_dict",
            type: "UserAPIKeyAuth",
          },
          {
            identifier: "data",
            type: "dict",
          },
          {
            identifier: "call_type",
            type: 'Literal[\n            "completion",\n            "embeddings",\n            "image_generation",\n            "moderation",\n            "audio_transcription",\n        ]',
          },
        ],
        response_object: "",
        children: [
          {
            function: "/litellm/proxy/utils.py:print_verbose",
            params: [
              {
                identifier: "print_statement",
                type: null,
              },
            ],
            response_object: "",
            children: [],
          },
        ],
      },
      {
        function: "/litellm/proxy/utils.py:_is_valid_team_configs",
        params: [],
        response_object: "",
        children: [],
      },
      {
        function: "/litellm/proxy/utils.py:_read_request_body",
        params: [
          {
            identifier: "request",
            type: null,
          },
        ],
        response_object: "",
        children: [],
      },
    ],
  },
];

const generateGraphElements = (
  data,
  parentId = null,
  elements = { nodes: [], edges: [] },
  position = { x: 0, y: 0 },
  idCounter = { current: 0 }
) => {
  const id = `node-${idCounter.current++}`;
  const nodeId = id;

  const nodePosition = {
    x: position.x,
    y: position.y,
  };

  elements.nodes.push({
    id: nodeId,
    position: nodePosition,
    type: "textUpdater",
    data: {
      label: data,
    },
    sourcePosition: "right",
    targetPosition: "left",
  });

  if (parentId) {
    elements.edges.push({
      id: `edge-${parentId}-${nodeId}`,
      source: parentId,
      type: "textUpdater",
      target: nodeId,
      markerEnd: {
        type: MarkerType.ArrowClosed,
      },
      label: "",
      sourcePosition: "right",
      targetPosition: "left",
    });
  }

  const numChildren = data.children.length;
  const numChildrenAbove = Math.floor(numChildren / 2);
  const numChildrenBelow = Math.ceil(numChildren / 2);

  let childXPosition = nodePosition.x + 400;
  let childYPositionAbove = nodePosition.y - numChildrenAbove * 110;
  let childYPositionBelow = nodePosition.y + numChildrenBelow * 110;
  data.children.forEach((child, index) => {
    const childYPosition =
      index < numChildrenAbove ? childYPositionAbove : childYPositionBelow;
    generateGraphElements(
      child,
      nodeId,
      elements,
      { x: childXPosition, y: childYPosition },
      idCounter
    );
    index < numChildrenAbove
      ? (childYPositionAbove += 220)
      : (childYPositionBelow += 220);
  });

  return elements;
};

const graphElements = generateGraphElements(data[0]);
const defaultNodes = graphElements.nodes;
const defaultEdges = graphElements.edges;

const Main = () => {
  const nodeTypes = useMemo(() => ({ textUpdater: Card }), []);
  return (
    <div className="w-full h-[94.7vh] bg-gray-800">
      <div className="flex-1 w-full h-[94%]">
        <ReactFlow
          defaultNodes={defaultNodes}
          defaultEdges={defaultEdges}
          nodeTypes={nodeTypes}
        >
          <Background />
        </ReactFlow>
        <button className=" absolute left-[95px] bg-[#F27400] text-white font-medium text-sm px-1.5 py-2.5 rounded z-10 bottom-[75px] flex items-center justify-between">
          <IoMdAdd /> Add methods
        </button>
      </div>
      <div className="p-4 mt-1 border-t z-10 h-[5.5%] w-full border-[#505050] flex justify-start items-center bg-[#363636]">
        <span className="text-[#bdbdbd] flex items-center font-medium text-base">
          cart <BiRightArrow className="mt-1 mx-1 w-[12px] h-[12px]" />{" "}
          cart_routes.py{" "}
          <BiRightArrow className="mt-1 mx-1 w-[12px] h-[12px]" /> POST /carts/
          {"{cart_id}"}
        </span>
      </div>
    </div>
  );
};

export default Main;
