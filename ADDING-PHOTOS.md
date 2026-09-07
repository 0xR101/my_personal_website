# Adding talks, seminars, conferences, visits and life entries

Every entry is **one folder** containing an `index.md` and its photos. Hugo
discovers the images automatically — there is no list of image paths to keep
in sync anywhere.

## The whole workflow

```sh
hugo new experience/aps-march-meeting-2026     # creates the folder + index.md
cp ~/Photos/aps/*.jpg content/experience/aps-march-meeting-2026/
```

That is it. Commit and push; GitHub Actions rebuilds and deploys.

Use `hugo new life/<slug>` for the Life section instead.

## What a folder looks like

```
content/experience/aps-march-meeting-2026/
    index.md          <- front matter (all fields optional)
    01-talk.jpg       <- filenames sort the grid
    02-poster.jpg
    03-dinner.jpg
```

## Front matter

```yaml
---
title: "APS March Meeting 2026"
date: 2026-03-04
kind: "conference"            # talk | seminar | conference | visit
location: "Los Angeles, CA"
description: "Presented our results on spin qubit coherence."
---

Optional prose. Markdown, LaTeX ($E = mc^2$) and links all work here.
```

Every field is optional. An entry with a completely empty `index.md` still
renders: the title falls back to the folder name (`aps-march-meeting-2026`
becomes "Aps March Meeting 2026") and the date falls back to the file's
modification time. Setting `title:` explicitly is still worth one line — it is
what browser tabs and site search show.

An entry with no `kind:` lands in an "Other" group at the bottom of the page.

## Changing the groups

Groups and their order live in one place per section — `kinds:` in
`content/experience/_index.md` and `content/life/_index.md`:

```yaml
kinds:
  - id: talk
    label: "Talks"
  - id: conference
    label: "Conferences"
```

Reorder, rename or add entries there. Nothing else needs to change.

## Photo captions

Optional. Add a `resources:` block to the entry's `index.md`:

```yaml
resources:
  - src: "01-talk.jpg"
    params:
      caption: "Presenting in Session B42"
```

## Notes

- Thumbnails and WebP versions are generated at build time and cached in
  `resources/_gen/`. Do not commit that directory.
- Clicking a photo opens a lightbox (arrow keys navigate, Esc closes). With
  JavaScript disabled the thumbnail is still a link to the full-size image.
- `.jpg`, `.png`, `.gif`, `.webp`, `.tif` all work. SVGs are skipped — Hugo
  cannot resize them.
- Photos in these folders are also published at their full size, since the
  lightbox links to them. Do not put anything private in an entry folder.

---

## Demo content — delete when you are done with it

Every folder starting with `demo-` is placeholder content with generated
numbered images, added so you can see the layout working. It covers all four
Experience kinds, all three Life kinds, captions, tags, prose, singular vs
plural photo counts, an entry with no `kind:` (falls into "Other"), and an
entry whose `index.md` is completely empty.

Remove all of it in one command:

```sh
rm -rf content/experience/demo-* content/life/demo-*
```

The two real Experience entries (`iqc-waterloo-residency`,
`nccr-spin-collaboration`) are not prefixed and will survive that.
