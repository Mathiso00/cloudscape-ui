import type * as React from 'react'

export function attachSubComponents<
  C extends React.ComponentType,
  O extends Record<string, React.ComponentType>,
>(displayName: string, topLevelComponent: C, otherComponents: O): C & O {
  topLevelComponent.displayName = displayName
  Object.values(otherComponents).forEach(
    component =>
      (component.displayName = `${displayName}.${component.displayName}`),
  )

  return Object.assign(topLevelComponent, otherComponents)
}
