// Shared HTML reporter for the prompt-iteration harnesses.
// Pass `--html` to a harness to write a self-contained report to scripts/out/
// and `--open` to also open it in the default browser.
import { writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// Light markdown: **bold** and ## headers, for coach output
const fmtBody = (s) =>
  esc(s)
    .replace(/^#{1,3}\s+(.+)$/gm, '<span class="h">$1</span>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

/**
 * @param {string} title - e.g. "coach" or "routine"
 * @param {Array<{name,subtitle?,body,warns:string[],status:'clean'|'warn'|'error'}>} cases
 * @param {{open?:boolean}} opts
 * @returns {string} path to the written HTML file
 */
export function writeReport(title, cases, { open = false } = {}) {
  const outDir = join(__dirname, 'out');
  mkdirSync(outDir, { recursive: true });
  const ts = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const file = join(outDir, `${title}-${ts}.html`);

  const clean = cases.filter((c) => c.status === 'clean').length;
  const warn = cases.filter((c) => c.status === 'warn').length;
  const err = cases.filter((c) => c.status === 'error').length;

  const cards = cases.map((c) => {
    const badge =
      c.status === 'error' ? '<span class="b err">error</span>'
      : c.status === 'warn' ? `<span class="b warn">⚠ ${c.warns.length}</span>`
      : '<span class="b ok">✓ clean</span>';
    const warnList = c.warns.length
      ? `<ul class="warns">${c.warns.map((w) => `<li>${esc(w)}</li>`).join('')}</ul>`
      : '';
    const promptBlock = c.prompt
      ? `<details class="prompt"><summary>input (what the user sends)</summary><pre>${esc(c.prompt)}</pre></details>`
      : '';
    return `<section class="case ${c.status}" data-status="${c.status}">
      <header><h2>${esc(c.name)}</h2>${badge}</header>
      ${c.subtitle ? `<div class="sub">${esc(c.subtitle)}</div>` : ''}
      ${promptBlock}
      <pre class="body">${fmtBody(c.body)}</pre>
      ${warnList}
    </section>`;
  }).join('\n');

  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)} report — ${ts}</title>
<style>
  :root { --bg:#0f1115; --surface:#171a21; --border:#2a2f3a; --text:#e6e8ec; --muted:#8b919e; --red:#FF4655; --green:#6BCF6B; --yellow:#E0A33E; }
  * { box-sizing:border-box; }
  body { margin:0; background:var(--bg); color:var(--text); font:14px/1.6 -apple-system,Segoe UI,Roboto,sans-serif; }
  .top { position:sticky; top:0; background:var(--bg); border-bottom:1px solid var(--border); padding:14px 24px; display:flex; align-items:center; gap:16px; flex-wrap:wrap; z-index:5; }
  .top h1 { font-size:18px; margin:0; text-transform:capitalize; }
  .pill { font-family:ui-monospace,Menlo,monospace; font-size:12px; padding:3px 9px; border-radius:20px; border:1px solid var(--border); }
  .pill.ok { color:var(--green); } .pill.warn { color:var(--yellow); } .pill.err { color:var(--red); }
  .top label { margin-left:auto; font-size:13px; color:var(--muted); cursor:pointer; user-select:none; }
  .wrap { max-width:900px; margin:0 auto; padding:24px; display:flex; flex-direction:column; gap:18px; }
  .case { background:var(--surface); border:1px solid var(--border); border-radius:10px; padding:18px 20px; }
  .case.warn { border-left:3px solid var(--yellow); } .case.error { border-left:3px solid var(--red); } .case.clean { border-left:3px solid var(--green); }
  .case header { display:flex; align-items:center; gap:12px; }
  .case h2 { font-size:16px; margin:0; font-family:ui-monospace,Menlo,monospace; }
  .b { font-family:ui-monospace,Menlo,monospace; font-size:11px; padding:2px 8px; border-radius:6px; }
  .b.ok { background:rgba(107,207,107,.14); color:var(--green); } .b.warn { background:rgba(224,163,62,.16); color:var(--yellow); } .b.err { background:rgba(255,70,85,.14); color:var(--red); }
  .sub { color:var(--muted); font-size:12.5px; font-style:italic; margin:6px 0 0; }
  pre.body { white-space:pre-wrap; word-wrap:break-word; background:var(--bg); border:1px solid var(--border); border-radius:8px; padding:14px 16px; margin:12px 0 0; font:13px/1.6 ui-monospace,Menlo,monospace; }
  pre.body .h { display:block; color:var(--red); font-weight:700; margin:10px 0 2px; }
  pre.body strong { color:#fff; }
  ul.warns { margin:12px 0 0; padding-left:20px; color:var(--yellow); font-size:13px; }
  details.prompt { margin-top:12px; border:1px solid var(--border); border-radius:8px; background:var(--bg); }
  details.prompt summary { cursor:pointer; padding:8px 14px; color:var(--muted); font-family:ui-monospace,Menlo,monospace; font-size:12px; }
  details.prompt[open] summary { border-bottom:1px solid var(--border); }
  details.prompt pre { white-space:pre-wrap; word-wrap:break-word; margin:0; padding:14px 16px; font:12px/1.55 ui-monospace,Menlo,monospace; color:var(--muted); max-height:420px; overflow:auto; }
  body.warnsonly .case.clean { display:none; }
</style></head><body>
<div class="top">
  <h1>${esc(title)} report</h1>
  <span class="pill ok">${clean} clean</span>
  <span class="pill warn">${warn} warn</span>
  <span class="pill err">${err} error</span>
  <span class="pill">${ts.replace('T', ' ')}</span>
  <label><input type="checkbox" onchange="document.body.classList.toggle('warnsonly',this.checked)"> warnings only</label>
</div>
<div class="wrap">${cards}</div>
</body></html>`;

  writeFileSync(file, html);

  if (open) {
    try {
      if (process.platform === 'win32') spawn('cmd', ['/c', 'start', '', file], { detached: true, stdio: 'ignore' }).unref();
      else if (process.platform === 'darwin') spawn('open', [file], { detached: true, stdio: 'ignore' }).unref();
      else spawn('xdg-open', [file], { detached: true, stdio: 'ignore' }).unref();
    } catch { /* ignore */ }
  }
  return file;
}
