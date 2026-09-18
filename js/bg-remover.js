/**
 * ============================================================================
 * MODULE TỰ ĐỘNG TÁCH NỀN TRẮNG (AUTO WHITE BACKGROUND REMOVER)
 * Sử dụng HTML5 Canvas ImageData và thuật toán Chroma-key / Alpha Feathering
 * để biến toàn bộ nền trắng trơn thành trong suốt (Transparent PNG)
 * ============================================================================
 */

class BackgroundRemover {
  /**
   * Tách nền trắng từ một Image hoặc Canvas
   * @param {HTMLImageElement|HTMLCanvasElement} source - Ảnh gốc có nền trắng trơn
   * @param {number} threshold - Ngưỡng độ sáng coi là màu trắng (220 - 255)
   * @param {number} feather - Độ chuyển mượt biên độ viền
   * @returns {HTMLCanvasElement} Canvas đã được khử nền trong suốt
   */
  static process(source, threshold = 232, feather = 20) {
    const width = source.naturalWidth || source.width;
    const height = source.naturalHeight || source.height;

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(source, 0, 0);
    const imgData = ctx.getImageData(0, 0, width, height);
    const data = imgData.data;

    const minWhite = threshold - feather;

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      // Kiểm tra xem pixel có phải là màu trắng/xám trắng không (r, g, b đều cao và cân bằng)
      const maxDiff = Math.max(Math.abs(r - g), Math.abs(g - b), Math.abs(r - b));
      const brightness = (r + g + b) / 3;

      if (brightness >= minWhite && maxDiff < 25) {
        if (brightness >= threshold) {
          // Hoàn toàn trong suốt
          data[i + 3] = 0;
        } else {
          // Làm mềm biên độ viền (Anti-aliasing feathering)
          const alphaRatio = (threshold - brightness) / feather;
          data[i + 3] = Math.floor(alphaRatio * data[i + 3]);
        }
      }
    }

    ctx.putImageData(imgData, 0, 0);
    return canvas;
  }

  /**
   * Nạp ảnh từ URL và tự động trả về Canvas đã tách nền trong suốt
   * @param {string} url - Đường dẫn ảnh
   * @returns {Promise<HTMLCanvasElement>}
   */
  static loadTransparent(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        try {
          const cleanCanvas = BackgroundRemover.process(img);
          resolve(cleanCanvas);
        } catch (err) {
          // Trong trường hợp file:// local bảo mật CORS với getImageData, trả về ảnh gốc
          resolve(img);
        }
      };
      img.onerror = () => reject(new Error(`Không thể tải ảnh: ${url}`));
      img.src = url;
    });
  }
}

// Xuất ra window toàn cục
window.BackgroundRemover = BackgroundRemover;
