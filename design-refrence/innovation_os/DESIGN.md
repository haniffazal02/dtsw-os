---
name: Innovation OS
colors:
  surface: '#111317'
  surface-dim: '#111317'
  surface-bright: '#37393e'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#1a1c20'
  surface-container: '#1e2024'
  surface-container-high: '#282a2e'
  surface-container-highest: '#333539'
  on-surface: '#e2e2e8'
  on-surface-variant: '#e0c0b2'
  inverse-surface: '#e2e2e8'
  inverse-on-surface: '#2f3035'
  outline: '#a78b7e'
  outline-variant: '#584237'
  surface-tint: '#ffb693'
  primary: '#ffb693'
  on-primary: '#562000'
  primary-container: '#f37021'
  on-primary-container: '#541f00'
  inverse-primary: '#a04100'
  secondary: '#ffdb9d'
  on-secondary: '#412d00'
  secondary-container: '#feb700'
  on-secondary-container: '#6b4b00'
  tertiary: '#ddb7ff'
  on-tertiary: '#490080'
  tertiary-container: '#bb76ff'
  on-tertiary-container: '#48007d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbcb'
  primary-fixed-dim: '#ffb693'
  on-primary-fixed: '#341000'
  on-primary-fixed-variant: '#7a3000'
  secondary-fixed: '#ffdea8'
  secondary-fixed-dim: '#ffba20'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5e4200'
  tertiary-fixed: '#f0dbff'
  tertiary-fixed-dim: '#ddb7ff'
  on-tertiary-fixed: '#2c0051'
  on-tertiary-fixed-variant: '#6900b3'
  background: '#111317'
  on-background: '#e2e2e8'
  surface-variant: '#333539'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  container-max: 1440px
---

## Brand & Style
The design system embodies the "Innovation Operating System"—a high-performance environment for the next generation of builders. It balances the precision of an aerospace cockpit with the approachability of a creative studio. The aesthetic is rooted in **Modern Glassmorphism** and **Technical Minimalism**, prioritizing information density without sacrificing visual breathing room.

The visual narrative is defined by:
- **Human-Centric Tech:** Utilizing soft blurs and organic gradients to thaw the coldness of traditional "high-tech" interfaces.
- **Precision Engineering:** Sharp execution of clean lines and meticulous alignment, inspired by premium hardware interfaces.
- **Dynamic Energy:** Using light as a functional element—subtle glows and "active" states signify the constant movement of innovation.

## Colors
The palette is anchored in a deep **Charcoal/Deep Dark** foundation to allow the core "Energy" colors to vibrate. 

- **Primary Energy:** SNS Orange (#F37021) is the pulse of the system, used for critical actions and brand identity.
- **Gradients:** Use "Solar Gradients" (SNS Orange to Warm Yellow) for high-impact surfaces and progression indicators.
- **Support Glows:** Subtle Purple (#A855F7) and Cyan (#06B6D4) are used sparingly as background "atmospherics" or to categorize specific innovation tracks.
- **Typography & Surfaces:** Premium soft whites and light grays provide a high-contrast, legible layer against the dark backgrounds.

## Typography
The typography strategy employs a "Technical vs. Functional" pairing.

- **Headlines:** Space Grotesk provides a geometric, futuristic edge. Use tight letter-spacing and high contrast against background elements to establish immediate hierarchy.
- **Body:** Inter is the workhorse, ensuring maximum legibility for dense documentation and project descriptions.
- **Labels/Data:** Geist is used for metadata, status chips, and technical readouts to reinforce the "Operating System" vibe.

## Layout & Spacing
The layout follows a **Fixed-Width Grid** for desktop to maintain "Notion-like" clarity and a **Fluid Grid** for smaller breakpoints.

- **Grid System:** 12-column grid with generous 24px gutters. 
- **Rhythm:** An 8px linear scale (4px, 8px, 16px, 24px, 32px, 48px, 64px) ensures consistent vertical rhythm.
- **Structure:** Content is grouped into logical "modules" or "sections" separated by ample whitespace to prevent the technical aesthetic from feeling cluttered.
- **Mobile:** Reflow to a single-column layout with 20px side margins; use bottom-sheet drawers for complex interactions.

## Elevation & Depth
Depth is created through **Glassmorphism** and **Light Translucency** rather than traditional heavy shadows.

- **Base Layer:** Deep charcoal (#0F1115) solid background.
- **Surface Layer:** Semi-transparent dark cards (80% opacity) with a 20px backdrop blur and a 1px subtle white "inner-rim" stroke (10% opacity) to catch the light.
- **Floating Layer:** Modal windows and popovers feature a slightly lighter fill and a soft, diffused "SNS Orange" glow shadow when active.
- **Atmospheric Depth:** Use large, low-opacity radial gradients of purple or orange in the background to create a sense of three-dimensional space behind the UI planes.

## Shapes
The shape language is refined and consistent, leaning toward a "Rounded" aesthetic that feels approachable yet modern.

- **Cards & Containers:** 1rem (16px) corner radius.
- **Buttons & Inputs:** 0.5rem (8px) for a more structured, tool-like feel.
- **Status Pills:** Fully rounded (pill-shaped) to distinguish them from actionable buttons.
- **Icons:** Line-based icons with a 2px stroke and slightly rounded ends to match the typography.

## Components
- **Buttons:** Primary buttons use the Solar Gradient with white text. Secondary buttons are "ghost" style with a glass background and a thin orange border.
- **Floating Cards:** All cards should feature the glassmorphism effect. On hover, the 1px border should brighten, and a subtle "glow" should appear beneath the card.
- **Inputs:** Dark, recessed fields with a subtle 1px border. On focus, the border transitions to SNS Orange with a soft outer glow.
- **Navigation:** A docked, glassmorphic "Command Bar" or sidebar inspired by Linear, using high-contrast icons and subtle active-state highlights.
- **Micro-interactions:** Elements should feel tactile. Use 200ms spring transitions for hovers and scale-down effects (0.98x) for button presses to simulate physical depth.
- **Innovation Chips:** Categorical tags using the support colors (Purple/Cyan) with a low-opacity background fill and high-contrast text.