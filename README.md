# Daily Stitch

A beautiful, lightweight video journal Progressive Web App (PWA). Capture quick moments throughout your day and instantly stitch them into a single movie.

## Features
- **Local-first & Private:** No accounts, no cloud uploads. All clips are stored locally in your browser's IndexedDB.
- **Offline Stitching:** Uses native browser APIs (MediaRecorder, Canvas, Web Audio) to stitch your clips together on your device.
- **Zero Friction:** One tap to record 3s clips.
- **Filters:** Apply beautiful filters (Warm, Cool, B&W, Vivid, Fade) to your day.
- **Drag & Drop:** Reorder your clips before stitching.
- **PWA:** Installable on iOS and Android for a native app feel.

## How to use
1. **Record:** Tap "Record 3s" to save quick snapshots of your day.
2. **Preview & Manage:** Tap a clip to preview it, long-press to reorder, or tap the 'x' to delete.
3. **Stitch & Save:** Tap "Stitch & Save" to merge all clips into a single video diary. Once exported, you can download it or share it natively. The local clips are then cleared for tomorrow.

## Setup
Since the app relies entirely on standard Web APIs, there is no build step or server required! 
You can serve the directory using any simple static HTTP server.

For example, using Python:
```bash
python3 -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

## Philosophy
* One day, one stitch
* Fully local, zero tracking
* Minimal surface, maximum delight