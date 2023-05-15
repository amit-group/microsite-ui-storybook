export * from './ConfigTable';
export * from './TrackingConfigTable';
export * from './ArgumentTable';

export function setStyles(element: HTMLElement, styles: Partial<CSSStyleDeclaration>) {
  Object.keys(styles).forEach((key) => {
    element.style[key] = styles[key];
  });
}