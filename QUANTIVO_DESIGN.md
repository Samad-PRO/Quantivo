# Quantivo Design System

Background: #051424 | Primary: #c0c1ff violet | Tools accent: #fa8c00 amber
Cards: glassmorphism rgba(18,33,49,0.6) blur(16px) radius:16px
Buttons: pill 999px | violet for dashboard | amber for tools
Fonts: Space Grotesk Bold headlines | Inter 300 body | JetBrains Mono numbers
Animation: ease-out enters (cubic-bezier 0.16,1,0.3,1) | translateY(-3px) card hovers | never bounce
Scroll reveal: IntersectionObserver fadeUp 600ms staggered

## Color Tokens
- `--bg`: #051424 (deep navy — never pure black)
- `--primary`: #c0c1ff (violet — dashboard CTAs, active states, brand)
- `--amber`: #fa8c00 (tool CTAs, badges, warnings)
- `--surface`: rgba(18,33,49,0.6) (glassmorphism card background)
- `--border`: rgba(255,255,255,0.08) (card border)
- `--text`: #d5e4fa (primary text)
- `--muted`: #c7c5d0 (secondary text)
- `--green`: #00cc4b (income, positive, success)
- `--red`: #ff4433 (expense, negative, danger)

## Candy Tag Colors
- Groceries: #ff4433 (coral)
- Savings: #ffcc02 (yellow)
- Travel: #00acfe (blue)
- Income: #00cc4b (lime)
- Transport: #ff8833 (tangerine)
- Health: #cc44ff (purple)

## Typography Scale
- Display: Space Grotesk 700, 48px, tracking -0.02em
- Headline: Space Grotesk 600, 24px
- Body: Inter 300, 15-18px, line-height 1.5-1.6
- Data: JetBrains Mono 400-500, 14-16px

## Animation Rules (Emil Kowalski)
- Enters: ease-out cubic-bezier(0.16, 1, 0.3, 1)
- Exits: ease-in (faster than enter)
- On-screen movement: ease-in-out
- NEVER bounce / spring on production UI elements
- Card hover: translateY(-3px), transition 200ms ease-out
- Scroll reveal: opacity 0→1 + translateY(20px→0), 600ms, 50ms stagger
- Button active: scale(0.97), 100ms
- Duration limits: UI elements < 300ms, marketing can be longer
- Use CSS transitions not keyframes for rapidly-triggered elements

## Component Specs
### Glass Card
```css
background: rgba(18, 33, 49, 0.6);
backdrop-filter: blur(16px);
border: 1px solid rgba(255, 255, 255, 0.08);
border-radius: 16px;
```
### Violet Button (Dashboard CTA)
```css
background: #c0c1ff; color: #292b5e;
border-radius: 9999px; padding: 10px 24px;
transition: transform 200ms ease-out;
```
### Amber Button (Tool CTA)
```css
background: #fa8c00; color: #1a0f00;
border-radius: 9999px; padding: 10px 24px;
```
### Input Field
```css
background: rgba(1,15,31,0.6); border: 1px solid rgba(255,255,255,0.08);
border-radius: 16px; padding: 12px 16px;
focus: border-color #c0c1ff with 0 0 0 3px rgba(192,193,255,0.15) box-shadow
```
