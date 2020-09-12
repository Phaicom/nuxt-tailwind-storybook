import { storiesOf } from '@storybook/vue'
import store from '@/.storybook/store'
import Logo from '@/components/Logo'

storiesOf('Logo', module).add('Logo', () => ({
  components: { Logo },
  store: store,
  template: '<Logo />',
}))
