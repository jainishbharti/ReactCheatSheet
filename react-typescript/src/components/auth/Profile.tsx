export type ProfileProps = {
    name : string
}

export const Profile = ({name} : ProfileProps) => {
  return (
    <div>
        <h2>Private Profile Component</h2>
        <h3>Name: {name} </h3>
    </div>
  )
}
