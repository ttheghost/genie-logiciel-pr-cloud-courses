# Design System Specification: The Academic Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Curator"**

This design system rejects the "app-like" clutter of modern EdTech in favor of a high-end editorial experience. It is designed to feel like a prestigious university press or a curated digital archive. We move beyond the "template" look by utilizing intentional asymmetry, expansive white space, and a sophisticated interplay between structured UI and fluid typography.

The "Digital Curator" does not shout; it organizes. By breaking the rigid 12-column grid with overlapping elements—such as a serif headline partially floating over a container—we create a sense of depth and scholarly intent. The goal is to transform "educational software" into an "intellectual environment."

---

## 2. Colors & Surface Philosophy
The palette is rooted in the "Oxford Navy" (`primary: #002045`) and "Architectural Slate" (`secondary: #545f72`), balanced by a breathable, high-key background.

### The "No-Line" Rule
Standard 1px solid borders are strictly prohibited for sectioning. Definition must be achieved through **background color shifts**. For example, a `surface-container-low` section should sit directly against a `surface` background. This creates a "milled" look where components feel carved out of the interface rather than pasted on top.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, premium paper stocks.
*   **Base:** `surface` (#f7f9fb) for the main canvas.
*   **Sub-sections:** Use `surface-container-low` (#f2f4f6) to group related content.
*   **Active/Focused Elements:** Use `surface-container-lowest` (#ffffff) to make cards "pop" against the slightly greyed background.

### The "Glass & Gradient" Rule
To avoid a flat, "Bootstrap" appearance, use **Glassmorphism** for floating navigation and top bars:
*   **Token:** `surface-container-highest` at 80% opacity with a `20px` backdrop-blur.
*   **Signature Texture:** Use a subtle linear gradient (Top-Left: `primary` to Bottom-Right: `primary_container`) for Hero backgrounds or primary CTAs. This adds a "silk-finish" depth that flat hex codes cannot replicate.

---

## 3. Typography: The Scholarly Voice
We utilize a bi-font system to separate "Interaction" from "Absorption."

| Role | Token | Font Family | Size | Intent |
| :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-lg` | Noto Serif | 3.5rem | Editorial impact; should use tight letter-spacing (-0.02em). |
| **Headline**| `headline-md`| Noto Serif | 1.75rem | Content headers; the "voice" of the document. |
| **Title**   | `title-lg`   | Inter | 1.375rem | UI-level headings; bold and authoritative. |
| **Body**    | `body-lg`    | Inter | 1rem | Functional text; high legibility. |
| **Labels**  | `label-md`   | Inter | 0.75rem | Metadata and micro-copy; always uppercase with 0.05em tracking. |

**Editorial Note:** Long-form markdown content should exclusively use **Noto Serif** with a line height of `1.6` and a max-width of `65ch` (characters) to ensure maximum reading comprehension.

---

## 4. Elevation & Depth
In this system, depth is a function of light and tone, not structural lines.

*   **The Layering Principle:** Place a `surface-container-lowest` (#ffffff) card on a `surface-container-low` (#f2f4f6) background. The `0.125rem` difference in tone provides all the "lift" required.
*   **Ambient Shadows:** For floating elements (e.g., Modals), use a "Deep-Blur" shadow: 
    *   `box-shadow: 0 20px 40px rgba(25, 28, 30, 0.06);` 
    *   The shadow must be tinted with the `on-surface` color to feel natural.
*   **The "Ghost Border":** If accessibility requires a border, use the `outline_variant` (#c4c6cf) at **20% opacity**. This creates a suggestion of a boundary without cluttering the visual field.

---

## 5. Components

### Buttons & Chips
*   **Primary Button:** `primary` background, `on-primary` text. Use `DEFAULT` (8px) rounding. To add "Soul," apply a 10% brightness hover state rather than a color change.
*   **Secondary/Tertiary:** Avoid boxes. Use `label-md` typography with an underline on hover or a subtle `surface-container-high` background.
*   **Chips:** Use `secondary_container` with `on_secondary_container` text. These should be `full` rounded (pills) to contrast against the 8px corners of the rest of the system.

### Input Fields
*   **Styling:** No bottom-line only. Use a solid `surface-container-high` background with an `8px` corner radius. 
*   **Focus State:** Shift the background to `surface-container-lowest` and add a `2px` `primary` ghost border (20% opacity).

### Cards & Lists
*   **Forbid Dividers:** Do not use horizontal lines to separate list items. Use `8px` of vertical white space (`spacing-2`) and a subtle hover shift to `surface-container-low`.
*   **The "Scholarly Margin":** Use asymmetrical padding in cards. For example, `padding-top: 2rem; padding-bottom: 2.5rem;` to give the content "weight" at the bottom.

### Supplemental Component: The "Citation Block"
*   **Context:** Unique to this academic system.
*   **Design:** A vertical `2px` bar of `surface_tint` on the left, a `surface-container-low` background, and `body-sm` typography. Used for references, footnotes, or "Further Reading" callouts.

---

## 6. Do’s and Don’ts

### Do:
*   **Embrace the Asymmetry:** Let text-heavy columns breathe. If a container is 8 units wide, leave the remaining 4 units empty to create "Intellectual Breathing Room."
*   **Layer Surfaces:** Always ask, "Can I define this area with a background color shift instead of a line?"
*   **Respect the Serif:** Use Noto Serif for anything meant to be *read* (insights, articles, quotes). Use Inter for anything meant to be *done* (buttons, settings, navigation).

### Don't:
*   **Don't Use Pure Black:** Never use #000000. Use `on_surface` (#191c1e) for text to maintain a premium, ink-on-paper feel.
*   **Don't Over-Round:** Stick to the `DEFAULT` (8px) for cards and inputs. Over-rounding (circles) feels "toy-like" and erodes the scholarly authority.
*   **Don't Use High-Contrast Borders:** 100% opaque `outline` tokens will make the system feel dated and "boxed in." Keep borders "ghosted" or non-existent.