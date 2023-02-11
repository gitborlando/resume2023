import { observer } from 'mobx-react'
import { FC } from 'react'
import { makeStyles } from '~/theme'
import { Flex } from '~/widget/flex'

interface IHelloWorldComp {}

export const HelloWorldComp: FC<IHelloWorldComp> = observer(({}) => {
  const { classes } = useStyles({})
  return <Flex className={classes.HelloWorld}>123</Flex>
})

type IHelloWorldCompStyle = {} /* & Required<Pick<IHelloWorldComp>> */ /* & Pick<IHelloWorldComp> */

const useStyles = makeStyles<IHelloWorldCompStyle>()((t) => ({
  HelloWorld: {
    ...t.rect(100, 100, 10, 'skyblue'),
  },
}))

HelloWorldComp.displayName = 'HelloWorldComp'
