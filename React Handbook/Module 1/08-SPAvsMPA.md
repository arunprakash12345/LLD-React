# SPA vs MPA

## MPA (Multi Page Application)

- Multiple HTML pages.
- Every navigation requests a new HTML document.
- Browser reloads the page.
- Server returns HTML for each route.

---

## SPA (Single Page Application)

- Single HTML page.
- JavaScript updates the UI dynamically.
- No full page reload after the initial load.
- Server usually returns JSON data instead of new HTML.

---

## Why SPAs Feel Faster

- Initial load downloads the application.
- Subsequent navigation updates only the UI.
- Less work for the browser after the first load.

---

## Key Takeaways

- React is not an SPA.
- React is commonly used to build SPAs.
- Client-side routing is handled by libraries such as React Router.
- SPAs improve the user experience by avoiding full page reloads.


## Request Flow

### MPA

Browser
↓
Request `/profile`
↓
Server
↓
Returns `profile.html`
↓
Browser reloads the page

---

### SPA

Browser
↓
Request `index.html` (only once)
↓
React loads
↓
User navigates
↓
API returns JSON
↓
React updates the UI
↓
No page reload