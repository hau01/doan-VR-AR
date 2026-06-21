# API Documentation

## Base URL
- `http://localhost:5000`

## Endpoints
- `GET /` → health check
- `GET /api/scenes` → list scenes
- `GET /api/hotspots` → list hotspots
- `GET /api/media` → list media assets

## Example response
```json
{
  "id": 1,
  "title": "Scene 1",
  "description": "Welcome to the first scene",
  "imageUrl": "/images/360/scene-1.jpg"
}
```
