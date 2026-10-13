# SE2020 – MOCK Lab Test: MERN Item Manager (2 hours)

Set a 2-hour timer. Do NOT open the solution zip until time is up.

## Part A – Complete the project (30 marks) — target: 25 min
| # | Task | File |
|---|------|------|
| 1 | Connect to MongoDB using `MONGO_URI`; start server only after connecting; log errors | `backend/server.js` |
| 2 | `PUT /api/items/:id` – update, return updated doc, 404 if missing | `backend/routes/itemRoutes.js` |
| 3 | `DELETE /api/items/:id` – delete, 404 if missing | `backend/routes/itemRoutes.js` |
| 4 | Wire Edit (PUT) and Delete buttons in the UI | `frontend/src/App.jsx` |

## Part B – Extend with new fields (25 marks) — target: 30 min
Add these fields end-to-end:
- `category` – one of Electronics / Books / Clothing / Other (dropdown), default Other
- `quantity` – number, min 0
- `price` – number, min 0, shown as `Rs. 0.00`

Must work in: schema → POST → PUT → form inputs → edit pre-fill → list display.

## Part C – Local testing (10 marks) — target: 10 min
- Create `backend/.env` from `.env.example` with YOUR Atlas URI
- Atlas → Network Access → allow `0.0.0.0/0`
- `cd backend && npm install && npm run dev`
- `cd frontend && npm install && npm run dev`
- Create, edit, delete an item. Check the data appears in Atlas → Browse Collections.

## Part D – GitHub (10 marks) — target: 10 min
- One public repo containing both `backend/` and `frontend/`
- `.env` must NOT be committed (check `.gitignore`)
- At least 3 meaningful commits

## Part E – Deployment (25 marks) — target: 35 min
1. Backend → Railway or Render
   - Root directory: `backend` | Start: `npm start`
   - Env vars: `MONGO_URI` (PORT is injected by the host)
   - Open `<backend-url>/api/items` → must return JSON
2. Frontend → Netlify or Vercel
   - Base dir: `frontend` | Build: `npm run build` | Publish: `frontend/dist`
   - Env var: `VITE_API_URL=<backend-url>` (no trailing slash, no `/api`)
   - Redeploy AFTER setting the env var (Vite bakes it in at build time)
3. Open the live frontend → add/edit/delete works against the live backend

## Submission checklist
- [ ] GitHub repo URL (public)
- [ ] Live backend URL
- [ ] Live frontend URL
- [ ] New fields visible on the live site

## Common time-wasters (know these fixes)
- Atlas "connection timed out" → Network Access not open to `0.0.0.0/0`
- Railway `npm: not found` → Root Directory not set to `backend`
- Live frontend still calling localhost → env var set after build; trigger redeploy
- Mixed content / CORS error → backend must be `https://`, and `app.use(cors())` present
- Password with `@` or `#` in URI → URL-encode it, or use a simple password
