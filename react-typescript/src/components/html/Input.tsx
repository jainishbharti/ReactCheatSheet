type InputProps = React.ComponentProps<'input'>

export const CustomInput = (props: InputProps) => {
  return (
    <div>
        <input {...props} />
    </div>
  )
}
