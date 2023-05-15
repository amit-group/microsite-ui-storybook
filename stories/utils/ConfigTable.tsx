import React from 'react';

export function ConfigTable({ children }) {
  return (
    <table className="docblock-argstable w-100">
      <thead>
        <tr>
          <th>Property</th>
          <th>Type</th>
          <th>Required</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
