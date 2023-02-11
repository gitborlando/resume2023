import { observer } from 'mobx-react'
import { FC } from 'react'
import { Flex } from '~/widget/flex'
import { HelloWorldComp } from './comp/hello-world'
import { makeStyles } from './theme'

interface IAppProps {}

export const App: FC<IAppProps> = observer(() => {
  const { classes } = useStyles({})
  return (
    <Flex layout='verticalCenter' className={classes.App}>
      <HelloWorldComp />
    </Flex>
  )
})

type IAppStyleProps = {} /* & Required<Pick<IAppProps>> */ /* & Pick<IAppProps> */

const useStyles = makeStyles<IAppStyleProps>()((t) => ({
  App: {
    ...t.rect('100vw', '100vh'),
  },
}))

App.displayName = 'App'
