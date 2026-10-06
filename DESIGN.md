# Switch 2 Travel — Departure Glow

Visual theme for a premium, fast travel site. Personality: trustworthy, effortless, energetic. The logo is a toggle with a plane taking off — flip a switch and you are on your way.

Tokens live in `tailwind.config.js` and as CSS variables in `src/app/globals.css`. Semantic surfaces (`surface`, `ink`, `border`, `brand-sky-50`) are variables so the header toggle can restyle them. Navy, blue and sunrise hues stay fixed.

## Color

| Token | Hex | Use |
| --- | --- | --- |
| `brand-navy-900` | `#0B1437` | Footer, dark sections, photo overlays |
| `brand-navy-700` | `#1B2A5C` | Headings on light surfaces, toggle body |
| `brand-blue-600` | `#1272BB` | Links, solid buttons, eyebrow text on white |
| `brand-blue-500` | `#2B6CD0` | Hover and active for blue controls |
| `brand-sky-400` | `#3E94D1` | Eyebrows on navy, icons, focus ring |
| `brand-sky-50` | `#EEF6FC` | Soft section bands |
| `brand-red-500` | `#D93A2B` | Plane, errors, sunrise start |
| `brand-orange-500` | `#F7941D` | Plane, icon highlights |
| `brand-amber-400` | `#FDB43F` | Badges, script accents on navy, stars |
| `ink-900` | `#0F172A` | Body text |
| `ink-600` | `#475569` | Muted text |
| `surface` | `#FFFFFF` | Cards, header, forms |
| `surface-alt` | `#F7FAFD` | Alternate bands |
| `border` | `#E2E8F0` | Hairlines (`border-border`) |

Gradients:

- `bg-sunrise` — `linear-gradient(135deg, #D93A2B 0%, #F7941D 55%, #FDB43F 100%)`
- `bg-deep-sky` — `linear-gradient(135deg, #0B1437 0%, #1B2A5C 55%, #1272BB 100%)`

Balance a page near 60% white or sky-50, 25% navy or blue, 15% sunrise.

### Contrast rules

- Primary CTAs are `.btn-sunrise` (sunrise plus a navy scrim, white bold type) or solid `bg-brand-blue-600`.
- Do not set orange or amber as text on white. Use those hues for fills, icons, stars and badges. Badge text on amber or sunrise is navy.
- Eyebrows on white use `text-brand-blue-600`. `brand-sky-400` is for navy backgrounds, icons and the focus ring — it misses AA as small text on white.
- Script accents (`font-display`) on white use blue-600. On navy they may use amber-400.
- Every control uses a 2px `brand-sky-400` focus ring.

Dark mode (`.dark` on `html`) swaps surface, ink, border and sky-50 only. Footer and photo heroes stay navy regardless.

## Type

Loaded with `next/font` (`display: swap`):

- Display: Lobster Two italic 700 — hero keywords, one accent word, big moments. Class `font-display`.
- Headings: Poppins 600/700. Class `font-heading`.
- Body and UI: Inter 400/500/600. Class `font-sans`.

Scale: h1 `clamp(2.5rem, 5vw + 1rem, 5rem)`, h2 `clamp(2rem, 3vw + 1rem, 3.25rem)`, body `1rem / 1.7`. Keep paragraphs inside `max-w-measure` (70ch).

Eyebrows: class `eyebrow` — uppercase, `tracking-[0.18em]`, semibold.

## Shape, depth, motion

- Pills (`rounded-pill`) for buttons, badges, inputs, toggles and the search bar.
- Cards `rounded-card` (1rem). Large photos `rounded-media` (1.5rem).
- Shadows `shadow-navy`, `shadow-navy-md`, `shadow-navy-lg` use `rgba(27, 42, 92, 0.12)` and deeper.
- Glass only on the booking bar: `bg-white/75`, `backdrop-blur-md`, `border-white/40`, `shadow-glass`. Pass `tone="glass"` to inputs and `tone="onLight"` to toggles so dark mode does not invert that panel.
- Primary buttons glide a plane icon on hover (`.plane-icon`).
- Motion is Framer Motion, 200–400ms, ease-out, `whileInView` with `once: true`. Parallax is limited to the home hero. `prefers-reduced-motion` disables transitions and the motion wrappers render static markup.
- Section joins use `WaveDivider` (`wave` or `diagonal`). `.flight-dots` is the dotted flight-path motif.

## Components (`src/components/ui`)

`Button`, `Badge`, `Card`, `SectionHeading`, `Toggle`, `Input`, `Select`, `Rating`, `Modal`, `Accordion`, `Skeleton`, `Toast`, plus `Container`, `Section`, `Price`, `FadeUp` and `WaveDivider`.

Each interactive component supports hover, `focus-visible`, active, disabled and `loading`.

```jsx
<Button href="/contact">Plan a trip</Button>
<Button variant="secondary">Talk to an expert</Button>
<Button variant="blue">Solid blue CTA</Button>
<Button variant="ghost" showPlane={false}>View all</Button>
<Button onDark variant="secondary">On a navy section</Button>

<SectionHeading eyebrow="Where to go" title="Destinations across" accent="India" />
<Toggle checked={on} onChange={setOn} label="Dark mode" />
```

`useToast()` requires `ToastProvider` (already in the root layout).

## Layout

- Container: `max-w-7xl`, `px-4 sm:px-6 lg:px-8`.
- Sections: `py-16 md:py-24`.
- Header is sticky, translucent, and shortens after a short scroll. Tap targets are at least 44px.
- WhatsApp and call sit fixed at the bottom right.
- Skip link targets `#main`.

## Imagery and trust

Full-bleed photos use a navy-to-transparent overlay. `next/image` serves AVIF/WebP; only the page hero uses `priority`. Icons are `lucide-react` at stroke `1.5`. Trust language is ratings, navy or sunrise badges, secure-payment marks, and grayscale partner wordmarks — not amber text on white.
