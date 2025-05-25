import { defineSchema,defineTable } from "convex/server";
import { v } from "convex/values"; // Import validator

export default defineSchema({
  tasks: defineTable({
    text: v.string(), // ✅ Defines 'title' as a required string field
    isCompleted: v.boolean(), // ✅ Defines 'completed' as a boolean
  }),
  projects:defineTable({
    ProjectName:v.string(),
    ProjectDetail:v.string(),
    ProjectImage:v.string(),
    ProjectLink:v.string()
  })
});