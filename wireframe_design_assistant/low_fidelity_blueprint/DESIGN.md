---
name: Low-Fidelity Blueprint
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#4c4546'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#585f6c'
  on-secondary: '#ffffff'
  secondary-container: '#dce2f3'
  on-secondary-container: '#5e6572'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1b1b'
  on-tertiary-container: '#848484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#dce2f3'
  secondary-fixed-dim: '#c0c7d6'
  on-secondary-fixed: '#151c27'
  on-secondary-fixed-variant: '#404754'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474747'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  mono-sm:
    fontFamily: Courier Prime
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  sidebar-width: 240px
---

## Brand & Style
The design system focuses on a **Low-Fidelity Minimalist** aesthetic, prioritizing architectural clarity over visual decoration. It is designed to serve as a high-functioning wireframe that allows stakeholders to focus on content hierarchy, user flow, and functional density.

The style avoids shadows, gradients, and vibrant colors. Instead, it utilizes **Bold Outlines** and a **Structured Grid** to define the interface. The emotional response is intended to be objective, efficient, and analytical, making it equally effective for consumer-facing booking flows and dense administrative data management.

## Colors
The palette is strictly grayscale to eliminate aesthetic bias. 

- **Primary (#000000):** Reserved for high-priority text, primary action buttons, and active states.
- **Secondary (#6B7280):** Used for supporting text, icons, and secondary information.
- **Neutral (#F9FAFB):** Provides the background for the main canvas.
- **Surface (#FFFFFF):** Used for cards, modals, and input fields to differentiate from the background.
- **Border (#D1D5DB):** The structural backbone of the design system. Every interactive element or container uses this for definition.

## Typography
This design system uses **Inter** for all functional roles to ensure maximum legibility and a systematic feel. 

- **Headlines:** Use high weight (600-700) to create clear section breaks.
- **Body:** Standardized at 16px for general content and 14px for metadata/admin tables.
- **Labels:** Uppercase styles are utilized for table headers and small captions to distinguish them from interactive text.
- **Mono:** A secondary monospaced font is used for IDs, ticket codes, or technical data in the admin dashboard.

## Layout & Spacing
The layout follows a strict 8pt grid system, aligned with standard Tailwind CSS spacing scales.

- **User-Facing:** Uses a **Fixed Grid** (max 1280px) centered on the screen. Movie grids utilize a 12-column system, reflowing from 1 column on mobile to 4-6 columns on desktop.
- **Admin/Staff:** Uses a **Fluid Layout** with a fixed-width left sidebar (240px). The main content area expands to fill the viewport, utilizing flexible flexbox/grid containers for dashboard widgets.
- **Padding:** Standardized at 16px (p-4) for cards and 24px (p-6) for page sections to maintain a clean, airy feel despite the heavy use of borders.

## Elevation & Depth
This system rejects shadows in favor of **Tonal Layers** and **Hard Outlines**.

- **Level 0 (Background):** Gray-50.
- **Level 1 (Card/Surface):** White with a 1px Border (Gray-300).
- **Level 2 (Active/Modal):** White with a 2px Border (Black) to denote focus or high priority.
- **Interaction:** Hover states are indicated by a subtle background shift (Gray-100) or a thickness change in the border, never by elevation or glow.

## Shapes
The design system uses a **Soft** shape language. Elements feature a 0.25rem (4px) corner radius, which provides just enough visual comfort to prevent the UI from feeling aggressive while maintaining a professional, structured appearance. 

- **Media Placeholders:** Use a crossed-box pattern (X-frame) to indicate image placement without distracting from the layout.
- **Badges:** Use slightly more rounded corners (rounded-lg) to distinguish them from buttons.

## Components

### 1. Buttons
- **Primary:** Solid black background with white text. No rounded-full (use rounded-sm).
- **Secondary:** White background with a 1px black border.
- **Ghost:** No background or border, used for navigation items.

### 2. Movie Cards
- **Structure:** 2:3 aspect ratio placeholder box at the top, followed by Title (Headline-sm), Genre (Body-sm/Secondary color), and a full-width Primary button for "Book Now".

### 3. Data Tables (Admin)
- **Header:** Gray-100 background, 1px border-bottom, Label-md typography.
- **Rows:** 1px border-bottom, high contrast text. Hover state triggers a Gray-50 background.
- **Status Badges:** Small rectangles with 1px borders. Text defines status (e.g., [ PAID ], [ PENDING ]).

### 4. Input Fields
- **Style:** 1px border (Gray-300), 12px horizontal padding. 
- **Focus:** Border changes to 1px Black. 
- **Placeholders:** Text in Gray-400.

### 5. Sidebars
- **User Booking Sidebar:** Anchored to the right, white background, heavy left border (2px). Summarizes seat selection and price.
- **Admin Navigation:** Anchored to the left, light gray background, list items with clear vertical spacing.

### 6. Placeholders
- **Icons:** Represented by 24x24px squares with a diagonal slash.
- **Avatars:** Circles with a simple letter or generic user icon outline.