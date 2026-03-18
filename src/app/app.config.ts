import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';

const JackGarciaPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#eef2eb',
      100: '#dce4d4',
      200: '#c2ceb1',
      300: '#9eaf8d',
      400: '#7a916a',
      500: '#526548',
      600: '#44543c',
      700: '#374330',
      800: '#2a3325',
      900: '#1d241a',
      950: '#0f130d'
    },
    colorScheme: {
      light: {
        surface: {
          0: '#fffaf4',
          50: '#fbf5ee',
          100: '#f4ece3',
          200: '#eaded1',
          300: '#dccab8',
          400: '#c4a68e',
          500: '#aa8369',
          600: '#866550',
          700: '#634a3a',
          800: '#413024',
          900: '#281d15',
          950: '#140d08'
        },
        primary: {
          color: '{primary.500}',
          contrastColor: '#fffaf4',
          hoverColor: '{primary.600}',
          activeColor: '{primary.700}'
        },
        highlight: {
          background: 'rgba(184, 111, 81, 0.14)',
          focusBackground: 'rgba(184, 111, 81, 0.2)',
          color: '#5c4337',
          focusColor: '#3d2c23'
        },
        text: {
          color: '#281f1a',
          hoverColor: '#1c1512',
          mutedColor: '#6a5f55',
          hoverMutedColor: '#4f463f'
        },
        content: {
          background: 'rgba(255, 250, 244, 0.9)',
          hoverBackground: '#f4ece3',
          borderColor: 'rgba(76, 88, 65, 0.16)',
          color: '#281f1a',
          hoverColor: '#1c1512'
        },
        formField: {
          background: 'rgba(255, 250, 244, 0.86)',
          disabledBackground: '#eaded1',
          filledBackground: 'rgba(244, 236, 227, 0.92)',
          filledHoverBackground: 'rgba(244, 236, 227, 0.92)',
          filledFocusBackground: 'rgba(255, 250, 244, 0.94)',
          borderColor: 'rgba(76, 88, 65, 0.18)',
          hoverBorderColor: 'rgba(76, 88, 65, 0.34)',
          focusBorderColor: '{primary.color}',
          invalidBorderColor: '#b45b45',
          color: '#281f1a',
          disabledColor: '#86796e',
          placeholderColor: 'rgba(88, 78, 71, 0.78)',
          invalidPlaceholderColor: '#9d4e3c',
          floatLabelColor: 'rgba(88, 78, 71, 0.78)',
          floatLabelFocusColor: '{primary.600}',
          floatLabelActiveColor: '#6a5f55',
          floatLabelInvalidColor: '#9d4e3c',
          iconColor: '#8f8175',
          shadow: '0 10px 28px rgba(36, 27, 21, 0.06)'
        }
      }
    },
    formField: {
      paddingX: '0.95rem',
      paddingY: '0.8rem',
      borderRadius: '1rem',
      focusRing: {
        width: '0',
        style: 'none',
        color: 'transparent',
        offset: '0',
        shadow: 'none'
      }
    },
    focusRing: {
      width: '2px',
      style: 'solid',
      color: 'rgba(82, 101, 72, 0.36)',
      offset: '3px',
      shadow: '0 0 0 0 transparent'
    }
  },
  components: {
    button: {
      root: {
        borderRadius: '999px',
        paddingX: '1.25rem',
        paddingY: '0.82rem',
        gap: '0.65rem',
        label: {
          fontWeight: '650'
        },
        primary: {
          background: '{primary.500}',
          hoverBackground: '{primary.600}',
          activeBackground: '{primary.700}',
          borderColor: '{primary.500}',
          hoverBorderColor: '{primary.600}',
          activeBorderColor: '{primary.700}'
        }
      }
    },
    accordion: {
      panel: {
        borderColor: 'rgba(76, 88, 65, 0.16)',
        borderWidth: '0 0 1px 0'
      },
      header: {
        padding: '1rem 0',
        fontWeight: '600',
        borderRadius: '0',
        borderWidth: '0',
        background: 'transparent',
        hoverBackground: 'transparent',
        activeBackground: 'transparent',
        activeHoverBackground: 'transparent',
        color: '#281f1a',
        hoverColor: '#1c1512',
        activeColor: '#1c1512',
        activeHoverColor: '#1c1512',
        toggleIcon: {
          color: '#526548',
          hoverColor: '#374330',
          activeColor: '#374330',
          activeHoverColor: '#374330'
        }
      },
      content: {
        background: 'transparent',
        color: '#6a5f55',
        padding: '0 0 1rem 0',
        borderWidth: '0'
      }
    },
    carousel: {
      indicatorList: {
        padding: '1.2rem 0 0',
        gap: '0.5rem'
      },
      indicator: {
        width: '2.75rem',
        height: '0.45rem',
        borderRadius: '999px'
      }
    },
    timeline: {
      event: {
        minHeight: '6rem'
      },
      eventMarker: {
        size: '1.15rem',
        borderRadius: '50%',
        borderWidth: '2px',
        background: 'rgba(255, 250, 244, 0.96)',
        borderColor: 'rgba(76, 88, 65, 0.18)',
        content: {
          size: '0.4rem',
          borderRadius: '50%',
          background: '#b86f51',
          insetShadow: '0 0 0 0 transparent'
        }
      },
      eventConnector: {
        color: 'rgba(76, 88, 65, 0.18)',
        size: '2px'
      }
    }
  }
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      ripple: false,
      theme: {
        preset: JackGarciaPreset,
        options: {
          darkModeSelector: false
        }
      }
    })
  ]
};
