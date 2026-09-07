# Adding talks, seminars, conferences, visits and life entries

Every entry is **one folder** containing an `index.md` and its photos. Hugo
discovers the images automatically — there is no list of image paths to keep
in sync anywhere.

## The whole workflow

```sh
hugo new research/aps-march-meeting-2026     # creates the folder + index.md
cp ~/Photos/aps/*.jpg content/research/aps-march-meeting-2026/
```

That is it. Commit and push; GitHub Actions rebuilds and deploys.

Use `hugo new life/<slug>` for the Life section instead.

## What a folder looks like

```
content/research/aps-march-meeting-2026/
    index.md          <- front matter (all fields optional)
    01-talk.jpg       <- filenames set the order down the page
    02-poster.jpg
    02-poster.md      <- optional commentary under that photo
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
`content/research/_index.md` and `content/life/_index.md`:

```yaml
kinds:
  - id: talk
    label: "Talks"
  - id: conference
    label: "Conferences"
```

Reorder, rename or add entries there. Nothing else needs to change.

## Adding text between photos

Photos stack vertically down the page, full width, in filename order — the
reader just scrolls. To write something under a particular photo, drop a
markdown file next to it with **the same name**:

```
content/life/film-photography/
    index.md
    01-photo.jpg
    01-photo.md      <- renders under photo 1
    02-photo.jpg     <- no .md, so no text
    03-photo.jpg
    03-photo.md      <- renders under photo 3
```

`01-photo.md` is plain markdown with no front matter — just write:

```markdown
First roll through the rangefinder after a full CLA. The light meter was
still off by about a stop, which you can see here.
```

Multiple paragraphs, **bold**, links and LaTeX all work, exactly as in a post.
Photos without a matching `.md` simply have no text under them.

Prose in the entry's own `index.md` still renders once at the top, above the
first photo — use that for an introduction.

### Short one-liners instead

For a single line, a `resources:` block in `index.md` avoids a separate file:

```yaml
resources:
  - src: "01-photo.jpg"
    params:
      caption: "Presenting in Session B42"
```

Both work; a sidecar `.md` wins if you somehow have both for one photo.

## Notes

- Thumbnails and WebP versions are generated at build time and cached in
  `resources/_gen/`. Do not commit that directory.
- Photos run full width down the page in filename order, keeping their own
  aspect ratio — portrait and landscape shots both display uncropped.
- Clicking a photo opens a lightbox (arrow keys navigate, Esc closes). With
  JavaScript disabled the photo is still a link to the full-size image.
- Section list pages still show a small square thumbnail per entry; that is
  cropped to 4:3 from the first photo.
- `.jpg`, `.png`, `.gif`, `.webp`, `.tif` all work. SVGs are skipped — Hugo
  cannot resize them.
- Photos in these folders are also published at their full size, since the
  lightbox links to them. Do not put anything private in an entry folder.
