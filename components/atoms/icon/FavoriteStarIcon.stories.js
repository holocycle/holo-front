import FavoriteStarIcon from '@/components/atoms/icon/FavoriteStarIcon'

export default {
  title: 'Atoms/Favorite',
  argTypes: {
    favorite: {
      control: 'boolean',
      description: 'お気に入り登録しているかどうか',
      defaultValue: false
    },
    color: {
      control: 'text',
      description: 'これを指定するように修正したい',
      defaultValue: 'yellow'
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const FavoriteStarIcon1 = (arg, { argTypes }) => ({
  components: { FavoriteStarIcon },
  props: Object.keys(argTypes),
  template: `
    <FavoriteStarIcon v-bind="$props"/>
    <FavoriteStarIcon color="yellow"/>
  `
})
