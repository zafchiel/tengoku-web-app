import { ANIME } from "@consumet/extensions"

export default async function handler(req, res) {
  const slug = req.body.slug

  const anime = new ANIME.Gogoanime()

  const data = await anime.fetchEpisodeServers(slug)
  res.status(200).json(data)
}
