---
name: Future Foundations Tutoring
description: A qualified teacher's own whiteboard, with marker headings, one highlighted phrase and real parent notes taped up beside it.
colors:
  marker-black: "#191c24"
  graphite: "#474d5c"
  note-caption: "#3a3f4c"
  marker-blue: "#1d4ed8"
  marker-red: "#c81e3a"
  marker-green: "#0f7a4a"
  whatsapp-green: "#0b7a57"
  highlighter: "#ffe36b"
  board-white: "#fbfcfd"
  frame-aluminium: "#c7ccd4"
  wall-grey: "#e9ecf1"
  note-pink: "#ffb3c7"
  note-mint: "#9fe6d6"
  note-lilac: "#c9b8ff"
  note-apricot: "#ffc98a"
typography:
  display:
    fontFamily: "Kalam, cursive"
    fontSize: "clamp(2.4rem, 5.6vw, 4.4rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Kalam, cursive"
    fontSize: "clamp(2rem, 4.4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Kalam, cursive"
    fontSize: "1.85rem"
    fontWeight: 700
    lineHeight: 1.05
  annotation:
    fontFamily: "Kalam, cursive"
    fontSize: "1.15rem"
    fontWeight: 700
  quote:
    fontFamily: "Kalam, cursive"
    fontSize: "clamp(1.5rem, 3.2vw, 2.2rem)"
    fontWeight: 400
    lineHeight: 1.35
  lede:
    fontFamily: "Lexend, system-ui, sans-serif"
    fontSize: "1.12rem"
    fontWeight: 400
    lineHeight: 1.7
  body:
    fontFamily: "Lexend, system-ui, sans-serif"
    fontSize: "1.02rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Lexend, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
rounded:
  focus: "6px"
  board: "14px"
  button: "14px"
spacing:
  gutter: "clamp(1rem, 4vw, 2.5rem)"
  board-pad: "clamp(1.6rem, 5vw, 4rem)"
  section: "clamp(3rem, 7vw, 5rem)"
  grid-gap: "2.5rem"
  heading-gap: "1.6rem"
components:
  button-call:
    backgroundColor: "{colors.marker-blue}"
    textColor: "{colors.board-white}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "0.9rem 1.3rem"
  button-whatsapp:
    backgroundColor: "{colors.whatsapp-green}"
    textColor: "{colors.board-white}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "0.9rem 1.3rem"
  board:
    backgroundColor: "{colors.board-white}"
    textColor: "{colors.marker-black}"
    rounded: "{rounded.board}"
    padding: "{spacing.board-pad}"
  sticky-note:
    backgroundColor: "{colors.highlighter}"
    textColor: "{colors.marker-black}"
    padding: "1.4rem 1.2rem 1rem"
  nav-link:
    textColor: "{colors.graphite}"
    typography: "{typography.label}"
  dock-call:
    backgroundColor: "{colors.marker-blue}"
    textColor: "{colors.board-white}"
    padding: "1rem"
  dock-whatsapp:
    backgroundColor: "{colors.whatsapp-green}"
    textColor: "{colors.board-white}"
    padding: "1rem"
---

# Design System: Future Foundations Tutoring

## Overview

**Creative North Star: "The Teacher's Own Whiteboard"**

Every page is a classroom whiteboard that a real teacher has just written on. A glossy white board sits in an aluminium frame, hung on a cool grey wall; headings are written in marker, the one phrase that matters is swiped with a yellow highlighter, and parents' words are stuck up beside it on sticky notes held by masking tape. The hand is visible everywhere, but the running copy stays in a clear, highly legible sans so a parent on a mid-range phone can read it at a glance.

The mood is warm, plain and confident: a qualified teacher explaining things, not a premium brand selling them. Density is relaxed, with generous board padding and one idea per section. Decoration is always a classroom object doing a job (a tick confirms a credential, a sum shows a fee, an arrow points at the teacher), never ornament for its own sake. The confirmed rejection is the category default this replaced: a navy-and-gold "premium tutor" site with a split hero, icon cards and a testimonial carousel.

Motion is the act of writing: the highlighter draws across its phrase on load, the red arrow draws itself on, and sticky notes straighten when touched. With reduced motion, everything is shown already drawn.

**Key Characteristics:**
- White board in a 12px aluminium frame on a grey wall; the board is the hero and the closing call to action.
- Kalam bold marker for every heading and hand annotation; Lexend for all running copy.
- Four marker inks (black, blue, red, green) plus one highlighter yellow, each with a fixed job.
- Authored hand-drawn marks (highlighter, underline, tape, tick, plus, doodled arrow) as SVG masks, never glyphs.
- Paper objects (taped photo, sticky notes) sit slightly tilted and carry soft, real-world shadows.

## Colors

A classroom palette: neutral board, frame and wall greys, four marker inks with distinct jobs, a highlighter yellow and a small set of sticky-note pastels.

### Primary
- **Marker Blue** (marker-blue): the action ink. Call buttons, the call dock, the brand wordmark, the featured parent quote, fee answers with their double underline, the FAQ plus mark, in-prose links and the focus ring.

### Secondary
- **Marker Red** (marker-red): the teacher's correction pen. Doodled arrows and the question-mark doodle, the "your teacher!" note, the equals sign in fee sums, the default inked underline, the Nextdoor heart and an open FAQ mark.
- **Marker Green** (marker-green): the tick pen. Credential ticks, ticked area lists and the hero tick list.
- **WhatsApp Green** (whatsapp-green): reserved for the WhatsApp button and dock half, kept distinct from the tick green so the action never reads as a decoration.

### Tertiary
- **Highlighter Yellow** (highlighter): the one-phrase highlighter swipe, text selection, masking tape on the photo and the default sticky note and side note.
- **Sticky-note pastels** (note-pink, note-mint, note-lilac, note-apricot): parent-note backgrounds only, rotated in sequence with yellow.

### Neutral
- **Marker Black** (marker-black): headings and default text.
- **Graphite** (graphite): ledes, body paragraphs, captions, nav links, footer.
- **Note Caption** (note-caption): the name-and-area line on sticky notes, darker than graphite so it holds contrast on pastel paper.
- **Board White** (board-white): the writing surface and button text.
- **Frame Aluminium** (frame-aluminium): the board frame and the dashed FAQ dividers.
- **Wall Grey** (wall-grey): the page background the board hangs on.

### Named Rules
**The One Swipe Rule.** A highlighter swipe marks one phrase per board: the place in the H1 and the invitation in the closing board. Subject titles get the swipe only on hover or focus.

**The Ink Has A Job Rule.** Blue acts, red corrects and points, green ticks. Do not swap inks between those jobs.

## Typography

**Display Font:** Kalam (with cursive fallback)
**Body Font:** Lexend (with system-ui, sans-serif fallback)

**Character:** Kalam bold reads as a confident teacher's marker; Lexend is plain, open and built for reading ease, so the hand never costs legibility.

### Hierarchy
- **Display** (Kalam 700, clamp(2.4rem, 5.6vw, 4.4rem), 1.08): the keyword-bearing H1 on the hero board, balanced wrap. Subject pages step down to clamp(2.2rem, 5vw, 3.8rem).
- **Headline** (Kalam 700, clamp(2rem, 4.4vw, 3rem), 1.08): section headings on the open sheet; in long-form prose, clamp(1.8rem, 3.6vw, 2.5rem).
- **Title** (Kalam 700, 1.85rem, 1.05): subject names in the "what I teach" list; prose H3 at 1.55rem.
- **Annotation** (Kalam 700, 1.15 to 1.5rem): hand notes, tick lists, area lists, related links, age notes and the "your teacher!" label, coloured in a marker ink.
- **Quote** (Kalam 400, clamp(1.5rem, 3.2vw, 2.2rem), 1.35): the featured parent note, in marker blue.
- **Lede** (Lexend 400, 1.12rem, 1.7, max 52ch): hero introduction in graphite.
- **Body** (Lexend 400, 1.02rem, 1.65 to 1.75, max 64ch): paragraphs, FAQ answers, note text.
- **Label** (Lexend 600, 0.95rem): buttons, nav, FAQ questions (1.1rem), "read more" links.

### Named Rules
**The Marker Over Sans Rule.** Anything a teacher would write by hand (headings, ticks, notes, sums) is Kalam; anything a parent must read carefully (paragraphs, answers, captions) is Lexend.

**The Pen Note Below Rule.** Context for a heading, such as an age range, is written underneath it as a small tilted pen note (Kalam 700, 1.15rem, rotated -1.5deg, in the item's ink). Nothing sits above a heading as a label.

## Layout

Content is capped at 1240px and centred, with a fluid side gutter (gutter). The page alternates two planes: framed boards (hero and closing call to action) and open sheets that sit directly on the wall between them, separated by the section rhythm (section). Board interiors use board-pad.

The hero is a two-column grid (1.15fr / 0.85fr): headline, lede, actions and the Nextdoor line on the left; the taped photo with arrow, label and tick list on the right. Subject pages pair long-form prose (max 760px) with an aside holding a taped side note (1.6fr / 1fr). Lists use auto-fill grids: sticky notes at minmax(250px, 1fr), tick lists at minmax(11rem, 1fr), area lists at minmax(10rem, 1fr). The subject list is three columns.

At 900px and below the nav hides, the frame thins to 8px, and all two-column grids stack; the photo moves below the actions with the arrow and label re-anchored above it. Below 768px the header call link hides, the subject list goes to one column, the FAQ doodle hides, and a fixed two-part Call / WhatsApp dock appears at the bottom of the screen so calling is always one tap away.

## Elevation & Depth

Depth comes from physical objects, not interface layers. The board is a hung object with a lit inner edge and a long soft drop; paper on the board (the photo, sticky notes) casts a smaller shadow and is slightly rotated; buttons are lifted marker caps. Open sheets and text are flat.

### Shadow Vocabulary
- **Hung board** (`box-shadow: inset 0 0 0 2px #fff, 0 2px 4px rgba(25,28,36,.08), 0 24px 50px rgba(25,28,36,.16)`): framed boards only.
- **Taped photo** (`box-shadow: 0 3px 6px rgba(25,28,36,.12), 0 18px 34px rgba(25,28,36,.18)`): the teacher's photo in its white print border.
- **Paper note** (`box-shadow: 0 2px 3px rgba(25,28,36,.1), 0 12px 22px rgba(25,28,36,.12)`): sticky notes and side notes.
- **Button lift** (`box-shadow: 0 2px 4px rgba(25,28,36,.12), 0 8px 18px rgba(25,28,36,.12)`): call and WhatsApp buttons.

### Named Rules
**The Real Objects Rule.** Only things that would cast a shadow in a classroom get one: the board, paper stuck to it and buttons. Text, sheets and lists stay flat.

## Shapes

The board has gently rounded outer corners (14px) inside a thick aluminium frame; buttons share the same 14px softness. Paper is square-cornered: the photo print and sticky notes have no radius and are rotated a degree or two (photo 2deg, notes between -2deg and 2deg, side note 1.5deg). Hand marks are authored SVG with irregular geometry: a ragged highlighter that overshoots its word, a single rounded underline stroke, torn-edge masking tape, a slightly wobbly tick and plus. Dividers are dashed in frame grey. Icons are one authored family on a 24px grid with a 1.75 stroke and round caps and joins.

## Components

### Buttons
Tactile marker caps: solid, bold and slightly playful when touched.
- **Shape:** gently rounded (14px), icon plus label, 0.9rem by 1.3rem padding.
- **Call:** marker blue with white Lexend 600 text and the phone icon; always first.
- **WhatsApp:** WhatsApp green with white text and the WhatsApp icon; always second.
- **Hover:** lifts 2px and tips by -0.6deg over 0.2s on cubic-bezier(.16,1,.3,1).
- **Focus:** a 3px marker-blue outline offset 3px with 6px radius, shared by every interactive element.

### Board
- **Corner Style:** 14px outer radius.
- **Background:** board white inside a 12px frame-aluminium border (8px under 900px).
- **Shadow Strategy:** hung board (see Elevation & Depth).
- **Internal Padding:** board-pad.
- Used for the hero and the closing call to action only.

### Sticky Notes
- Square paper in yellow, pink, mint, lilac or apricot, rotated by a per-note tilt, paper-note shadow, Lexend text with a note-caption name line.
- Alternate notes carry a translucent white tape strip centred across the top edge.
- **Hover:** straightens to 0deg over 0.3s.
- The subject-page side note is the same object in highlighter yellow at 1.5deg.

### Taped Photo
The teacher's photo in a white print border (0.7rem), rotated 2deg, with two highlighter-yellow tape strips across the top corners. On the homepage a red doodled arrow draws on towards it and a red Kalam "your teacher!" note sits beside it; a green Kalam tick list follows underneath.

### Navigation
- **Header:** blue Kalam wordmark (1.35rem) on the wall, graphite Lexend 600 section links (0.95rem) that darken to marker black and underline on hover, and a call link with phone icon at the right. Links hide under 900px; the call link hides under 768px.
- **Dock:** under 768px, a fixed full-width two-cell bar at the bottom of the screen: blue Call, WhatsApp-green WhatsApp, white Lexend 600 text with icons.

### Subject List
Each subject is a link stack: a Kalam title, the age range as a tilted pen note in the item's ink underneath, then a graphite Lexend description. Inks rotate blue, red, green. On hover or focus the highlighter swipes behind the title.

### Fees As Sums
Each fee is written as a sum in Kalam: "1 hour at ..." in black, a red equals sign, and the price in marker blue with a 4px double underline, followed by a small Lexend note. Tabular numerals keep the answers aligned.

### FAQ
Native disclosure rows (max 820px) with dashed frame-grey dividers. Each question is Lexend 600 at 1.1rem with a hand-drawn blue plus; open, the plus rotates 45deg into a red cross. Answers are graphite Lexend indented under the question.

### Hand Marks
- **Highlighter swipe:** ragged yellow stroke behind text, drawn left to right over 1.1s on load.
- **Inked underline:** a single rounded marker stroke under a phrase, red by default, blue when set.
- **Ticks:** green authored tick icon before credentials and areas.

## Do's and Don'ts

### Do:
- **Do** write every heading and hand annotation in Kalam 700 and every paragraph in Lexend.
- **Do** keep blue for actions, red for pointing and correcting, and green for ticks.
- **Do** put Call first and WhatsApp second, and keep both reachable on every phone viewport through the dock.
- **Do** write context for a heading (ages, levels) beneath it as a tilted pen note in the item's ink.
- **Do** draw hand marks as authored SVG masks or inline SVG, and show them already drawn under reduced motion.
- **Do** give shadows only to the board, paper on it and buttons.

### Don't:
- **Don't** return to the navy-and-gold "premium tutor" look: split hero, icon cards or a testimonial carousel.
- **Don't** highlight more than one phrase per board.
- **Don't** place a label or tag line above a heading.
- **Don't** use emoji or font glyphs as icons; use the authored 1.75-stroke set.
- **Don't** use whatsapp-green for ticks or marker-green for the WhatsApp action.
- **Don't** set long-form copy in Kalam.
