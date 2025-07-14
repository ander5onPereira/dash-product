export function getObjectData<T>(object: T, propertyString: string): any {
  const properties = propertyString.split('.')

  const result = properties.reduce((currentLevel: any, property) => {
      return currentLevel && currentLevel[property] !== undefined
          ? currentLevel[property]
          : undefined
  }, object)

  return result || ''
}