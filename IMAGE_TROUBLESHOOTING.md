# 🖼️ Image Loading Troubleshooting Guide

## 🔍 Step 1: Check Browser Console

1. Open your browser
2. Press **F12** (Developer Tools)
3. Go to **Console** tab
4. Look for red error messages about images
5. Also check **Network** tab and filter by images

---

## ✅ Local Images (from `/indexassets/`)

### Files that should exist:
- `/indexassets/logo.png` ✓
- `/indexassets/3d-rendering-isometric-fdgdf 1 (1).png` ✓

### Test Local Images

**Check if files are accessible:**
1. Open in browser: `http://localhost:3000/indexassets/logo.png`
2. You should see the logo image
3. If not, files may be missing or inaccessible

### Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| **404 Error** | Check file exists in `public/indexassets/` |
| **Wrong path** | Path should be `/indexassets/filename.png` (starts with `/`) |
| **Spaces in filename** | Filenames with spaces work, but ensure exact spelling |
| **Browser cache** | Clear cache: Ctrl+Shift+Delete, then reload |

---

## 🌐 External Images (Unsplash & Pinimg)

### These images should load from URLs:
- `https://images.unsplash.com/photo-...`
- `https://i.pinimg.com/...`

### Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| **CORS Error** | External images should work, but check Network tab |
| **Slow loading** | Internet speed issue, images may take time |
| **404 on URL** | Image URL may be broken, try testing in new tab |
| **Mixed content** | If site is HTTPS, ensure all images are HTTPS |

### Test External Images

Try this URL in browser address bar:
```
https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85
```

If it works in browser, the issue is elsewhere.

---

## 🛠️ Step 2: Check Components

### Header Component (Logo)
**File:** `components/Header.js` (line 10)
```jsx
<img src="/indexassets/logo.png" ... />
```

**Check:**
- ✓ Path starts with `/`
- ✓ File exists in `public/indexassets/logo.png`

### About Component (3D Rendering)
**File:** `components/About.js` (line 14)
```jsx
<img src="/indexassets/3d-rendering-isometric-fdgdf 1 (1).png" ... />
```

**Check:**
- ✓ File name has spaces - that's ok
- ✓ Exact spelling matches file name

### Portfolio Component (External images)
**File:** `components/Portfolio.js` (lines 40-45)
```jsx
backgroundImage: `url('${card.image}')`
<img src={card.image} ... />
```

**Check:**
- ✓ Images from Unsplash URLs
- ✓ URLs are complete and valid

### Services Component (External images)
**File:** `components/Services.js` (lines 15-55)
```jsx
<img src={service.image} ... />
```

**Check:**
- ✓ Service images using Unsplash/Pinimg URLs

### Blog Component (External images)
**File:** `components/Blog.js` (lines 50+)
```jsx
<img src={blogs[0].image} ... />
```

**Check:**
- ✓ Blog images using Unsplash URLs

---

## 🔧 Step 3: Clear Cache & Restart

```bash
# 1. Stop dev server (Ctrl+C)

# 2. Clear Next.js cache
rm -r .next

# 3. Reinstall dependencies
npm install

# 4. Restart dev server
npm run dev
```

---

## 📋 Checklist

### Local Images
- [ ] `public/indexassets/` folder exists
- [ ] `logo.png` file exists (15 KB)
- [ ] `3d-rendering-isometric-fdgdf 1 (1).png` exists (407 KB)
- [ ] Image paths in components start with `/`
- [ ] Browser can access `http://localhost:3000/indexassets/logo.png`

### External Images
- [ ] Internet connection works
- [ ] Can access `https://images.unsplash.com/...` in new tab
- [ ] All URLs use HTTPS (not HTTP)
- [ ] URLs are complete (not truncated)

### Browser
- [ ] Cache cleared (Ctrl+Shift+Delete)
- [ ] Dev server restarted
- [ ] Page reloaded (F5 or Ctrl+R)
- [ ] No CORS errors in console (F12)

---

## 🐛 Common Error Messages

### "Failed to load image"
- Check image path is correct
- Verify file exists
- Try direct URL in browser

### "404 Not Found"
- Image doesn't exist in public folder
- Path is wrong (should start with `/`)
- File name spelling is incorrect

### "Mixed Content Error"
- Make sure all URLs use HTTPS
- Check if development server is HTTP or HTTPS

### "CORS Error"
- Usually not an issue with external CDNs
- Try accessing image URL directly in browser
- Clear browser cache

---

## ✅ What Should Work

After fixes:
- Logo appears in header ✓
- 3D rendering shows in About section ✓
- Portfolio images load ✓
- Service images display ✓
- Blog images visible ✓
- Footer logo shows ✓

---

## 💡 Quick Debug Tips

### 1. Check Image Element in DevTools
```
Press F12 → Inspector → Right-click image → Inspect
```
Look for `<img>` tag and verify:
- `src` attribute is correct
- `alt` text is present
- Size is set (width/height)

### 2. Check Network Tab
```
Press F12 → Network → Reload page → Filter "img"
```
Look for:
- ✓ Images with status 200 (loaded)
- ✗ Images with status 404 (not found)
- ✗ Images with status 0 or failed (blocked/error)

### 3. Test Direct URL
Copy image path and paste in browser address bar:
- `http://localhost:3000/indexassets/logo.png`
- Should show the image directly

---

## 📞 Still Not Working?

If images still aren't loading after these steps:

1. **Check console errors** - What exactly does it say?
2. **Verify file exists** - Manually check `public/indexassets/` folder
3. **Restart everything** - Kill server, clear cache, restart
4. **Test one image** - Remove all others and test just logo
5. **Check file permissions** - Ensure files are readable

---

**Last Updated:** 2026-09-15  
**Status:** Diagnostic guide for image loading issues
