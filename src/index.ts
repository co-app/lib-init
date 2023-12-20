class Calculator<T extends number> {
  add(...a: T[]) {
    return a.reduce((acc, cur) => acc + cur, 0)
  }

  min(...a: T[]) {
    return a.reduce((acc, cur) => acc - cur, 0)
  }

  div(...a: T[]) {
    return a.reduce((acc, cur) => acc / cur, 0)
  }

  mul(...a: T[]) {
    return a.reduce((acc, cur) => acc * cur, 0)
  }
}

export const calculator = new Calculator()
