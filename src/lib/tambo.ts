import { Graph, graphSchema } from "@/components/tambo/graph";
import { Roadmap, roadmapSchema } from "@/components/tambo/graph";
import { SelectForm, selectFormSchema } from "@/components/tambo/select-form";
import type { TamboComponent } from "@tambo-ai/react";
import { TamboTool } from "@tambo-ai/react";
import { z } from "zod";
import {
  getSalesData,
  getProducts,
  getUserData,
  getKPIs,
} from "@/services/analytics-data";



export const tools: TamboTool[] = [
  {
    name: "getSalesData",
    description:
      "Get monthly sales revenue and units data. Can filter by region (North, South, East, West) or category (Electronics, Clothing, Home)",
    tool: getSalesData,
    toolSchema: z.function().args(
      z
        .object({
          region: z.string().optional(),
          category: z.string().optional(),
        })
        .default({}),
    ),
  },
  {
    name: "getProducts",
    description:
      "Get top products with sales and revenue information. Can filter by category (Electronics, Furniture, Appliances)",
    tool: getProducts,
    toolSchema: z.function().args(
      z
        .object({
          category: z.string().optional(),
        })
        .default({}),
    ),
  },
  {
    name: "getUserData",
    description:
      "Get monthly user growth and activity data. Can filter by segment (Free, Premium, Enterprise)",
    tool: getUserData,
    toolSchema: z.function().args(
      z
        .object({
          segment: z.string().optional(),
        })
        .default({}),
    ),
  },
  {
    name: "getKPIs",
    description:
      "Get key business performance indicators. Can filter by category (Financial, Growth, Quality, Retention, Marketing)",
    tool: getKPIs,
    toolSchema: z.function().args(
      z
        .object({
          category: z.string().optional(),
        })
        .default({}),
    ),
  },
];

const sampleRoadmap = {
  ideaName: "Project X",
  phases: [
    {
      id: "phase-1",
      title: "Discovery",
      timeline: "Q1",
      milestones: [
        { id: "m1", title: "Research", description: "User interviews", status: "planned" },
        { id: "m2", title: "Prototype", status: "in-progress" }
      ]
    },
    {
      id: "phase-2",
      title: "Delivery",
      timeline: "Q2",
      milestones: [
        { id: "m3", title: "Launch", status: "completed" }
      ]
    }
  ]
};



export const components: TamboComponent[] = [
  {
    name: "Graph",
    description:
      "Use this when you want to display a chart. It supports bar, line, and pie charts. When you see data generally use this component. IMPORTANT: When asked to create a graph, always generate it first in the chat - do NOT add it directly to the canvas/dashboard. Let the user decide if they want to add it.",
    component: Graph,
    propsSchema: graphSchema,
  },
  {
    name: "Board",
    description:
      "",
    component: Roadmap,
    propsSchema: roadmapSchema
  }
];
