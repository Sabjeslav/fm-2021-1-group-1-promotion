import {
  faFacebookF,
  faTwitter,
  faVk,
} from '@fortawesome/free-brands-svg-icons';
export const SOCIAL_ICONS = {
  'www.facebook.com': faFacebookF,
  'twitter.com': faTwitter,
  'vk.com': faVk,
};

const THEMES = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
};

if (!localStorage.getItem('theme')) localStorage.setItem('theme', THEMES.LIGHT);

const DEFAULT_THEME = localStorage.getItem('theme');

export const CONSTANTS = {
  THEMES,
  DEFAULT_THEME,
};
