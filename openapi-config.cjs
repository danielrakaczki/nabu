const path = require("path");
require("dotenv").config({ path: path.resolve(process.cwd(), ".env.development") });

const baseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
if (!baseUrl) {
  throw new Error("Missing EXPO_PUBLIC_SUPABASE_URL in environment");
}

module.exports = {
  schemaFile: `${baseUrl}/rest/v1/?openapi`,
  apiFile: "./lib/empty-api.ts",
  apiImport: "emptySplitApi",
  outputFile: "./lib/generated-api.ts",
  exportName: "generatedApi",
  hooks: true,
  httpResolverOptions: {
    headers: {
      apiKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
      Authorization: `Bearer ${process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY}`,
      Accept: "application/json",
    },
  },
};
