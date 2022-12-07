import React from "react"

export const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
}) => {
  
  const [value, setValue] = React.useState(initialValue)

  const onChange = e => {
    setValue(e.target.value)
  }

  const onBlur = () => {
    console.log( index, id)
  }

  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return <input value={value} onChange={onChange} onBlur={onBlur} />
}
