#!/usr/bin/env python3
"""Generates the hand-drawn sketches used on the site.

Run from the repo root:  python3 scripts/make-sketches.py
Writes src/config/sketches.js. Lines get a small random wobble so they read
as drawn by hand; the seed is fixed, so the output only changes when this
file does.
"""
import json
import math
import pathlib
import random

random.seed(11)


def smooth(pts):
    d = f"M{pts[0][0]:.1f} {pts[0][1]:.1f}"
    for i in range(1, len(pts) - 1):
        mx = (pts[i][0] + pts[i + 1][0]) / 2
        my = (pts[i][1] + pts[i + 1][1]) / 2
        d += f" Q{pts[i][0]:.1f} {pts[i][1]:.1f} {mx:.1f} {my:.1f}"
    return d + f" L{pts[-1][0]:.1f} {pts[-1][1]:.1f}"


def rough(p0, p1, wob=1.3, step=14):
    n = max(2, int(math.dist(p0, p1) / step))
    pts = []
    for i in range(n + 1):
        t = i / n
        x = p0[0] + (p1[0] - p0[0]) * t
        y = p0[1] + (p1[1] - p0[1]) * t
        if 0 < i < n:
            x += random.uniform(-wob, wob)
            y += random.uniform(-wob, wob)
        pts.append((x, y))
    return smooth(pts)


def poly(points, **kw):
    return " ".join(rough(points[i], points[i + 1], **kw) for i in range(len(points) - 1))


def rect(x, y, w, h, rot=0, jit=2, **kw):
    c = [(x, y), (x + w, y), (x + w, y + h), (x, y + h)]
    cx, cy, a = x + w / 2, y + h / 2, math.radians(rot)
    c = [
        (cx + (px - cx) * math.cos(a) - (py - cy) * math.sin(a),
         cy + (px - cx) * math.sin(a) + (py - cy) * math.cos(a))
        for px, py in c
    ]
    j = lambda p: (p[0] + random.uniform(-jit, jit), p[1] + random.uniform(-jit, jit))
    return poly([j(c[0]), c[1], c[2], c[3], j(c[0])], **kw)


def ellipse(cx, cy, rx, ry, start=0, sweep=360, wob=0.05, step=15):
    pts = []
    for k in range(0, int(sweep) + 1, step):
        a = math.radians(start + k)
        f = 1 + random.uniform(-wob, wob)
        pts.append((cx + rx * f * math.cos(a), cy + ry * f * math.sin(a)))
    return smooth(pts)


def head(tip, ang, size=7):
    a = math.radians(ang)
    l = (tip[0] - size * math.cos(a - 0.5), tip[1] - size * math.sin(a - 0.5))
    r = (tip[0] - size * math.cos(a + 0.5), tip[1] - size * math.sin(a + 0.5))
    return f"M{l[0]:.1f} {l[1]:.1f} L{tip[0]:.1f} {tip[1]:.1f} L{r[0]:.1f} {r[1]:.1f}"


def tangle(cx, cy, amp, n=260, tail=26):
    pts = []
    for i in range(n + 1):
        t = i / n
        a = amp * (1 - t) ** 1.3 + amp * 0.09
        th = 30 * t ** 0.85
        pts.append((cx + a * math.cos(th) * 1.2, cy + a * math.sin(1.31 * th + 0.6) + tail * t ** 3))
    return "M" + " L".join(f"{x:.1f} {y:.1f}" for x, y in pts)


INK, ACCENT = "ink", "accent"
sketches = {}


def sketch(name, w, h, paths, labels=()):
    sketches[name] = {
        "viewBox": f"0 0 {w} {h}",
        "paths": [{"d": d, "tone": tone} for d, tone in paths],
        "labels": [{"x": x, "y": y, "text": t} for x, y, t in labels],
    }


# --- The five steps, as small icons (64 x 64) --------------------------------
S = dict(wob=0.7, step=8)
sketch("step-problem", 64, 64, [(tangle(32, 30, 17, n=200, tail=10), ACCENT)])
sketch("step-framing", 64, 64, [
    (rect(4, 24, 20, 16, jit=1, **S), INK),
    (rough((7, 27), (21, 37), **S) + " " + rough((21, 27), (7, 37), **S), INK),
    (smooth([(27, 32), (31, 30), (35, 32)]) + " " + head((35, 32), 20, 4), INK),
    (rect(39, 20, 21, 20, rot=-6, jit=1, **S), ACCENT),
])
sketch("step-next", 64, 64, [
    (poly([(6, 52), (22, 52), (22, 39), (39, 39), (39, 26), (58, 26)], **S), INK),
    (rough((8, 47), (20, 47), wob=0.5, step=6) + " " + rough((9, 43), (19, 43), wob=0.5, step=6), ACCENT),
])
sketch("step-small", 64, 64, [
    (smooth([(31, 52), (30, 40), (33, 28)]), ACCENT),
    (smooth([(33, 33), (42, 23), (50, 26), (42, 34), (33, 35)]), ACCENT),
    (smooth([(31, 42), (21, 34), (14, 39), (22, 45), (31, 44)]), ACCENT),
    (rough((12, 53), (52, 53), **S), INK),
])
sketch("step-review", 64, 64, [
    (rect(14, 8, 36, 48, rot=-4, jit=1, **S), INK),
    (smooth([(20, 23), (24, 28), (31, 18)]), ACCENT),
    (rough((35, 24), (45, 23), wob=0.5, step=6), INK),
    (rough((21, 37), (29, 45), wob=0.5, step=6) + " " + rough((29, 37), (21, 45), wob=0.5, step=6), INK),
    (rough((35, 41), (45, 40), wob=0.5, step=6), INK),
])

# --- Hero: the five steps as one notebook page (360 x 570) -------------------
sketch("hero", 360, 570, [
    (tangle(84, 70, 34), ACCENT),
    (smooth([(84, 100), (80, 118), (92, 134), (88, 152)]) + " " + head((88, 152), 95), INK),
    (rect(48, 168, 62, 44), INK),
    (rough((54, 174), (104, 206)) + " " + rough((104, 174), (54, 206)), INK),
    (smooth([(118, 190), (134, 184), (148, 190)]) + " " + head((148, 190), 20), INK),
    (rect(158, 164, 74, 52, rot=-5), ACCENT),
    (smooth([(92, 222), (98, 240), (84, 256), (90, 274)]) + " " + head((90, 274), 80), INK),
    (poly([(46, 348), (76, 348), (76, 326), (106, 326), (106, 304), (136, 304)]), INK),
    (rough((48, 342), (74, 342), wob=0.8) + " " + rough((50, 337), (72, 337), wob=0.8), ACCENT),
    (smooth([(88, 360), (82, 378), (94, 392), (88, 408)]) + " " + head((88, 408), 100), INK),
    (smooth([(86, 470), (84, 452), (88, 436)]), ACCENT),
    (smooth([(88, 442), (100, 430), (110, 434), (100, 444), (88, 444)]), ACCENT),
    (smooth([(86, 452), (74, 442), (66, 448), (76, 456), (86, 454)]), ACCENT),
    (rough((62, 472), (112, 472)), INK),
    (rect(64, 512, 44, 50, rot=-3), INK),
    (smooth([(71, 527), (75, 532), (82, 521)]), ACCENT),
    (rough((87, 528), (102, 527), wob=0.8), INK),
    (rough((72, 541), (80, 549), wob=0.6) + " " + rough((80, 541), (72, 549), wob=0.6), INK),
    (rough((87, 546), (102, 545), wob=0.8), INK),
    (smooth([(86, 484), (90, 496), (84, 506)]), INK),
], [
    (150, 62, "what is the"), (150, 84, "actual problem?"),
    (250, 180, "a better"), (250, 202, "framing"),
    (152, 322, "one tractable"), (152, 344, "next step"),
    (128, 446, "try something small"),
    (124, 542, "review what happens"),
])

# --- Workshops (300 x 160) ---------------------------------------------------
# Planning: the straight line you expect, and the route it actually takes.
def warning(x, y, r=7):
    tri = poly([(x, y - r), (x + r, y + r * 0.8), (x - r, y + r * 0.8), (x, y - r)], wob=0.4, step=6)
    return tri + f" M{x:.1f} {y - 2:.1f} L{x:.1f} {y + 2:.1f}"


sketch("realistic-planning", 300, 200, [
    (rough((24, 44), (24, 56), wob=0.5), INK),
    (rough((24, 50), (268, 50)) + " " + head((268, 50), 0), INK),
    (rough((24, 142), (24, 154), wob=0.5), ACCENT),
    (smooth([
        (24, 148), (42, 148), (52, 124), (60, 166), (72, 172), (82, 138),
        (96, 114), (114, 118), (112, 140), (98, 138), (104, 118), (128, 110),
        (140, 150), (148, 180), (166, 178), (166, 148), (176, 124), (196, 128),
        (202, 150), (224, 148), (268, 148),
    ]) + " " + head((268, 148), 0), ACCENT),
    (warning(86, 100), INK),
    (warning(128, 176), INK),
    (warning(192, 106), INK),
], [
    (24, 30, "expectation"),
    (24, 106, "reality"),
])

# Disagreement: two views, and the small place where they actually differ.
sketch("productive-disagreement", 300, 160, [
    (ellipse(104, 62, 70, 40) + " " + smooth([(62, 94), (52, 112), (78, 100)]), INK),
    (ellipse(196, 62, 70, 40) + " " + smooth([(238, 94), (250, 112), (222, 100)]), INK),
    (ellipse(150, 62, 15, 17, step=20), ACCENT),
    (smooth([(150, 132), (146, 112), (150, 86)]) + " " + head((150, 86), -88, 6), ACCENT),
], [
    (118, 152, "the crux"),
])

# Bayesian thinking: a prior, new evidence arriving, an updated belief, and
# the updated belief becoming the next prior.
sketch("bets-and-bayes", 300, 218, [
    (ellipse(70, 132, 35, 33), INK),
    (rect(96, 10, 108, 32, jit=1.5), INK),
    (smooth([(150, 46), (147, 70), (151, 96)]) + " " + head((151, 96), 88, 6), INK),
    (smooth([(108, 124), (150, 112), (186, 124)]) + " " + head((186, 124), 20, 7), ACCENT),
    (ellipse(228, 132, 40, 37), ACCENT),
    (smooth([(214, 172), (184, 196), (118, 194), (90, 168)]) + " " + head((90, 168), -135, 7), INK),
], [
    (106, 32, "new evidence"),
    (50, 139, "prior"),
    (199, 128, "updated"),
    (207, 148, "belief"),
    (120, 214, "and again"),
])

out = pathlib.Path(__file__).resolve().parent.parent / "src" / "config" / "sketches.js"
out.write_text(
    "// GENERATED by scripts/make-sketches.py. Edit that file, not this one.\n"
    "export const SKETCHES = " + json.dumps(sketches, indent=1) + ";\n"
)
print(f"wrote {out} ({len(sketches)} sketches)")
