---
title: "Life"
description: "Photography, travel, and things I do away from the lab."
type: gallery
cascade:
  type: gallery
  # Publish only the sizes the page actually links to. Hugo copies every bundle
  # resource by default, which shipped all 21 full-size Aletsch originals (95MB)
  # that nothing references — the lightbox links the 2000px WebP, not the source.
  build:
    publishResources: false
kinds:
  - id: hobby
    icon: "🏃"
    label: "Hobbies"
  - id: travel
    icon: "🗺️"
    label: "Travel"
  - id: photography
    icon: "📷"
    label: "Photography"
---

Things I do away from the desk.
