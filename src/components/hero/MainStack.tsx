import { TechnologyNameContainer } from '../shared/TechnologyNameContainer'

export function MainStack() {
  const technologies = ['Next', 'React', 'Node', 'TypeScript']

  return (
    <div className="flex gap-2">
      {technologies.map((technology) => (
        <TechnologyNameContainer key={technology} name={technology} />
      ))}
    </div>
  )
}
