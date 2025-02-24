#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Utility to convert a string to Title Case
function toTitleCase(str) {
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

// Retrieve command-line arguments
const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('Usage: node add-component.js <component-name> [description]');
  process.exit(1);
}

const componentName = args[0];
const description = args[1] || `A ${componentName} component.`;
const title = toTitleCase(componentName);

// Determine the project root (assuming the script is in "scripts")
const projectRoot = path.resolve(__dirname, '..');

// Define paths relative to the project root
const componentDir = path.join(projectRoot, 'registry', componentName);
const componentFile = path.join(componentDir, `${componentName}.tsx`);
const registryFile = path.join(projectRoot, 'registry.json');

// Ensure the component directory exists
if (!fs.existsSync(componentDir)) {
  fs.mkdirSync(componentDir, { recursive: true });
  console.log(`Created directory: ${componentDir}`);
}

// Default component content
const componentContent = `import React from 'react';

export function ${title}({ children }: { children: React.ReactNode }) {
  return (
    <div className="border p-4 rounded">
      {children}
    </div>
  );
}
`;

// Create the component file if it doesn't exist
if (!fs.existsSync(componentFile)) {
  fs.writeFileSync(componentFile, componentContent);
  console.log(`Created component file: ${componentFile}`);
} else {
  console.log(`Component file ${componentFile} already exists.`);
}

// Read and update registry.json
if (!fs.existsSync(registryFile)) {
  console.error('registry.json does not exist in the project root.');
  process.exit(1);
}

let registry;
try {
  const registryData = fs.readFileSync(registryFile, 'utf-8');
  registry = JSON.parse(registryData);
} catch (error) {
  console.error('Error reading registry.json:', error);
  process.exit(1);
}

// Ensure the "items" array exists
if (!registry.items || !Array.isArray(registry.items)) {
  registry.items = [];
}

// Check if the component is already registered
if (registry.items.find(item => item.name === componentName)) {
  console.log(`Component "${componentName}" is already registered in registry.json.`);
} else {
  // Create the new registry item
  const newItem = {
    name: componentName,
    type: "registry:component",
    title: title,
    description: description,
    files: [
      {
        path: `registry/${componentName}/${componentName}.tsx`,
        type: "registry:component"
      }
    ]
  };

  // Append the new item and write back the file
  registry.items.push(newItem);
  fs.writeFileSync(registryFile, JSON.stringify(registry, null, 2));
  console.log(`Appended new component "${componentName}" to registry.json.`);
}
