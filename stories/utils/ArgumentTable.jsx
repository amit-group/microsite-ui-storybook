import React from "react";
export function ArgumentTable({ children }) {
  return (
    <table className="docblock-argstable w-100">
      <thead>
        <tr>
          <th>Argument</th>
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