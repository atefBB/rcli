export const reactStatelessTemplate = (componentName, includeStyles) => {
  const imports = ["import React from 'react';"];

  if (includeStyles) {
    imports.push(`import styles from './${componentName}.css';`);
  }

  const componentTemplate = `export default ${componentName}() {
        return <div>This is an auto generated component!</div>
  }`;

  const template = [...imports, "", componentTemplate];

  return template.join("\n");
};
