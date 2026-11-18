/**
 * Worker entry. Static assets (the React app) are served by the assets
 * binding with SPA fallback; only /api/* requests reach this handler.
 * Add endpoints to `routes` as "METHOD /path".
 */
type Handler = (request: Request, env: Env) => Response | Promise<Response>

const routes: Record<string, Handler> = {
  'GET /api/health': () =>
    Response.json({ status: 'ok', time: new Date().toISOString() }),
}

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url)
    const handler = routes[`${request.method} ${pathname}`]

    if (handler) {
      try {
        return await handler(request, env)
      } catch (error) {
        console.error(error)
        return Response.json({ error: 'Internal error' }, { status: 500 })
      }
    }

    if (pathname.startsWith('/api/')) {
      return Response.json({ error: 'Not found' }, { status: 404 })
    }
    return new Response(null, { status: 404 })
  },
} satisfies ExportedHandler<Env>
