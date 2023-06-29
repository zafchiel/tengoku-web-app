export default async function handler(req, res) {
  const slug = await req.body.slug
  const response = await fetch(
    `https://api.docchi.pl/v1/episodes/find/${slug}/1`
  )
  const data = await response.json()
  res.status(200).json(data)
}
