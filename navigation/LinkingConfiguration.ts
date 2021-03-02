import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          MainTab: {
            screens: {
              MainTabScreen: 'main',
            },
          },
          AboutTab: {
            screens: {
              AboutTabScreen: 'about',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
