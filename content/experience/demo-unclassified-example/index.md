---
title: "Entry With No Kind Set"
date: 2025-09-01
draft: false
location: "Somewhere"
description: "This entry deliberately omits `kind:`, so it falls into the 'Other' group at the bottom rather than disappearing."
---

There is no `kind:` field in this entry's front matter. It still renders — it
just lands in the **Other** group at the bottom of the section page. Add
`kind: "talk"` (or any id listed in `content/experience/_index.md`) to move it.
