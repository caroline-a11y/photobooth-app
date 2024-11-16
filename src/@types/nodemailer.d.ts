// TailwindCSS is a utility CSS framework, and it's not a function.
declare module 'tailwindcss' {
  // You can declare types or constants, but Tailwind itself is not typically a function
  const tailwindcss: any; // If you're not sure about the type, use `any` for now.

  export default tailwindcss;
}
