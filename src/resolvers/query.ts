
export function hello(_, { name }) {
  const returnValue = !name ? `Hello ${name || 'World!'}` : null
  return returnValue
}
