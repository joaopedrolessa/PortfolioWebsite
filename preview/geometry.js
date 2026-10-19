// Decorative wireframes: local rendering, no dependencies or network requests.
(() => {
  const hero = document.querySelector('.hero');
  const canvas = document.createElement('canvas');
  canvas.className = 'geometry-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  hero.prepend(canvas);
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const phi = (1 + Math.sqrt(5)) / 2;
  const vertices = [];
  for (const a of [-1, 1]) for (const b of [-phi, phi]) {
    vertices.push([0, a, b], [a, b, 0], [b, 0, a]);
  }
  const edges = [];
  vertices.forEach((a, i) => vertices.forEach((b, j) => {
    if (j > i && Math.abs(Math.hypot(...a.map((v, k) => v - b[k])) - 2) < 0.01) edges.push([i, j]);
  }));
  const shapes = [
    { x: .48, y: .23, size: 49, phase: .4, speed: .14 },
    { x: .63, y: .16, size: 34, phase: 2.2, speed: -.19 },
    { x: .51, y: .57, size: 28, phase: 4.1, speed: .23 }
  ];
  let width = 0, height = 0, frame = 0, visible = true;
  let elapsed = 0, previous = null;
  let seed = 84;
  const random = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  const particles = Array.from({length: 150}, () => ({
    x: random(), y: random(), depth: .25 + random() * .75,
    radius: .35 + random() * 1.1, speed: .003 + random() * .009,
    phase: random() * Math.PI * 2
  }));
  const target = {x: 0, y: 0, scroll: 0};
  const offset = {x: 0, y: 0, scroll: 0};
  hero.addEventListener('pointermove', event => {
    if (event.pointerType !== 'mouse' || reduced.matches) return;
    const rect = hero.getBoundingClientRect();
    target.x = ((event.clientX - rect.left) / rect.width - .5) * 36;
    target.y = ((event.clientY - rect.top) / rect.height - .5) * 26;
  });
  hero.addEventListener('pointerleave', () => { target.x = 0; target.y = 0; });
  const updateScroll = () => { target.scroll = Math.max(-height, Math.min(height, -hero.getBoundingClientRect().top)) * .12; };
  window.addEventListener('scroll', updateScroll, {passive:true});
  function resize() {
    const rect = hero.getBoundingClientRect();
    width = rect.width; height = rect.height;
    const density = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * density);
    canvas.height = Math.round(height * density);
    ctx.setTransform(density, 0, 0, density, 0, 0);
    draw(elapsed);
  }
  function draw(time) {
    ctx.clearRect(0, 0, width, height);
    for (const particle of particles) {
      const x = ((particle.x * width + Math.sin(time * .12 + particle.phase) * 12 + offset.x * particle.depth + width) % width);
      const y = ((particle.y * height - time * particle.speed * height + offset.y * particle.depth + offset.scroll * particle.depth) % height + height) % height;
      const edge = Math.min(x / 70, (width - x) / 70, y / 70, (height - y) / 70, 1);
      const alpha = (.15 + particle.depth * .4) * Math.max(0, edge);
      ctx.fillStyle = `rgba(210,207,222,${alpha})`;
      ctx.beginPath(); ctx.arc(x, y, particle.radius, 0, Math.PI * 2); ctx.fill();
    }
    for (const shape of shapes) {
      const angle = time * shape.speed + shape.phase;
      const tilt = angle * .63;
      const compact = width < 760;
      const scale = compact ? .55 : 1;
      const index = shapes.indexOf(shape);
      const centerX = compact ? [.85, .90, .82][index] : shape.x;
      const centerY = compact ? [.06, .42, .92][index] : shape.y;
      const points = vertices.map(([x, y, z]) => {
        const rx = x * Math.cos(angle) - z * Math.sin(angle);
        const rz = x * Math.sin(angle) + z * Math.cos(angle);
        const ry = y * Math.cos(tilt) - rz * Math.sin(tilt);
        const depth = y * Math.sin(tilt) + rz * Math.cos(tilt);
        const perspective = 5 / (5 - depth * .25);
        return {
          x: width * centerX + rx * shape.size * scale * perspective,
          y: height * centerY + ry * shape.size * scale * perspective + Math.sin(time * .4 + shape.phase) * 8,
          depth
        };
      });
      for (const [a, b] of edges) {
        const alpha = .12 + ((points[a].depth + points[b].depth + 4) / 8) * .23;
        ctx.strokeStyle = `rgba(204,202,214,${alpha})`;
        ctx.lineWidth = .65;
        ctx.beginPath(); ctx.moveTo(points[a].x, points[a].y); ctx.lineTo(points[b].x, points[b].y); ctx.stroke();
      }
      points.forEach(point => {
        ctx.fillStyle = 'rgba(222,215,237,.5)';
        ctx.beginPath(); ctx.arc(point.x, point.y, 1.1, 0, Math.PI * 2); ctx.fill();
      });
    }
  }
  function tick(timestamp) {
    const delta = previous === null ? 0 : Math.min((timestamp - previous) / 1000, .05);
    elapsed += delta;
    const blend = 1 - Math.exp(-5 * delta);
    offset.x += (target.x - offset.x) * blend;
    offset.y += (target.y - offset.y) * blend;
    offset.scroll += (target.scroll - offset.scroll) * blend;
    previous = timestamp;
    draw(elapsed);
    frame = requestAnimationFrame(tick);
  }
  function sync() {
    cancelAnimationFrame(frame);
    previous = null;
    if (!reduced.matches && visible && !document.hidden) frame = requestAnimationFrame(tick);
    else {
      if (reduced.matches) { offset.x = 0; offset.y = 0; offset.scroll = 0; }
      draw(elapsed);
    }
  }
  new ResizeObserver(resize).observe(hero);
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync(); }).observe(hero);
  reduced.addEventListener('change', sync);
  document.addEventListener('visibilitychange', sync);
  resize(); updateScroll(); sync();
})();
