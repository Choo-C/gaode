import { defaultTheme } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'
import type { Theme } from '@vuepress/core'
import type { DefaultThemeOptions } from '@vuepress/theme-default'

export const localTheme = (options: DefaultThemeOptions): Theme => {
  return {
    name: 'vuepress-theme-local',
    extends: defaultTheme(options),
    layouts: {
      Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
    },
  }
}
