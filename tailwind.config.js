/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        // DropMate brand palette — see BRAND_IDENTITY.md
        primary: {
          DEFAULT: '#00C896',
          dark: '#00A37A'
        },
        secondary: '#1A1A2E',
        accent: '#FFB400',
        bg: '#FAFAFA',
        surface: '#FFFFFF',
        ink: {
          DEFAULT: '#1A1A2E',
          muted: '#6B7280'
        },
        line: '#E5E7EB',
        state: {
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif']
      },
      fontSize: {
        display: ['32px', { lineHeight: '40px', fontWeight: '700' }],
        h1: ['24px', { lineHeight: '32px', fontWeight: '700' }],
        h2: ['20px', { lineHeight: '28px', fontWeight: '600' }],
        h3: ['18px', { lineHeight: '24px', fontWeight: '600' }],
        body: ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        caption: ['12px', { lineHeight: '16px', fontWeight: '500' }],
        button: ['16px', { lineHeight: '20px', fontWeight: '600' }]
      },
      borderRadius: {
        btn: '12px',
        card: '16px',
        modal: '20px'
      },
      boxShadow: {
        sm: '0 1px 2px rgba(26,26,46,0.06)',
        md: '0 4px 12px rgba(26,26,46,0.08)',
        lg: '0 12px 32px rgba(26,26,46,0.12)'
      }
    }
  },
  plugins: []
}
