import { assert } from "chai";
import GraphicsWindow from "parsegraph-window";
import TexturePainter from "../dist/parsegraph-texturepainter";
import {matrixIdentity3x3} from 'parsegraph-matrix';

import { mockDOM } from "node-canvas-webgl";
mockDOM(window);

describe("Package", function () {
  it("works", () => {
    const win = new GraphicsWindow();
    const gl = win.gl();
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);

    const pixels = new Uint8Array(1024*1024*4);
    for(let i = 0; i < pixels.length; ++i) {
      pixels[i] = Math.round(Math.random() * 255);
    }

    win.gl().texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1024, 1024, 0, gl.RGBA, gl.UNSIGNED_BYTE, pixels)
    const painter = new TexturePainter(win, texture, 1024, 1024);
    painter.drawWholeTexture(0, 0, 512, 512, 0.5);
    painter.render(matrixIdentity3x3());
  });
});
