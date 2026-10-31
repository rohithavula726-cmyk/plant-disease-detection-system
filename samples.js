/**
 * Leaf Visual Synthesis Engine
 * Generates high-fidelity visual representations of diseased and healthy leaves
 * using HTML5 Canvas graphics so the application is 100% self-sufficient offline.
 */

const LeafRenderer = {
  // Generate a realistic base64 data URL for any disease key
  generateLeafImage(diseaseKey, width = 640, height = 480) {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    // Background gradient (laboratory examination dark matte or agronomy field backlight)
    const bgGrad = ctx.createRadialGradient(width / 2, height / 2, 50, width / 2, height / 2, width / 1.4);
    bgGrad.addColorStop(0, "#131b2e");
    bgGrad.addColorStop(1, "#070b14");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // Subtle grid overlay on the background
    ctx.strokeStyle = "rgba(16, 185, 129, 0.05)";
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    ctx.save();
    ctx.translate(width / 2, height / 2);

    // Render crop-specific leaf geometry and pathological lesions
    switch (diseaseKey) {
      case "tomato_late_blight":
        this.drawTomatoLeaf(ctx, true, "late_blight");
        break;
      case "tomato_early_blight":
        this.drawTomatoLeaf(ctx, true, "early_blight");
        break;
      case "tomato_yellow_curl":
        this.drawTomatoLeaf(ctx, true, "yellow_curl");
        break;
      case "potato_late_blight":
        this.drawPotatoLeaf(ctx, true, "late_blight");
        break;
      case "corn_leaf_blight":
        this.drawCornLeaf(ctx, true, "nclb");
        break;
      case "corn_common_rust":
        this.drawCornLeaf(ctx, true, "rust");
        break;
      case "apple_scab":
        this.drawAppleLeaf(ctx, true, "scab");
        break;
      case "apple_black_rot":
        this.drawAppleLeaf(ctx, true, "black_rot");
        break;
      case "grape_downy_mildew":
        this.drawGrapeLeaf(ctx, true, "downy_mildew");
        break;
      case "grape_black_rot":
        this.drawGrapeLeaf(ctx, true, "black_rot");
        break;
      case "rice_bacterial_blight":
        this.drawRiceLeaf(ctx, true, "blb");
        break;
      case "wheat_stripe_rust":
        this.drawWheatLeaf(ctx, true, "stripe_rust");
        break;
      case "pepper_bacterial_spot":
        this.drawPepperLeaf(ctx, true, "bacterial_spot");
        break;
      case "healthy_crop":
      default:
        this.drawTomatoLeaf(ctx, false, "healthy");
        break;
    }

    ctx.restore();
    return canvas.toDataURL("image/png");
  },

  // Tomato Leaf with serrated lobes
  drawTomatoLeaf(ctx, isDiseased, type) {
    ctx.save();
    ctx.rotate(-0.08);

    // Stem / Petiole
    ctx.beginPath();
    ctx.moveTo(0, 190);
    ctx.quadraticCurveTo(-5, 50, 0, -180);
    ctx.lineWidth = 9;
    ctx.strokeStyle = isDiseased && type === "late_blight" ? "#382d1c" : "#22c55e";
    ctx.lineCap = "round";
    ctx.stroke();

    // Main Leaf Blade
    ctx.beginPath();
    ctx.moveTo(0, -180);
    // Right lobe contours
    ctx.bezierCurveTo(70, -140, 110, -80, 80, -20);
    ctx.bezierCurveTo(120, 10, 105, 90, 40, 140);
    ctx.bezierCurveTo(20, 160, 5, 175, 0, 180);
    // Left lobe contours
    ctx.bezierCurveTo(-5, 175, -20, 160, -40, 140);
    ctx.bezierCurveTo(-105, 90, -120, 10, -80, -20);
    ctx.bezierCurveTo(-110, -80, -70, -140, 0, -180);
    ctx.closePath();

    // Leaf Fill Gradient
    const leafGrad = ctx.createLinearGradient(-100, -150, 100, 150);
    if (!isDiseased) {
      leafGrad.addColorStop(0, "#22c55e");
      leafGrad.addColorStop(0.5, "#16a34a");
      leafGrad.addColorStop(1, "#15803d");
    } else if (type === "yellow_curl") {
      leafGrad.addColorStop(0, "#eab308");
      leafGrad.addColorStop(0.4, "#ca8a04");
      leafGrad.addColorStop(1, "#4ade80");
    } else {
      leafGrad.addColorStop(0, "#4ade80");
      leafGrad.addColorStop(0.6, "#15803d");
      leafGrad.addColorStop(1, "#14532d");
    }
    ctx.fillStyle = leafGrad;
    ctx.fill();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = isDiseased && type === "yellow_curl" ? "#ca8a04" : "#166534";
    ctx.stroke();

    // Secondary Veins
    ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
    ctx.lineWidth = 2;
    for (let y = -120; y <= 100; y += 35) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(65, y - 25);
      ctx.moveTo(0, y);
      ctx.lineTo(-65, y - 25);
      ctx.stroke();
    }

    // Pathological Lesions
    if (isDiseased) {
      if (type === "late_blight") {
        // Water-soaked dark brown expanding lesions
        this.drawLesion(ctx, 35, -70, 42, 28, "#29180c", "#d97706", 0.3);
        this.drawLesion(ctx, -40, 20, 52, 36, "#1c1209", "#ca8a04", -0.4);
        this.drawLesion(ctx, 20, 80, 36, 24, "#29180c", "#eab308", 0.2);
        // Fuzzy sporulation spots
        this.drawMoldFuzz(ctx, -42, 22, 14);
        this.drawMoldFuzz(ctx, 33, -68, 12);
      } else if (type === "early_blight") {
        // Concentric target-board rings
        this.drawTargetRingLesion(ctx, 30, -50, 32);
        this.drawTargetRingLesion(ctx, -35, 30, 40);
        this.drawTargetRingLesion(ctx, 15, 75, 26);
      } else if (type === "yellow_curl") {
        // Distorted yellow chlorotic margins
        this.drawChlorosisPatch(ctx, 45, -90, 35, "#fef08a");
        this.drawChlorosisPatch(ctx, -55, 10, 40, "#fde047");
        this.drawChlorosisPatch(ctx, 30, 60, 30, "#fef08a");
      }
    }

    ctx.restore();
  },

  // Corn Leaf (long linear blade)
  drawCornLeaf(ctx, isDiseased, type) {
    ctx.save();
    ctx.rotate(0.05);

    // Leaf Blade
    ctx.beginPath();
    ctx.moveTo(0, -210);
    ctx.quadraticCurveTo(80, -50, 45, 190);
    ctx.lineTo(-45, 190);
    ctx.quadraticCurveTo(-80, -50, 0, -210);
    ctx.closePath();

    const cornGrad = ctx.createLinearGradient(-50, 0, 50, 0);
    cornGrad.addColorStop(0, "#16a34a");
    cornGrad.addColorStop(0.48, "#22c55e");
    cornGrad.addColorStop(0.5, "#86efac"); // Light midrib vein
    cornGrad.addColorStop(0.52, "#22c55e");
    cornGrad.addColorStop(1, "#15803d");
    ctx.fillStyle = cornGrad;
    ctx.fill();
    ctx.strokeStyle = "#166534";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Parallel venation
    ctx.strokeStyle = "rgba(255, 255, 255, 0.18)";
    ctx.lineWidth = 1;
    for (let x = -35; x <= 35; x += 8) {
      if (x === 0) continue;
      ctx.beginPath();
      ctx.moveTo(x * 0.3, -200);
      ctx.quadraticCurveTo(x * 1.4, 0, x, 185);
      ctx.stroke();
    }

    if (isDiseased) {
      if (type === "nclb") {
        // Northern Corn Leaf Blight: long cigar-shaped tan lesions
        this.drawCigarLesion(ctx, 22, -60, 65, 16, "#78350f", "#fef08a");
        this.drawCigarLesion(ctx, -24, 40, 75, 18, "#78350f", "#fde047");
        this.drawCigarLesion(ctx, 15, 80, 50, 14, "#451a03", "#fef08a");
      } else if (type === "rust") {
        // Common Rust: clustered cinnamon-brown pustules
        for (let i = 0; i < 35; i++) {
          const rx = (Math.random() - 0.5) * 55;
          const ry = (Math.random() - 0.5) * 260;
          this.drawRustPustule(ctx, rx, ry);
        }
      }
    }

    ctx.restore();
  },

  // Potato Leaf (oval, rounded lobes)
  drawPotatoLeaf(ctx, isDiseased, type) {
    ctx.save();
    // Central Petiole
    ctx.beginPath();
    ctx.moveTo(0, 180);
    ctx.lineTo(0, -170);
    ctx.lineWidth = 6;
    ctx.strokeStyle = isDiseased ? "#3a2b16" : "#4ade80";
    ctx.stroke();

    // Leaflet body
    ctx.beginPath();
    ctx.ellipse(0, -20, 95, 150, 0, 0, Math.PI * 2);
    const potGrad = ctx.createRadialGradient(0, -20, 10, 0, -20, 150);
    potGrad.addColorStop(0, "#22c55e");
    potGrad.addColorStop(0.8, "#15803d");
    potGrad.addColorStop(1, "#14532d");
    ctx.fillStyle = potGrad;
    ctx.fill();
    ctx.strokeStyle = "#166534";
    ctx.lineWidth = 2.5;
    ctx.stroke();

    if (isDiseased && type === "late_blight") {
      this.drawLesion(ctx, -38, -60, 55, 38, "#1c1917", "#84cc16", -0.2);
      this.drawLesion(ctx, 35, 25, 60, 42, "#0c0a09", "#a3e635", 0.3);
      this.drawMoldFuzz(ctx, -35, -58, 16);
      this.drawMoldFuzz(ctx, 38, 27, 18);
    }

    ctx.restore();
  },

  // Apple Leaf (broad ovate, serrated edge)
  drawAppleLeaf(ctx, isDiseased, type) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0, -170);
    ctx.bezierCurveTo(110, -110, 110, 80, 0, 170);
    ctx.bezierCurveTo(-110, 80, -110, -110, 0, -170);
    ctx.closePath();

    const appGrad = ctx.createRadialGradient(0, 0, 20, 0, 0, 160);
    appGrad.addColorStop(0, "#4ade80");
    appGrad.addColorStop(0.7, "#16a34a");
    appGrad.addColorStop(1, "#14532d");
    ctx.fillStyle = appGrad;
    ctx.fill();
    ctx.strokeStyle = "#166534";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Veins
    ctx.beginPath();
    ctx.moveTo(0, 170);
    ctx.lineTo(0, -170);
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#86efac";
    ctx.stroke();

    if (isDiseased) {
      if (type === "scab") {
        // Apple scab: velvety dark olive scabs
        this.drawOliveScab(ctx, -35, -70, 28);
        this.drawOliveScab(ctx, 40, -20, 36);
        this.drawOliveScab(ctx, -25, 45, 32);
        this.drawOliveScab(ctx, 20, 85, 22);
      } else if (type === "black_rot") {
        // Frogeye spots
        this.drawFrogeyeSpot(ctx, -30, -50, 26);
        this.drawFrogeyeSpot(ctx, 35, 20, 32);
        this.drawFrogeyeSpot(ctx, -20, 70, 24);
      }
    }

    ctx.restore();
  },

  // Grape Leaf (Palmate 5-lobed)
  drawGrapeLeaf(ctx, isDiseased, type) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0, -170);
    ctx.bezierCurveTo(60, -140, 130, -120, 140, -50);
    ctx.bezierCurveTo(110, -20, 135, 50, 110, 100);
    ctx.bezierCurveTo(70, 130, 40, 110, 0, 160);
    ctx.bezierCurveTo(-40, 110, -70, 130, -110, 100);
    ctx.bezierCurveTo(-135, 50, -110, -20, -140, -50);
    ctx.bezierCurveTo(-130, -120, -60, -140, 0, -170);
    ctx.closePath();

    const grapeGrad = ctx.createRadialGradient(0, 0, 20, 0, 0, 160);
    grapeGrad.addColorStop(0, "#22c55e");
    grapeGrad.addColorStop(0.7, "#16a34a");
    grapeGrad.addColorStop(1, "#15803d");
    ctx.fillStyle = grapeGrad;
    ctx.fill();
    ctx.strokeStyle = "#166534";
    ctx.lineWidth = 2.5;
    ctx.stroke();

    if (isDiseased) {
      if (type === "downy_mildew") {
        // Yellow-green translucent oil spots
        this.drawOilSpot(ctx, -45, -60, 35);
        this.drawOilSpot(ctx, 50, -30, 42);
        this.drawOilSpot(ctx, -25, 40, 38);
        this.drawOilSpot(ctx, 40, 65, 30);
      } else if (type === "black_rot") {
        this.drawFrogeyeSpot(ctx, -40, -40, 28);
        this.drawFrogeyeSpot(ctx, 45, 10, 34);
        this.drawFrogeyeSpot(ctx, -15, 60, 26);
      }
    }

    ctx.restore();
  },

  // Rice Leaf (Slender, vertical)
  drawRiceLeaf(ctx, isDiseased, type) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0, -210);
    ctx.quadraticCurveTo(35, -40, 25, 190);
    ctx.lineTo(-25, 190);
    ctx.quadraticCurveTo(-35, -40, 0, -210);
    ctx.closePath();

    ctx.fillStyle = "#16a34a";
    ctx.fill();
    ctx.strokeStyle = "#15803d";
    ctx.lineWidth = 2;
    ctx.stroke();

    if (isDiseased && type === "blb") {
      // Bacterial Leaf Blight: wavy bleached white stripes on margins
      ctx.fillStyle = "#fef08a";
      ctx.beginPath();
      ctx.moveTo(0, -205);
      ctx.lineTo(24, -130);
      ctx.lineTo(16, -40);
      ctx.lineTo(24, 60);
      ctx.lineTo(12, 180);
      ctx.lineTo(6, 180);
      ctx.lineTo(8, -130);
      ctx.closePath();
      ctx.fill();

      // Brown edge drying
      ctx.strokeStyle = "#854d0e";
      ctx.lineWidth = 2.5;
      ctx.stroke();
    }

    ctx.restore();
  },

  // Wheat Leaf (Stripe rust pustules)
  drawWheatLeaf(ctx, isDiseased, type) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0, -210);
    ctx.quadraticCurveTo(30, -50, 20, 190);
    ctx.lineTo(-20, 190);
    ctx.quadraticCurveTo(-30, -50, 0, -210);
    ctx.closePath();

    ctx.fillStyle = "#22c55e";
    ctx.fill();
    ctx.strokeStyle = "#166534";
    ctx.lineWidth = 2;
    ctx.stroke();

    if (isDiseased && type === "stripe_rust") {
      // Linear yellow-orange beaded stripes along veins
      ctx.fillStyle = "#facc15";
      ctx.strokeStyle = "#ca8a04";
      ctx.lineWidth = 1;
      for (let stripe = -10; stripe <= 10; stripe += 8) {
        for (let y = -160; y <= 150; y += 12) {
          ctx.beginPath();
          ctx.ellipse(stripe, y, 2.5, 4.5, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        }
      }
    }

    ctx.restore();
  },

  // Pepper Leaf (Bacterial spot)
  drawPepperLeaf(ctx, isDiseased, type) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0, -180);
    ctx.bezierCurveTo(80, -100, 80, 80, 0, 180);
    ctx.bezierCurveTo(-80, 80, -80, -100, 0, -180);
    ctx.closePath();

    ctx.fillStyle = "#16a34a";
    ctx.fill();
    ctx.strokeStyle = "#15803d";
    ctx.lineWidth = 2;
    ctx.stroke();

    if (isDiseased && type === "bacterial_spot") {
      for (let i = 0; i < 22; i++) {
        const x = (Math.random() - 0.5) * 80;
        const y = (Math.random() - 0.5) * 200;
        ctx.beginPath();
        ctx.arc(x, y, 5 + Math.random() * 4, 0, Math.PI * 2);
        ctx.fillStyle = "#365314";
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#facc15";
        ctx.stroke();
      }
    }

    ctx.restore();
  },

  // Helper Drawing Methods for Pathologies
  drawLesion(ctx, x, y, rw, rh, innerColor, haloColor, angle = 0) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);

    // Chlorotic halo
    ctx.beginPath();
    ctx.ellipse(0, 0, rw * 1.3, rh * 1.3, 0, 0, Math.PI * 2);
    ctx.fillStyle = haloColor;
    ctx.globalAlpha = 0.55;
    ctx.fill();

    // Necrotic dark core
    ctx.beginPath();
    ctx.ellipse(0, 0, rw, rh, 0, 0, Math.PI * 2);
    ctx.fillStyle = innerColor;
    ctx.globalAlpha = 0.95;
    ctx.fill();

    ctx.restore();
  },

  drawTargetRingLesion(ctx, x, y, radius) {
    ctx.save();
    ctx.translate(x, y);

    // Yellow outer halo
    ctx.beginPath();
    ctx.arc(0, 0, radius * 1.4, 0, Math.PI * 2);
    ctx.fillStyle = "#facc15";
    ctx.globalAlpha = 0.45;
    ctx.fill();

    // Alternating concentric target rings
    ctx.globalAlpha = 0.95;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.fillStyle = "#451a03";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.7, 0, Math.PI * 2);
    ctx.fillStyle = "#78350f";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.4, 0, Math.PI * 2);
    ctx.fillStyle = "#1c1917";
    ctx.fill();

    ctx.restore();
  },

  drawMoldFuzz(ctx, x, y, radius) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
    ctx.filter = "blur(4px)";
    ctx.fill();
    ctx.restore();
  },

  drawChlorosisPatch(ctx, x, y, radius, color) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.65;
    ctx.filter = "blur(6px)";
    ctx.fill();
    ctx.restore();
  },

  drawCigarLesion(ctx, x, y, len, width, innerColor, haloColor) {
    ctx.save();
    ctx.translate(x, y);

    // Outer halo
    ctx.beginPath();
    ctx.ellipse(0, 0, width * 1.5, len * 0.6, 0, 0, Math.PI * 2);
    ctx.fillStyle = haloColor;
    ctx.globalAlpha = 0.4;
    ctx.fill();

    // Cigar lesion
    ctx.beginPath();
    ctx.ellipse(0, 0, width, len * 0.5, 0, 0, Math.PI * 2);
    ctx.fillStyle = innerColor;
    ctx.globalAlpha = 0.95;
    ctx.fill();

    ctx.restore();
  },

  drawRustPustule(ctx, x, y) {
    ctx.save();
    ctx.translate(x, y);
    ctx.beginPath();
    ctx.arc(0, 0, 6, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(251, 191, 36, 0.4)";
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(0, 0, 3, 4.5, 0, 0, Math.PI * 2);
    ctx.fillStyle = "#9a3412";
    ctx.fill();
    ctx.strokeStyle = "#431407";
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();
  },

  drawOliveScab(ctx, x, y, radius) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = "#365314";
    ctx.fill();
    ctx.strokeStyle = "#bef264";
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.restore();
  },

  drawFrogeyeSpot(ctx, x, y, radius) {
    ctx.save();
    ctx.translate(x, y);

    // Purple margin
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.fillStyle = "#581c87";
    ctx.fill();

    // Tan center
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.7, 0, Math.PI * 2);
    ctx.fillStyle = "#fed7aa";
    ctx.fill();

    // Central pycnidia black dot
    ctx.beginPath();
    ctx.arc(0, 0, 3, 0, Math.PI * 2);
    ctx.fillStyle = "#18181b";
    ctx.fill();

    ctx.restore();
  },

  drawOilSpot(ctx, x, y, radius) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = "#facc15";
    ctx.globalAlpha = 0.7;
    ctx.filter = "blur(4px)";
    ctx.fill();
    ctx.restore();
  }
};

if (typeof window !== "undefined") {
  window.LeafRenderer = LeafRenderer;
}
