# Classic Esthetics & Spa — Fullstack scaffold

This scaffold contains a ready-to-edit Fullstack project (frontend + backend) prepared for deployment.

## Structure

```
classicestheticsspa_full/
  /frontend  -> Vite + React app
  /backend   -> Node + Express API (MongoDB local)
  /assets    -> logos and images you provided
```

## Quick start (local)

### Backend
```
cd backend
npm install
# copy .env.example to .env and set MONGO_URI if needed
npm run dev
```

### Frontend
```
cd frontend
npm install
npm run dev
```

## Deploy
- Frontend can be deployed to Vercel/Netlify/GitHub Pages (build output `dist/`)
- Backend can be deployed to Render/Heroku/Railway or a VPS

## Notes
- Calendly is embedded on the Home page and opens in the same tab
- i18n is configured with default Spanish (es.json)
- PayPal/Bizum integrations are left as server-side stubs (placeholders)
- Admin auth and full e-commerce flows need to be implemented (boilerplate and endpoints provided)
