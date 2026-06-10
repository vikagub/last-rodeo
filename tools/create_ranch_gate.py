from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "assets" / "locations" / "dusty-road-ranch.png"
OUT = ROOT / "assets" / "locations" / "ranch-gate.png"
FONT_REGULAR = Path("/System/Library/Fonts/Supplemental/Georgia.ttf")
FONT_BOLD = Path("/System/Library/Fonts/Supplemental/Georgia Bold.ttf")


def rounded_rectangle(draw, box, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def main():
    source = Image.open(SOURCE).convert("RGBA")

    # Crop closer to the entrance while leaving side space for character sprites.
    crop = source.crop((210, 70, 1490, 790))
    bg = crop.resize((1600, 900), Image.Resampling.LANCZOS)

    overlay = Image.new("RGBA", bg.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Warm cinematic wash and lower darkening for dialogue readability.
    draw.rectangle((0, 0, 1600, 900), fill=(96, 42, 12, 28))
    draw.rectangle((0, 610, 1600, 900), fill=(18, 7, 3, 72))

    # Side vignettes.
    vignette = Image.new("L", bg.size, 0)
    vdraw = ImageDraw.Draw(vignette)
    vdraw.ellipse((-180, -130, 1780, 1050), fill=210)
    vignette = Image.eval(vignette.filter(ImageFilter.GaussianBlur(38)), lambda x: 255 - x)
    dark = Image.new("RGBA", bg.size, (10, 4, 2, 120))
    overlay = Image.alpha_composite(overlay, Image.composite(dark, Image.new("RGBA", bg.size, (0, 0, 0, 0)), vignette))
    draw = ImageDraw.Draw(overlay)

    # Readable wooden sign plank.
    sign_shadow = (497, 265, 1103, 350)
    sign = (510, 252, 1090, 332)
    rounded_rectangle(draw, sign_shadow, 18, (22, 9, 3, 135))
    rounded_rectangle(draw, sign, 16, (104, 61, 30, 238), (236, 177, 93, 178), 3)

    # Plank grain.
    for y, alpha in [(274, 70), (294, 55), (316, 45)]:
        draw.line((534, y, 1066, y + 8), fill=(48, 24, 10, alpha), width=3)
    for x in (544, 1056):
        draw.ellipse((x - 12, 282, x + 12, 306), fill=(42, 20, 9, 135))

    font = ImageFont.truetype(str(FONT_BOLD if FONT_BOLD.exists() else FONT_REGULAR), 44)
    text = "Дикая Подкова"
    bbox = draw.textbbox((0, 0), text, font=font)
    tx = (1600 - (bbox[2] - bbox[0])) / 2
    ty = 266
    draw.text((tx + 3, ty + 4), text, font=font, fill=(38, 18, 8, 180))
    draw.text((tx, ty), text, font=font, fill=(255, 221, 148, 255))

    # Small horseshoe mark under the text.
    cx, cy = 800, 323
    draw.arc((cx - 18, cy - 17, cx + 18, cy + 20), 35, 325, fill=(255, 221, 148, 205), width=4)
    draw.line((cx - 14, cy + 4, cx - 23, cy - 3), fill=(255, 221, 148, 205), width=3)
    draw.line((cx + 14, cy + 4, cx + 23, cy - 3), fill=(255, 221, 148, 205), width=3)

    result = Image.alpha_composite(bg, overlay).convert("RGB")
    result.save(OUT, quality=94)


if __name__ == "__main__":
    main()
