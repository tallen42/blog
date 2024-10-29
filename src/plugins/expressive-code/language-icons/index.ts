import { iconDictionary } from './icon-dictionary.ts';
import { definePlugin } from 'astro-expressive-code';
import { h, select } from 'astro-expressive-code/hast';

// Language Icons
// add cute language icons to the titles of the individual files with links to the
// appropriate project pages to learn more about a specific language

// in the expressive-code config, make sure to set `useStyleReset: false`
// this is because the language icons don't like to be colored with it on
// though if you rely on this to reset the styles from tailwind-typography prose
// use the "Not Prose" plugin (conveniently located in this very repository)

export const languageIcons = () =>
  definePlugin({
    name: 'Language Icons',
    hooks: {
      postprocessRenderedBlock: (context) => {
        const icon = iconDictionary.find(
          (v) => v.name.toUpperCase() === context.codeBlock.language.toUpperCase(),
        );
        if (icon === undefined) return;

        select('span.title', context.renderData.blockAst)?.children.unshift(
          h(
            'a',
            {
              href: icon.url,
              title: icon.name,
              target: '_blank',
              class: icon.icon + ' no-underline',
              'aria-hidden': true,
              tabindex: -1,
            },
            [h('i', { class: 'px-[0.25ch]' })],
          ),
        );
      },
    },
  });
