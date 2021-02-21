import { storiesOf } from '@storybook/vue'
// import { text } from '@storybook/addon-knobs/vue'
import FavoriteStarIcon from './FavoriteStarIcon.vue'

storiesOf('Atoms/forms', module)
  .add(
    'FavoriteStarIcon',
    () => ({
      components: { FavoriteStarIcon },
      template: `<FavoriteStarIcon
        :type="type"
      />`,
      props: {
        favorite: {
          type: Boolean,
          default: false
        },
        switchFavorite: {
          type: Function,
          required: false,
          default: () => {}
        }
      },
      description: {
        FavoriteStarIcon: {
          favorite: false,
          switchFavorite: () => {}
        }
      }
    }),
    {
      info: true,
      notes: `
        # Input Form

        ## Props
        * type
          * string
            * typeは text, password, date などは利用可能
            * file, image は別コンポーネントで管理する
      `
    })
