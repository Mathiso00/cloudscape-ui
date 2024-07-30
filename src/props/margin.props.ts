const marginValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-1', '-2', '-3', '-4', '-5', '-6', '-7', '-8', '-9'] as const

type MarginValue = typeof marginValues[number]
const marginPropsDef = {
  m: marginValues,
  mt: marginValues,
  mr: marginValues,
  mb: marginValues,
  ml: marginValues,
  mx: marginValues,
  my: marginValues,
}

const marginProps = marginPropsDef as unknown as Record<keyof typeof marginPropsDef, number>

export {
  marginProps,
}
export type { MarginValue }
