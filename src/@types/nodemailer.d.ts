

// Declaring the `tailwindcss` module
declare module 'tailwindcss' {
  // Declaring types for Tailwind CSS configuration and plugins
  const tailwindcss: {
    config: Record<string, unknown>; // Represents the Tailwind configuration object
    plugins?: Array<unknown>; // Plugins can be an array, typically
  };

  export default tailwindcss;
}


