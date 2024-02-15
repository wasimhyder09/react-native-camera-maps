const GOOGLE_API_KEY = 'joiajdsfj';
const GOOGLE_API_SIGNATURE = 'iuwoerj09u99';

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}&signature=${GOOGLE_API_SIGNATURE}`;
  return imagePreviewUrl;
}