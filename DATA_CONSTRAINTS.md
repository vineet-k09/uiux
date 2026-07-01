# Data Update & Content Constraints Guide

This guide is designed for content managers updating the JSON files in the `/data` directory. Since the frontend styles rely on specific grid structures, counts, and asset paths, following these constraints ensures the layout does not break.

---

## 1. Global & Home Page Text ([data/globals.json](file:///mnt/bridge/dev/internships/uiux/data/globals.json))

This file controls the text for the Hero section, Contact Us section, and Sticky Cards section.

### Hero Section (`hero`)
* **`pill`**: The tiny rounded pill text at the very top. Keep it short (2-4 words, e.g. "AI & Data Service Tower").
* **`titleLine1` & `titleLine2`**: Splitting the title into two lines maintains typography balance. Keep each line under 25 characters.
* **`subtitle`**: Max 250 characters to ensure it doesn't push action buttons below the fold on smaller laptop screens.

### Contact Us Section (`contactUs`)
* **`heading`**: Uppercase recommended (e.g., "LETS SHAPE WHATS NEXT - TOGETHER"). Keep it under 40 characters.
* **`subtitle`**: Max 250 characters.

### Sticky Cards Section (`stickyCardsData`)
* **Count Limit**: **Exactly 3 cards**. The vertical scroll pinning animation is custom-tailored to 3 cards. Adding more or fewer will break the scroll scroll-pin behavior.
* **Image Requirement**: Needs a local path to an image placed in the `public/` directory (e.g., `/sticky-cards/card_1.png`).
* **Text Limit**: Description should be around 100–130 characters so the text does not overflow the card container during animations.

---

## 2. Projects & Core Cards ([data/projects.json](file:///mnt/bridge/dev/internships/uiux/data/projects.json))

Controls the featured projects list and the grid cards.

### Cards Grid (`cards`)
* **Count Limit**: **Exactly 4 cards**. The CSS uses a `grid-cols-2 grid-rows-2` layout. Having more or fewer will leave blank spaces or cause visual misalignment.
* **Images**: Image paths (e.g., `/projects-new/innovation.jpg`) must exist in the `public/` folder.
* **Text Limit**: Keep `desc` under 120 characters so cards remain of identical height.

### Projects List (`projects`)
* **Count Limit**: **4 to 6 projects**. The scroll pinning matches the list height. Too many will make the section take too long to scroll.
* **Images**: Every project needs a background image `src` (e.g., `home_projects/1.png`) representing the image that gets pinned while hovering/focusing the project name.

---

## 3. Success Stories Slider ([data/successStories.json](file:///mnt/bridge/dev/internships/uiux/data/successStories.json))

Controls the expandable accordion slider cards.

* **Count Limit**: **3 to 5 stories**. Less than 3 looks empty; more than 5 will cause horizontal overflow and squish the collapsed cards (which are fixed at `220px` width).
* **Images**: Background image path (e.g., `success_stories/1.webp`). Images should have a vertical aspect ratio.
* **Text Limits**:
  * `challenge`, `solution`, and `result` should be kept under 100 characters each to fit comfortably inside the expanded panels (`800px` wide).

---

## 4. World Map & Statistics ([data/worldMap.json](file:///mnt/bridge/dev/internships/uiux/data/worldMap.json))

Controls the coordinates of lines connecting on the world map and the metrics strip at the bottom.

### Connections (`connectionDots`)
* **Structure**: Each dot needs a `start` and `end` coordinate containing valid latitude (`lat`: -90 to 90) and longitude (`lng`: -180 to 180).

### Statistics (`stats`)
* **Count Limit**: **4 to 6 entries**. These are arranged in a horizontal row. More than 6 will wrap tightly or cause unwanted horizontal scrollbars.
* **Values**: Keep `endValue` as a plain number (used for count-up animation) and use `suffix` (e.g. `+`, `%`, `/7`) for units.

---

## 5. Services and Domains ([data/services.json](file:///mnt/bridge/dev/internships/uiux/data/services.json))

Controls the services page tabs, headings, subtexts, and details.

### Domains (`domains`)
* **Colors**: Each domain requires a theme `"color"` in hex format (e.g. `"#E60000"`, `"#9C2AA0"`). This color dynamically styles the navigation indicators, borders, and hover states for that entire section.
* **Services Count**: **2 to 4 services** per domain works best.
* **Use Cases Count**: Each service displays its use cases in grid columns. **Exactly 2 use cases** per service are recommended so they fit side-by-side with the service title card.
* **Content Structure**: Every use case must contain `title`, `problem`, `solution`, and `impact` sections. Keep the text under 150 characters per section.
