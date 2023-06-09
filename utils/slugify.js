export default function slugify(str) {
  let slug = str.trim().toLowerCase()

  const accents = "àáäâèéëêìíïîòóöôùúüûñç"
  const nonAccents = "aaaaeeeeiiiioooouuuunc"

  for (let i = 0; i < accents.length; i++) {
    slug = slug.replace(new RegExp(accents[i], "g"), nonAccents[i])
  }

  slug = slug
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")

  return slug
}
