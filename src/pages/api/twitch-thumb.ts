import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ url }) => {
  const videoId = url.searchParams.get('id');
  if (!videoId || !/^\d+$/.test(videoId)) {
    return new Response(JSON.stringify({ error: 'Invalid ID' }), { status: 400 });
  }

  const clientId = import.meta.env.TWITCH_CLIENT_ID;
  const clientSecret = import.meta.env.TWITCH_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    return new Response(JSON.stringify({ error: 'Not configured' }), { status: 500 });
  }

  try {
    const tokenRes = await fetch('https://id.twitch.tv/oauth2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'client_credentials',
      }),
    });
    const { access_token } = await tokenRes.json();
    if (!access_token) throw new Error('No token');

    const videoRes = await fetch(`https://api.twitch.tv/helix/videos?id=${videoId}`, {
      headers: {
        'Client-ID': clientId,
        'Authorization': `Bearer ${access_token}`,
      },
    });
    const { data } = await videoRes.json();
    if (!data?.length) {
      return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
    }

    const thumbUrl = data[0].thumbnail_url
      .replace('%{width}', '320')
      .replace('%{height}', '180');

    return new Response(JSON.stringify({ url: thumbUrl }), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Failed' }), { status: 500 });
  }
};
