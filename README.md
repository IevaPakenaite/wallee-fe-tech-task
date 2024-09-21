# wallee-fe-tech-task

## Running project

1. npm install
2. npm run dev

## Solution

Project was created using Vite.js and it's creation script, chosen stack - React with Typescript.

Page-schema.json is in data folder. When loading page, schema is set to state and used for rendering. Schema components array is mappped through and calls RenderComponent function. There is a switch that returns specific component by type from schema. Additionally all properties are passed to those components.
React components can be found under components folder. Each component has it's own styling file and index file.
Page title is also updated from page-schema.json, if there is no such value, Wallee is added by default
